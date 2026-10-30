"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { hiringPartners } from "@/app/homeContent";

const CITIES = ["Indore", "Pune"] as const;

/** Optical scale so dense brand marks and sparse wordmarks share similar weight. */
const logoOpticalScale: Partial<Record<(typeof hiringPartners)[number]["name"], number>> = {
  InfoBeans: 0.86,
  Systango: 0.88,
  "Softweb Solutions": 0.82,
  Credencys: 0.84,
  Newput: 0.88,
  Consagous: 0.86,
  Deqode: 0.88,
  Infograins: 0.86,
  "Josh Software": 0.86,
  Softude: 0.88,
  Embitel: 0.88,
  SpringCT: 0.88,
  Webonise: 0.86,
  "Harbinger Group": 0.84,
  "GS Lab": 0.88,
  Talentica: 0.86,
};

export default function HiringPartnersSection() {
  const [city, setCity] = useState<(typeof CITIES)[number]>("Indore");
  const cityPartners = hiringPartners.filter((p) => p.city === city);

  return (
    <section id="hiring-partners" className="section-wrapper hiring-partners-section">
      <div className="hiring-partners-atmosphere" aria-hidden="true">
        <span className="hiring-partners-orb hiring-partners-orb--sky" />
        <span className="hiring-partners-orb hiring-partners-orb--navy" />
      </div>
      <div className="container">
        <div className="section-header hiring-partners-header">
          <p className="section-tag hiring-partners-tag">Local network</p>
          <h2 className="section-title">Our Local Hiring Partners</h2>
          <p className="section-intro">
            Product and IT teams in Indore and Pune that hire for Java, Spring, cloud, and full stack skills.
          </p>
        </div>

        <div
          className="hiring-partners-city-tabs"
          role="tablist"
          aria-label="Hiring partner cities"
        >
          {CITIES.map((c) => {
            const count = hiringPartners.filter((p) => p.city === c).length;
            const selected = city === c;
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`hiring-partners-city-tab${selected ? " is-active" : ""}`}
                onClick={() => setCity(c)}
              >
                <span className="hiring-partners-city-tab-name">{c}</span>
                <span className="hiring-partners-city-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div
          className="hiring-partners-grid"
          role="tabpanel"
          aria-label={`${city} hiring partners`}
        >
          {cityPartners.map((partner) => {
            const scale = logoOpticalScale[partner.name] ?? 1;
            return (
              <article key={partner.name} className="hiring-partner-card">
                <div
                  className={`hiring-partner-logo-plate${
                    partner.logoTone === "dark" ? " hiring-partner-logo-plate--dark" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt=""
                    className="hiring-partner-logo"
                    style={{ "--logo-scale": scale } as CSSProperties}
                  />
                </div>
                <div className="hiring-partner-meta">
                  <h3 className="hiring-partner-name">{partner.name}</h3>
                  <p className="hiring-partner-focus">{partner.focus}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="hiring-partners-note">
          Interview prep and local introductions across this network. Roles depend on cohort timing and fit.
        </p>
      </div>
    </section>
  );
}
