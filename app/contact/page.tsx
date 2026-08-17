import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Contact Pavneet Singh",
  description: "Request a Nova Scotia real estate consultation with Pavneet Singh.",
};

export default function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <Header />
      <section className="contact-page-hero">
        <div className="contact-page-copy">
          <p className="eyebrow light">Best real estate advice</p>
          <h1>Let&apos;s build your legacy.</h1>
          <p>
            Your journey into Nova Scotia real estate begins with a
            conversation. Share where you are today and what you want your next
            move to accomplish.
          </p>
          <div className="contact-methods">
            <a href="tel:+19028099399">
              <span>Direct line</span>
              902 809 9399
            </a>
            <a href="mailto:realtorpavneetsingh@gmail.com">
              <span>Professional email</span>
              realtorpavneetsingh@gmail.com
            </a>
            <address>
              <span>Office</span>
              3845 Joseph Howe Drive, Suite 100<br />Halifax, NS B3L 4H9
            </address>
          </div>
        </div>
        <div className="contact-page-form">
          <ContactForm />
        </div>
      </section>

      <section className="section process contact-process">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Turning opportunities into results</p>
              <h2>A plan designed around your goals.</h2>
            </div>
            <p className="heading-note">
              Residential, commercial, industrial, and investment guidance for
              families, investors, entrepreneurs, and developers.
            </p>
          </div>
          <div className="process-list">
            <article>
              <span>01</span>
              <h3>Discover</h3>
              <p>We clarify what matters most: your goals, timeline, preferred areas, risk tolerance, and long-term objectives.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Strategize</h3>
              <p>Market insight, investment analysis, and local knowledge become a tailored plan for the opportunity ahead.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Execute</h3>
              <p>From negotiations and due diligence through closing day, Pavneet keeps every detail coordinated and moving.</p>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
