import type { ReactNode } from "react";
import Link from "next/link";
import { primaryCta, secondaryCta } from "@/lib/siteContent";

type PageLeadVariant =
  | "worry"
  | "service"
  | "reason"
  | "flow"
  | "case"
  | "pricing"
  | "faq"
  | "company"
  | "contact";

type PageLeadProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  illustration?: PageLeadVariant;
  illustrationCaption?: string;
};

const guideCopy: Record<PageLeadVariant, { lead: string; points: string[] }> = {
  worry: {
    lead: "まずは、現場でよく出る困りごとから見ていきます。",
    points: ["資料が散らばる", "教え方に差が出る", "確認が後回しになる"],
  },
  service: {
    lead: "TOACHで何ができるかを、使う場面ごとに並べました。",
    points: ["手順をまとめる", "タスクを送る", "承認と履歴を残す"],
  },
  reason: {
    lead: "選ばれている理由を、機能名だけでなく流れで見られるようにしています。",
    points: ["現場で続けやすい", "迷いにくい画面", "管理しやすい流れ"],
  },
  flow: {
    lead: "導入の流れは難しくありません。相談から始めて、設定と説明を進めます。",
    points: ["相談", "初期設定", "運用開始"],
  },
  case: {
    lead: "導入前と導入後で、何が変わるのかを並べて見られます。",
    points: ["導入前", "導入後", "変化のポイント"],
  },
  pricing: {
    lead: "料金の考え方と、含まれる内容を先に確認できます。",
    points: ["基本プラン", "人数で変わらない", "導入支援は別途確認"],
  },
  faq: {
    lead: "よく聞かれるところを先にまとめました。気になる項目から読めます。",
    points: ["使い方", "料金", "導入までの流れ"],
  },
  company: {
    lead: "運営会社の基本情報をまとめています。必要なところだけ見ていただけます。",
    points: ["会社概要", "所在地", "連絡先"],
  },
  contact: {
    lead: "相談したいことをそのまま送ってください。短い内容でも大丈夫です。",
    points: ["導入相談", "資料請求", "料金確認"],
  },
};

export default function PageLead({
  eyebrow,
  title,
  description,
  illustration = "service",
  illustrationCaption,
}: PageLeadProps) {
  const guide = guideCopy[illustration];

  return (
    <section className="bg-[linear-gradient(180deg,#f4f8fd_0%,#ffffff_72%)] px-4 py-14 sm:px-5 sm:py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="section-marker text-sm">{eyebrow}</p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg md:leading-9">
            {description}
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex justify-center rounded-full bg-[#0b74de] px-5 py-3.5 text-center font-bold text-white transition hover:bg-[#074c9f] sm:px-6 sm:py-4"
            >
              {primaryCta.label}
            </Link>

            <Link
              href={secondaryCta.href}
              className="inline-flex justify-center rounded-full border border-blue-200 bg-white px-5 py-3.5 text-center font-bold text-[#0b74de] transition hover:bg-blue-50 sm:px-6 sm:py-4"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <article className="note-card overflow-hidden">
          <div className="border-b border-blue-100 bg-white px-6 py-5">
            <p className="section-marker text-sm">ひとこと</p>
            <p className="mt-3 text-lg font-bold text-slate-950">{guide.lead}</p>
          </div>

          <div className="grid gap-3 p-6 md:p-8">
            {guide.points.map((point) => (
              <div
                key={point}
                className="rounded-lg bg-[#f7fbff] px-4 py-3 text-sm font-bold text-slate-700"
              >
                {point}
              </div>
            ))}

            {illustrationCaption ? (
              <p className="pt-2 text-sm leading-7 text-slate-500">
                {illustrationCaption}
              </p>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
}
