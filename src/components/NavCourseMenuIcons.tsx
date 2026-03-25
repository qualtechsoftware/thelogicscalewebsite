/** Stroke icons for the Explore Courses dropdown (24×24 viewBox). */

const sw = 1.65;
const cap = "round" as const;
const join = "round" as const;

/** Medal — reads as “certification” / credential */
export function AwsCertMenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="5.5" stroke="currentColor" strokeWidth={sw} />
      <path
        d="m15.48 12.89 1.51 8.53a.5.5 0 0 1-.81.47L12 18l-4.18 2.89a.5.5 0 0 1-.81-.47l1.51-8.53"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap={cap}
        strokeLinejoin={join}
      />
    </svg>
  );
}

/** CPU chip — suggests AI / intelligent systems */
export function SpringAiMenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth={sw} />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.75" stroke="currentColor" strokeWidth={1.35} />
      <path
        d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.6 16.6l-1.8 1.8"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinecap={cap}
      />
    </svg>
  );
}

/** Layered stack — Spring Boot + AI together */
export function SpringStackMenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" aria-hidden="true">
      <path
        d="M4.5 11.2 12 14.5l7.5-3.3L12 7.8 4.5 11.2Z"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinejoin={join}
      />
      <path
        d="m4.5 15 7.5 3.3 7.5-3.3"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap={cap}
        strokeLinejoin={join}
      />
      <path
        d="m4.5 7.5 7.5 3.3 7.5-3.3"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap={cap}
        strokeLinejoin={join}
      />
    </svg>
  );
}
