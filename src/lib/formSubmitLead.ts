/** How long the success message stays visible before the form resets (ms). */
export const LEAD_FORM_SUCCESS_RESET_MS = 3500;

/** FormSubmit.co delivers to this inbox. */
export const FORMSUBMIT_LEAD_ENDPOINT =
  "https://formsubmit.co/ajax/qualtechsoftwares@gmail.com";

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

export async function submitLeadForm(input: SubmitLeadInput): Promise<boolean> {
  const body: Record<string, unknown> = {
    name: input.name,
    phone: input.phone,
    _subject: input.subject,
    _template: "table",
    _captcha: false
  };

  const email = (input.email ?? "").trim();
  if (email) {
    body.email = email;
    body._replyto = email;
  }

  if (input.extra) {
    for (const [key, value] of Object.entries(input.extra)) {
      const v = value.trim();
      if (v) body[key] = v;
    }
  }

  const res = await fetch(FORMSUBMIT_LEAD_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body)
  });

  const data = (await res.json().catch(() => null)) as {
    success?: boolean | string;
  } | null;

  return (
    res.ok &&
    (data == null || data.success === true || data.success === "true")
  );
}
