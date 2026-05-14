import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { siteConfig } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "TOACHのサービス内容、料金、導入方法についてお気軽にお問い合わせください。",
};

export default function ContactPage() {
  const mailHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    "TOACHのデモ・導入相談",
  )}`;

  return (
    <main>
      <Navbar />
      <PageLead
        eyebrow="Contact"
        title="お問い合わせ"
        description="サービス内容、料金、導入方法、自社で使えるかどうかなど、どのような内容でもお気軽にお問い合わせください。"
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              このようなご相談を受け付けています
            </h2>

            <ul className="mt-6 space-y-3 leading-8 text-slate-600">
              <li>・サービス内容を詳しく知りたい</li>
              <li>・料金を確認したい</li>
              <li>・自社の運用に合うか相談したい</li>
              <li>・導入までの流れを知りたい</li>
              <li>・まずは資料だけ見たい</li>
            </ul>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-slate-950">無理な営業は行いません</h3>
              <p className="mt-3 leading-8 text-slate-600">
                お問い合わせいただいたからといって、すぐに導入を決める必要はありません。
                比較検討中の方も安心してご相談ください。
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-700 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">メールで相談する</h2>

            <p className="mt-5 leading-8 text-blue-100">
              まだ導入を決めていない段階でも大丈夫です。
              現在の状況を伺い、必要な情報を分かりやすくご案内します。
            </p>

            <Link
              href={mailHref}
              className="mt-8 inline-block rounded-full bg-white px-6 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              {siteConfig.contactEmail} に送る
            </Link>

            <p className="mt-6 text-sm leading-7 text-blue-100">
              通常、2〜3営業日以内に担当者よりご連絡いたします。
            </p>

            <div className="mt-8 border-t border-white/20 pt-8">
              <p className="text-sm text-blue-100">電話でのお問い合わせ</p>
              <p className="mt-2 text-2xl font-bold">{siteConfig.phone}</p>
              <p className="mt-2 text-sm text-blue-100">受付時間：平日 9:00〜18:00</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
