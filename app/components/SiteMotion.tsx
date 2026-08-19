"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".intro-grid > *",
  ".section-heading > *",
  ".service-card",
  ".brand-ribbon",
  ".portrait-frame",
  ".portrait-copy > *",
  ".lens-heading > *",
  ".lens-stage > *",
  ".proof-intro > *",
  ".proof-grid > *",
  ".process-list article",
  ".locations-image",
  ".locations-panel > *",
  ".guide-card",
  ".insight-card",
  ".marketplace-preview-image",
  ".marketplace-preview-copy > *",
  ".marketplace-hero-content > *",
  ".marketplace-toolbar > *",
  ".market-results-head > *",
  ".marketplace-empty > *",
  ".property-card",
  ".property-detail-heading > *",
  ".property-overview > *",
  ".property-detail-section",
  ".property-detail-columns > div",
  ".property-location-panel > *",
  ".property-source-panel > *",
  ".property-advisor-card",
  ".related-property-card",
  ".marketplace-service-note .shell > *",
  ".contact-grid > *",
  ".page-hero-content > *",
  ".content-grid > *",
  ".award-row > div",
  ".about-feature-image",
  ".about-feature-copy > *",
  ".community-proof-copy > *",
  ".community-proof-gallery > *",
  ".service-detail",
  ".service-trust-image",
  ".service-trust-copy > *",
  ".guide-nav",
  ".guide-step",
  ".combined-guide-track",
  ".personal-credentials > article",
  ".page-cta .shell > *",
  ".contact-page-copy > *",
  ".contact-page-form",
  ".footer-grid > *",
].join(",");

export function SiteMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));

    items.forEach((item, index) => {
      item.classList.add("motion-item");
      item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    document.body.classList.add("motion-enabled");

    if (reduced) {
      items.forEach((item) => item.classList.add("is-visible"));
      return () => document.body.classList.remove("motion-enabled");
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    items.forEach((item) => revealObserver.observe(item));

    let frame = 0;

    const updateMotion = () => {
      frame = 0;
      const progress = Math.min(1, window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      document.body.classList.remove("motion-enabled");
    };
  }, []);

  return (
    <>
      <div className="scroll-background" aria-hidden="true">
        <video className="scroll-background-video" autoPlay muted loop playsInline preload="auto">
          <source src="/videos/halifax-drone-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </>
  );
}
