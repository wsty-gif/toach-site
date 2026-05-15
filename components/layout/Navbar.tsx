import Link from "next/link";
import { navLinks, primaryCta, siteConfig } from "@/lib/siteContent";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:flex-nowrap lg:py-4">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight text-slate-950">
          {siteConfig.serviceName}
        </Link>

        <Link
          href={primaryCta.href}
          className="shrink-0 rounded-full bg-blue-700 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-800 sm:px-5 sm:py-3 sm:text-sm lg:order-3"
        >
          {primaryCta.label}
        </Link>

        <nav className="order-3 flex w-full gap-2 overflow-x-auto pb-1 text-sm font-medium text-slate-700 lg:order-2 lg:w-auto lg:items-center lg:gap-6 lg:overflow-visible lg:pb-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full bg-slate-50 px-3 py-2 transition hover:text-blue-700 lg:bg-transparent lg:px-0 lg:py-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
