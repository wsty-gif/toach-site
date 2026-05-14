import Link from "next/link";
import { navLinks, primaryCta, siteConfig } from "@/lib/siteContent";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight text-slate-950">
          {siteConfig.serviceName}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-blue-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={primaryCta.href}
          className="shrink-0 rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
        >
          {primaryCta.label}
        </Link>
      </div>
    </header>
  );
}