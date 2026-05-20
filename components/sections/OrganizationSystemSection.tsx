import {
  operationBenefits,
  operationPillars,
  organizationChallenges,
} from "@/lib/siteContent";

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
                  className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-5"
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
                  className="card-hover rounded-2xl border border-blue-100 bg-blue-50/70 p-6"
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

            <div className="reveal-on-scroll mt-6 rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-xl font-bold">導入で期待できる効果</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {operationBenefits.map((item) => (
                  <div key={item.title} className="border-t border-white/10 pt-4">
                    <p className="font-bold text-blue-200">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
