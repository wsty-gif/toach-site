const cycleItems = [
  {
    title: "作る",
    description: "マニュアルや教育コンテンツを整える",
  },
  {
    title: "届ける",
    description: "タスクやラーニングとして対象者に配信する",
  },
  {
    title: "実施する",
    description: "現場が手順に沿って対応し、完了報告する",
  },
  {
    title: "確認する",
    description: "承認、差し戻し、進捗確認を行う",
  },
  {
    title: "改善する",
    description: "履歴やレポートを見て運用を見直す",
  },
];

export default function ImprovementCycle() {
  return (
    <section className="bg-white px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow-pill text-sm font-bold uppercase tracking-[0.2em]">
              Cycle
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              作って終わりではなく、改善が続く状態へ。
            </h2>
            <p className="mt-6 leading-9 text-slate-600">
              マニュアルや教育は、一度作れば終わりではありません。
              TOACHでは、配信、実施、承認、履歴確認までをつなげることで、現場の改善サイクルを回しやすくします。
            </p>
          </div>

          <div className="relative rounded-[2rem] bg-blue-50 p-6 shadow-inner md:p-10">
            <div className="reveal-stagger grid gap-4">
              {cycleItems.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-black text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute -right-4 -top-4 hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white md:block">
              改善サイクル
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
