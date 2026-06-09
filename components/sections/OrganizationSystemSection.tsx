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
    <section className="bg-white px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow-pill text-sm font-bold uppercase tracking-[0.2em]">
              Systemize
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              TOACHが、組織の「仕組み化」を実現します。
            </h2>
            <p className="mt-6 leading-9 text-slate-600">
              標準化、実行・実践、教育・定着の3つをつなげることで、
              情報共有だけで終わらない一気通貫の運用をつくります。
            </p>

            <div className="reveal-stagger mt-8 grid gap-4">
              {organizationChallenges.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="reveal-stagger grid gap-4">
              {operationPillars.map((item) => (
                <article
                  key={item.step}
                  className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-black text-white">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-700">
                        {item.subtitle}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-8 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="reveal-on-scroll mt-6 rounded-2xl bg-slate-950 p-6 text-white md:p-7">
              <div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                    Benefits
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    導入で期待できる効果
                  </h3>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  現場の手順、タスク、教育をつなげることで、日々の運用を改善しやすくします。
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {operationBenefits.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:grid-cols-[44px_1fr] sm:items-start"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-sm font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-lg font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="w-fit rounded-full bg-blue-400/15 px-3 py-1 text-xs font-bold text-blue-100">
                          {benefitDetails[index].label}
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.description}
                      </p>
                      <p className="mt-3 border-l-2 border-blue-300 pl-3 text-sm font-bold leading-6 text-blue-100">
                        {benefitDetails[index].support}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
