import type { ReactNode } from "react";
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
        <Sidebar title="All Guides" currentPath={currentPath} items={sidebarArticles} />
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
            <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
          </header>
          <div className="mt-8 space-y-8">{children}</div>
        </article>
      </div>
    </div>
  );
}
