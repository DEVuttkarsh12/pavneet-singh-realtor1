"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Properties", "/properties"],
  ["About", "/about"],
  ["Advisory", "/services"],
  ["Guides", "/guides"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const update = () => setScrolled(window.scrollY > 34);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isHome]);

  return (
    <header
      className={`site-header${isHome ? " home-header" : ""}${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}
    >
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Pavneet Singh Realty home">
          <span className="brand-logo" aria-hidden="true">
            <img src="/images/pavneet-brand-logo.jpg" alt="" />
          </span>
          <span className="brand-text">
            <strong>Pavneet Singh</strong>
            <small>Real Estate Advisor</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>

        <nav id="site-navigation" className={open ? "site-nav is-open" : "site-nav"}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
