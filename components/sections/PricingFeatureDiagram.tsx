import { pricingFeatureDiagramItems, pricingIncludedGroups } from "@/lib/siteContent";

export default function PricingFeatureDiagram() {
  return (
    <section className="bg-white px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Features
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            1つのプランで、現場運用に必要な機能をまとめて利用できます。
          </h2>
          <p className="mt-6 leading-9 text-slate-600">
            manual-appの機能をもとに、TOACHでできることを図で整理しています。
            マニュアル作成から、タスク配信、承認、ラーニング、共有、履歴確認まで一連の流れで管理できます。
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingFeatureDiagramItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black text-white ${item.colorClass}`}
                >
                  {item.step}
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  {item.label}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Included
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              機能カテゴリ別に見ると、できることが分かります。
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pricingIncludedGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {group.title}
                </h3>

                <ul className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-slate-600"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}