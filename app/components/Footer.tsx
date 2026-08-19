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
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
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
