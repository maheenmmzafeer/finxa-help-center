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
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-teal-700 group-hover:text-teal-800">
        Open guide
      </span>
    </Link>
  );
}
