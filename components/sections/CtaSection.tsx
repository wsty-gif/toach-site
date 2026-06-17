import Link from "next/link";
import { primaryCta, secondaryCta } from "@/lib/siteContent";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export default function CtaSection({
  title = "まずは現場の運用を一緒に整理しませんか？",
  description = "導入を決めていない段階でも大丈夫です。現在の課題を伺いながら、無理のない進め方をご提案します。",
}: CtaSectionProps) {
  return (
    <section className="section-soft px-4 py-14 sm:px-5 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl note-card px-6 py-12 text-center sm:px-10 md:py-16">
        <p className="section-marker mx-auto text-sm">Contact</p>
        <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl md:text-5xl">
          {title}
        </h2>
        <p className="mt-6 leading-8 text-slate-600">{description}</p>

        <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex justify-center rounded-full bg-[#0072ce] px-5 py-3.5 text-center font-bold text-white transition hover:bg-[#004f9f] sm:px-7 sm:py-4"
          >
            {primaryCta.label}
          </Link>

          <Link
            href={secondaryCta.href}
            className="inline-flex justify-center rounded-full border border-blue-200 px-5 py-3.5 text-center font-bold text-[#0072ce] transition hover:bg-blue-50 sm:px-7 sm:py-4"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
