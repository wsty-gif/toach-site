import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import CtaSection from "@/components/sections/CtaSection";
import FeatureDetailGrid from "@/components/sections/FeatureDetailGrid";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import ImprovementCycle from "@/components/sections/ImprovementCycle";
import OperationIllustration from "@/components/sections/OperationIllustration";
import OrganizationSystemSection from "@/components/sections/OrganizationSystemSection";
import ProductFlowIllustration from "@/components/sections/ProductFlowIllustration";
import { serviceItems, serviceUseCases } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "サービス紹介",
  description:
    "TOACHのマニュアル管理、タスク配信、承認フロー、ラーニング運用について紹介します。",
};

const serviceItemVisuals = [
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/organize_resume_utk5.svg",
    alt: "手順や資料を整理しているイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/time_management_30iu.svg",
    alt: "期限や予定を管理しているイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/High_five_u364.svg",
    alt: "確認が完了したことを表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/book_lover_mkck.svg",
    alt: "教材を読んで学習しているイラスト",
  },
] as const;

const serviceUseCaseVisuals = [
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/onboarding_o8mv.svg",
    alt: "新人向けに使い方を説明しているイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/product_tour_foyt.svg",
    alt: "画面を見ながら手順を確認しているイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/forgot_password_gi2d.svg",
    alt: "セキュリティやルール確認を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/navigation_lytx.svg",
    alt: "複数拠点への展開を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/design_tools_42tf.svg",
    alt: "業務の型を整えているイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/collection_u2np.svg",
    alt: "知識や資料を集約しているイラスト",
  },
] as const;

export default function ServicePage() {
  return (
    <main>
      <Navbar />

      <PageLead
        eyebrow="Service"
        title="サービス紹介"
        description="TOACHは、マニュアル、タスク、承認、教育をひとつの流れで管理できるクラウドサービスです。"
        illustration="service"
      />

      <OperationIllustration />

      <OrganizationSystemSection />

      <ProductFlowIllustration />

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              現場で使われるところまで支えるサービスです。
            </h2>

            <p className="mt-6 leading-9 text-slate-600">
              マニュアルを作って終わり、業務指示を出して終わりではありません。
              TOACHは、誰が確認し、誰が実施し、どこで承認が止まっているかまで見える化します。
              現場の教育と業務実施をつなげ、確認業務の負担を減らします。
            </p>
          </div>

          <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-2">
            {serviceItems.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[180px_1fr] sm:items-center"
              >
                <div className="relative min-h-[150px] rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 p-4">
                  <Image
                    src={serviceItemVisuals[index].src}
                    alt={serviceItemVisuals[index].alt}
                    fill
                    sizes="(min-width: 768px) 180px, 88vw"
                    className="object-contain p-4"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-700">
                    SERVICE {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeatureShowcase />

      <FeatureDetailGrid />

      <ImprovementCycle />

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Use Cases
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              このような運用に向いています。
            </h2>

            <p className="mt-6 leading-9 text-slate-600">
              多店舗・多拠点の周知、教育、確認業務など、情報共有と実施確認が必要な現場で活用できます。
            </p>
          </div>

          <div className="reveal-stagger mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceUseCases.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-44 bg-gradient-to-br from-white to-sky-50">
                  <Image
                    src={serviceUseCaseVisuals[index].src}
                    alt={serviceUseCaseVisuals[index].alt}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 768px) 48vw, 90vw"
                    className="object-contain p-5"
                    unoptimized
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="自社の運用に合うか、まずは相談できます。"
        description="現状のマニュアル管理、教育、タスク運用を伺いながら、TOACHでどこを整えられるかをご案内します。"
      />

      <Footer />
    </main>
  );
}
