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
    <header className="border-b border-white/12 bg-[rgba(7,16,24,0.5)] shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 md:px-6 md:py-3.5">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <Link href="/" className="text-lg font-bold tracking-tight text-white md:text-xl">
                Finxa Commerce Help Center
              </Link>
              <p className="mt-0.5 max-w-2xl text-[11px] leading-4 text-slate-400 md:text-xs">
                Practical guides for merchants building and scaling their stores.
              </p>
            </div>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="mt-1 inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 shadow-sm transition hover:bg-white/10 md:hidden"
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
          <div className="overflow-x-auto overflow-y-visible pt-0">
            <ul className="flex min-w-max items-center gap-2.5 pb-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center border-b-2 border-transparent px-1.5 py-1.5 text-sm font-semibold text-slate-300 transition duration-200 hover:border-[color:var(--accent)] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {menuOpen ? (
          <nav aria-label="Mobile navigation" className="rounded-[1.35rem] border border-white/10 bg-[rgba(7,16,24,0.78)] p-2 shadow-[0_20px_42px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:hidden">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={getMobileNavHref(item.href)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
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
