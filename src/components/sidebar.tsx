"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type SidebarItem = {
  label: string;
  href: string;
  subsections?: string[];
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
      <li key={item.href} className="rounded-xl px-3 py-2">
        <Link
          href={item.href}
          className={[
            "block text-sm transition",
            isActive ? "font-semibold text-white" : "text-slate-300",
          ].join(" ")}
          aria-current={isActive ? "page" : undefined}
          onClick={() => setIsMobileOpen(false)}
        >
          <span
            className={[
              "inline-flex rounded-xl px-3 py-2 transition",
              isActive
                ? "border border-[color:rgba(69,224,209,0.28)] bg-[linear-gradient(135deg,rgba(27,199,180,0.18),rgba(69,224,209,0.14))] text-white shadow-sm"
                : "hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            {item.label}
          </span>
        </Link>
        {item.subsections?.length ? (
          <ul className="hidden list-disc space-y-1 pl-7 text-xs font-normal leading-5 text-slate-400 md:block">
            {item.subsections.map((subsection) => (
              <li key={subsection}>{subsection}</li>
            ))}
          </ul>
        ) : null}
      </li>
    );
  });

  return (
    <>
      <div className="md:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-3 text-left shadow-[0_16px_34px_rgba(0,0,0,0.22)] backdrop-blur"
          onClick={() => setIsMobileOpen((current) => !current)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-guides-menu"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">{title}</span>
          <span className="text-xl leading-none text-slate-400">{isMobileOpen ? "-" : "+"}</span>
        </button>

        <div
          id="mobile-guides-menu"
          className={[
            "overflow-hidden transition-all duration-300 ease-out",
            isMobileOpen ? "mt-2 max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <aside className="rounded-[1.35rem] border border-white/10 bg-[rgba(10,18,29,0.72)] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.22)] backdrop-blur">
            <ul className="space-y-2">{links}</ul>
          </aside>
        </div>
      </div>

      <aside className="hidden rounded-[1.5rem] border border-white/10 bg-[rgba(10,18,29,0.72)] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur md:sticky md:top-20 md:block">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">{title}</h2>
        <ul className="mt-3 space-y-2">{links}</ul>
      </aside>
    </>
  );
}
