import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import { flowSteps, primaryCta, secondaryCta, siteConfig } from "@/lib/siteContent";

const focusCards = [
  {
    title: "マニュアル",
    description: "手順やルールを、現場で見返しやすい形に整えます。",
    image: "/images/features/manuals.png",
    alt: "マニュアル画面のイメージ",
  },
  {
    title: "タスク",
    description: "やることと期限をそろえて、動き出しを軽くします。",
    image: "/images/features/tasks.png",
    alt: "タスク画面のイメージ",
  },
  {
    title: "承認・確認",
    description: "報告の流れを見やすくして、後追いを減らします。",
    image: "/images/features/approval.png",
    alt: "承認画面のイメージ",
  },
] as const;

const quickPoints = ["手順をそろえる", "やることを渡す", "確認を残す"] as const;

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="bg-[linear-gradient(180deg,#f1f8ff_0%,#ffffff_70%)] px-5 pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.98fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow-pill text-sm font-bold">{siteConfig.tagline}</p>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              現場のやること、
              <br />
              すぐ伝わる。
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 md:text-lg md:leading-9">
              TOACHは、マニュアル・タスク・承認・教育をひとつにまとめる現場運用向けクラウドです。
              探す、伝える、確認する手間を減らして、日々の仕事を進めやすくします。
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href={primaryCta.href}
                className="inline-flex justify-center rounded-full bg-[#0b74de] px-7 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-[#074c9f]"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex justify-center rounded-full border border-blue-200 bg-white px-7 py-4 font-bold text-[#0b74de] transition hover:bg-blue-50"
              >
                {secondaryCta.label}
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {quickPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-blue-100"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="note-card overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[1fr_0.85fr]">
              <div className="grid gap-3 bg-white p-4 md:p-5">
                {focusCards.map((card) => (
                  <article
                    key={card.title}
                    className="grid grid-cols-[92px_1fr] items-center gap-4 rounded-lg border border-slate-100 bg-[#f7fbff] p-3"
                  >
                    <div className="relative h-[72px] rounded-md bg-white">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="92px"
                        className="object-contain p-2"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-950">{card.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="border-t border-blue-100 bg-[#f7fbff] p-5 md:border-l md:border-t-0 md:p-6">
                <p className="section-marker text-sm">ひとこと</p>
                <p className="mt-4 text-2xl font-bold tracking-tight text-[#0b74de]">
                  まずは、順番が分かれば十分です。
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  TOACHは、手順をまとめるところから始めて、必要な人に届け、終わったかを見返すところまでを扱います。
                </p>

                <div className="mt-6 grid gap-3">
                  {quickPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-lg bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="section-marker text-sm">TOACHの使いどころ</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              まず見ておきたい3つの使いどころ
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg md:leading-9">
              画面を追うだけではなく、現場でそのまま使いやすいことを大事にしています。
            </p>
          </div>

          <div className="reveal-stagger mt-12 grid gap-6 lg:grid-cols-3">
            {focusCards.map((card) => (
              <article key={card.title} className="note-card overflow-hidden">
                <div className="relative h-44 bg-[#f7fbff]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 90vw"
                    className="object-contain p-5"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-950">{card.title}</h3>
                  <p className="mt-3 leading-8 text-slate-600">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="section-marker text-sm">Flow</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              導入の流れも、むずかしくしません
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg md:leading-9">
              相談から運用開始までを、短い言葉でまとめました。
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {flowSteps.slice(0, 4).map((step) => (
              <article key={step.step} className="note-card p-6">
                <p className="font-bold text-[#0b74de]">STEP {step.step}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="今のやり方に合わせて、無理なく始められます。"
        description="導入を決めていない段階でも大丈夫です。気になっているところから、順番にご相談ください。"
      />

      <Footer />
    </main>
  );
}
