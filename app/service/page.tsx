import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import CtaSection from "@/components/sections/CtaSection";
import FeatureDetailGrid from "@/components/sections/FeatureDetailGrid";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import { serviceItems, serviceUseCases } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "サービス紹介",
  description:
    "TOACHのマニュアル管理、タスク配信、承認フロー、ラーニング運用について紹介します。",
};

const serviceFlow = [
  "マニュアルを整える",
  "対象者へ配信する",
  "完了・承認を確認する",
  "教育結果を改善に使う",
] as const;

export default function ServicePage() {
  return (
    <main>
      <Navbar />
      <PageLead
        eyebrow="Service"
        title="サービス紹介"
        description="TOACHは、マニュアル、タスク、承認、教育をひとつの流れで管理できるクラウドサービスです。現場で使われる情報と、管理者が確認したい進捗を同じ場所につなげます。"
      />

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Overview
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              現場で使われるところまで支えるサービスです。
            </h2>
            <p className="mt-6 leading-9 text-slate-600">
              マニュアルを作って終わり、業務指示を出して終わりではありません。
              TOACHは、誰が確認し、誰が実行し、どこで承認が止まっているかまで見える化します。
              現場教育と業務実行をつなぎ、確認業務の負担を減らします。
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-3">
              {serviceFlow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-950">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          {serviceItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-5 leading-8 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <FeatureShowcase />

      <FeatureDetailGrid />

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Use Cases
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              このような運用に向いています。
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceUseCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-5 leading-8 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="自社の運用に合うか、まずは相談できます。"
        description="現在のマニュアル管理、教育、タスク運用を伺いながら、TOACHでどこを整えられるかをご案内します。"
      />

      <Footer />
    </main>
  );
}
