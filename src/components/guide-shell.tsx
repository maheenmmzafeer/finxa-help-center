import { Suspense, type ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Sidebar } from "@/components/sidebar";
import { sidebarArticles } from "@/lib/help-center-content";
import type { GuideRoute } from "@/lib/help-center-content";

type GuideShellProps = {
  title: string;
  description: string;
  currentPath: GuideRoute;
  children: ReactNode;
};

export function GuideShell({
  title,
  description,
  currentPath,
  children,
}: GuideShellProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: title },
        ]}
      />
      <div className="grid gap-6 md:grid-cols-[260px_1fr]">
        <Suspense fallback={<div className="hidden md:block" />}>
          <Sidebar title="All Guides" currentPath={currentPath} items={sidebarArticles} />
        </Suspense>
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,18,29,0.72)] p-6 shadow-[var(--shadow)] backdrop-blur-md md:p-8">
          <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,22,34,0.92),rgba(8,15,24,0.84))] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.2)] md:p-8">
            <header className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Guide
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-200">{description}</p>
            </header>
            <div className="mt-8 space-y-8">{children}</div>
          </div>
        </article>
      </div>
    </div>
  );
}
