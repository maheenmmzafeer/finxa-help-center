import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-slate-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="rounded-full px-2 py-1 transition hover:bg-white/10 hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="rounded-full bg-white/10 px-2 py-1 font-medium text-slate-100 shadow-sm">{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true" className="text-slate-600">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
