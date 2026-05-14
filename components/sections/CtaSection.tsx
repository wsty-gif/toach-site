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
    <section className="bg-blue-700 px-5 py-20 text-white md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="mt-6 leading-8 text-blue-100">{description}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={primaryCta.href}
            className="rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            {primaryCta.label}
          </Link>

          <Link
            href={secondaryCta.href}
            className="rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
