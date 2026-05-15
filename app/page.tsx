import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import FeatureDetailGrid from "@/components/sections/FeatureDetailGrid";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import ImprovementCycle from "@/components/sections/ImprovementCycle";
import OperationIllustration from "@/components/sections/OperationIllustration";
import ProductFlowIllustration from "@/components/sections/ProductFlowIllustration";
import {
  caseStudies,
  flowSteps,
  painPoints,
  primaryCta,
  reasons,
  serviceItems,
  siteConfig,
} from "@/lib/siteContent";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-b from-blue-50 via-white to-white px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-blue-700">
              {siteConfig.tagline}
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
              伝えた業務を、
              <br />
              実施されるところまで。
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg md:leading-9">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={primaryCta.href}
                className="rounded-full bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
              >
                {primaryCta.label}
              </Link>

              <Link
                href="/service"
                className="rounded-full border border-slate-300 bg-white px-6 py-4 font-bold text-slate-900 transition hover:bg-slate-50"
              >
                サービスを詳しく見る
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl md:p-6">
            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold text-blue-200">TOACH Dashboard</p>

              <div className="mt-6 grid gap-4">
                {["マニュアル確認", "タスク完了", "承認待ち", "教育進捗"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-white/10 p-4"
                  >
                    <span>{item}</span>
                    <span className="rounded-full bg-blue-400/20 px-3 py-1 text-xs text-blue-100">
                      管理中
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-blue-500 p-5">
                <p className="text-sm text-blue-100">今月の確認状況</p>
                <p className="mt-2 text-3xl font-bold">87%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Problem
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            このようなお悩みはありませんか？
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {painPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 leading-8 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <OperationIllustration />

      <ProductFlowIllustration />

      <FeatureShowcase />

      <ImprovementCycle />

      <FeatureDetailGrid />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Service
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            TOACHでできること
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceItems.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>

          <Link href="/service" className="mt-8 inline-block font-bold text-blue-700">
            サービス紹介を見る →
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Reasons
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            選ばれる理由
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reasons.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>

          <Link href="/reasons" className="mt-8 inline-block font-bold text-blue-700">
            選ばれる理由を詳しく見る →
          </Link>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Cases
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            導入事例・活用例
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-blue-700">{item.industry}</p>
                <h3 className="mt-4 text-xl font-bold leading-8 text-slate-950">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>

          <Link href="/cases" className="mt-8 inline-block font-bold text-blue-700">
            導入事例を見る →
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Flow
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            ご利用の流れ
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {flowSteps.slice(0, 4).map((step) => (
              <article
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="font-bold text-blue-700">STEP {step.step}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <Link href="/flow" className="mt-8 inline-block font-bold text-blue-700">
            導入の流れを見る →
          </Link>
        </div>
      </section>

      <CtaSection />

      <Footer />
    </main>
  );
}