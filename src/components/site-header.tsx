import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { sidebarArticles } from "@/lib/help-center-content";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
              Finxa Commerce Help Center
            </Link>
            <p className="mt-1 text-sm text-slate-600">
              Practical guides for merchants building and scaling their stores.
            </p>
          </div>
          <div className="w-full md:w-80">
            <SearchBar placeholder="Search guides" action="/" />
          </div>
        </div>
        <nav aria-label="Primary navigation" className="overflow-x-auto">
          <ul className="flex min-w-max gap-2 pb-1">
            {sidebarArticles.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
