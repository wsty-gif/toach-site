import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import CtaSection from "@/components/sections/CtaSection";
import ImprovementCycle from "@/components/sections/ImprovementCycle";
import OperationIllustration from "@/components/sections/OperationIllustration";
import { reasons } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "選ばれる理由",
  description:
    "TOACHが選ばれる理由、競合との違い、導入後の安心感について紹介します。",
};

const reasonVisuals = [
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/designer_life_w96d.svg",
    alt: "業務の流れを整理しているイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/work_chat_erdt.svg",
    alt: "チームで確認しながら対応漏れを防ぐイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/startup_life_2du2.svg",
    alt: "教育や作業を効率化しているイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/online_world_mc1t.svg",
    alt: "知識をオンラインで共有しているイラスト",
  },
] as const;

export default function ReasonsPage() {
  return (
    <main>
      <Navbar />

      <PageLead
        eyebrow="Reasons"
        title="TOACHが選ばれる理由"
        description="現場で使い続けられることを大切に、伝達から実施、承認、教育までを一つにつなげます。"
        illustration="reason"
      />

      <OperationIllustration />

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Difference
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              競合との違いは、運用まで見据えていること。
            </h2>

            <p className="mt-6 leading-9 text-slate-600">
              単なるマニュアル置き場ではなく、タスク配信、実施報告、承認、教育履歴までをつなげて管理できます。
              現場で実際に使い続けられるよう、分かりやすさと定着支援を重視しています。
            </p>
          </div>

          <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-2">
            {reasons.map((item, index) => (
              <article
                key={item.title}
                className="card-hover overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-52 bg-gradient-to-br from-white to-sky-50">
                  <Image
                    src={reasonVisuals[index].src}
                    alt={reasonVisuals[index].alt}
                    fill
                    sizes="(min-width: 768px) 520px, 90vw"
                    className="object-contain p-6"
                    unoptimized
                  />
                </div>
                <div className="p-8">
                  <p className="text-sm font-bold text-blue-700">
                    REASON {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImprovementCycle />

      <section className="bg-blue-700 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            無理な営業はしません。
          </h2>

          <p className="mt-6 leading-8 text-blue-100">
            現在の運用を伺い、必要な情報を分かりやすくお伝えします。
            比較検討中の段階でも安心してご相談ください。
          </p>
        </div>
      </section>

      <CtaSection
        title="TOACHが自社に合うか確認してみませんか？"
        description="現場の課題や管理方法を伺いながら、どのように運用を整えられるかをご案内します。"
      />

      <Footer />
    </main>
  );
}
