"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type SidebarItem = {
  label: string;
  href: string;
};

type SidebarProps = {
  title?: string;
  currentPath: string;
  items: SidebarItem[];
};

export function Sidebar({ title = "Guides", currentPath, items }: SidebarProps) {
  const searchParams = useSearchParams();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(searchParams.get("guides") === "open");
  }, [searchParams]);

  const links = items.map((item) => {
    const isActive = currentPath === item.href;

    return (
      <li key={item.href}>
        <Link
          href={item.href}
          className={[
            "block rounded-xl px-3 py-2 text-sm transition",
            isActive
              ? "bg-teal-100 font-semibold text-teal-900"
              : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
          ].join(" ")}
          aria-current={isActive ? "page" : undefined}
          onClick={() => setIsMobileOpen(false)}
        >
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className="md:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm"
          onClick={() => setIsMobileOpen((current) => !current)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-guides-menu"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-slate-600">{title}</span>
          <span className="text-xl leading-none text-slate-500">{isMobileOpen ? "-" : "+"}</span>
        </button>

        <div
          id="mobile-guides-menu"
          className={[
            "overflow-hidden transition-all duration-300 ease-out",
            isMobileOpen ? "mt-2 max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <ul className="space-y-2">{links}</ul>
          </aside>
        </div>
      </div>

      <aside className="hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:sticky md:top-20 md:block">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{title}</h2>
        <ul className="mt-3 space-y-2">{links}</ul>
      </aside>
    </>
  );
}
