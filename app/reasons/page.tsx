import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { reasons } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "選ばれる理由",
  description:
    "TOACHが選ばれる理由、競合との違い、導入後の安心感について紹介します。",
};

export default function ReasonsPage() {
  return (
    <main>
      <Navbar />
      <PageLead
        eyebrow="Reasons"
        title="TOACHが選ばれる理由"
        description="現場で使い続けられることを大切に、伝達から実施、承認、教育までを一つにつなげます。"
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              競合との違いは、運用まで見据えていること。
            </h2>
            <p className="mt-6 leading-9 text-slate-600">
              単なるマニュアル置き場ではなく、タスク配信、実施報告、承認、教育履歴までをつなげて管理できます。
              現場で実際に使い続けられるよう、分かりやすさと定着支援を重視しています。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reasons.map((item) => (
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

      <section className="bg-blue-700 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">無理な営業はしません。</h2>
          <p className="mt-6 leading-8 text-blue-100">
            現在の運用を伺い、必要な情報を分かりやすくお伝えします。
            比較検討中の段階でも安心してご相談ください。
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}