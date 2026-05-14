import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { siteConfig } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "TOACHを提供する会社の概要、事業内容、代表メッセージを紹介します。",
};

export default function CompanyPage() {
  const rows = [
    ["会社名", siteConfig.companyName],
    ["所在地", siteConfig.address],
    [
      "事業内容",
      "現場教育・マニュアル管理・タスク配信・ラーニング運用を支援するクラウドサービスの開発・提供",
    ],
    ["サービス名", siteConfig.serviceName],
    ["対応エリア", siteConfig.area],
    ["連絡先", siteConfig.contactEmail],
  ];

  return (
    <main>
      <Navbar />
      <PageLead
        eyebrow="Company"
        title="会社概要"
        description="現場で使い続けられる仕組みを届けるために、分かりやすさと運用定着を大切にしています。"
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {rows.map(([label, value]) => (
              <div
                key={label}
                className="grid border-b border-slate-200 last:border-b-0 md:grid-cols-[200px_1fr]"
              >
                <div className="bg-slate-50 p-5 font-bold text-slate-950">
                  {label}
                </div>
                <div className="p-5 leading-8 text-slate-700">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-50 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-950">代表メッセージ</h2>

            <p className="mt-5 leading-9 text-slate-600">
              多くの現場では、マニュアル、教育、業務指示、承認が別々に管理されています。
              その状態でも仕事は進みますが、忙しくなるほど確認の手間や対応漏れが増えていきます。
            </p>

            <p className="mt-5 leading-9 text-slate-600">
              TOACHは、現場で使い続けられる分かりやすい仕組みを通じて、教育と業務実行をつなげることを目指しています。
              初めてシステムを導入する会社にも、安心してご相談いただけるよう丁寧にサポートします。
            </p>

            <p className="mt-6 font-bold text-slate-950">
              {siteConfig.companyName}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
