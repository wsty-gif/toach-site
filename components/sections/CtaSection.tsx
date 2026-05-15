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
    <section className="bg-blue-700 px-4 py-14 text-white sm:px-5 sm:py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
          {title}
        </h2>
        <p className="mt-6 leading-8 text-blue-100">{description}</p>

        <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex justify-center rounded-full bg-white px-5 py-3.5 text-center font-bold text-blue-700 transition hover:bg-blue-50 sm:px-7 sm:py-4"
          >
            {primaryCta.label}
          </Link>

          <Link
            href={secondaryCta.href}
            className="inline-flex justify-center rounded-full border border-white/40 px-5 py-3.5 text-center font-bold text-white transition hover:bg-white/10 sm:px-7 sm:py-4"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
