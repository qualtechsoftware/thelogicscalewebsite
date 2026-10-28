/** How long the success message stays visible before the form resets (ms). */
export const LEAD_FORM_SUCCESS_RESET_MS = 3500;

/** Client-side ceiling so the button never stays on “Sending…” forever. */
const CLIENT_TIMEOUT_MS = 12000;
const PROVIDER_TIMEOUT_MS = 9000;

/** Inbox that should receive every lead. */
export const LEAD_INBOX = "pooja.giri@thelogicscale.com";

/** Confirmed FormSubmit inbox (receives + CC to LEAD_INBOX). */
const FORMSUBMIT_PRIMARY = "qualtechsoftwares@gmail.com";

export type SubmitLeadInput = {
  name: string;
  /** Optional for flows like brochure download (name + phone only). */
  email?: string;
  phone: string;
  /** Shown as the email subject line. */
  subject: string;
  /** Extra fields (e.g. goals) appear in the submission email. */
  extra?: Record<string, string>;
};

function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number
): Promise<Response> {
  const controller = new AbortController();
  const timer = globalThis.setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...init, signal: controller.signal }).finally(() => {
    globalThis.clearTimeout(timer);
  });
}

function isSuccessPayload(data: unknown): boolean {
  if (data == null) return true;
  if (typeof data !== "object") return false;
  const success = (data as { success?: boolean | string }).success;
  return success === true || success === "true";
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

async function postWeb3FormsClient(input: SubmitLeadInput): Promise<boolean> {
  const key =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();
  if (!key) return false;

  const messageLines = [
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    input.email ? `Email: ${input.email}` : null,
    `Deliver to: ${LEAD_INBOX}`
  ].filter(Boolean) as string[];

  if (input.extra) {
    for (const [k, v] of Object.entries(input.extra)) {
      const value = String(v ?? "").trim();
      if (value) messageLines.push(`${k}: ${value}`);
    }
  }

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
          subject: input.subject,
          from_name: "The Logic Scale Website",
          name: input.name,
          email: input.email || LEAD_INBOX,
          phone: input.phone,
          replyto: input.email || LEAD_INBOX,
          message: messageLines.join("\n"),
          "Mobile number": input.phone,
          ...(input.extra ?? {})
        })
      },
      PROVIDER_TIMEOUT_MS
    );
    const data = await res.json().catch(() => null);
    return res.ok && isSuccessPayload(data);
  } catch {
    return false;
  }
}

async function postFormSubmitClient(
  toEmail: string,
  input: SubmitLeadInput,
  withCc: boolean
): Promise<boolean> {
  const payload: Record<string, unknown> = {
    name: input.name,
    phone: input.phone,
    _subject: input.subject,
    _template: "table",
    _captcha: false
  };
  if (input.email) {
    payload.email = input.email;
    payload._replyto = input.email;
  }
  if (withCc) payload._cc = LEAD_INBOX;
  if (input.extra) {
    for (const [k, v] of Object.entries(input.extra)) {
      const value = String(v ?? "").trim();
      if (value) payload[k] = value;
    }
  }

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
      PROVIDER_TIMEOUT_MS
    );
    const data = await res.json().catch(() => null);
    if (
      data &&
      typeof data === "object" &&
      typeof (data as { message?: string }).message === "string" &&
      /activation/i.test((data as { message: string }).message)
    ) {
      console.warn(
        `[lead-form] FormSubmit needs activation for ${toEmail}. Check that inbox for the Activate Form email.`
      );
    }
    return res.ok && isSuccessPayload(data);
  } catch {
    return false;
  }
}

async function postViaApiRoute(input: SubmitLeadInput): Promise<boolean> {
  try {
    const res = await fetchWithTimeout(
      "/api/lead",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: input.name,
          email: input.email,
          phone: input.phone,
          subject: input.subject,
          extra: input.extra
        })
      },
      CLIENT_TIMEOUT_MS
    );
    const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
    return Boolean(res.ok && data?.success);
  } catch {
    return false;
  }
}

/**
 * Submits a lead with multiple providers so a single outage doesn’t block the form.
 * Prefer browser FormSubmit / Web3Forms (free Web3Forms keys only work client-side).
 * Falls back to `/api/lead` if browser providers fail.
 */
export async function submitLeadForm(input: SubmitLeadInput): Promise<boolean> {
  try {
    const browserOk = await firstSuccessful([
      postWeb3FormsClient(input),
      postFormSubmitClient(FORMSUBMIT_PRIMARY, input, true),
      postFormSubmitClient(LEAD_INBOX, input, false)
    ]);
    if (browserOk) return true;
    return await postViaApiRoute(input);
  } catch (err) {
    console.error("[lead-form] submit failed", err);
    return false;
  }
}
