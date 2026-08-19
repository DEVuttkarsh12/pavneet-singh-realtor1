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
    >
      <>
        <div className="guide-deep-section">
          <h3>Top renovations with the highest return in Nova Scotia</h3>
          <p>Not every renovation adds value. Focus your pre-listing budget on improvements that Nova Scotia buyers consistently reward.</p>
          <table className="info-table">
            <thead>
              <tr>
                <th>Renovation</th>
                <th>Typical cost</th>
                <th>Expected ROI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fresh interior paint (neutral tones)</td>
                <td>$2,000 – $5,000</td>
                <td>150 – 300%</td>
              </tr>
              <tr>
                <td>Ductless heat pump installation</td>
                <td>$3,500 – $5,500</td>
                <td>100 – 200%</td>
              </tr>
              <tr>
                <td>Kitchen cabinet refresh and hardware</td>
                <td>$3,000 – $8,000</td>
                <td>75 – 150%</td>
              </tr>
              <tr>
                <td>Bathroom fixture and tile update</td>
                <td>$2,500 – $6,000</td>
                <td>70 – 120%</td>
              </tr>
              <tr>
                <td>Exterior curb appeal (landscaping, front entry)</td>
                <td>$1,500 – $4,000</td>
                <td>100 – 200%</td>
              </tr>
            </tbody>
          </table>
          <p className="info-table-note">ROI estimates are based on Nova Scotia market conditions. Pavneet provides tailored advice on which improvements will have the greatest impact on your specific property.</p>
        </div>

        <div className="guide-deep-section">
          <h3>Understanding your seller net proceeds</h3>
          <p>Before listing, it helps to understand the costs that will be deducted from your sale price. Here is a typical breakdown for Nova Scotia home sellers.</p>
          <table className="info-table">
            <thead>
              <tr>
                <th>Cost item</th>
                <th>Typical range</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Real estate commission</td>
                <td>4 – 5% of sale price</td>
                <td>Negotiable. Covers both listing and cooperating brokerage fees.</td>
              </tr>
              <tr>
                <td>HST on commission</td>
                <td>15% of commission</td>
                <td>Nova Scotia Harmonized Sales Tax applies to real estate commissions.</td>
              </tr>
              <tr>
                <td>Legal fees (seller)</td>
                <td>$800 – $1,200</td>
                <td>Includes mortgage discharge, deed preparation, and registration.</td>
              </tr>
              <tr>
                <td>Mortgage discharge penalty</td>
                <td>Varies</td>
                <td>If breaking a fixed-rate mortgage early, a prepayment penalty may apply.</td>
              </tr>
              <tr>
                <td>Fuel oil / propane adjustment</td>
                <td>Varies</td>
                <td>Buyer typically reimburses seller for remaining heating fuel at closing.</td>
              </tr>
            </tbody>
          </table>
          <p className="info-table-note">Pavneet prepares a detailed estimated net proceeds summary before your listing goes live so there are no surprises at closing.</p>
        </div>

        <div className="guide-deep-section">
          <h3>Navigating multiple offers</h3>
          <p>In a competitive Halifax market, multiple-offer situations require clear strategy. Here is how Pavneet positions your listing for the strongest possible outcome.</p>
          <div className="info-callout">
            <h4>Offer presentation date strategy</h4>
            <p>Setting a specific date to review offers creates urgency and allows time for maximum buyer exposure. This approach is most effective in high-demand neighbourhoods and price ranges where inventory is limited.</p>
          </div>
          <div className="info-callout">
            <h4>Evaluating beyond the headline price</h4>
            <p>The strongest offer considers financing certainty, deposit size, condition timelines, closing date flexibility, and buyer qualification strength. A slightly lower offer with fewer conditions and a pre-approved buyer may be more reliable than the highest dollar figure.</p>
          </div>
          <div className="info-callout">
            <h4>Counter-offer and negotiation tactics</h4>
            <p>Pavneet advises on when to accept, counter, or request best-and-final offers based on the specific dynamics of your listing, the buyer pool, and current market velocity in your area.</p>
          </div>
        </div>
      </>
    </GuidePage>
  );
}
