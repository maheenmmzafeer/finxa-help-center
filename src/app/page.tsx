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
    siteName: "Finxa Commerce Help Center",
    locale: "en_US",
    type: "website",
    url: "/",
    images: [
      {
        url: "/Finxa.png",
        width: 1200,
        height: 630,
        alt: "Finxa Commerce Help Center",
      },
    ],
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
      <section className="relative px-0 py-4 md:py-8">
        <div className="max-w-5xl border-l border-[color:rgba(69,224,209,0.28)] pl-5 md:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--accent)]">
            Finxa Commerce Help Center
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Finxa Commerce Help Center
          </h1>
          <p className="mt-4 max-w-5xl text-base leading-7 text-slate-200 md:text-lg">
            Learn every core workflow with clear steps: launch your store, publish products,
            configure payments, manage orders and expand into new markets.
          </p>
          <div className="mt-7 max-w-5xl">
            <SearchBar defaultValue={query} />
          </div>
          <p className="mt-3 text-sm text-slate-300">
            {results.length} categories match your search.
          </p>
        </div>
      </section>

      <section className="mt-8" aria-label="Help categories">
        <div className="mt-8 space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Browse
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Browse by Category
              </h2>
            </div>
            <p className="hidden text-sm text-slate-300 md:block">
              Choose a guide to jump into the section you need.
            </p>
          </div>

          <div className="grid gap-4 lg:hidden sm:grid-cols-2 xl:grid-cols-3">
            {results.map((category) => (
              <ArticleCard
                key={category.href}
                title={category.title}
                description={category.description}
                href={category.href}
              />
            ))}
          </div>

          <div className="hidden lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
            <aside className="rounded-[2rem] border border-white/10 bg-[rgba(10,18,29,0.76)] p-8 text-slate-200 shadow-[0_20px_56px_rgba(0,0,0,0.26)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Category explorer
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
                Start from the category that fits your task.
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Select any guide below to explore step-by-step instructions and best practices.
              </p>
              <div className="mt-5 space-y-3">
                {results.map((category, index) => (
                  <div
                    key={category.href}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(27,199,180,0.24),rgba(69,224,209,0.18))] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{category.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
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
        </div>
      </section>
    </div>
  );
}
