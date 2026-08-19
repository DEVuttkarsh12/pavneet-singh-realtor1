import type { Metadata } from "next";
import { GuidePage } from "../components/GuidePage";

export const metadata: Metadata = {
  title: "Home Buying Guide",
  description: "A seven-step guide to buying a home in Nova Scotia with confidence.",
};

const steps = [
  {
    title: "Define your goals",
    body: "Before beginning your search, take time to identify what you need now and what will still matter years from today. A clear brief narrows the search and keeps promising homes from distracting you from the right one.",
    bullets: ["Preferred location and community", "Property type", "Bedrooms and bathrooms", "Lifestyle needs", "Future plans", "Investment potential"],
  },
  {
    title: "Understand your budget",
    body: "A comfortable purchase budget includes more than the down payment. We will look at the complete cost of ownership so the home you choose supports your life instead of stretching it.",
    bullets: ["Closing costs", "Legal fees", "Home inspection", "Property taxes", "Moving expenses", "Utilities and maintenance"],
  },
  {
    title: "Get pre-approved",
    body: "A mortgage pre-approval gives you clarity on purchasing power and signals to sellers that you are prepared to move. It can also help you act decisively when the right opportunity appears.",
    bullets: ["Confirm maximum purchase price", "Review available rate options", "Improve negotiating position", "Streamline the offer process"],
  },
  {
    title: "Start your home search",
    body: "This is where the exciting part begins. Pavneet will identify properties aligned with your goals, arrange viewings, and bring local market context to each decision.",
    bullets: ["Property condition", "Neighbourhood trends", "Current market value", "Resale potential", "Investment upside"],
  },
  {
    title: "Make a competitive offer",
    body: "Once you find the right property, the offer should reflect both market conditions and your priorities. Pavneet will structure and negotiate it while protecting your interests throughout the process.",
    bullets: ["Purchase price", "Deposit amount", "Conditions", "Closing date", "Additional terms"],
  },
  {
    title: "Complete due diligence",
    body: "Before the purchase becomes firm, the necessary checks help you understand exactly what you are buying and reduce unwelcome surprises after closing.",
    bullets: ["Home inspection", "Financing approval", "Disclosure review", "Legal review"],
  },
  {
    title: "Close and make it yours",
    body: "Once every condition is satisfied, your lawyer finalizes the transfer of ownership. Funds are transferred, legal documents are completed, and the keys to your new home are released.",
    bullets: ["Final walk-through", "Funds and documents", "Ownership transfer", "Key release"],
  },
];

export default function BuyingGuide() {
  return (
    <GuidePage
      eyebrow="Nova Scotia home buying guide"
      title="A clearer path to homeownership."
      lead="From first priorities to closing day, understand the seven steps that turn a home search into a confident purchase."
      image="/images/interior-kitchen.jpg"
      imageAlt="A bright contemporary kitchen in a modern home"
      steps={steps}
      ctaTitle="Ready to find a home that fits your life?"
      ctaText="Whether you are a first-time buyer, relocating to Nova Scotia, or purchasing your next property, Pavneet will help you move forward with a clear plan."
    >
      <>
        <div className="guide-deep-section">
          <h3>Nova Scotia closing costs at a glance</h3>
          <p>Understanding the full cost of a home purchase helps you budget with confidence. Here are the typical closing costs in Nova Scotia.</p>
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
                <td>Deed transfer tax (HRM)</td>
                <td>1.5% of purchase price</td>
                <td>Halifax Regional Municipality rate. Other NS municipalities may vary.</td>
              </tr>
              <tr>
                <td>Non-resident deed transfer tax</td>
                <td>5% of purchase price</td>
                <td>Applies to buyers who are not Canadian citizens or permanent residents.</td>
              </tr>
              <tr>
                <td>Legal fees</td>
                <td>$1,200 – $1,800</td>
                <td>Includes title search, document preparation, and registration.</td>
              </tr>
              <tr>
                <td>Home inspection</td>
                <td>$450 – $700</td>
                <td>Recommended for all purchases. Cost varies by property size.</td>
              </tr>
              <tr>
                <td>Title insurance</td>
                <td>$250 – $400</td>
                <td>Protects against title defects and survey issues.</td>
              </tr>
              <tr>
                <td>Property tax adjustment</td>
                <td>Varies</td>
                <td>Pro-rated based on closing date and municipal tax billing cycle.</td>
              </tr>
              <tr>
                <td>Mortgage default insurance</td>
                <td>0% – 4% of mortgage</td>
                <td>Required when down payment is less than 20% of purchase price.</td>
              </tr>
            </tbody>
          </table>
          <p className="info-table-note">Figures are estimates for reference purposes. Pavneet provides a personalized closing cost breakdown specific to your purchase.</p>
        </div>

        <div className="guide-deep-section">
          <h3>Government programs for Nova Scotia home buyers</h3>
          <p>Several federal and provincial programs can reduce the cost of purchasing a home in Nova Scotia. Eligibility and amounts may change; confirm details with your mortgage professional.</p>
          <div className="guide-programs-grid">
            <article className="guide-program-card">
              <h4>First Home Savings Account (FHSA)</h4>
              <p>A registered account that allows first-time buyers to save up to $40,000 tax-free for a home purchase. Contributions are tax-deductible and withdrawals for a qualifying home are tax-free.</p>
            </article>
            <article className="guide-program-card">
              <h4>Home Buyers&apos; Plan (HBP)</h4>
              <p>Withdraw up to $60,000 from your RRSP to purchase or build a qualifying home. Repayment to your RRSP must begin within two years and be completed over 15 years.</p>
            </article>
            <article className="guide-program-card">
              <h4>Nova Scotia first-time buyer rebate</h4>
              <p>Eligible first-time buyers of newly constructed homes in Nova Scotia may qualify for a provincial HST rebate of up to $3,000 on the provincial portion of the Harmonized Sales Tax.</p>
            </article>
            <article className="guide-program-card">
              <h4>Down Payment Assistance Program (DPAP)</h4>
              <p>The Nova Scotia DPAP provides eligible first-time buyers with a forgivable loan toward the down payment on a home, helping bridge the gap between savings and the minimum required deposit.</p>
            </article>
          </div>
        </div>

        <div className="guide-deep-section">
          <h3>Rural Nova Scotia: additional due diligence</h3>
          <p>Purchasing property outside urban Halifax introduces important considerations that are less common in city transactions. Pavneet ensures these are addressed early in the process.</p>
          <div className="info-callout">
            <h4>Well water testing</h4>
            <p>Properties not connected to municipal water require a well water potability test. Testing typically covers bacteria (coliform, E. coli), minerals, and flow rate. Results should be reviewed before conditions are removed.</p>
          </div>
          <div className="info-callout">
            <h4>Septic system inspection</h4>
            <p>Private septic systems should be inspected for condition, capacity, and compliance with Nova Scotia Environment regulations. A failing or undersized system can cost $15,000–$30,000 to replace.</p>
          </div>
          <div className="info-callout">
            <h4>Heating oil tank assessment</h4>
            <p>Many rural Nova Scotia homes use oil heating. Underground and older above-ground tanks may require inspection, and environmental liability for leaking tanks can be significant. Tank age, condition, and compliance with Technical Safety Standards should be verified.</p>
          </div>
          <div className="info-callout">
            <h4>Coastal flood risk and erosion</h4>
            <p>Waterfront and coastal properties in Nova Scotia may be subject to flood risk, storm surge, and shoreline erosion. Review municipal hazard mapping and consider flood insurance availability before purchasing.</p>
          </div>
        </div>
      </>
    </GuidePage>
  );
}
