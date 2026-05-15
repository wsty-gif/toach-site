import type { ReactNode } from "react";
import Link from "next/link";
import { primaryCta, secondaryCta } from "@/lib/siteContent";

type PageLeadProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export default function PageLead({ eyebrow, title, description }: PageLeadProps) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-14 sm:px-5 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-sm sm:tracking-[0.2em]">
          {eyebrow}
        </p>

        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-6xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg md:leading-9">
          {description}
        </p>

        <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex justify-center rounded-full bg-blue-700 px-5 py-3.5 text-center font-bold text-white transition hover:bg-blue-800 sm:px-6 sm:py-4"
          >
            {primaryCta.label}
          </Link>

          <Link
            href={secondaryCta.href}
            className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-5 py-3.5 text-center font-bold text-slate-900 transition hover:bg-slate-50 sm:px-6 sm:py-4"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
