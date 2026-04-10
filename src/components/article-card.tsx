import Link from "next/link";

type ArticleCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ArticleCard({ title, description, href }: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-100 via-amber-100 to-orange-200" />
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
          Guide
        </span>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition group-hover:border-slate-300 group-hover:bg-slate-900 group-hover:text-white"
        >
          →
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 transition group-hover:text-orange-800">
        Open guide
        <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
