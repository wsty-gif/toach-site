import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import CtaSection from "@/components/sections/CtaSection";
import PricingFaq from "@/components/sections/PricingFaq";
import PricingFeatureDiagram from "@/components/sections/PricingFeatureDiagram";
import PricingSinglePlan from "@/components/sections/PricingSinglePlan";
import ProductFlowIllustration from "@/components/sections/ProductFlowIllustration";

export const metadata: Metadata = {
  title: "料金プラン",
  description:
    "TOACHの料金プランをご紹介します。マニュアル管理、タスク配信、承認、ラーニング、ユーザー管理をまとめた基本プランを個別にご案内します。",
};

const priceImageCards = [
  {
    number: "01",
    title: "基本プラン",
    description:
      "マニュアル管理、タスク配信、承認、ラーニング、ユーザー管理をまとめて利用できます。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Calculator_0evy.svg",
    alt: "基本プランの費用を確認するイラスト",
  },
  {
    number: "02",
    title: "人数による変動なし",
    description:
      "利用人数が増えても、人数を理由に月額費用が変わることはありません。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/online_payments_luau.svg",
    alt: "オンライン決済や費用管理を表すイラスト",
  },
  {
    number: "03",
    title: "導入支援は個別相談",
    description:
      "初期設定、既存マニュアル整理、運用ルール設計などが必要な場合は、内容に応じてご案内します。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personal_finance_tqcd.svg",
    alt: "個別相談で費用感を整理するイラスト",
  },
] as const;

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      <PageLead
        eyebrow="Pricing"
        title="料金プラン"
        description="TOACHは、必要な機能をまとめた1つの基本プランでご案内しています。利用人数による料金変動はありません。"
        illustration="pricing"
      />

      <section className="bg-white px-5 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-bold text-blue-700">
                  プランは1つ。必要な機能をまとめて提供します。
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-950">
                  利用人数による料金変動はありません。
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  マニュアル管理、タスク配信、承認、ラーニング、ユーザー管理までまとめて利用できます。
                  導入支援や個別対応が必要な場合は、内容を確認したうえでご案内します。
                </p>
              </div>

              <Link
                href="/contact?type=pricing"
                className="inline-flex justify-center rounded-full bg-blue-700 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
              >
                料金を相談する
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PricingSinglePlan />

      <ProductFlowIllustration />

      <PricingFeatureDiagram />

      <section className="bg-slate-950 px-5 py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Price Image
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            料金は、基本プランをもとに個別にご案内します。
          </h2>

          <p className="mt-6 max-w-3xl leading-9 text-slate-300">
            現時点ではオプションメニューを細かく分けず、基本プランの中で必要な機能をまとめてご案内します。
            利用人数が増えても、人数を理由に月額費用が変わることはありません。
          </p>

          <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-3">
            {priceImageCards.map((card) => (
              <article key={card.title} className="rounded-3xl bg-white/10 p-5">
                <div className="relative h-36 rounded-2xl bg-white">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 768px) 310px, 90vw"
                    className="object-contain p-4"
                    unoptimized
                  />
                </div>
                <p className="mt-5 text-sm font-bold text-blue-200">
                  {card.number}
                </p>
                <h3 className="mt-3 text-xl font-bold">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingFaq />

      <CtaSection
        title="自社で使う場合の費用感を確認しませんか？"
        description="利用人数による料金変動はありません。現在の運用や導入時に必要な支援を伺いながら、費用感をご案内します。"
      />

      <Footer />
    </main>
  );
}
