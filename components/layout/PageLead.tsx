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

const guideCopy: Record<
  PageLeadVariant,
  { lead: string; points: string[] }
> = {
  worry: {
    lead: "今のお困りごとを、TOACHがやさしく整理してご案内します。",
    points: ["情報の散在", "教育のばらつき", "確認漏れ"],
  },
  service: {
    lead: "マニュアル、タスク、承認、教育の流れを、順番に見ていきましょう。",
    points: ["何ができるか", "どこが便利か", "どう使うか"],
  },
  reason: {
    lead: "なぜ選ばれるのかを、分かりやすくまとめてお伝えします。",
    points: ["定着しやすい", "使いやすい", "運用しやすい"],
  },
  flow: {
    lead: "導入の流れはむずかしくありません。順番に確認していきましょう。",
    points: ["相談から開始", "初期設定", "運用定着"],
  },
  case: {
    lead: "実際の活用イメージを、Before / After で見てみましょう。",
    points: ["改善前", "導入後", "運用効果"],
  },
  pricing: {
    lead: "料金の考え方と、含まれる機能を落ち着いて確認できます。",
    points: ["基本プラン", "人数変動なし", "個別支援"],
  },
  faq: {
    lead: "気になるところから、ひとつずつ安心して確認しましょう。",
    points: ["使いやすさ", "料金", "導入期間"],
  },
  company: {
    lead: "運営会社の基本情報を、必要なところからご覧いただけます。",
    points: ["会社概要", "所在地", "連絡先"],
  },
  contact: {
    lead: "相談したい内容を短くまとめて送れます。お気軽にどうぞ。",
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
    <section className="section-soft px-5 py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="section-marker text-sm">{eyebrow}</p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-9 text-slate-600 md:text-lg">
            {description}
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Link
              href={primaryCta.href}
              className="inline-flex justify-center rounded-full bg-[#0072ce] px-6 py-3.5 text-center font-bold text-white transition hover:bg-[#004f9f]"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex justify-center rounded-full border border-blue-200 bg-white px-6 py-3.5 text-center font-bold text-[#0072ce] transition hover:bg-blue-50"
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
                  src="/images/character-guide.png"
                  alt="TOACHの案内キャラクター"
                  fill
                  sizes="(min-width: 1024px) 320px, 90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white p-6 md:p-8">
              <p className="section-marker text-sm">キャラクター案内</p>
              <p className="mt-4 text-3xl font-bold tracking-tight text-[#0072ce]">
                TOACHを、やさしくご案内します。
              </p>
              <p className="mt-5 text-base leading-9 text-slate-700">
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

              <div className="mt-6 flex flex-wrap gap-2">
                {guide.points.map((point) => (
                  <span
                    key={`${point}-chip`}
                    className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#0072ce]"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
