import { NextResponse } from "next/server";

export const runtime = "nodejs";

const LEAD_INBOX = "pooja.giri@thelogicscale.com";
const FORMSUBMIT_PRIMARY = "qualtechsoftwares@gmail.com";
/** Keep each attempt short so the UI never sits on Sending. */
const ATTEMPT_TIMEOUT_MS = 8000;

type LeadBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  extra?: Record<string, string>;
};

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function isSuccessPayload(data: unknown): boolean {
  if (data == null) return true;
  if (typeof data !== "object") return false;
  const success = (data as { success?: boolean | string }).success;
  return success === true || success === "true";
}

async function postFormSubmit(
  toEmail: string,
  payload: Record<string, unknown>
): Promise<boolean> {
  try {
    const res = await fetchWithTimeout(
      `https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      },
      ATTEMPT_TIMEOUT_MS
    );
    const data = await res.json().catch(() => null);
    return res.ok && isSuccessPayload(data);
  } catch {
    return false;
  }
}

/**
 * Web3Forms free tier blocks server/datacenter IPs — only try when a
 * dedicated server key is set (Pro allowlists server IPs). Prefer the
 * client-side path in formSubmitLead.ts for the free access key.
 */
async function postWeb3Forms(payload: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  extra?: Record<string, string>;
}): Promise<boolean> {
  const key = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!key) return false;

  try {
    const res = await fetchWithTimeout(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: key,
          subject: payload.subject,
          from_name: "The Logic Scale Website",
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          replyto: payload.email,
          message: payload.message,
          "Mobile number": payload.phone,
          ...(payload.extra ?? {})
        })
      },
      ATTEMPT_TIMEOUT_MS
    );
    const data = await res.json().catch(() => null);
    return res.ok && isSuccessPayload(data);
  } catch {
    return false;
  }
}

/** Resolve true as soon as any attempt succeeds; otherwise false when all finish. */
async function firstSuccessful(attempts: Array<Promise<boolean>>): Promise<boolean> {
  return new Promise((resolve) => {
    let remaining = attempts.length;
    let done = false;

    if (remaining === 0) {
      resolve(false);
      return;
    }

    for (const attempt of attempts) {
      attempt
        .then((ok) => {
          if (ok && !done) {
            done = true;
            resolve(true);
            return;
          }
          remaining -= 1;
          if (remaining === 0 && !done) resolve(false);
        })
        .catch(() => {
          remaining -= 1;
          if (remaining === 0 && !done) resolve(false);
        });
    }
  });
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "The Logic Scale — New lead").trim();
  const extra = body.extra;

  if (!name || !phone) {
    return NextResponse.json(
      { success: false, error: "Name and phone are required" },
      { status: 400 }
    );
  }

  const messageLines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Deliver to: ${LEAD_INBOX}`
  ].filter(Boolean) as string[];

  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      const v = String(value ?? "").trim();
      if (v) messageLines.push(`${key}: ${v}`);
    }
  }

  const formPayload: Record<string, unknown> = {
    name,
    phone,
    _subject: subject,
    _template: "table",
    _captcha: false,
    _cc: LEAD_INBOX
  };
  if (email) {
    formPayload.email = email;
    formPayload._replyto = email;
  }
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      const v = String(value ?? "").trim();
      if (v) formPayload[key] = v;
    }
  }

  const directPayload = { ...formPayload };
  delete directPayload._cc;

  const ok = await firstSuccessful([
    postWeb3Forms({
      name,
      email: email || LEAD_INBOX,
      phone,
      subject,
      message: messageLines.join("\n"),
      extra
    }),
    postFormSubmit(FORMSUBMIT_PRIMARY, formPayload),
    postFormSubmit(LEAD_INBOX, directPayload)
  ]);

  if (ok) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    {
      success: false,
      error:
        "Email provider timed out. Add a free Web3Forms access key (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) — free keys must be used from the browser."
    },
    { status: 504 }
  );
}
