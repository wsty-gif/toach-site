import { serviceItems, serviceUseCases } from "@/lib/siteContent";

export default function FeatureDetailGrid() {
  return (
    <section className="bg-slate-50 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Features
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              現場運用に必要な機能を、まとめて管理。
            </h2>
            <p className="mt-6 leading-9 text-slate-600">
              マニュアル、タスク、承認、教育が別々になっていると、確認に時間がかかります。
              TOACHでは、それらを一つの流れとして扱えるため、現場運用を整理しやすくなります。
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {serviceItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-950">
            このような運用で使われます
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceUseCases.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h4 className="font-bold leading-8 text-slate-950">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
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