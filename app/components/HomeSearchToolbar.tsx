"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

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
    <form className="shell home-search-toolbar" onSubmit={handleSubmit} aria-label="Search Nova Scotia properties">
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
  );
}
