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
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/10 bg-[rgba(10,18,29,0.76)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:border-[color:rgba(69,224,209,0.28)] hover:shadow-[0_26px_70px_rgba(0,0,0,0.38)]"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1bc7b4] via-[#45e0d1] to-[#8ff7ec] opacity-90" />
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,224,209,0.16),transparent_34%)] opacity-80" />
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300 shadow-sm">
          Guide
        </span>
        <span
          aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 shadow-sm transition group-hover:border-[color:rgba(69,224,209,0.28)] group-hover:bg-white/10 group-hover:text-white"
        >
          →
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{description}</p>
    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] transition group-hover:translate-x-0.5 group-hover:text-white">
        Open guide
        <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
