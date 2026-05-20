import Image from "next/image";
import Link from "next/link";
import { navLinks, primaryCta, siteConfig } from "@/lib/siteContent";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-sm shadow-slate-200/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:flex-nowrap">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-md transition duration-200 hover:opacity-85"
          aria-label={`${siteConfig.serviceName} トップページ`}
        >
          <Image
            src="/images/toach-logo.png"
            alt={siteConfig.serviceName}
            width={154}
            height={50}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <Link
          href={primaryCta.href}
          className="shrink-0 rounded-full bg-gradient-to-r from-blue-700 to-sky-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-700/20 transition hover:from-blue-800 hover:to-blue-700 sm:px-5 sm:py-3 sm:text-sm lg:order-3"
        >
          {primaryCta.label}
        </Link>

        <nav className="order-3 grid w-full grid-cols-2 gap-2 text-xs font-medium text-slate-700 sm:grid-cols-4 sm:text-sm lg:order-2 lg:flex lg:w-auto lg:items-center lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50 px-3 py-2.5 text-center transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:shadow-blue-100 lg:shrink-0 lg:rounded-full lg:border-transparent lg:bg-transparent lg:px-2.5 lg:py-2"
            >
              <span className="relative z-10">{link.label}</span>
              <span
                className="absolute inset-x-3 bottom-1 hidden h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-700 transition-transform duration-300 group-hover:scale-x-100 lg:block"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
