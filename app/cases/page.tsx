import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { caseStudies } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "導入事例・活用例",
  description:
    "TOACHの導入事例や活用例を、業種別のBefore / Afterで紹介します。",
};

export default function CasesPage() {
  return (
    <main>
      <Navbar />
      <PageLead
        eyebrow="Cases"
        title="導入事例・活用例"
        description="実際の現場に近い活用例をもとに、TOACH導入後の変化を紹介します。マニュアル、タスク、教育、承認をまとめることで、確認業務の負担を減らします。"
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-8">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="font-bold text-blue-700">{item.industry}</p>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-950">
                {item.title}
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
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
