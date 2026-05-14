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
    <section className="bg-gradient-to-b from-blue-50 to-white px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg md:leading-9">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={primaryCta.href}
            className="rounded-full bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
          >
            {primaryCta.label}
          </Link>

          <Link
            href={secondaryCta.href}
            className="rounded-full border border-slate-300 bg-white px-6 py-4 font-bold text-slate-900 transition hover:bg-slate-50"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}