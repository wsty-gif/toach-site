import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import CtaSection from "@/components/sections/CtaSection";
import ProductFlowIllustration from "@/components/sections/ProductFlowIllustration";
import { flowSteps } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "ご利用の流れ",
  description:
    "TOACHの問い合わせから導入、運用開始までの流れを分かりやすく紹介します。",
};

const flowVisuals = [
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/messaging_uok8.svg",
    alt: "問い合わせを送るイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/schedule_meeting_52nu.svg",
    alt: "相談日程を調整するイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personalization_triu.svg",
    alt: "課題に合わせて提案するイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/credit_card_payment_12va.svg",
    alt: "申し込みや契約を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/inbox_cleanup_w2ur.svg",
    alt: "初期設定を整理するイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/digital_nomad_9kgl.svg",
    alt: "操作説明を受けるイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/moment_to_remember_02gj.svg",
    alt: "運用開始後の改善を表すイラスト",
  },
] as const;

export default function FlowPage() {
  return (
    <main>
      <Navbar />

      <PageLead
        eyebrow="Flow"
        title="ご利用の流れ"
        description="初めての方でも安心して進められるよう、導入前の相談から運用開始後までサポートします。"
        illustration="flow"
      />

      <ProductFlowIllustration />

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Steps
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              導入までの流れ
            </h2>

            <p className="mt-6 leading-9 text-slate-600">
              お問い合わせ後、現在の運用状況を伺いながら、TOACHでどのように整えられるかをご案内します。
              導入を決めていない段階でもご相談いただけます。
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {flowSteps.map((step, index) => (
              <article
                key={step.step}
                className="card-hover grid gap-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[180px_1fr] sm:items-center"
              >
                <div className="relative min-h-[140px] rounded-2xl bg-gradient-to-br from-white to-sky-50">
                  <Image
                    src={flowVisuals[index].src}
                    alt={flowVisuals[index].alt}
                    fill
                    sizes="(min-width: 640px) 180px, 90vw"
                    className="object-contain p-4"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-bold text-blue-700">STEP {step.step}</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="まずは無料相談から始められます。"
        description="導入するか決まっていなくても問題ありません。今の管理方法を整理するだけでも、改善のヒントが見つかります。"
      />

      <Footer />
    </main>
  );
}
