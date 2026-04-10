import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { SearchBar } from "@/components/search-bar";
import { categoryCards, filterCategoryCards } from "@/lib/help-center-content";

type HomePageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Find clear guides for getting started, products, payments, storefront, shipping, and markets in Finxa Commerce.",
  openGraph: {
    title: "Finxa Commerce Help Center",
    description:
      "Step-by-step documentation for merchants using Finxa Commerce.",
    type: "website",
    url: "/",
  },
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const results = filterCategoryCards(query);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Finxa Commerce Help Center
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
          Learn every core workflow with clear steps: launch your store, publish products,
          configure payments, manage orders, and expand into new markets.
        </p>
        <div className="mt-6 max-w-2xl">
          <SearchBar defaultValue={query} />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          {results.length} of {categoryCards.length} categories match your search.
        </p>
      </section>

      <section className="mt-8" aria-label="Help categories">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Browse by Category</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((category) => (
            <ArticleCard
              key={category.href}
              title={category.title}
              description={category.description}
              href={category.href}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
