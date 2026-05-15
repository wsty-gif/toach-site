const flowItems = [
  {
    label: "作成",
    title: "マニュアル",
    description: "画像つき手順書、カテゴリ管理、更新履歴",
    color: "bg-blue-600",
  },
  {
    label: "配信",
    title: "タスク",
    description: "単発・グループ・定期タスクとして配信",
    color: "bg-indigo-600",
  },
  {
    label: "実施",
    title: "現場メンバー",
    description: "マイタスク、受講ラーニング、完了報告",
    color: "bg-emerald-600",
  },
  {
    label: "確認",
    title: "承認",
    description: "承認待ち、差し戻し、確認履歴",
    color: "bg-amber-600",
  },
  {
    label: "改善",
    title: "レポート",
    description: "閲覧履歴、受講状況、完了率を確認",
    color: "bg-slate-800",
  },
];

export default function PricingOperationDiagram() {
  return (
    <section className="bg-white px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Pricing Structure
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            料金は、使う機能と運用範囲に合わせて決まります。
          </h2>
          <p className="mt-6 leading-9 text-slate-600">
            TOACHは、マニュアルを作るだけでなく、配信、実施、承認、履歴確認までを一つの流れで扱います。
            そのため、利用人数、部署数、必要な機能、導入サポートの範囲に合わせて最適なプランをご提案します。
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <div className="grid gap-4 lg:grid-cols-5">
            {flowItems.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="h-full rounded-3xl bg-white p-6 shadow-sm">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold text-white ${item.color}`}
                  >
                    {index + 1}
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

                {index < flowItems.length - 1 ? (
                  <div className="hidden lg:block absolute right-[-18px] top-1/2 z-10 -translate-y-1/2 text-2xl font-bold text-slate-300">
                    →
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-800">基本利用料</p>
              <p className="mt-2 text-sm leading-7 text-blue-900">
                利用するプラン、ユーザー数、部署数に応じて決まります。
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-800">初期費用</p>
              <p className="mt-2 text-sm leading-7 text-emerald-900">
                初期設定、データ移行、運用設計の支援範囲に応じて変わります。
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800">オプション</p>
              <p className="mt-2 text-sm leading-7 text-amber-900">
                マニュアル整備支援、レポート活用、多部署展開などを追加できます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}