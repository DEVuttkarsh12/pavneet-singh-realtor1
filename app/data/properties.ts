export type PropertyAvailability = "available" | "conditional" | "sold";

export type Property = {
  id: string;
  crmId?: string;
  mlsNumber?: string;
  title: string;
  address: string;
  community: string;
  propertyType: "residential" | "investment" | "commercial" | "land";
  availability: PropertyAvailability;
  price: number | null;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  image: string;
  imageNote?: string;
  summary: string;
  description: string[];
  amenities: string[];
  locationHighlights: string[];
  gallery: Array<{
    src: string;
    alt: string;
  }>;
  facts: Array<{
    label: string;
    value: string;
  }>;
  highlights: string[];
  sourceName: string;
  sourceUrl: string;
  sourceChecked: string;
  featured?: boolean;
};

// This collection is the single data boundary for the marketplace. The entries
// below are public reference listings for the design preview. They can later be
// replaced by normalized property records from the client's CRM feed.
export const properties: Property[] = [
  {
    id: "cambridge-street-halifax",
    mlsNumber: "202620228",
    title: "South End residence",
    address: "1777 Cambridge Street, Halifax, NS B3H 4A8",
    community: "South End · Halifax",
    propertyType: "residential",
    availability: "available",
    price: 1599000,
    bedrooms: 6,
    bathrooms: 3,
    area: "Approx. 3,600 sq ft",
    image: "/images/home-exterior.jpg",
    imageNote: "Representative image",
    summary:
      "A substantial South End residence with approximately 3,600 square feet and a flexible six-bedroom layout. It demonstrates how premium family homes can lead the future marketplace collection.",
    description: [
      "This substantial South End residence is presented as a reference opportunity for buyers seeking generous scale in one of Halifax's most established residential settings. Its approximately 3,600 square feet and six-bedroom plan create flexibility for family living, work-from-home space, and long-term ownership needs.",
      "The marketplace profile brings the essential decision points together in one place, while the original public source remains available for independent verification and the latest listing information.",
    ],
    amenities: [
      "Six-bedroom flexible floor plan",
      "Three-bathroom configuration",
      "Approximately 3,600 square feet",
      "Large-format family residence",
    ],
    locationHighlights: [
      "Established South End Halifax setting",
      "Convenient access to the Halifax urban core",
      "Positioned for long-term residential ownership",
    ],
    gallery: [
      { src: "/images/home-exterior.jpg", alt: "Representative exterior of a refined Nova Scotia residence" },
      { src: "/images/interior-kitchen.jpg", alt: "Representative contemporary residential interior" },
      { src: "/images/halifax-aerial.jpg", alt: "Aerial view of Halifax and its waterfront" },
    ],
    facts: [
      { label: "Home profile", value: "Residential residence" },
      { label: "Interior scale", value: "Approx. 3,600 sq ft" },
      { label: "Bedroom plan", value: "6 bedrooms" },
      { label: "Bathroom plan", value: "3 bathrooms" },
    ],
    highlights: [
      "Large-format family residence",
      "Established South End setting",
      "Flexible multi-bedroom configuration",
    ],
    sourceName: "Royal LePage",
    sourceUrl:
      "https://www.royallepage.ca/en/property/nova-scotia/halifax/1777-cambridge-street/28942120/mls202620228/",
    sourceChecked: "Aug 17, 2026",
    featured: true,
  },
  {
    id: "south-park-street-halifax",
    mlsNumber: "202620661",
    title: "The Trillium city residence",
    address: "1204 1445 South Park Street, Halifax, NS B3J 0B6",
    community: "Downtown · Halifax",
    propertyType: "residential",
    availability: "available",
    price: 579900,
    bedrooms: 1,
    bathrooms: 1,
    area: "Approx. 888 sq ft",
    image: "/images/interior-kitchen.jpg",
    imageNote: "Representative image",
    summary:
      "A one-bedroom residence at The Trillium with approximately 888 square feet. The listing represents the kind of well-positioned urban condominium suited to buyers prioritizing walkability and downtown access.",
    description: [
      "A well-positioned one-bedroom residence at The Trillium, presented for buyers comparing an efficient downtown lifestyle with the convenience of a central Halifax address. The approximately 888-square-foot plan offers a more generous footprint than many compact city residences.",
      "This reference profile is designed to make the opportunity easy to assess at a glance before moving into source verification, showing arrangements, and a complete purchase review.",
    ],
    amenities: [
      "One-bedroom city residence",
      "Approximately 888 square feet",
      "Condominium ownership format",
      "Central urban positioning",
    ],
    locationHighlights: [
      "Downtown Halifax address",
      "Close to Spring Garden Road",
      "Walkable access to central amenities and services",
    ],
    gallery: [
      { src: "/images/interior-kitchen.jpg", alt: "Representative modern condominium kitchen" },
      { src: "/images/halifax-aerial.jpg", alt: "Aerial view of downtown Halifax" },
      { src: "/images/home-exterior.jpg", alt: "Representative premium residential exterior" },
    ],
    facts: [
      { label: "Residence", value: "The Trillium" },
      { label: "Property style", value: "Condominium" },
      { label: "Interior scale", value: "Approx. 888 sq ft" },
      { label: "Configuration", value: "1 bed · 1 bath" },
    ],
    highlights: [
      "Downtown Halifax address",
      "Close to Spring Garden Road",
      "Efficient city-living format",
    ],
    sourceName: "Royal LePage",
    sourceUrl:
      "https://www.royallepage.ca/en/property/nova-scotia/halifax/1204-1445-south-park-street/28978438/mls202620661/",
    sourceChecked: "Aug 17, 2026",
  },
  {
    id: "anchor-drive-halifax",
    mlsNumber: "202620500",
    title: "Waterfront district townhouse",
    address: "125 Anchor Drive, Halifax, NS",
    community: "Halifax · Nova Scotia",
    propertyType: "residential",
    availability: "available",
    price: 949900,
    bedrooms: 3,
    bathrooms: 4,
    image: "/images/nova-scotia-coast.webp",
    imageNote: "Representative image",
    summary:
      "A three-bedroom townhouse reference with four bathrooms and a distinctly urban residential profile. It broadens the collection for buyers comparing space, privacy, and a townhouse-style way of living.",
    description: [
      "This three-bedroom townhouse reference combines a private residential format with four bathrooms and an urban Halifax address. It is positioned for buyers who want more separation and flexibility than a conventional condominium while maintaining access to the city.",
      "The profile focuses on the practical elements that shape a townhouse decision: bedroom plan, bathroom capacity, ownership style, location, and fit with the buyer's longer-term plans.",
    ],
    amenities: [
      "Three-bedroom configuration",
      "Four-bathroom flexibility",
      "Townhouse residential format",
      "Multi-level living potential",
    ],
    locationHighlights: [
      "Halifax, Nova Scotia address",
      "Urban residential positioning",
      "Suitable for buyers prioritizing space and privacy",
    ],
    gallery: [
      { src: "/images/nova-scotia-coast.webp", alt: "Representative Nova Scotia coastal setting" },
      { src: "/images/home-exterior.jpg", alt: "Representative townhouse-style residential exterior" },
      { src: "/images/interior-kitchen.jpg", alt: "Representative contemporary home interior" },
    ],
    facts: [
      { label: "Property style", value: "Townhouse" },
      { label: "Bedroom plan", value: "3 bedrooms" },
      { label: "Bathroom plan", value: "4 bathrooms" },
      { label: "Market", value: "Halifax, Nova Scotia" },
    ],
    highlights: [
      "Townhouse residential format",
      "Three-bedroom configuration",
      "Four-bathroom flexibility",
    ],
    sourceName: "Royal LePage",
    sourceUrl:
      "https://www.royallepage.ca/en/property/nova-scotia/halifax/125-anchor-drive/28965206/mls202620500/",
    sourceChecked: "Aug 17, 2026",
  },
  {
    id: "mcquade-lake-crescent-halifax",
    mlsNumber: "202610239",
    title: "Bayers Lake office opportunity",
    address: "46 McQuade Lake Crescent, Halifax, NS B3S 1G8",
    community: "Bayers Lake · Halifax",
    propertyType: "commercial",
    availability: "available",
    price: 999900,
    area: "Approx. 2,900 sq ft",
    image: "/images/commercial.jpg",
    imageNote: "Representative image",
    summary:
      "A well-maintained office building positioned for an owner-occupier or commercial investor. The listing pairs a practical Bayers Lake location with flexible industrial-commercial zoning and substantial on-site parking.",
    description: [
      "A bright, well-maintained office opportunity in Bayers Lake Business Park, presented for an owner-occupier or commercial investor. The public listing describes approximately 2,900 square feet across a single-storey office building with basement space on a 12,772-square-foot lot.",
      "The property combines a reception area, multiple offices, washrooms, storage, and paved parking with I-3 General Industrial zoning. Its proximity to Highway 102 and Highway 103 supports practical access for staff, clients, and operations.",
    ],
    amenities: [
      "Seven main-floor offices",
      "Five basement offices plus storage",
      "Sixteen paved parking spaces",
      "Reception area and multiple washrooms",
    ],
    locationHighlights: [
      "Bayers Lake Business Park",
      "Quick access to Highways 102 and 103",
      "Close to major retail and the QEII outpatient centre",
    ],
    gallery: [
      { src: "/images/commercial.jpg", alt: "Representative modern commercial office building" },
      { src: "/images/industrial.jpg", alt: "Representative industrial and commercial district" },
      { src: "/images/development.jpg", alt: "Representative Nova Scotia development setting" },
    ],
    facts: [
      { label: "Property style", value: "Freehold office" },
      { label: "Built", value: "2003" },
      { label: "Floor area", value: "Approx. 2,900 sq ft" },
      { label: "Site area", value: "12,772 sq ft" },
    ],
    highlights: [
      "I-3 General Industrial zoning",
      "Sixteen paved parking spaces",
      "Seven main-floor offices plus five below",
    ],
    sourceName: "Royal LePage",
    sourceUrl:
      "https://www.royallepage.ca/en/property/nova-scotia/halifax/46-mcquade-lake-crescent/28043897/mls202610239/",
    sourceChecked: "Aug 17, 2026",
  },
  {
    id: "parker-street-halifax",
    mlsNumber: "202613747",
    title: "Peninsula development parcel",
    address: "2057 Parker Street, Halifax Peninsula, NS B3K 4T6",
    community: "Halifax Peninsula · Nova Scotia",
    propertyType: "land",
    availability: "available",
    price: 1198000,
    area: "Under 0.5 acre",
    image: "/images/development.jpg",
    imageNote: "Representative image",
    summary:
      "A compact Halifax Peninsula development parcel presented for buyers evaluating density and urban infill potential. Public listing details indicate CEN-2 zoning, municipal services, and significant stated development parameters.",
    description: [
      "A compact Halifax Peninsula land reference for developers and investors evaluating urban infill potential. Public listing information identifies CEN-2 zoning, municipal services, a stated floor-area ratio of 6, and development parameters that merit a complete planning and feasibility review.",
      "The opportunity is presented as an early-stage development profile. Buyers should independently confirm zoning, permitted density, servicing, environmental matters, approvals, and all financial assumptions before proceeding.",
    ],
    amenities: [
      "CEN-2 zoning reported by source",
      "Municipal water and sewer",
      "Approximate 0.09-acre site",
      "Urban infill development profile",
    ],
    locationHighlights: [
      "Halifax Peninsula location",
      "Central urban development context",
      "Public source reports existing rental income",
    ],
    gallery: [
      { src: "/images/development.jpg", alt: "Representative urban development parcel" },
      { src: "/images/halifax-aerial.jpg", alt: "Aerial view of the Halifax Peninsula" },
      { src: "/images/industrial.jpg", alt: "Representative Nova Scotia development context" },
    ],
    facts: [
      { label: "Property style", value: "Unimproved land" },
      { label: "Site area", value: "Approx. 0.09 acre" },
      { label: "Zoning", value: "CEN-2" },
      { label: "Density", value: "FAR 6" },
    ],
    highlights: [
      "Up to 90 m stated maximum height",
      "Municipal water and sewer",
      "Existing rental income reported by source",
    ],
    sourceName: "Royal LePage",
    sourceUrl:
      "https://www.royallepage.ca/en/property/nova-scotia/halifax-peninsula/2057-parker-street/28363565/mls202613747/",
    sourceChecked: "Aug 17, 2026",
  },
  {
    id: "spring-garden-road-halifax",
    mlsNumber: "202615742",
    title: "Embassy Towers investment reference",
    address: "711 5959 Spring Garden Road, Halifax, NS B3H 1Y5",
    community: "Spring Garden · Halifax",
    propertyType: "investment",
    availability: "available",
    price: 399000,
    bedrooms: 3,
    bathrooms: 2,
    area: "Approx. 1,306 sq ft",
    image: "/images/halifax-aerial.jpg",
    imageNote: "Representative image",
    summary:
      "A furnished three-bedroom condominium in Embassy Towers, positioned as an accessible downtown investment reference. Its scale, central address, and building amenities illustrate a practical student, family, or rental-oriented opportunity.",
    description: [
      "A furnished three-bedroom condominium reference in Embassy Towers with approximately 1,306 square feet. The combination of a central Spring Garden Road address, generous bedroom plan, and established building amenities creates a practical profile for buyers considering personal occupancy or an income-oriented strategy.",
      "As with every investment purchase, operating costs, condominium documents, rental assumptions, financing, and suitability should be reviewed carefully against the buyer's objectives before any decision is made.",
    ],
    amenities: [
      "Twenty-four-hour concierge",
      "Outdoor pool and rooftop terrace",
      "Screened balcony",
      "Generous in-suite storage",
    ],
    locationHighlights: [
      "Spring Garden Road address",
      "Central access to downtown Halifax",
      "Well positioned for urban living and rental demand",
    ],
    gallery: [
      { src: "/images/halifax-aerial.jpg", alt: "Aerial view of downtown Halifax" },
      { src: "/images/interior-kitchen.jpg", alt: "Representative furnished condominium interior" },
      { src: "/images/nova-scotia-coast.webp", alt: "Representative view of Nova Scotia's urban waterfront setting" },
    ],
    facts: [
      { label: "Property style", value: "Condominium apartment" },
      { label: "Built", value: "1967" },
      { label: "Interior scale", value: "Approx. 1,306 sq ft" },
      { label: "Offering", value: "Fully furnished" },
    ],
    highlights: [
      "Twenty-four-hour concierge",
      "Outdoor pool and rooftop terrace",
      "Screened balcony and generous storage",
    ],
    sourceName: "Royal LePage Investors Edge",
    sourceUrl:
      "https://www.royallepage.ca/en/investorsedge/property/nova-scotia/halifax/711-5959-spring-garden-road/28539969/mls202615742/",
    sourceChecked: "Aug 17, 2026",
  },
];
