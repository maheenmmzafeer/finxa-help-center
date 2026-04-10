import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { SearchBar } from "@/components/search-bar";
import { filterCategoryCards } from "@/lib/help-center-content";

type HomePageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Find clear guides for getting started, products, payments, storefront, shipping and markets in Finxa Commerce.",
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
  const featuredCategory = results.find((category) => category.title === "Getting Started");
  const desktopCategories = featuredCategory
    ? [featuredCategory, ...results.filter((category) => category.title !== "Getting Started")]
    : results;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Finxa Commerce Help Center
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
          Learn every core workflow with clear steps: launch your store, publish products,
          configure payments, manage orders and expand into new markets.
        </p>
        <div className="mt-6 max-w-2xl">
          <SearchBar defaultValue={query} />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          {results.length} categories match your search.
        </p>
      </section>

      <section className="mt-8" aria-label="Help categories">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Browse
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              Browse by Category
            </h2>
          </div>
          <p className="hidden text-sm text-slate-500 md:block">
            Choose a guide to jump into the section you need.
          </p>
        </div>

        <div className="mt-4 grid gap-4 lg:hidden sm:grid-cols-2 xl:grid-cols-3">
          {results.map((category) => (
            <ArticleCard
              key={category.href}
              title={category.title}
              description={category.description}
              href={category.href}
            />
          ))}
        </div>

        <div className="mt-4 hidden lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          <aside className="rounded-[2rem] border border-orange-100 bg-gradient-to-br from-[#fff0e5] via-[#ffe5d1] to-[#ffd8bf] p-8 text-slate-800 shadow-[0_18px_50px_rgba(251,146,60,0.10)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">
              Category explorer
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">
              Start from the category that fits your task.
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Select any guide below to explore step-by-step instructions and best practices.
            </p>
            <div className="mt-5 space-y-3">
              {results.map((category, index) => (
                <div
                  key={category.href}
                  className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/60 px-4 py-4 backdrop-blur"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-800">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{category.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-4">
            <div className="grid gap-4">
              {desktopCategories[0] ? (
                <ArticleCard
                  title={desktopCategories[0].title}
                  description={desktopCategories[0].description}
                  href={desktopCategories[0].href}
                />
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {desktopCategories.slice(1).map((category) => (
                <ArticleCard
                  key={category.href}
                  title={category.title}
                  description={category.description}
                  href={category.href}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
