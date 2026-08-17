import type { Metadata } from "next";
import { GuidePage } from "../components/GuidePage";

export const metadata: Metadata = {
  title: "Home Selling Guide",
  description: "A seven-step guide to preparing, marketing, negotiating, and selling a Nova Scotia property.",
};

const steps = [
  {
    title: "Understand your goals",
    body: "Every sale is different. We begin with your timeline, priorities, and next chapter so the selling strategy supports the outcome that matters most to you.",
    bullets: ["Maximize value", "Plan a timely sale", "Coordinate another purchase", "Prepare for relocation"],
  },
  {
    title: "Determine market value",
    body: "Pricing is one of the most important decisions in a successful sale. Pavneet uses local market data, recent comparable sales, and current conditions to establish a position that attracts qualified buyers while protecting your return.",
  },
  {
    title: "Prepare your property",
    body: "First impressions shape buyer interest and perceived value. Together, we will identify the improvements that matter and avoid spending on changes that will not meaningfully improve the outcome.",
    bullets: ["Decluttering and organization", "Minor repairs", "Staging recommendations", "Professional photography", "Exterior presentation"],
  },
  {
    title: "Launch your listing",
    body: "A successful sale requires more than placing a property online. Your home receives a coordinated marketing plan designed to build visibility and reach the right buyers.",
    bullets: ["Professional photography", "Online marketing", "Social promotion", "REALTOR® network exposure", "Direct buyer outreach"],
  },
  {
    title: "Review and negotiate offers",
    body: "The strongest offer is not always the one with the highest headline price. Pavneet helps you evaluate the complete proposal and negotiates the terms that support your goals.",
    bullets: ["Financing conditions", "Closing timeline", "Deposit amount", "Buyer qualifications", "Additional terms"],
  },
  {
    title: "Complete conditions",
    body: "After accepting an offer, the buyer may complete financing, inspections, and other conditions. Pavneet coordinates with all parties, keeps the process moving, and keeps you informed.",
  },
  {
    title: "Close with confidence",
    body: "On closing day, legal documents are finalized, ownership transfers, and the sale is completed, allowing you to move forward confidently into your next chapter.",
  },
];

export default function SellingGuide() {
  return (
    <GuidePage
      eyebrow="Nova Scotia home selling guide"
      title="Position your home for its best outcome."
      lead="A considered strategy for preparation, pricing, marketing, negotiation, and closing, designed around your goals."
      image="/images/home-exterior.jpg"
      imageAlt="A well-presented family home in a residential neighbourhood"
      steps={steps}
      ctaTitle="Planning a sale starts before the listing goes live."
      ctaText="Share your property, timeline, and priorities with Pavneet to understand its current market position and the clearest path forward."
    />
  );
}
