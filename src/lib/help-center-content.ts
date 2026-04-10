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
};

export const categoryCards: CategoryCard[] = [
  {
    title: "Getting Started",
    description:
      "Create your Finxa Commerce store, complete onboarding, and publish your first product.",
    href: "/getting-started",
    keywords: ["signup", "onboarding", "store setup", "first product"],
  },
  {
    title: "Products",
    description:
      "Manage products, variants, collections, tags, images, and product SEO settings.",
    href: "/products",
    keywords: ["variants", "images", "collections", "seo", "inventory"],
  },
  {
    title: "Payments",
    description:
      "Set up TAP Payments and offline methods like cash on delivery and bank transfer.",
    href: "/payments",
    keywords: ["tap", "cod", "bank transfer", "checkout", "payment methods"],
  },
  {
    title: "Storefront",
    description:
      "Customize your theme using the editor for colors, typography, sections, and homepage blocks.",
    href: "/storefront",
    keywords: ["theme", "editor", "branding", "fonts", "sections"],
  },
  {
    title: "Orders",
    description:
      "Track order lifecycle, fulfill shipments, process refunds, and review customer details.",
    href: "/orders",
    keywords: ["fulfillment", "refunds", "customer", "order status"],
  },
  {
    title: "Shipping",
    description:
      "Configure shipping zones, flat rates, weight-based rules, and free shipping thresholds.",
    href: "/shipping",
    keywords: ["zones", "rates", "weight", "free shipping"],
  },
  {
    title: "Markets",
    description:
      "Run multiple markets with currencies, languages, and market-specific storefront overrides.",
    href: "/markets",
    keywords: ["multi-market", "currencies", "languages", "localization"],
  },
];

export const sidebarArticles: Array<{ label: string; href: GuideRoute }> = [
  { label: "Getting Started", href: "/getting-started" },
  { label: "Products", href: "/products" },
  { label: "Payments", href: "/payments" },
  { label: "Storefront", href: "/storefront" },
  { label: "Orders", href: "/orders" },
  { label: "Shipping", href: "/shipping" },
  { label: "Markets", href: "/markets" },
];

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
