import { placedCompanyLogos } from "@/app/homeContent";
import type { CSSProperties } from "react";

const alumniCompanies = [
  "Amazon",
  "Google",
  "Microsoft",
  "Meta",
  "Accenture",
  "TCS",
  "Infosys",
  "Capgemini",
  "Cognizant",
  "Deloitte",
  "IBM",
  "Oracle",
  "Salesforce",
  "Wipro",
  "HCLTech",
  "LTIMindtree",
  "Persistent",
  "Goldman Sachs",
  "J.P. Morgan",
  "PayPal",
  "Adobe",
  "Flipkart",
  "Samsung",
  "NVIDIA"
] as const;

/** Optical scale so mixed brand marks share similar visual weight in the plate. */
const logoOpticalScale: Partial<Record<(typeof alumniCompanies)[number], number>> = {
  Amazon: 1.18,
  Google: 1.08,
  Microsoft: 0.98,
  Meta: 0.96,
  Accenture: 1.02,
  TCS: 1.22,
  Infosys: 1.38,
  Capgemini: 1,
  Cognizant: 0.96,
  Deloitte: 0.96,
  IBM: 1.42,
  Oracle: 0.98,
  Salesforce: 1.02,
  Wipro: 1.18,
  HCLTech: 0.96,
  LTIMindtree: 0.94,
  Persistent: 1.04,
  "Goldman Sachs": 1.02,
  "J.P. Morgan": 1.04,
  PayPal: 1.12,
  Adobe: 1.04,
  Flipkart: 1.08,
  Samsung: 0.94,
  NVIDIA: 0.96
};

export default function HeroTrustMarquee() {
  return (
    <section className="trust-marquee" aria-label="Alumni companies">
      <div className="container trust-marquee-inner">
        <div className="trust-marquee-head">
          <h2 className="section-title trust-marquee-title">3+ years of transforming careers</h2>
        </div>

        <ul className="trust-marquee-logo-wall">
          {alumniCompanies.map((company) => {
            const logo = placedCompanyLogos[company];
            const scale = logoOpticalScale[company] ?? 1;
            return (
              <li key={company} className="trust-marquee-logo-cell">
                <span className="trust-marquee-logo-plate">
                  <span className="trust-marquee-logo-slot">
                    {logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={logo}
                        alt={company}
                        className="trust-marquee-company-logo"
                        style={{ "--logo-scale": scale } as CSSProperties}
                      />
                    ) : (
                      <span className="trust-marquee-company-fallback">{company}</span>
                    )}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
