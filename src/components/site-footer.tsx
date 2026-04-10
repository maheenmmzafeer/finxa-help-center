import Link from "next/link";

const footerLinks = [
  { href: "/getting-started", label: "Getting Started" },
  { href: "/products", label: "Products" },
  { href: "/payments", label: "Payments" },
  { href: "/shipping", label: "Shipping" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-sm text-slate-600">
          Copyright {new Date().getFullYear()} Finxa Commerce. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-3 text-sm">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-slate-700 hover:text-slate-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
