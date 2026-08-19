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
  detailLink,
  detailLabel,
}: {
  id: string;
  label: string;
  title: string;
  intro: string;
  steps: typeof buyingSteps;
  detailLink?: string;
  detailLabel?: string;
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
        {detailLink && detailLabel && (
          <Link className="text-link" href={detailLink}>
            {detailLabel} <span aria-hidden="true">↗</span>
          </Link>
        )}
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
          detailLink="/buying-guide"
          detailLabel="Read the complete 7-step buying guide"
        />
        <GuideTrack
          id="selling"
          label="Selling in Nova Scotia"
          title="Prepare, position, negotiate, and close."
          intro="A coordinated five-stage approach designed to protect your leverage, attract serious buyers, and keep the process moving with purpose."
          steps={sellingSteps}
          detailLink="/selling-guide"
          detailLabel="Read the complete 7-step selling guide"
        />
      </div>

      <section className="relocation-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">For newcomers to Nova Scotia</p>
              <h2>Your relocation and settlement checklist.</h2>
            </div>
          </div>
          <div className="relocation-grid">
            <article className="relocation-card">
              <h4>Health coverage (MSI)</h4>
              <p>Apply for your Nova Scotia Medical Services Insurance (MSI) health card upon arrival. There may be a waiting period of up to three months for new residents from other provinces.</p>
            </article>
            <article className="relocation-card">
              <h4>Driver&apos;s licence</h4>
              <p>New Nova Scotia residents must exchange or obtain a Nova Scotia driver&apos;s licence within 90 days. International licence holders may need to complete a road test.</p>
            </article>
            <article className="relocation-card">
              <h4>School enrollment</h4>
              <p>Nova Scotia has seven regional centres for education. School catchment areas are determined by your residential address. Registration can typically be completed at your local school.</p>
            </article>
            <article className="relocation-card">
              <h4>Transit and commuting</h4>
              <p>Halifax Transit serves the Halifax Regional Municipality with bus and ferry service. Commute times vary significantly by neighbourhood. Bedford to downtown Halifax averages 25–40 minutes, Dartmouth via ferry takes approximately 12 minutes.</p>
            </article>
            <article className="relocation-card">
              <h4>Banking and credit</h4>
              <p>Opening a Canadian bank account is an early priority. Building Canadian credit history is essential for mortgage qualification. Newcomers should begin establishing credit within their first six months.</p>
            </article>
            <article className="relocation-card">
              <h4>Community connections</h4>
              <p>Nova Scotia has a welcoming multicultural community. The Halifax Immigrant Partnership, ISANS (Immigrant Services Association of Nova Scotia), and local cultural organizations provide settlement support and social connection.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">For investors</p>
              <h2>Nova Scotia real estate investment essentials.</h2>
            </div>
          </div>
          <div className="relocation-grid">
            <article className="relocation-card">
              <h4>Understanding cap rates in Halifax</h4>
              <p>Capitalization rates in the Halifax Regional Municipality typically range from 4.5% to 7% for residential multi-unit properties, varying by location, condition, and unit configuration. Pavneet provides detailed analysis for each investment opportunity.</p>
            </article>
            <article className="relocation-card">
              <h4>Nova Scotia tenancy legislation</h4>
              <p>The Nova Scotia Residential Tenancies Act governs landlord-tenant relationships, including rent increases (currently subject to a temporary cap), lease terms, security deposits (limited to half a month&apos;s rent), and dispute resolution through the Residential Tenancies Program.</p>
            </article>
            <article className="relocation-card">
              <h4>Student housing opportunities</h4>
              <p>Halifax is home to Dalhousie University, Saint Mary&apos;s University, Mount Saint Vincent University, and NSCAD. Properties near these institutions can benefit from consistent rental demand during the academic year, typically September through April.</p>
            </article>
            <article className="relocation-card">
              <h4>Multi-unit financing considerations</h4>
              <p>Properties with 1–4 units typically qualify for residential mortgage rates and terms. Properties with 5+ units are classified as commercial and require commercial financing, which involves different down payment requirements, amortization periods, and qualification criteria.</p>
            </article>
          </div>
        </div>
      </section>

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
