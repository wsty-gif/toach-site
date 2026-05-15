import Link from "next/link";
import { pricingPlan } from "@/lib/siteContent";

export default function PricingSinglePlan() {
  return (
    <section className="bg-slate-50 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Plan
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            料金プランはシンプルに1つ。
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-9 text-slate-600">
            TOACHは、現場教育と業務実施に必要な機能をまとめて提供します。
            利用人数や部署数、導入時の支援範囲に合わせて個別にお見積もりします。
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <article className="relative overflow-hidden rounded-3xl border border-blue-600 bg-white shadow-xl ring-4 ring-blue-100">
            <div className="bg-blue-700 px-6 py-3 text-center text-sm font-bold text-white">
              {pricingPlan.badge}
            </div>

            <div className="p-7 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                    {pricingPlan.name}
                  </h3>

                  <p className="mt-6 text-4xl font-black text-slate-950">
                    {pricingPlan.priceLabel}
                  </p>

                  <p className="mt-6 leading-9 text-slate-600">
                    {pricingPlan.lead}
                  </p>

                  <Link
                    href={pricingPlan.ctaHref}
                    className="mt-8 inline-flex w-full justify-center rounded-full bg-blue-700 px-7 py-4 font-bold text-white transition hover:bg-blue-800 sm:w-auto"
                  >
                    {pricingPlan.ctaLabel}
                  </Link>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-bold text-slate-950">
                    プランに含まれる主な機能
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {pricingPlan.includedFeatures.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-2xl bg-white p-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-8 rounded-2xl bg-blue-50 p-4 text-sm leading-7 text-blue-900">
                ※料金は、利用人数・部署数・導入支援の範囲により変動します。
                詳細はお問い合わせ後にご案内します。
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}