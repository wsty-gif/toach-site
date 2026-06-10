import {
  operationBenefits,
  operationPillars,
  organizationChallenges,
} from "@/lib/siteContent";

const benefitDetails = [
  {
    label: "作業時間を減らす",
    support: "手順・資料・タスクを一元化",
  },
  {
    label: "ミスを減らす",
    support: "期限・進捗・完了状況を可視化",
  },
  {
    label: "育成を平準化する",
    support: "教材・確認テストを仕組み化",
  },
  {
    label: "ルールを定着させる",
    support: "研修・確認履歴を残して管理",
  },
  {
    label: "知識を活かす",
    support: "ノウハウを蓄積して共有",
  },
] as const;

export default function OrganizationSystemSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-5 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow-pill text-sm font-bold uppercase tracking-[0.2em]">
              Systemize
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              仕組み化で、現場のばらつきを整えます。
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              マニュアル、タスク、教育を別々にせず、確認から実行までをひとつの流れで管理します。
            </p>

            <div className="reveal-stagger mt-7 grid gap-3 sm:grid-cols-2">
              {organizationChallenges.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="text-sm font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="reveal-stagger grid gap-3">
              {operationPillars.map((item) => (
                <article
                  key={item.step}
                  className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-black text-white">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-700">
                        {item.subtitle}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-blue-700">
                  標準化から定着まで
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  情報を作る、届ける、実行を確認する流れをつなげ、現場で使われ続ける運用に整えます。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-on-scroll mt-10 rounded-2xl bg-slate-950 p-5 text-white md:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Benefits
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                導入で期待できる効果
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              現場の手順、実行、教育がつながることで、日々の運用改善につながります。
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {operationBenefits.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="rounded-full bg-blue-400/15 px-3 py-1 text-[11px] font-bold text-blue-100">
                    {benefitDetails[index].label}
                  </p>
                </div>
                <h4 className="mt-4 text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
