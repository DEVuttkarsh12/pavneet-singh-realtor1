"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Property } from "../data/properties";

type Props = {
  properties: Property[];
};

function availabilityLabel(value: Property["availability"]) {
  if (value === "conditional") return "Conditional";
  if (value === "sold") return "Recently sold";
  return "Available";
}

function propertyTypeLabel(value: Property["propertyType"]) {
  if (value === "land") return "Land and development";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function PropertyMarketplace({ properties }: Props) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [availability, setAvailability] = useState("available");

  const visibleProperties = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return properties.filter((property) => {
      const matchesQuery = !normalizedQuery || [
        property.title,
        property.address,
        property.community,
        property.mlsNumber,
      ].some((value) => value?.toLowerCase().includes(normalizedQuery));
      const matchesType = type === "all" || property.propertyType === type;
      const matchesAvailability = availability === "all" || property.availability === availability;
      return matchesQuery && matchesType && matchesAvailability;
    });
  }, [availability, properties, query, type]);

  const filtersApplied = query || type !== "all" || availability !== "available";

  function resetFilters() {
    setQuery("");
    setType("all");
    setAvailability("available");
  }

  return (
    <section className="marketplace-browser" aria-labelledby="marketplace-heading">
      <div className="shell marketplace-toolbar">
        <label className="market-search">
          <span>Search the market</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="City, community, address, or MLS®"
          />
        </label>
        <label>
          <span>Property type</span>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="all">All property types</option>
            <option value="residential">Residential</option>
            <option value="investment">Investment</option>
            <option value="commercial">Commercial</option>
            <option value="land">Land and development</option>
          </select>
        </label>
        <label>
          <span>Availability</span>
          <select value={availability} onChange={(event) => setAvailability(event.target.value)}>
            <option value="available">Available now</option>
            <option value="conditional">Conditional</option>
            <option value="sold">Recently sold</option>
            <option value="all">All statuses</option>
          </select>
        </label>
      </div>

      <div className="shell market-reference-note">
        <div>
          <p className="eyebrow">Demonstration marketplace</p>
          <p>
            These Nova Scotia properties are public reference listings used to
            preview the future marketplace. They are not represented here as
            Pavneet Singh listings.
          </p>
        </div>
        <span>Details checked Aug 17, 2026</span>
      </div>

      <div className="shell market-results-head">
        <div>
          <p className="eyebrow" id="marketplace-heading">Browse Nova Scotia opportunities</p>
          <p className="market-result-count">
            <strong>{visibleProperties.length}</strong>
            {visibleProperties.length === 1 ? " property" : " properties"}
          </p>
        </div>
        {filtersApplied ? (
          <button type="button" className="market-reset" onClick={resetFilters}>
            Reset filters
          </button>
        ) : (
          <span className="market-status"><i /> Current public references</span>
        )}
      </div>

      {visibleProperties.length ? (
        <div className="shell property-grid">
          {visibleProperties.map((property, index) => (
            <article className="property-card" key={property.id}>
              <Link className="property-card-link" href={`/properties/${property.id}`}>
                <div className="property-card-image">
                  <img
                    src={property.image}
                    alt={`${property.imageNote ?? "Property"} for ${property.title}`}
                  />
                  <span className="property-badge">
                    Reference · {availabilityLabel(property.availability)}
                  </span>
                  <span className="property-card-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {property.imageNote ? (
                    <span className="property-image-note">{property.imageNote}</span>
                  ) : null}
                </div>

                <div className="property-card-copy">
                  <div className="property-card-meta">
                    <p>{property.community}</p>
                    {property.mlsNumber ? <span>MLS® {property.mlsNumber}</span> : null}
                  </div>
                  <h2>{property.title}</h2>
                  <address>{property.address}</address>

                  <div className="property-card-price-row">
                    <strong className="property-price">
                      {property.price ? `$${property.price.toLocaleString("en-CA")}` : "Price on request"}
                    </strong>
                    <span>{propertyTypeLabel(property.propertyType)}</span>
                  </div>

                  <div className="property-card-specs" aria-label="Key property details">
                    {property.bedrooms ? <span><b>{property.bedrooms}</b> Beds</span> : null}
                    {property.bathrooms ? <span><b>{property.bathrooms}</b> Baths</span> : null}
                    {property.area ? <span><b>{property.area}</b></span> : null}
                  </div>

                  <ul className="property-card-highlights" aria-label="Property highlights">
                    {property.highlights.slice(0, 2).map((highlight) => (
                      <li key={`${property.id}-${highlight}`}>{highlight}</li>
                    ))}
                  </ul>

                  <span className="property-card-view">
                    View full property <i aria-hidden="true">↗</i>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="shell marketplace-empty">
          <div className="marketplace-empty-visual" aria-hidden="true">
            <img src="/images/home-exterior.jpg" alt="" />
            <span>01</span>
          </div>
          <div className="marketplace-empty-copy">
            <p className="eyebrow">No matches in this view</p>
            <h2>A tailored search can go beyond the public collection.</h2>
            <p>
              Reset the filters or share your criteria and Pavneet can begin a
              more focused property search personally.
            </p>
            <div className="button-row">
              <button type="button" className="button button-ink" onClick={resetFilters}>
                Reset the collection <span aria-hidden="true">↗</span>
              </button>
              <Link className="text-link" href="/contact">Share your property brief</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
