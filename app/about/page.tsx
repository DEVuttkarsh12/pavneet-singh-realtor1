import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "About Pavneet",
  description: "Meet Pavneet Singh, a family REALTOR® and real estate advisor serving all of Nova Scotia.",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <Header />
      <section className="page-hero about-personal-hero">
        <div className="page-hero-image">
          <img src="/images/pavneet-studio-portrait.jpg" alt="Pavneet Singh, Nova Scotia real estate advisor" />
        </div>
        <div className="page-hero-content shell">
          <p className="eyebrow light">About Pavneet Singh</p>
          <h1>A relationship built on trust and results.</h1>
          <p className="lead">
            Your family REALTOR® with Sutton Group Professional Realty,
            helping people create opportunity, security, and a future in Nova Scotia.
          </p>
          <div className="about-hero-signature">
            <span>Residential</span>
            <span>Investment</span>
            <span>Commercial</span>
            <span>Development</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell content-grid">
          <aside className="content-aside">
            <p className="eyebrow">More than properties</p>
            <h2>Real estate shaped around the life you envision.</h2>
          </aside>
          <div className="prose">
            <p>
              Real estate is about creating opportunities, building security,
              and helping people achieve the life they envision for themselves
              and their families.
            </p>
            <p>
              Across Nova Scotia, Pavneet has helped families find a place to
              call home, supported homeowners through successful sales, and
              guided investors toward opportunities designed to strengthen
              long-term wealth. For many clients, a home represents stability.
              For others, an investment property becomes a pathway to freedom.
            </p>
            <p>
              As someone who understands the importance of building a future in
              Canada, Pavneet is especially passionate about helping newcomers,
              families, and investors navigate the Nova Scotia market with
              confidence.
            </p>
            <div className="prose-callout">
              “My role is to bring clarity to a meaningful decision, then stay
              beside you until the opportunity becomes a result.”
            </div>
            <p>
              Whether you are purchasing your first home in Canada, relocating
              your family, selling a property, acquiring an income-producing
              asset, expanding a commercial portfolio, or exploring development
              land, Pavneet provides local expertise, candid advice, and
              personalized service at every step.
            </p>
          </div>
        </div>

        <div className="shell personal-credentials" aria-label="Pavneet Singh expertise and community profile">
          <article>
            <p className="eyebrow">A wider advisory lens</p>
            <h2>Finance, construction, and real estate in one conversation.</h2>
            <p>
              Pavneet&apos;s background across finance and construction supports a
              practical understanding of homes, multi-unit investments,
              commercial property, land development, and permit-led projects.
              The goal is always to connect the property decision to its wider
              financial, operational, and long-term context.
            </p>
          </article>
          <article>
            <p className="eyebrow">Communication and community</p>
            <h2>Local service with an international perspective.</h2>
            <p>
              Pavneet works with clients from diverse backgrounds and can
              communicate across English, Punjabi, Hindi, Urdu, Gujarati, and
              Spanish. His community involvement includes relationships with
              the Maritime Sikh Society, Khalsa Aid Canada, Nova Noble Cause
              Society, and the Sikh Motorcycle Club of Nova Scotia.
            </p>
          </article>
        </div>

        <div className="shell award-row" aria-label="Professional recognition">
          <div>
            <strong>100+</strong>
            <span>Units represented</span>
          </div>
          <div>
            <strong>Top 25</strong>
            <span>RE/MAX Nova · 2023</span>
          </div>
          <div>
            <strong>Good Deeds</strong>
            <span>RE/MAX Nova · 2024</span>
          </div>
          <div>
            <strong>Gratitude</strong>
            <span>Nova Noble Cause Society</span>
          </div>
        </div>
      </section>

      <section className="community-proof">
        <div className="community-proof-copy">
          <p className="eyebrow">Community in action</p>
          <h2>Local relationships, lived and not just listed.</h2>
          <p>
            Pavneet&apos;s connection to Nova Scotia extends beyond property.
            Community service, local partnerships, and showing up for people
            are part of the same long-term approach he brings to every client
            relationship.
          </p>
        </div>
        <div className="community-proof-gallery">
          <figure>
            <img
              src="/images/pavneet-community-leadership.jpg"
              alt="Pavneet Singh at a Canadian community leadership event"
            />
            <figcaption>Community leadership</figcaption>
          </figure>
          <figure>
            <img
              src="/images/pavneet-community.jpg"
              alt="Pavneet Singh supporting a local Nova Scotia community initiative"
            />
            <figcaption>Showing up locally</figcaption>
          </figure>
        </div>
      </section>

      <section className="about-feature section-dark">
        <div className="about-feature-image">
          <img src="/images/pavneet-quote.jpg" alt="Pavneet Singh, Nova Scotia real estate advisor" />
        </div>
        <div className="about-feature-copy">
          <p className="eyebrow light">Creating opportunities for generations</p>
          <h2>Advice that looks beyond closing day.</h2>
          <p>
            Some of the most rewarding moments come from seeing clients reach
            milestones they once thought were years away: owning a first home,
            acquiring a rental property, creating passive income, or reaching a
            financial goal that brings greater peace of mind.
          </p>
          <p>
            Real estate can change lives when approached with the right strategy
            and guidance. Pavneet&apos;s commitment is to become the long-term
            advisor clients can return to as their goals evolve.
          </p>
          <Link className="button button-gold" href="/contact">
            Discuss your goals <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="page-cta">
        <div className="shell">
          <p className="eyebrow">Serving all of Nova Scotia</p>
          <h2>A trusted advisor for your next chapter.</h2>
          <p>
            Start with an honest conversation about your goals, timeline, and
            the opportunities ahead.
          </p>
          <Link className="button button-ink" href="/contact">
            Connect with Pavneet <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
