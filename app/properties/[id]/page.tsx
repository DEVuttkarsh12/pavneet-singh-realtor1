import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { properties } from "../../data/properties";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

function propertyTypeLabel(value: (typeof properties)[number]["propertyType"]) {
  if (value === "land") return "Land and development";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) {
    return { title: "Property not found" };
  }

  return {
    title: `${property.title} | Nova Scotia Property Marketplace`,
    description: property.summary,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) notFound();

  const related = properties
    .filter((item) => item.id !== property.id)
    .sort((a, b) => Number(b.propertyType === property.propertyType) - Number(a.propertyType === property.propertyType))
    .slice(0, 3);

  return (
    <main className="page-shell property-detail-page">
      <Header />

      <section className="property-detail-hero">
        <div className="property-detail-gallery">
          <figure className="property-detail-gallery-main">
            <img src={property.gallery[0].src} alt={property.gallery[0].alt} />
          </figure>
          {property.gallery.slice(1, 3).map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
          <span className="property-gallery-note">Representative imagery</span>
        </div>
        <div className="property-detail-shade" />
        <div className="shell property-detail-heading">
          <Link className="property-back-link" href="/properties">
            <span aria-hidden="true">←</span> Back to properties
          </Link>
          <p className="eyebrow light">Reference opportunity · {property.community}</p>
          <h1>{property.title}</h1>
          <address>{property.address}</address>
          <div className="property-detail-price-line">
            <strong>
              {property.price ? `$${property.price.toLocaleString("en-CA")}` : "Price on request"}
            </strong>
            <span>{propertyTypeLabel(property.propertyType)}</span>
            {property.mlsNumber ? <span>MLS® {property.mlsNumber}</span> : null}
          </div>
        </div>
      </section>

      <section className="property-detail-content">
        <div className="shell property-detail-layout">
          <div className="property-detail-main">
            <section className="property-overview" aria-labelledby="property-overview-heading">
              <p className="eyebrow">Property overview</p>
              <h2 id="property-overview-heading">A closer look at the opportunity.</h2>
              {property.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="property-detail-section" aria-labelledby="property-profile-heading">
              <div className="property-detail-section-heading">
                <p className="eyebrow">At a glance</p>
                <h2 id="property-profile-heading">Property profile</h2>
              </div>
              <dl className="property-detail-facts">
                {property.facts.map((fact) => (
                  <div key={`${property.id}-${fact.label}`}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
                {property.price ? (
                  <div>
                    <dt>Reference price</dt>
                    <dd>${property.price.toLocaleString("en-CA")}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>Marketplace status</dt>
                  <dd>{property.availability === "available" ? "Available reference" : property.availability}</dd>
                </div>
              </dl>
            </section>

            <section className="property-detail-columns">
              <div>
                <p className="eyebrow">Key features</p>
                <h2>Opportunity highlights</h2>
                <ul>
                  {property.highlights.map((highlight) => (
                    <li key={`${property.id}-${highlight}`}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Features</p>
                <h2>Amenities and attributes</h2>
                <ul>
                  {property.amenities.map((amenity) => (
                    <li key={`${property.id}-${amenity}`}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="property-location-panel" aria-labelledby="property-location-heading">
              <div>
                <p className="eyebrow light">Location</p>
                <h2 id="property-location-heading">Positioned in {property.community}.</h2>
                <address>{property.address}</address>
              </div>
              <ul>
                {property.locationHighlights.map((highlight) => (
                  <li key={`${property.id}-${highlight}`}>{highlight}</li>
                ))}
              </ul>
            </section>

            <section className="property-source-panel">
              <div>
                <p className="eyebrow">Public reference information</p>
                <h2>Verify every detail before making a decision.</h2>
                <p>
                  This demonstration profile is based on public listing information
                  and uses representative imagery. Availability, pricing, dimensions,
                  features, and development details can change and should be confirmed
                  independently with the listing source and relevant professionals.
                </p>
              </div>
              <a className="button button-ink" href={property.sourceUrl} target="_blank" rel="noreferrer">
                View original source <span aria-hidden="true">↗</span>
              </a>
            </section>
          </div>

          <aside className="property-advisor-card">
            <img src="/images/pavneet-studio-portrait.jpg" alt="Pavneet Singh, Nova Scotia real estate advisor" />
            <div>
              <p className="eyebrow light">Personal advisory</p>
              <h2>Interested in this kind of opportunity?</h2>
              <p>
                Pavneet can help you verify the details, compare alternatives,
                assess fit, and plan the next step with clarity.
              </p>
              <Link className="button button-gold" href="/contact">
                Discuss this property <span aria-hidden="true">↗</span>
              </Link>
              <a className="property-advisor-call" href="tel:+19028099399">Call 902 809 9399</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="related-properties section">
        <div className="shell section-heading">
          <div>
            <p className="eyebrow">Continue exploring</p>
            <h2>Other Nova Scotia opportunities.</h2>
          </div>
          <Link className="text-link" href="/properties">View all properties <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="shell related-property-grid">
          {related.map((item) => (
            <Link className="related-property-card" href={`/properties/${item.id}`} key={item.id}>
              <img src={item.image} alt={`${item.imageNote ?? "Property"} for ${item.title}`} />
              <div>
                <p>{item.community}</p>
                <h3>{item.title}</h3>
                <span>{item.price ? `$${item.price.toLocaleString("en-CA")}` : "Price on request"}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
