import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { serviceItems } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "サービス紹介",
  description:
    "TOACHのマニュアル管理、タスク配信、承認フロー、ラーニング運用について紹介します。",
};

export default function ServicePage() {
  return (
    <main>
      <Navbar />
      <PageLead
        eyebrow="Service"
        title="サービス紹介"
        description="TOACHは、マニュアル、タスク、承認、教育をひとつの流れで管理できるクラウドサービスです。"
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              現場で使われるところまで支えるサービスです。
            </h2>
            <p className="mt-6 leading-9 text-slate-600">
              マニュアルを作って終わり、業務指示を出して終わりではありません。
              TOACHは、誰が確認し、誰が実施し、どこで承認が止まっているかまで見える化します。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            このような企業に向いています
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "多店舗・多拠点の現場運営をしている企業",
              "新人教育や異動後の教育を標準化したい企業",
              "マニュアル、タスク、承認をまとめて管理したい企業",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="font-bold leading-8 text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}