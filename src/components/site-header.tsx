"use client";

import Link from "next/link";
import { useState } from "react";
import { SearchBar } from "@/components/search-bar";
import { sidebarArticles } from "@/lib/help-center-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [{ href: "/", label: "Home" }, ...sidebarArticles];
  const getMobileNavHref = (href: string) => (href === "/" ? "/" : href);

  return (
    <header className="border-b border-slate-800 bg-black/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <Link href="/" className="text-xl font-bold tracking-tight text-white">
                Finxa Commerce Help Center
              </Link>
              <p className="mt-1 text-sm text-slate-300">
                Practical guides for merchants building and scaling their stores.
              </p>
            </div>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="mt-1 inline-flex items-center rounded-lg border border-slate-700 p-2 text-slate-100 transition hover:bg-slate-800 md:hidden"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className="sr-only">Open menu</span>
              <span className="flex w-5 flex-col gap-1">
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
              </span>
            </button>
          </div>
          <div className="w-full md:w-80">
            <SearchBar placeholder="Search guides" action="/" />
          </div>
        </div>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <div className="overflow-x-auto overflow-y-visible pt-1">
            <ul className="flex min-w-max items-center gap-2.5 pb-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full border border-slate-600/70 bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:from-slate-700 hover:to-slate-800 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {menuOpen ? (
          <nav aria-label="Mobile navigation" className="rounded-xl border border-slate-800 bg-slate-950 p-2 md:hidden">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={getMobileNavHref(item.href)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
