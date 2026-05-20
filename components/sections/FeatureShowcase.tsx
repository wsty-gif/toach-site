import Image from "next/image";
import { featureShowcases } from "@/lib/siteContent";

export default function FeatureShowcase() {
  return (
    <section className="bg-white px-4 py-14 sm:px-5 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow-pill text-xs font-bold uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.2em]">
            Screens
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-5xl">
            実際の画面で、使い方をイメージできます。
          </h2>
          <p className="mt-6 leading-9 text-slate-600">
            TOACHは、マニュアル管理、タスク配信、承認、ラーニングを別々に扱うのではなく、
            現場で実行されるところまでつなげて管理します。
          </p>
        </div>

        <div className="mt-10 grid gap-12 md:mt-14 md:gap-16">
          {featureShowcases.map((feature, index) => (
            <article
              key={feature.id}
              className="reveal-on-scroll grid gap-8 lg:grid-cols-2 lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-sm sm:tracking-[0.2em]">
                  {feature.label}
                </p>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 md:text-4xl">
                  {feature.title}
                </h3>
                <p className="mt-5 leading-9 text-slate-600">
                  {feature.description}
                </p>

                <ul className="mt-6 grid gap-3">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="card-hover flex gap-3 rounded-2xl bg-slate-50 p-4 text-slate-700"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                <div className="soft-panel overflow-hidden rounded-2xl bg-slate-100 p-2 sm:rounded-3xl sm:p-3">
                  <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-300" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-green-300" />
                    <span className="ml-3 text-xs font-bold text-slate-400">
                      {feature.label}
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-b-2xl bg-white sm:aspect-[16/10]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
