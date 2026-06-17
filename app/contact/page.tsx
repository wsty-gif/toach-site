import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "TOACHのサービス内容、料金、導入方法についてお気軽にお問い合わせください。",
};

const contactTopics = [
  {
    title: "導入相談",
    description: "運用課題や導入イメージを相談できます。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/relaxing_at_home_9tyc.svg",
    alt: "オンラインで相談しているイラスト",
  },
  {
    title: "資料請求・料金確認",
    description: "検討に必要な資料や費用感を確認できます。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/successful_purchase_uyin.svg",
    alt: "資料請求や料金確認を表すイラスト",
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <PageLead
        eyebrow="Contact"
        title="お問い合わせ"
        description="導入相談、サービス資料請求、料金確認など、どのような内容でもお気軽にお問い合わせください。"
        illustration="contact"
      />

      <section className="section-soft px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-marker text-sm">
              Form
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl">
              必要事項をご入力ください。
            </h2>

            <p className="mt-6 leading-9 text-slate-600">
              送信いただいた内容は、担当者が確認し、通常1〜2営業日以内にご連絡します。
              まだ導入を決めていない段階でも問題ありません。
            </p>

            <div className="note-card mt-8 p-6">
              <h3 className="font-bold text-slate-950">
                このようなご相談を受け付けています
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>・サービス内容を確認したい</li>
                <li>・サービス資料がほしい</li>
                <li>・料金を確認したい</li>
                <li>・自社の運用に合うか相談したい</li>
                <li>・導入までの流れを知りたい</li>
              </ul>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contactTopics.map((item) => (
                <article
                  key={item.title}
                  className="note-card overflow-hidden"
                >
                  <div className="relative h-32 bg-[#f7fbff]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 640px) 240px, 90vw"
                      className="object-contain p-4"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="note-card mt-6 bg-[#f7fbff] p-6">
              <h3 className="font-bold">無理な営業は行いません</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                お問い合わせいただいたからといって、すぐに導入を決める必要はありません。
                比較検討中の方も安心してご相談ください。
              </p>
            </div>

            <div className="mt-6 text-sm leading-7 text-slate-500">
              <p>送信先：{siteConfig.contactEmail}</p>
              <p>電話：{siteConfig.phone}</p>
            </div>
          </div>

          <Suspense fallback={<div className="note-card p-8">フォームを読み込んでいます...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
