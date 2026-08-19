import Link from "next/link";
import { properties } from "./data/properties";
import { AdvisoryLens } from "./components/AdvisoryLens";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const services = [
  {
    number: "01",
    title: "Residential",
    text: "Clear advice for buying, selling, and relocating, grounded in your lifestyle and long-term goals.",
    image: "/images/home-exterior.jpg",
  },
  {
    number: "02",
    title: "Investment",
    text: "Yield-aware guidance for income properties, multi-family opportunities, and portfolio growth.",
    image: "/images/interior-kitchen.jpg",
  },
  {
    number: "03",
    title: "Commercial",
    text: "Strategic support for retail, office, mixed-use, and owner-occupied real estate decisions.",
    image: "/images/industrial.jpg",
  },
  {
    number: "04",
    title: "Land & development",
    text: "Local insight for industrial sites, strategic land acquisition, and development opportunities.",
    image: "/images/development.jpg",
  },
];

const communities = [
  "Halifax",
  "Bedford",
  "Dartmouth",
  "Hammonds Plains",
  "Sackville",
  "Truro",
  "Annapolis",
  "Sydney",
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/halifax-aerial.jpg"
          >
            <source src="/videos/halifax-drone-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-shade" />
        <div className="hero-content shell">
          <div className="hero-copy reveal">
            <p className="eyebrow light">Nova Scotia real estate advisory</p>
            <h1 id="hero-title">
              Your next move,
              <span>made with clarity.</span>
            </h1>
            <p className="hero-lead">
              Residential, commercial, industrial, and investment guidance for
              people building a life and a legacy in Nova Scotia.
            </p>
            <div className="button-row">
              <Link className="button button-gold" href="/contact">
                Start a conversation <span aria-hidden="true">↗</span>
              </Link>
              <a className="text-link light" href="tel:+19028099399">
                Call 902 809 9399
              </a>
            </div>
          </div>

          <div className="hero-rail" aria-label="Service highlights">
            <div>
              <span>100+</span>
              <small>Units represented</small>
            </div>
            <div>
              <span>All NS</span>
              <small>Province-wide guidance</small>
            </div>
            <div>
              <span>4</span>
              <small>Advisory pillars</small>
            </div>
          </div>
        </div>
        <div className="hero-signature" aria-hidden="true">
          <span>PS</span>
          <small>Sutton Group Professional Realty</small>
        </div>
        <a className="scroll-cue" href="#advisory">
          Explore <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="intro-band">
        <div className="shell intro-grid">
          <p className="eyebrow">Pavneet Singh · REALTOR®</p>
          <p className="statement">
            Real estate is more than a transaction. It is a decision about
            family, freedom, and what comes next.
          </p>
          <p className="body-large">
            I help families, newcomers, professionals, business owners, and
            investors navigate Nova Scotia&apos;s market with honest advice,
            thoughtful strategy, and a relationship built to last beyond
            closing day.
          </p>
        </div>
      </section>

      <div className="brand-ribbon" aria-hidden="true">
        <div>
          <span>Residential</span><i>✦</i>
          <span>Investment</span><i>✦</i>
          <span>Commercial</span><i>✦</i>
          <span>Industrial</span><i>✦</i>
          <span>Land &amp; development</span><i>✦</i>
          <span>Nova Scotia</span><i>✦</i>
        </div>
      </div>

      <section id="advisory" className="section section-dark">
        <div className="shell">
          <div className="section-heading on-dark">
            <div>
              <p className="eyebrow light">Advisory services</p>
              <h2>Strategy for every kind of opportunity.</h2>
            </div>
            <Link className="text-link light" href="/services">
              View all advisory services <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt="" />
                <div className="service-overlay" />
                <div className="service-card-content">
                  <span>{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section portrait-section">
        <div className="shell portrait-grid">
          <div className="portrait-column">
            <div className="portrait-frame" aria-label="Pavneet Singh">
              <img
                src="/images/pavneet-studio-portrait.jpg"
                alt="Pavneet Singh, Nova Scotia real estate professional with Sutton Group Professional Realty"
              />
            </div>
            <div className="portrait-caption">
              <span>Pavneet Singh · REALTOR®</span>
              <span>Serving all of Nova Scotia</span>
            </div>
          </div>
          <div className="portrait-copy">
            <p className="eyebrow">Your trusted family REALTOR®</p>
            <h2>Local knowledge. Straight answers. A plan built around you.</h2>
            <p>
              Every journey is different. Whether you are purchasing your
              first home in Canada, selling a property filled with memories,
              relocating your family, or evaluating a commercial opportunity,
              you deserve advice that respects both the numbers and the life
              behind them.
            </p>
            <blockquote>
              “My goal is not simply to complete a transaction. It is to help
              you make an informed decision that creates lasting value.”
            </blockquote>
            <div className="client-spectrum" aria-label="Clients Pavneet serves">
              <span>First-time buyers</span>
              <span>Newcomers</span>
              <span>Families</span>
              <span>Investors</span>
              <span>Entrepreneurs</span>
              <span>Developers</span>
            </div>
            <div className="language-bar-label">Speaks six languages</div>
            <div className="language-bar">
              <span>English</span>
              <span>Punjabi</span>
              <span>Hindi</span>
              <span>Urdu</span>
              <span>Gujarati</span>
              <span>Spanish</span>
            </div>
            <Link className="button button-ink" href="/about">
              Meet Pavneet <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <AdvisoryLens />

      <section className="process section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A clear plan of action</p>
              <h2>From ambition to address.</h2>
            </div>
            <p className="heading-note">
              Thoughtful guidance through negotiations, due diligence, closing
              day, and everything in between.
            </p>
          </div>
          <div className="process-list">
            {[
              ["01", "Discover", "We define your goals, timeline, priorities, and the opportunities that align with your vision."],
              ["02", "Strategize", "Market insight and careful analysis become a practical plan for your next move."],
              ["03", "Execute", "From viewings and negotiations to conditions and closing, every detail moves forward with purpose."],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-section section-dark" aria-labelledby="proof-heading">
        <div className="shell proof-intro">
          <p className="eyebrow light">Experience &amp; community</p>
          <h2 id="proof-heading">A record built through service.</h2>
          <p>
            Recognition matters most when it reflects consistent work: showing up,
            protecting the client&apos;s interests, and contributing to the community.
          </p>
        </div>
        <div className="shell proof-grid">
          <article>
            <span>01</span>
            <strong>100+</strong>
            <p>Units represented across real estate opportunities</p>
          </article>
          <article>
            <span>02</span>
            <strong>Top 25</strong>
            <p>RE/MAX Nova recognition · 2023</p>
          </article>
          <article>
            <span>03</span>
            <strong>Good Deeds</strong>
            <p>RE/MAX Nova community recognition · 2024</p>
          </article>
          <article>
            <span>04</span>
            <strong>Gratitude</strong>
            <p>Certificate from Nova Noble Cause Society</p>
          </article>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-heading">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What clients are saying</p>
              <h2 id="testimonials-heading">Trust built through results.</h2>
            </div>
          </div>
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
              <blockquote>&quot;Moving to Nova Scotia from Ontario was overwhelming until we connected with Pavneet. He understood our needs as newcomers, walked us through every step, and helped us find the perfect family home in Bedford. His patience and multilingual support made all the difference.&quot;</blockquote>
              <div className="testimonial-attribution">
                <strong>Newcomer family</strong>
                <span>Relocated from Ontario · Bedford, NS</span>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
              <blockquote>&quot;As a first-time buyer, I had no idea where to start. Pavneet explained the entire process, from pre-approval to closing costs, and made sure I understood every detail before making a decision. I felt genuinely supported the entire time.&quot;</blockquote>
              <div className="testimonial-attribution">
                <strong>First-time homeowner</strong>
                <span>First purchase · Halifax, NS</span>
              </div>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
              <blockquote>&quot;Pavneet helped me acquire a multi-unit property that now generates consistent passive income. His background in finance and construction gave me confidence in the numbers and the building itself. A true investment advisor.&quot;</blockquote>
              <div className="testimonial-attribution">
                <strong>Real estate investor</strong>
                <span>Multi-unit acquisition · Dartmouth, NS</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="market-snapshot" aria-labelledby="market-heading">
        <div className="shell">
          <p className="eyebrow light">Nova Scotia market pulse</p>
          <h2 id="market-heading" style={{ color: 'white', fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 41px)', fontWeight: 400, margin: 0 }}>Local data for informed decisions.</h2>
          <div className="market-snapshot-grid">
            <article>
              <strong>$485K</strong>
              <p>Median residential sale price · Halifax Regional Municipality</p>
            </article>
            <article>
              <strong>21 days</strong>
              <p>Average days on market · HRM residential</p>
            </article>
            <article>
              <strong>62%</strong>
              <p>Sales-to-new-listings ratio · Seller&apos;s market conditions</p>
            </article>
            <article>
              <strong>1.5%</strong>
              <p>Halifax deed transfer tax rate · Municipal levy on purchase price</p>
            </article>
          </div>
          <p className="market-snapshot-note">Figures reflect recent Halifax Regional Municipality market conditions. Contact Pavneet for current data specific to your search area.</p>
        </div>
      </section>

      <section className="locations" aria-labelledby="locations-heading">
        <div className="locations-image">
          <img src="/images/nova-scotia-coast.webp" alt="A coastal Nova Scotia community" />
        </div>
        <div className="locations-panel">
          <p className="eyebrow light">Serving all of Nova Scotia</p>
          <h2 id="locations-heading">One province. Many possibilities.</h2>
          <p>
            From Halifax&apos;s urban core to growing communities throughout
            Nova Scotia, local context helps turn a property search into a
            confident decision.
          </p>
          <div className="location-tags">
            {communities.map((community) => (
              <span key={community}>{community}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="marketplace-preview" aria-labelledby="marketplace-preview-heading">
        <div className="marketplace-preview-image">
          <img src="/images/home-exterior.jpg" alt="A refined Nova Scotia home" />
          <div className="marketplace-preview-index" aria-hidden="true">
            <span>01</span>
            <small>Property marketplace</small>
          </div>
        </div>
        <div className="marketplace-preview-copy">
          <p className="eyebrow light">A curated property marketplace</p>
          <h2 id="marketplace-preview-heading">Your next opportunity, collected in one place.</h2>
          <p>
            Browse a curated preview of residential, investment, commercial,
            and development opportunities across Nova Scotia. Scan the collection
            quickly, then open any property for its complete profile and source details.
          </p>
          <div className="marketplace-preview-categories">
            <span>Homes</span>
            <span>Income</span>
            <span>Business</span>
            <span>Land</span>
          </div>
          <Link className="button button-gold" href="/properties">
            Explore properties <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-heading">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Featured opportunities</p>
              <h2 id="featured-heading">Properties worth a closer look.</h2>
            </div>
            <Link className="text-link" href="/properties">View all properties <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="featured-properties-grid">
            {properties.slice(0, 3).map((property) => (
              <Link className="featured-property-card" href={`/properties/${property.id}`} key={property.id}>
                <div className="featured-property-card-image">
                  <img src={property.gallery[0]?.src || property.image} alt={property.title} />
                  <span className="featured-property-badge">{property.propertyType}</span>
                </div>
                <div className="featured-property-card-body">
                  <h4>{property.title}</h4>
                  <p className="featured-property-location">{property.address}</p>
                  <p className="featured-property-price">
                    {property.price ? `$${property.price.toLocaleString()}` : "Price upon request"}
                  </p>
                  <div className="featured-property-card-meta">
                    {property.bedrooms ? <span>{property.bedrooms} bed</span> : null}
                    {property.bathrooms ? <span>{property.bathrooms} bath</span> : null}
                    {property.area ? <span>{property.area}</span> : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section guides-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Practical resources</p>
              <h2>Know what comes next.</h2>
            </div>
          </div>
          <div className="guide-grid">
            <Link className="guide-card guide-buy" href="/buying-guide">
              <span className="guide-number">01</span>
              <div>
                <p>For buyers</p>
                <h3>Your roadmap to homeownership in Nova Scotia</h3>
              </div>
              <span className="guide-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link className="guide-card guide-sell" href="/selling-guide">
              <span className="guide-number">02</span>
              <div>
                <p>For sellers</p>
                <h3>Prepare, position, negotiate, and close with confidence</h3>
              </div>
              <span className="guide-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="insights-heading">
            <p className="eyebrow">Decision notes</p>
            <h3>Three questions worth answering early.</h3>
          </div>
          <div className="insight-grid">
            <Link className="insight-card" href="/buying-guide">
              <span>Buying</span>
              <h4>What should happen before the first showing?</h4>
              <p>Align goals, budget, financing, and the real non-negotiables.</p>
              <i aria-hidden="true">↗</i>
            </Link>
            <Link className="insight-card" href="/selling-guide">
              <span>Selling</span>
              <h4>Which preparation protects your leverage?</h4>
              <p>Positioning, presentation, pricing, and a launch plan that work together.</p>
              <i aria-hidden="true">↗</i>
            </Link>
            <Link className="insight-card" href="/services">
              <span>Investing</span>
              <h4>Does the opportunity fit the objective?</h4>
              <p>Test income, risk, location, operating reality, and long-term portfolio fit.</p>
              <i aria-hidden="true">↗</i>
            </Link>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light">Let&apos;s build your future</p>
            <h2>Your next real estate decision begins with a conversation.</h2>
            <p>
              Tell Pavneet what you are considering. You will receive direct,
              thoughtful guidance on the clearest next step.
            </p>
            <div className="direct-contact">
              <a href="tel:+19028099399">902 809 9399</a>
              <a href="mailto:realtorpavneetsingh@gmail.com">
                realtorpavneetsingh@gmail.com
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
