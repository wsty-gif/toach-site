const productFlow = [
  {
    title: "マニュアル管理",
    description: "手順を見える形にする",
    icon: "📘",
  },
  {
    title: "タスク配信",
    description: "必要な人へ届ける",
    icon: "📩",
  },
  {
    title: "実施・報告",
    description: "現場が対応する",
    icon: "✅",
  },
  {
    title: "承認・差し戻し",
    description: "管理者が確認する",
    icon: "📝",
  },
  {
    title: "教育・ラーニング",
    description: "理解と定着を促す",
    icon: "🎓",
  },
  {
    title: "履歴・レポート",
    description: "改善につなげる",
    icon: "📊",
  },
];

export default function ProductFlowIllustration() {
  return (
    <section className="bg-slate-50 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Product Flow
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            TOACHでできることを、流れで見る。
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-9 text-slate-600">
            個別の機能ではなく、現場で業務が実施され、確認され、改善されるまでの流れとして管理できます。
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productFlow.map((item, index) => (
            <article
              key={item.title}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs font-bold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>

              {index < productFlow.length - 1 ? (
                <div className="absolute -right-3 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-blue-700 text-white lg:flex">
                  →
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}