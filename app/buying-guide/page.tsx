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
    />
  );
}
