import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Buyer and Seller Guides",
  description: "A clear, practical guide to buying or selling real estate in Nova Scotia with Pavneet Singh.",
};

const buyingSteps = [
  {
    title: "Define the right brief",
    text: "Clarify location, property type, lifestyle needs, investment potential, and the priorities that must still make sense years from now.",
  },
  {
    title: "Confirm the complete budget",
    text: "Review financing, closing costs, legal fees, inspections, taxes, utilities, and the ongoing cost of ownership before the search becomes emotional.",
  },
  {
    title: "Search with local context",
    text: "Compare properties through condition, neighbourhood trends, market value, resale potential, and fit with your long-term plans.",
  },
  {
    title: "Offer and investigate",
    text: "Structure the offer carefully, then complete financing, inspection, disclosure, and legal due diligence before conditions are removed.",
  },
  {
    title: "Close with confidence",
    text: "Coordinate the final walk-through, documents, funds, ownership transfer, and key release with every professional involved.",
  },
];

const sellingSteps = [
  {
    title: "Set the outcome",
    text: "Start with your timeline, priorities, next move, and the balance between speed, certainty, and maximizing value.",
  },
  {
    title: "Price from evidence",
    text: "Use comparable sales, active competition, current demand, and the property's condition to establish a credible market position.",
  },
  {
    title: "Prepare with purpose",
    text: "Focus on presentation, minor repairs, staging, photography, and improvements that can genuinely influence buyer confidence.",
  },
  {
    title: "Launch and negotiate",
    text: "Bring marketing, private outreach, REALTOR® exposure, showing feedback, and disciplined offer analysis into one coordinated strategy.",
  },
  {
    title: "Complete the sale",
    text: "Manage buyer conditions, legal requirements, closing coordination, and the final transition into your next chapter.",
  },
];

function GuideTrack({
  id,
  label,
  title,
  intro,
  steps,
}: {
  id: string;
  label: string;
  title: string;
  intro: string;
  steps: typeof buyingSteps;
}) {
  return (
    <section className="combined-guide-track" id={id}>
      <div className="combined-guide-intro">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        <p>{intro}</p>
        <Link className="button button-ink" href="/contact">
          Build your plan <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="combined-guide-steps">
        {steps.map((step, index) => (
          <article key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function GuidesPage() {
  return (
    <main className="page-shell guides-page">
      <Header />
      <section className="page-hero guides-hero">
        <div className="page-hero-image">
          <img src="/images/interior-kitchen.jpg" alt="A refined contemporary Nova Scotia home interior" />
        </div>
        <div className="page-hero-content shell">
          <p className="eyebrow light">Buyer and seller resources</p>
          <h1>Two journeys. One clear place to begin.</h1>
          <p className="lead">
            Practical Nova Scotia guidance for purchasing with confidence or
            positioning a property for its strongest outcome.
          </p>
          <nav className="guide-jump-nav" aria-label="Choose a guide">
            <a href="#buying">I am buying <span aria-hidden="true">↓</span></a>
            <a href="#selling">I am selling <span aria-hidden="true">↓</span></a>
          </nav>
        </div>
      </section>

      <div className="shell combined-guides">
        <GuideTrack
          id="buying"
          label="Buying in Nova Scotia"
          title="From first priorities to the front door."
          intro="A focused five-stage roadmap that keeps financing, fit, local context, negotiation, and due diligence connected from the beginning."
          steps={buyingSteps}
        />
        <GuideTrack
          id="selling"
          label="Selling in Nova Scotia"
          title="Prepare, position, negotiate, and close."
          intro="A coordinated five-stage approach designed to protect your leverage, attract serious buyers, and keep the process moving with purpose."
          steps={sellingSteps}
        />
      </div>

      <section className="page-cta">
        <div className="shell">
          <p className="eyebrow">Guidance shaped around you</p>
          <h2>A checklist is useful. A strategy is personal.</h2>
          <p>
            Share your timeline, priorities, and current situation with Pavneet
            to turn the right guide into a practical next step.
          </p>
          <Link className="button button-ink" href="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
