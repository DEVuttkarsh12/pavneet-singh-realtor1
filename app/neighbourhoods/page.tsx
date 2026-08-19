import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Nova Scotia Neighbourhood Guides",
  description: "Explore Halifax, Bedford, Dartmouth, and communities across Nova Scotia. Local insights on lifestyle, schools, transit, and real estate character.",
};

const neighbourhoods = [
  {
    name: "Halifax Peninsula",
    type: "Urban core",
    image: "/images/halifax-aerial.jpg",
    description: "The heart of the city. Halifax Peninsula offers walkable urban living with a mix of historic Victorian homes, modern condominiums, and vibrant cultural districts. Home to the waterfront boardwalk, downtown dining, and major employers.",
    highlights: ["Walkable", "Waterfront", "Universities", "Dining & culture", "Transit hub"],
  },
  {
    name: "Bedford",
    type: "Suburban family community",
    image: "/images/home-exterior.jpg",
    description: "A sought-after suburban community on the Bedford Basin, known for excellent schools, family-friendly parks, and a strong sense of community. Bedford offers a balance of suburban convenience with easy highway access to downtown Halifax.",
    highlights: ["Top schools", "Bedford Basin", "Parks & trails", "Highway 102 access", "Growing market"],
  },
  {
    name: "Dartmouth",
    type: "Urban & lakeside living",
    image: "/images/interior-kitchen.jpg",
    description: "Known as the City of Lakes, Dartmouth offers diverse housing from downtown condos to lakeside family homes. The Dartmouth waterfront connects to Halifax via a 12-minute ferry ride, and the area has seen significant revitalization and new development.",
    highlights: ["Ferry to Halifax", "23 lakes", "Craft breweries", "Affordable options", "Revitalizing downtown"],
  },
  {
    name: "Hammonds Plains",
    type: "Rural-suburban family area",
    image: "/images/development.jpg",
    description: "A growing community offering larger lots, newer construction, and a semi-rural lifestyle within commuting distance of Halifax. Popular with families seeking space, newer schools, and access to the Kingswood entertainment district.",
    highlights: ["Large lots", "New builds", "Family-oriented", "Kingswood", "Growing infrastructure"],
  },
  {
    name: "Sackville",
    type: "Affordable suburban hub",
    image: "/images/home-exterior.jpg",
    description: "Lower and Middle Sackville offer some of the most accessible entry points into Nova Scotia homeownership. With good school options, established commercial services, and direct highway connectivity, Sackville remains popular with first-time buyers and young families.",
    highlights: ["Affordable entry", "Highway access", "Established services", "First-time buyer friendly", "Recreational trails"],
  },
  {
    name: "Truro",
    type: "Regional hub",
    image: "/images/nova-scotia-coast.webp",
    description: "The hub of Colchester County and a gateway to northern Nova Scotia. Truro offers significantly lower real estate prices than Halifax, a vibrant downtown, and access to both the Fundy coast and Northumberland Strait. Ideal for buyers seeking value and a smaller-town lifestyle.",
    highlights: ["Value pricing", "Tidal bore", "NSCC campus", "Small-town charm", "Trans-Canada access"],
  },
  {
    name: "Annapolis Valley",
    type: "Agricultural & wine country",
    image: "/images/nova-scotia-coast.webp",
    description: "Nova Scotia's agricultural heartland, stretching from Windsor to Digby. The Valley offers rural acreage, heritage homes, vineyard properties, and a growing foodie culture. Wolfville and Kentville anchor a region known for quality of life and natural beauty.",
    highlights: ["Acadia University", "Vineyards", "Rural acreage", "Heritage homes", "Coastal access"],
  },
  {
    name: "Sydney & Cape Breton",
    type: "Coastal island community",
    image: "/images/nova-scotia-coast.webp",
    description: "Cape Breton Island offers dramatic coastal landscapes, Celtic cultural heritage, and some of the most affordable real estate in Atlantic Canada. Sydney serves as the commercial centre, while communities along the Cabot Trail attract those seeking a lifestyle defined by nature.",
    highlights: ["Cabot Trail", "Affordable", "Celtic culture", "CBU campus", "Tourism economy"],
  },
];

export default function NeighbourhoodsPage() {
  return (
    <main className="page-shell">
      <Header />
      <section className="page-hero">
        <div className="page-hero-image">
          <img src="/images/nova-scotia-coast.webp" alt="Nova Scotia coastline and community" />
        </div>
        <div className="page-hero-content shell">
          <p className="eyebrow light">Nova Scotia neighbourhood guides</p>
          <h1>Find the community that fits your life.</h1>
          <p className="lead">
            Every neighbourhood in Nova Scotia has its own character, strengths, and market dynamics.
            Explore the communities Pavneet serves to find the right fit for your goals.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Community profiles</p>
              <h2>Eight communities, each with a story.</h2>
            </div>
            <p className="heading-note">
              Local insight helps turn a property search into a confident decision about where to build your life.
            </p>
          </div>
          <div className="neighbourhood-grid">
            {neighbourhoods.map((hood) => (
              <article className="neighbourhood-card" key={hood.name}>
                <div className="neighbourhood-card-image">
                  <img src={hood.image} alt={hood.name} />
                </div>
                <div className="neighbourhood-card-body">
                  <span className="neighbourhood-type">{hood.type}</span>
                  <h3>{hood.name}</h3>
                  <p>{hood.description}</p>
                  <div className="neighbourhood-highlights">
                    {hood.highlights.map((h) => (
                      <span key={h}>{h}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell">
          <p className="eyebrow">Local knowledge makes the difference</p>
          <h2>Which neighbourhood fits your goals?</h2>
          <p>
            Share your priorities with Pavneet, from commute times and school districts
            to investment potential, and receive tailored community recommendations.
          </p>
          <Link className="button button-ink" href="/contact">
            Discuss your ideal community <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
