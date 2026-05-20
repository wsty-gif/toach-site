import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { caseStudies } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "導入事例・活用例",
  description:
    "TOACHの導入事例や活用例を、業種別のBefore / Afterで紹介します。",
};

const caseVisuals = [
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/group_selfie_ijc6.svg",
    alt: "多店舗サービス業のチームを表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/doctor_kw5l.svg",
    alt: "介護や福祉現場の確認業務を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/photocopy_gj0t.svg",
    alt: "製造やメンテナンスの手順管理を表すイラスト",
  },
] as const;

export default function CasesPage() {
  return (
    <main>
      <Navbar />
      <PageLead
        eyebrow="Cases"
        title="導入事例・活用例"
        description="実際の現場に近い活用例をもとに、TOACH導入後の変化を紹介します。マニュアル、タスク、教育、承認をまとめることで、確認業務の負担を減らします。"
        illustration="case"
      />

      <section className="px-4 py-14 sm:px-5 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl"
            >
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[240px_1fr] lg:items-center">
                <div className="relative min-h-[180px] rounded-3xl bg-gradient-to-br from-white to-sky-50">
                  <Image
                    src={caseVisuals[index].src}
                    alt={caseVisuals[index].alt}
                    fill
                    sizes="(min-width: 1024px) 240px, 90vw"
                    className="object-contain p-5"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-bold text-blue-700">{item.industry}</p>
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-950">
                    {item.title}
                  </h2>
                </div>
              </div>

              <div className="grid gap-6 px-6 pb-6 sm:px-8 sm:pb-8 md:grid-cols-2">
                <div className="rounded-2xl bg-red-50 p-6">
                  <h3 className="font-bold text-red-800">Before</h3>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {item.before.map((text) => (
                      <li key={text}>・{text}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-blue-50 p-6">
                  <h3 className="font-bold text-blue-800">After</h3>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {item.after.map((text) => (
                      <li key={text}>・{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          <p className="text-sm leading-7 text-slate-500">
            ※掲載している内容は活用イメージです。実績として掲載する場合は、実際の導入データに差し替えてください。
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
