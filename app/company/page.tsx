import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { companyProfileRows } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社TETOTEの会社概要です。所在地、電話番号、設立、資本金、代表者、事業内容などをご紹介します。",
};

export default function CompanyPage() {
  return (
    <main>
      <Navbar />

      <PageLead
        eyebrow="Company"
        title="会社概要"
        description="株式会社TETOTEの基本情報をご紹介します。"
      />

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Profile
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              企業概要
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {companyProfileRows.map(([label, value]) => (
              <div
                key={label}
                className="grid border-b border-slate-200 last:border-b-0 md:grid-cols-[240px_1fr]"
              >
                <div className="bg-slate-50 p-5 font-bold text-slate-950">
                  {label}
                </div>
                <div className="p-5 leading-8 text-slate-700">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}