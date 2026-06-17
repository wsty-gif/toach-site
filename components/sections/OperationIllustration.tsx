type OperationIllustrationProps = {
  compact?: boolean;
};

const problems = [
  {
    title: "属人化",
    description: "担当者しか分からない",
  },
  {
    title: "確認漏れ",
    description: "実施状況が追えない",
  },
  {
    title: "教育ばらつき",
    description: "教え方が人によって違う",
  },
];

const outcomes = [
  {
    title: "標準化",
    description: "手順をマニュアル化",
  },
  {
    title: "見える化",
    description: "タスクと承認で追跡",
  },
  {
    title: "定着化",
    description: "教育と履歴で改善",
  },
];

export default function OperationIllustration({ compact = false }: OperationIllustrationProps) {
  return (
    <section className={`${compact ? "py-14" : "py-20 md:py-24"} section-soft px-5`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="section-marker text-sm">
            Operation
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
            ムリ・ムダ・ムラが出やすい現場運用を、見える形に整理します。
          </h2>
          <p className="mt-6 max-w-2xl leading-9 text-slate-600">
            TOACHは、マニュアル、タスク、承認、教育をつなげることで、
            「伝えたつもり」「やったつもり」を減らし、現場の運用を整えます。
          </p>
        </div>

        <div className="note-card mt-12 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold text-[#0072ce]">Before</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                よくある現場の悩み
              </h3>

              <div className="mt-6 grid gap-4">
                {problems.map((item) => (
                  <div key={item.title} className="note-card p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff7d6] text-lg">
                        !
                      </span>
                      <div>
                        <p className="font-bold text-slate-950">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0072ce] text-2xl font-black text-white shadow-lg lg:h-20 lg:w-20">
                →
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-[#0072ce]">After</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                TOACHで整う状態
              </h3>

              <div className="mt-6 grid gap-4">
                {outcomes.map((item) => (
                  <div key={item.title} className="note-card p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-lg text-[#0072ce]">
                        ✓
                      </span>
                      <div>
                        <p className="font-bold text-slate-950">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-4">
              {["手順を作る", "タスクで配る", "承認する", "履歴で改善"].map((step, index) => (
                <div key={step} className="relative rounded-lg bg-[#f7fbff] p-5 text-center">
                  <p className="text-xs font-bold text-[#0072ce]">STEP {index + 1}</p>
                  <p className="mt-2 font-bold text-slate-950">{step}</p>
                  {index < 3 ? (
                    <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-xl font-bold text-blue-300 md:block">
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
