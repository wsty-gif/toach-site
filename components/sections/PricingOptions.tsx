import Link from "next/link";
import { pricingOptions } from "@/lib/siteContent";

export default function PricingOptions() {
  return (
    <section className="bg-slate-50 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Options
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              必要に応じて、導入支援や運用支援を追加できます。
            </h2>
            <p className="mt-6 leading-9 text-slate-600">
              システムを入れるだけではなく、現場で使い続けられる状態にするための支援をご用意しています。
            </p>

            <Link
              href="/contact?type=pricing"
              className="mt-8 inline-flex rounded-full bg-blue-700 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              オプション込みで相談する
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pricingOptions.map((option) => (
              <article key={option.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">
                  {option.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {option.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}