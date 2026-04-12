export type GuideRoute =
  | "/getting-started"
  | "/products"
  | "/payments"
  | "/storefront"
  | "/orders"
  | "/shipping"
  | "/markets";

export type CategoryCard = {
  title: string;
  description: string;
  href: GuideRoute;
  keywords: string[];
  subsections: string[];
};

export const categoryCards: CategoryCard[] = [
  {
    title: "Getting Started",
    description:
      "Create your Finxa Commerce store, complete onboarding and publish your first product. Learn the core setup flow step by step so you can get live faster with confidence.",
    href: "/getting-started",
    keywords: ["signup", "onboarding", "store setup", "first product"],
    subsections: ["Signup", "Complete Onboarding Settings", "Store Setup", "Add Your First Product"],
  },
  {
    title: "Products",
    description:
      "Manage products, variants, collections, tags, images and product SEO settings.",
    href: "/products",
    keywords: ["variants", "images", "collections", "seo", "inventory"],
    subsections: ["Create a Product", "Add Product Image", "Add Variants and Images", "Organize with Collections, Tags and SEO", "How to Create a Collection"],
  },
  {
    title: "Payments",
    description:
      "Set up TAP Payments and offline methods like cash on delivery and bank transfer.",
    href: "/payments",
    keywords: ["tap", "cod", "bank transfer", "checkout", "payment methods"],
    subsections: ["Connect TAP Payments", "Enable Manual Payment Methods", "Run a Checkout Validation"],
  },
  {
    title: "Storefront",
    description:
      "Customize your theme using the editor for colors, typography, sections and homepage blocks.",
    href: "/storefront",
    keywords: ["theme", "editor", "branding", "fonts", "sections"],
    subsections: ["Open the Theme Editor", "Adjust Brand Styling", "Configure Sections and Content Blocks"],
  },
  {
    title: "Orders",
    description:
      "Track order lifecycle, fulfill shipments, process refunds and review customer details.",
    href: "/orders",
    keywords: ["fulfillment", "refunds", "customer", "order status"],
    subsections: ["Track the Order Lifecycle", "Fulfill and Ship", "Process Refunds Safely"],
  },
  {
    title: "Shipping",
    description:
      "Configure shipping zones, flat rates, weight-based rules and free shipping thresholds.",
    href: "/shipping",
    keywords: ["zones", "rates", "weight", "free shipping"],
    subsections: ["Create Shipping Zones", "Configure Rate Types", "Enable Free Shipping Rules"],
  },
  {
    title: "Markets",
    description:
      "Run multiple markets with currencies, languages and market-specific storefront overrides.",
    href: "/markets",
    keywords: ["multi-market", "currencies", "languages", "localization"],
    subsections: ["Create Markets", "Configure Language and Content", "Set Market-Specific Theme Overrides"],
  },
];

export const sidebarArticles: Array<{ label: string; href: GuideRoute; subsections: string[] }> =
  categoryCards.map((card) => ({
    label: card.title,
    href: card.href,
    subsections: card.subsections,
  }));

export function filterCategoryCards(query: string): CategoryCard[] {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return categoryCards;
  }

  return categoryCards.filter((card) => {
    const haystack = [card.title, card.description, ...card.keywords]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}
