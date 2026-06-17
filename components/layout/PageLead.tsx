import type { ReactNode } from "react";
import Image from "next/image";
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
    lead: "最初に、現場でつまずきやすいところから見ていきます。",
    points: ["資料が散らばる", "教え方が人による", "確認が後回しになる"],
  },
  service: {
    lead: "TOACHで何ができるのかを、使う場面ごとに分けて見られるようにしました。",
    points: ["手順をまとめる", "タスクを送る", "承認と履歴を残す"],
  },
  reason: {
    lead: "選ばれている理由を、機能名だけでなく使い方の流れで見られるようにしています。",
    points: ["現場で続けやすい", "迷いにくい画面", "管理しやすい流れ"],
  },
  flow: {
    lead: "導入の流れは複雑ではありません。相談から始めて、設定と説明を進めます。",
    points: ["相談", "初期設定", "運用開始"],
  },
  case: {
    lead: "導入前と導入後で、何が変わるのかを並べて見られます。",
    points: ["導入前", "導入後", "変化のポイント"],
  },
  pricing: {
    lead: "料金の仕組みと、含まれる内容を先に確認できます。",
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
    <section className="section-soft px-4 py-14 sm:px-5 sm:py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
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
              className="inline-flex justify-center rounded-full bg-[#0072ce] px-5 py-3.5 text-center font-bold text-white transition hover:bg-[#004f9f] sm:px-6 sm:py-4"
            >
              {primaryCta.label}
            </Link>

            <Link
              href={secondaryCta.href}
              className="inline-flex justify-center rounded-full border border-blue-200 bg-white px-5 py-3.5 text-center font-bold text-[#0072ce] transition hover:bg-blue-50 sm:px-6 sm:py-4"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <article className="note-card overflow-hidden">
          <div className="grid h-full gap-0 md:grid-cols-[0.95fr_1.05fr]">
            <div className="section-blue flex min-h-[260px] items-center justify-center p-5 md:p-7">
              <div className="relative h-[250px] w-full">
                <Image
                  src="/images/character-cutout.png"
                  alt="TOACHの案内キャラクター"
                  fill
                  sizes="(min-width: 1024px) 320px, 90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white p-6 md:p-8">
              <p className="section-marker text-sm">キャラクターがひとこと</p>
              <p className="mt-4 text-3xl font-bold tracking-tight text-[#0072ce]">
                まずは、見る順番から一緒に。
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                {guide.lead}
              </p>

              <div className="mt-6 grid gap-3">
                {guide.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-lg bg-[#f7fbff] px-4 py-3 text-sm font-bold text-slate-700"
                  >
                    {point}
                  </div>
                ))}
              </div>

              {illustrationCaption ? (
                <p className="mt-6 text-sm leading-7 text-slate-500">
                  {illustrationCaption}
                </p>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
