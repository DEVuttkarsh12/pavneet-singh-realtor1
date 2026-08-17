import Link from "next/link";

export function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-logo" aria-hidden="true">
              <img src="/images/pavneet-brand-logo.jpg" alt="" />
            </span>
            <span className="brand-text">
              <strong>Pavneet Singh</strong>
              <small>Real Estate Advisor</small>
            </span>
          </Link>
          <p className="footer-note">
            Proudly serving families, newcomers, investors, entrepreneurs, and
            developers across Nova Scotia.
          </p>
        </div>
        <div className="footer-links">
          <p>Explore</p>
          <Link href="/properties">Property marketplace</Link>
          <Link href="/about">About Pavneet</Link>
          <Link href="/services">Advisory services</Link>
          <Link href="/guides">Buyer and seller guides</Link>
        </div>
        <div className="footer-links">
          <p>Connect</p>
          <a href="tel:+19028099399">902 809 9399</a>
          <a href="mailto:realtorpavneetsingh@gmail.com">Email Pavneet</a>
          <a href="https://wa.me/19028099399" target="_blank" rel="noreferrer">WhatsApp</a>
          <Link href="/contact">Request a consultation</Link>
        </div>
        <div className="footer-address">
          <p>Sutton Group Professional Realty</p>
          <address>
            3845 Joseph Howe Drive, Suite 100<br />
            Halifax, Nova Scotia B3L 4H9
          </address>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Pavneet Singh. All rights reserved.</span>
        <span>REALTOR® · Serving all of Nova Scotia</span>
      </div>
    </footer>
    <a
      className="whatsapp-float"
      href="https://wa.me/19028099399?text=Hi%20Pavneet%2C%20I%27d%20like%20to%20discuss%20a%20Nova%20Scotia%20real%20estate%20opportunity."
      target="_blank"
      rel="noreferrer"
      aria-label="Message Pavneet on WhatsApp"
    >
      <span>WA</span>
    </a>
    </>
  );
}
