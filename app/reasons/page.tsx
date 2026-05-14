import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLead from "@/components/layout/PageLead";
import { reasons } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "選ばれる理由",
  description:
    "TOACHが現場教育・マニュアル運用の基盤として選ばれる理由を紹介します。",
};

const operationFlow = [
  { label: "作成", text: "手順を整える" },
  { label: "配信", text: "対象者へ届ける" },
  { label: "確認", text: "進捗を見る" },
  { label: "改善", text: "次の教育へ反映" },
] as const;

const strengths = [
  {
    title: "情報が探しやすい",
    description:
      "カテゴリ、閲覧履歴、お気に入りを軸に、必要なマニュアルへ短い導線でアクセスできます。",
  },
  {
    title: "実行状況まで追える",
    description:
      "共有して終わりではなく、誰が確認し、誰が完了したかまで管理できます。",
  },
  {
    title: "管理者の確認負担を減らす",
    description:
      "進捗、未完了、承認待ちを見える化し、個別確認にかかる時間を減らします。",
  },
] as const;

export default function ReasonsPage() {
  return (
    <main>
      <Navbar />
      <PageLead
        eyebrow="Reasons"
        title="TOACHが選ばれる理由"
        description="マニュアルを作って終わらせず、共有、実行、確認、改善までをひとつの流れにします。現場に届き、使われ続ける教育運用を支えることがTOACHの強みです。"
      />

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Why TOACH
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
              現場の「伝わらない」「続かない」を、運用の仕組みで解決します。
            </h2>
            <p className="mt-6 leading-9 text-slate-600">
              TOACHは、情報を置くだけの保管場所ではありません。マニュアル、教育タスク、承認、進捗確認をつなげることで、
              現場スタッフが迷わず動ける状態と、管理者が状況を把握しやすい状態を同時につくります。
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-xl">
            <div className="grid gap-3">
              {operationFlow.map((step, index) => (
                <div
                  key={step.label}
                  className={`flex items-center justify-between rounded-2xl border p-5 ${
                    index === 0
                      ? "border-blue-400 bg-blue-600"
                      : "border-white/10 bg-white/10"
                  }`}
                >
                  <span className="text-sm font-bold text-blue-100">{step.label}</span>
                  <strong className="text-lg">{step.text}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Reasons
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              4つの選ばれる理由
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reasons.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-black text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-5 leading-8 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Operations
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
              毎日の確認が、もっと軽くなります。
            </h2>
            <p className="mt-6 leading-9 text-slate-600">
              複数のExcel、チャット、紙マニュアルに分かれていた教育運用をひとつの場所にまとめることで、
              「作った」「送った」「見てもらった」を追いやすくします。担当者の確認作業を減らし、必要なフォローに時間を使えます。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-5 py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
            Next Step
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            現場教育の運用を、TOACHで整える。
          </h2>
          <p className="mt-6 leading-8 text-blue-100">
            現在のマニュアル管理や教育運用を伺いながら、TOACHでどこを効率化できるかをご案内します。
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
