import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { faqItems } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "TOACHの料金、導入方法、スマートフォン利用、サポート体制など、よくある質問をまとめました。",
};

const faqHighlights = [
  {
    title: "使いやすさ",
    description: "システムに詳しくない方でも使えるかを確認できます。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/empty_xct9.svg",
    alt: "はじめてでも使いやすいことを表すイラスト",
  },
  {
    title: "導入期間",
    description: "運用開始までの流れや期間感を確認できます。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/weather_d9t2.svg",
    alt: "導入スケジュールを確認するイラスト",
  },
  {
    title: "料金・契約",
    description: "費用感や相談範囲について確認できます。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/online_shopping_ga73.svg",
    alt: "料金や契約内容を確認するイラスト",
  },
  {
    title: "サポート",
    description: "導入後の相談や運用支援について確認できます。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/lost_bqr2.svg",
    alt: "困ったときのサポートを表すイラスト",
  },
] as const;

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navbar />
      <PageLead
        eyebrow="FAQ"
        title="よくある質問"
        description="導入前によくいただく質問をまとめました。小さな疑問でもお気軽にご相談ください。"
        illustration="faq"
      />

      <section className="px-4 py-14 sm:px-5 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="reveal-stagger grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {faqHighlights.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-36 bg-gradient-to-br from-white to-sky-50">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 250px, (min-width: 768px) 45vw, 90vw"
                    className="object-contain p-4"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 space-y-5">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/40 sm:p-6"
            >
              <summary className="cursor-pointer text-lg font-bold text-slate-950">
                {item.question}
              </summary>
              <p className="mt-4 leading-8 text-slate-600">{item.answer}</p>
            </details>
          ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
