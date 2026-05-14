import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { faqItems } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "TOACHの料金、導入方法、スマートフォン利用、サポート体制など、よくある質問をまとめました。",
};

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
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl space-y-5">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-bold text-slate-950">
                {item.question}
              </summary>
              <p className="mt-4 leading-8 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
