import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Terms of Service | Pavneet Singh Real Estate",
  description: "Terms of Service for Pavneet Singh Real Estate Advisory website and services.",
};

export default function TermsPage() {
  return (
    <main className="page-shell">
      <Header />
      <section className="page-hero">
        <div className="page-hero-content shell">
          <p className="eyebrow light">Legal &amp; Governance</p>
          <h1>Terms of Service</h1>
          <p className="lead">
            Terms and conditions governing your use of this website and real estate advisory communications.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="shell content-grid">
          <div className="prose">
            <h2>1. Advisory &amp; Representation</h2>
            <p>
              The content provided on this website is for general informational purposes and does not constitute a formal agency relationship or binding legal advice. A formal real estate representation relationship is established only upon signing an official Nova Scotia Real Estate Commission (NSREC) Buyer Representation Agreement or Listing Agreement.
            </p>

            <h2>2. CREA &amp; MLS® Trademarks</h2>
            <p>
              The terms REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. MLS®, Multiple Listing Service®, and the associated logos are trademarks owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA.
            </p>

            <h2>3. Property Data &amp; Accuracy</h2>
            <p>
              Property listing information displayed on this site is obtained from sources believed to be reliable, including the Nova Scotia Association of REALTORS® (NSAR) MLS® system. However, property details, prices, availability, measurements, and taxes are subject to change and should be independently verified.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All original content, text, guides, community profiles, and design elements on this site are the property of Pavneet Singh Real Estate Advisory and are protected by Canadian copyright law.
            </p>

            <h2>5. Questions &amp; Inquiries</h2>
            <p>
              If you have any questions about these Terms of Service, please reach out to Pavneet Singh at <a href="mailto:realtorpavneetsingh@gmail.com">realtorpavneetsingh@gmail.com</a>.
            </p>
          </div>

          <aside className="sidebar">
            <div className="info-callout">
              <h4>Questions?</h4>
              <p>Contact Pavneet Singh for clarification on real estate representation or market details.</p>
              <Link className="button button-gold" style={{ marginTop: '16px' }} href="/contact">
                Contact Pavneet <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
