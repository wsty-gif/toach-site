import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1fr_2fr]">
        <div>
          <div className="text-2xl font-bold tracking-tight">{siteConfig.serviceName}</div>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 text-sm text-slate-400">
            {siteConfig.companyName}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">
        © {siteConfig.companyName}. All rights reserved.
      </div>
    </footer>
  );
}