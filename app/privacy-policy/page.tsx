import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | Pavneet Singh Real Estate",
  description: "Privacy Policy for Pavneet Singh Real Estate Advisory services in Nova Scotia. Learn how we handle and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <Header />
      <section className="page-hero">
        <div className="page-hero-content shell">
          <p className="eyebrow light">Legal &amp; Privacy</p>
          <h1>Privacy Policy</h1>
          <p className="lead">
            Your trust is the foundation of our advisory relationship. Learn how we handle, respect, and protect your personal information.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="shell content-grid">
          <div className="prose">
            <h2>1. Information We Collect</h2>
            <p>
              When you interact with Pavneet Singh Real Estate Advisory (via contact forms, phone calls, or consultation requests), we collect personal information you voluntarily provide, such as your full name, email address, phone number, real estate goals, and property preferences.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              Your information is used strictly to provide real estate advisory services, prepare Comparative Market Analyses (CMAs), answer your inquiries, send property shortlists, and facilitate transactions in accordance with Nova Scotia Real Estate Commission (NSREC) regulations and Canadian Real Estate Association (CREA) standards.
            </p>

            <h2>3. Protection &amp; Confidentiality</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. Information may only be shared with licensed transaction partners (such as legal counsel, mortgage brokers, home inspectors, or co-operating brokerages) with your knowledge and consent for the purpose of completing your real estate transaction.
            </p>

            <h2>4. PIPEDA Compliance</h2>
            <p>
              We comply with Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA). You have the right to request access to the personal information we hold about you or request corrections at any time.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy or your personal data, please contact Pavneet Singh directly at <a href="mailto:realtorpavneetsingh@gmail.com">realtorpavneetsingh@gmail.com</a> or call <a href="tel:+19028099399">902 809 9399</a>.
            </p>
          </div>

          <aside className="sidebar">
            <div className="info-callout">
              <h4>Direct Contact</h4>
              <p>Sutton Group Professional Realty<br />3845 Joseph Howe Drive, Suite 100<br />Halifax, NS B3L 4H9</p>
              <Link className="button button-gold" style={{ marginTop: '16px' }} href="/contact">
                Get in touch <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
