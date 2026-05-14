import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { flowSteps } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "ご利用の流れ",
  description:
    "TOACHのお問い合わせから導入、運用開始までの流れを分かりやすく紹介します。",
};

export default function FlowPage() {
  return (
    <main>
      <Navbar />
      <PageLead
        eyebrow="Flow"
        title="ご利用の流れ"
        description="初めての方でも安心して進められるよう、導入前の相談から初期設定、操作説明、運用開始後の改善までサポートします。"
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-5xl gap-6">
          {flowSteps.map((step) => (
            <article
              key={step.step}
              className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[120px_1fr]"
            >
              <p className="font-bold text-blue-700">STEP {step.step}</p>
              <div>
                <h2 className="text-2xl font-bold text-slate-950">{step.title}</h2>
                <p className="mt-4 leading-8 text-slate-600">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
