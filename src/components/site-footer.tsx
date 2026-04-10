import Link from "next/link";

const desktopFooterLinks = [
  { href: "/", label: "Home" },
  { href: "/getting-started", label: "All Guides" },
  { href: "/getting-started", label: "Getting Started" },
];

const mobileFooterLinks = [
  { href: "/", label: "Home" },
  { href: "/getting-started?guides=open", label: "All Guides" },
  { href: "/getting-started", label: "Getting Started" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-right md:flex-row md:items-center md:justify-between md:px-6 md:text-left">
        <ul className="order-1 flex w-full items-center justify-between gap-2 text-sm md:hidden">
            {mobileFooterLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-slate-200 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>

        <ul className="hidden text-sm md:order-2 md:flex md:flex-wrap md:justify-start md:gap-3">
            {desktopFooterLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-slate-200 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
        <p className="order-2 text-sm text-slate-300 md:order-1">
          Copyright {new Date().getFullYear()} Finxa Commerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
}