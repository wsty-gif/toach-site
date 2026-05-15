import Link from "next/link";
import { pricingPlans } from "@/lib/siteContent";

export default function PricingPlanCards() {
  return (
    <section className="bg-slate-50 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Plans
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            利用範囲に合わせて選べるプラン
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-9 text-slate-600">
            まずは必要な機能から小さく始め、運用が広がった段階でタスク配信、承認、ラーニング、部署別管理へ拡張できます。
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl border bg-white p-7 shadow-sm ${
                plan.recommended
                  ? "border-blue-600 ring-4 ring-blue-100"
                  : "border-slate-200"
              }`}
            >
              {plan.recommended ? (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-700 px-5 py-2 text-xs font-bold text-white">
                  最もおすすめ
                </div>
              ) : null}

              <p className="text-sm font-bold text-blue-700">{plan.badge}</p>

              <h3 className="mt-4 text-2xl font-bold text-slate-950">
                {plan.name}
              </h3>

              <p className="mt-5 text-3xl font-black text-slate-950">
                {plan.priceLabel}
              </p>

              <p className="mt-5 min-h-[88px] leading-8 text-slate-600">
                {plan.lead}
              </p>

              <Link
                href={plan.ctaHref}
                className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-4 font-bold transition ${
                  plan.recommended
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50"
                }`}
              >
                {plan.ctaLabel}
              </Link>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-sm font-bold text-slate-950">主な内容</p>
                <ul className="mt-4 grid gap-3">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm leading-7 text-slate-500">
          ※料金は利用人数、部署数、必要機能、導入支援の範囲により変動します。詳細はお問い合わせください。
        </p>
      </div>
    </section>
  );
}