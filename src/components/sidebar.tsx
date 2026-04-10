import Link from "next/link";

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
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:sticky md:top-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => {
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
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
