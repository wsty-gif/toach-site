import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white text-slate-700">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-5 sm:py-12 md:grid-cols-[1fr_2fr] md:gap-10">
        <div>
          <div className="text-2xl font-bold tracking-tight text-slate-950">{siteConfig.serviceName}</div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 text-sm text-slate-500">
            {siteConfig.companyName}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-[#0072ce]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 px-5 py-5 text-center text-xs text-slate-400">
        © {siteConfig.companyName}. All rights reserved.
      </div>
    </footer>
  );
}
