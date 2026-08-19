"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  { id: "all", label: "All Properties" },
  { id: "residential", label: "Residential" },
  { id: "investment", label: "Investment" },
  { id: "commercial", label: "Commercial" },
  { id: "land", label: "Land & Development" },
];

export function HomeSearchToolbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [availability, setAvailability] = useState("available");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("query", query.trim());
    if (type !== "all") params.set("type", type);
    if (availability !== "available") params.set("availability", availability);

    const queryString = params.toString();
    router.push(queryString ? `/properties?${queryString}` : "/properties");
  }

  return (
    <div className="home-search-console" aria-label="Nova Scotia property search console">
      <div className="home-search-console-header">
        <div className="home-search-console-title">
          <p className="eyebrow light">Direct MLS® Search</p>
          <h3>Find properties across Nova Scotia</h3>
        </div>
        <div className="home-search-quick-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`home-search-tab${type === cat.id ? " is-active" : ""}`}
              onClick={() => setType(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <form className="home-search-toolbar" onSubmit={handleSubmit} role="search">
        <label className="market-search">
          <span>Search the market</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="City, community, address, or MLS®"
          />
        </label>
        <label>
          <span>Property type</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="all">All property types</option>
            <option value="residential">Residential</option>
            <option value="investment">Investment</option>
            <option value="commercial">Commercial</option>
            <option value="land">Land &amp; development</option>
          </select>
        </label>
        <label>
          <span>Availability</span>
          <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
            <option value="available">Available now</option>
            <option value="conditional">Conditional</option>
            <option value="sold">Recently sold</option>
            <option value="all">All statuses</option>
          </select>
        </label>
        <div className="home-search-action">
          <button type="submit" className="button button-gold home-search-button">
            Search Properties <span aria-hidden="true">↗</span>
          </button>
        </div>
      </form>
    </div>
  );
}
