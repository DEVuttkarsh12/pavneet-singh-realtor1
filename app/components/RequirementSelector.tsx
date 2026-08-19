"use client";

import { useState } from "react";
import Link from "next/link";

type GoalId = "buy" | "sell" | "invest" | "explore";

interface GoalOption {
  id: GoalId;
  label: string;
  badge: string;
  headline: string;
  description: string;
  subOptions: string[];
  ctaLink: string;
  ctaText: string;
  secondaryLink?: string;
  secondaryText?: string;
}

const goals: GoalOption[] = [
  {
    id: "buy",
    label: "Buy a Home",
    badge: "Homebuyers & Newcomers",
    headline: "Find a home shaped around your life and budget.",
    description:
      "Whether you are purchasing your first property in Halifax, relocating from another province, or moving to Canada, receive step-by-step guidance, closing cost clarity, and neighborhood insights.",
    subOptions: [
      "First-time homebuyer guidance",
      "Newcomer & relocation support",
      "Nova Scotia closing cost breakdown",
      "Government programs (FHSA, HBP, DPAP)",
    ],
    ctaLink: "/buying-guide",
    ctaText: "Explore Buyer's Guide",
    secondaryLink: "/properties",
    secondaryText: "Search Properties",
  },
  {
    id: "sell",
    label: "Sell a Property",
    badge: "Sellers & Homeowners",
    headline: "Position your home for its maximum market value.",
    description:
      "Understand your home's true value with a Comparative Market Analysis (CMA), high-ROI pre-listing improvement recommendations, and a disciplined multi-channel marketing strategy.",
    subOptions: [
      "Comparative Market Analysis (CMA)",
      "High-ROI renovation recommendations",
      "Seller estimated net proceeds",
      "Multiple offer negotiation strategy",
    ],
    ctaLink: "/selling-guide",
    ctaText: "Explore Seller's Guide",
    secondaryLink: "/contact",
    secondaryText: "Request Valuation",
  },
  {
    id: "invest",
    label: "Invest & Build Wealth",
    badge: "Investors & Developers",
    headline: "Acquire income-producing assets with disciplined numbers.",
    description:
      "Evaluate multi-unit residential, commercial assets, student housing, and development land across Nova Scotia with finance-backed pro-formas, cap rate analysis, and long-term wealth strategy.",
    subOptions: [
      "Halifax cap rates (4.5% – 7%)",
      "Multi-family operating pro-formas",
      "Residential Tenancies Act guidance",
      "Commercial & land development",
    ],
    ctaLink: "/services",
    ctaText: "Investment Advisory",
    secondaryLink: "/contact",
    secondaryText: "Discuss Opportunities",
  },
  {
    id: "explore",
    label: "Explore Neighbourhoods",
    badge: "Community Profiles",
    headline: "Discover the character, schools, and lifestyle of each area.",
    description:
      "From urban living on the Halifax Peninsula to family-friendly Bedford, coastal Dartmouth, Hammonds Plains, and regional hubs like Truro, find the community that fits your goals.",
    subOptions: [
      "Halifax Peninsula & Downtown",
      "Bedford & Hammonds Plains",
      "Dartmouth & Lakes Region",
      "Sackville, Truro & Valley",
    ],
    ctaLink: "/neighbourhoods",
    ctaText: "View 8 Neighbourhood Guides",
    secondaryLink: "/contact",
    secondaryText: "Ask About an Area",
  },
];

export function RequirementSelector() {
  const [activeGoal, setActiveGoal] = useState<GoalId>("buy");
  const activeData = goals.find((g) => g.id === activeGoal) || goals[0];

  return (
    <section className="requirement-selector-section" aria-labelledby="req-heading">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Tailored Real Estate Guidance</p>
            <h2 id="req-heading">What are you looking to achieve today?</h2>
          </div>
          <p className="heading-note">
            Select your primary objective to see the exact process, tools, and market intelligence Pavneet provides for your journey.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="requirement-tabs" role="tablist" aria-label="Select your goal">
          {goals.map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={activeGoal === g.id}
              className={`requirement-tab ${activeGoal === g.id ? "is-active" : ""}`}
              onClick={() => setActiveGoal(g.id)}
            >
              <span>{g.label}</span>
            </button>
          ))}
        </div>

        {/* Selected Requirement Panel */}
        <div className="requirement-panel" role="tabpanel">
          <div className="requirement-panel-content">
            <span className="requirement-badge">{activeData.badge}</span>
            <h3>{activeData.headline}</h3>
            <p>{activeData.description}</p>
            <div className="requirement-sub-options">
              {activeData.subOptions.map((opt) => (
                <div className="requirement-option-chip" key={opt}>
                  <i aria-hidden="true">✓</i>
                  <span>{opt}</span>
                </div>
              ))}
            </div>
            <div className="requirement-actions">
              <Link className="button button-gold" href={activeData.ctaLink}>
                {activeData.ctaText} <span aria-hidden="true">↗</span>
              </Link>
              {activeData.secondaryLink && activeData.secondaryText && (
                <Link className="text-link" href={activeData.secondaryLink}>
                  {activeData.secondaryText} <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
