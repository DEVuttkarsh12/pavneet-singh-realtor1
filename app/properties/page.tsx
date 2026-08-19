import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PropertyMarketplace } from "../components/PropertyMarketplace";
import { properties } from "../data/properties";

export const metadata: Metadata = {
  title: "Nova Scotia Property Marketplace",
  description:
    "Preview a Nova Scotia property marketplace featuring clearly labelled public reference listings across residential, investment, commercial, and land categories.",
};

export default function PropertiesPage() {
  return (
    <main className="page-shell properties-page">
      <Header />
      <section className="marketplace-hero">
        <div className="marketplace-hero-image" aria-hidden="true">
          <img src="/images/development.jpg" alt="" />
        </div>
        <div className="marketplace-hero-shade" />
        <div className="shell marketplace-hero-content">
          <p className="eyebrow light">Properties · Nova Scotia</p>
          <h1>Find the opportunity that fits what comes next.</h1>
          <p>
            Explore a design preview built around current public reference listings
            for homes, income properties, commercial assets, and development land
            across Nova Scotia.
          </p>
          <div className="marketplace-hero-meta" aria-label="Marketplace categories">
            <span>Residential</span>
            <span>Investment</span>
            <span>Commercial</span>
            <span>Land</span>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="shell" style={{ padding: "40px 0" }}>Loading marketplace...</div>}>
        <PropertyMarketplace properties={properties} />
      </Suspense>

      <section className="marketplace-service-note">
        <div className="shell">
          <p className="eyebrow light">Beyond the public market</p>
          <h2>The right opportunity does not always begin with a listing.</h2>
          <p>
            Pavneet works across residential, investment, commercial, industrial,
            and development real estate. A direct conversation can uncover the
            clearest next step before a public listing is available.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
