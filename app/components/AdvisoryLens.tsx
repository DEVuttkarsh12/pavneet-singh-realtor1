"use client";

import Link from "next/link";
import { useState } from "react";

const opportunities = [
  {
    number: "01",
    short: "Home",
    title: "A home that fits the life ahead.",
    text: "For first-time buyers, newcomers, families relocating within Nova Scotia, and homeowners preparing to sell. The process begins with the life decision, then builds the property strategy around it.",
    points: ["Needs and timing", "Financing sequence", "Neighbourhood context"],
    image: "/images/home-exterior.jpg",
    alt: "A refined contemporary home exterior",
  },
  {
    number: "02",
    short: "Income",
    title: "An asset that earns its place.",
    text: "Income properties and multi-family opportunities are evaluated against cash flow, location, operating realities, risk, and the role the asset should play in your wider portfolio.",
    points: ["Income potential", "Risk and due diligence", "Long-term portfolio fit"],
    image: "/images/interior-kitchen.jpg",
    alt: "A contemporary residential interior",
  },
  {
    number: "03",
    short: "Business",
    title: "Real estate that serves the enterprise.",
    text: "Retail, office, mixed-use, and owner-occupied opportunities require a commercial lens. Site, access, flexibility, and future demand are considered alongside the financial structure.",
    points: ["Location research", "Use and adaptability", "Commercial context"],
    image: "/images/industrial.jpg",
    alt: "A major commercial building under development",
  },
  {
    number: "04",
    short: "Land",
    title: "A site with a credible path forward.",
    text: "Industrial sites, strategic land, and development opportunities are approached with patience and disciplined questions about access, intended use, growth, and exit options.",
    points: ["Site selection", "Development potential", "Acquisition strategy"],
    image: "/images/development.jpg",
    alt: "An aerial view of a growing neighbourhood",
  },
];

export function AdvisoryLens() {
  const [active, setActive] = useState(0);
  const item = opportunities[active];

  return (
    <section className="advisory-lens section" aria-labelledby="lens-heading">
      <div className="shell lens-heading">
        <div>
          <p className="eyebrow">The advisory lens</p>
          <h2 id="lens-heading">Different property. Same discipline.</h2>
        </div>
        <p>
          Premium service is not a price point. It is the quality of the questions,
          the clarity of the plan, and the care applied to every decision.
        </p>
      </div>

      <div className="shell lens-stage">
        <div className="lens-visual" key={item.image}>
          <img src={item.image} alt={item.alt} />
          <div className="lens-visual-meta">
            <span>{item.number}</span>
            <small>{item.short} advisory</small>
          </div>
        </div>

        <div className="lens-panel">
          <div className="lens-tabs" role="tablist" aria-label="Real estate advisory types">
            {opportunities.map((opportunity, index) => (
              <button
                key={opportunity.short}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? "is-active" : ""}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span>{opportunity.number}</span>
                {opportunity.short}
              </button>
            ))}
          </div>

          <div className="lens-content" role="tabpanel" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link className="text-link" href="/services">
              Explore this advisory path <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
