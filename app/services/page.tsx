import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Real Estate Advisory Services",
  description: "Residential, investment, commercial, and industrial real estate advisory across Nova Scotia.",
};

const services = [
  {
    number: "01",
    title: "Residential real estate advisory",
    body: "Buying or selling a home is one of life's most significant financial decisions. Pavneet brings market analysis, local context, negotiation guidance, and a strategy aligned with both your lifestyle and long-term financial objectives.",
    bullets: ["Market analysis and property valuation", "Buying and selling strategies", "Neighbourhood and community insights", "Investment potential assessment", "Negotiation guidance"],
  },
  {
    number: "02",
    title: "Investment advisory",
    body: "Successful investing begins with understanding opportunity. Each potential asset is considered in the context of your financial goals, risk tolerance, and future objectives, with a focus on durable value rather than short-term noise.",
    bullets: ["Income-producing properties", "Multi-family investments", "Commercial portfolio expansion", "Land development opportunities", "Real estate wealth-building strategies"],
  },
  {
    number: "03",
    title: "Commercial real estate advisory",
    body: "Commercial property can support both wealth creation and business growth. Pavneet works with investors, entrepreneurs, and owner-occupiers to evaluate opportunities with clarity and commercial context.",
    bullets: ["Investment property analysis", "Market and location research", "Retail and office opportunities", "Multi-unit and mixed-use assets", "Development land evaluation"],
  },
  {
    number: "04",
    title: "Industrial & land advisory",
    body: "Industrial real estate is an important part of Nova Scotia's growing economy. From operating facilities to development-ready land, Pavneet helps clients identify sites that support expansion, stability, and long-term growth.",
    bullets: ["Industrial property sourcing", "Site selection and market research", "Warehouse and distribution facilities", "Development and expansion opportunities", "Land acquisition strategy"],
  },
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <Header />
      <section className="page-hero">
        <div className="page-hero-image">
          <img src="/images/industrial.jpg" alt="A significant commercial development under construction" />
        </div>
        <div className="page-hero-content shell">
          <p className="eyebrow light">Real estate advisory · Nova Scotia</p>
          <h1>Strategy for every stage of your journey.</h1>
          <p className="lead">
            Analytical, personalized guidance for residential properties,
            multi-family investments, commercial assets, industrial sites, and
            development land.
          </p>
        </div>
      </section>

      <section className="content-section services-content">
        <div className="shell section-heading">
          <div>
            <p className="eyebrow">Four advisory pillars</p>
            <h2>Make the opportunity fit the objective.</h2>
          </div>
          <p className="heading-note">
            Market expertise and local knowledge are most valuable when they
            are applied to a clear understanding of your goals.
          </p>
        </div>
        <div className="shell service-detail-grid">
          {services.map((service) => (
            <article className="service-detail" key={service.number}>
              <span>{service.number}</span>
              <h2>{service.title}</h2>
              <div>
                <p>{service.body}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-trust">
        <div className="service-trust-image">
          <img src="/images/pavneet-studio-portrait.jpg" alt="Pavneet Singh, Nova Scotia real estate advisor" />
        </div>
        <div className="service-trust-copy">
          <p className="eyebrow light">A relationship built on trust</p>
          <h2>Knowledge, strategy, and advice that stays honest.</h2>
          <p>
            The strongest real estate decisions are supported by clear
            information and a trusted partner. Pavneet&apos;s commitment is to
            provide personalized service and long-term support that extends
            beyond a single transaction.
          </p>
          <Link className="button button-gold" href="/contact">
            Discuss your opportunity <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
