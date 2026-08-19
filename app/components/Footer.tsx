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
          <Link href="/buying-guide">Home buying guide</Link>
          <Link href="/selling-guide">Home selling guide</Link>
          <Link href="/neighbourhoods">Neighbourhood guides</Link>
        </div>
        <div className="footer-links">
          <p>Connect</p>
          <a href="tel:+19028099399">902 809 9399</a>
          <a href="mailto:realtorpavneetsingh@gmail.com">Email Pavneet</a>
          <a href="https://wa.me/19028099399" target="_blank" rel="noreferrer">WhatsApp</a>
          <div className="footer-social">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
          </div>
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
        <div className="footer-disclaimer">
          The term REALTOR® is a registered trademark of the Canadian Real Estate Association (CREA) and identifies real estate professionals who are members of CREA. MLS®, Multiple Listing Service®, and the associated logos are trademarks owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA. The information contained on this site is based in whole or in part on information provided by the Nova Scotia Association of REALTORS® (NSAR) and is believed to be reliable but is not guaranteed.
        </div>
        <div className="footer-legal-links">
          <a href="/privacy-policy">Privacy policy</a>
          <a href="/terms">Terms of service</a>
        </div>
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
