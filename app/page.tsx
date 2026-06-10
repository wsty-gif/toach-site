import Link from "next/link";
import Image from "next/image";
import ToachSceneIllustration from "@/components/illustrations/ToachSceneIllustration";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import {
  flowSteps,
  primaryCta,
  secondaryCta,
  siteConfig,
} from "@/lib/siteContent";

const problemPersonas = [
  {
    title: "管理者・本部のあなた",
    image: "https://cdn.undraw.co/illustrations/questions_g2px.svg",
    alt: "疑問を持つビジネスパーソンのイラスト",
    items: [
      ["資料が散在", "必要な情報を探す時間が増えている"],
      ["確認が大変", "誰が見たか、実施したかを追いきれない"],
      ["運用が属人化", "担当者ごとに進め方が変わってしまう"],
    ],
  },
  {
    title: "現場・教育担当のあなた",
    image: "https://cdn.undraw.co/illustrations/problem-solving_8lg7.svg",
    alt: "課題を整理している人物のイラスト",
    items: [
      ["教育に時間がかかる", "新人や異動者への説明が毎回発生する"],
      ["抜け漏れが起きる", "やるべきことや期限を見落としやすい"],
      ["定着が見えない", "研修後に理解できたか確認しづらい"],
    ],
  },
] as const;

const pillars = [
  {
    title: "標準化",
    subtitle: "マニュアル",
    description:
      "業務手順や社内ルールを見える化し、誰でも同じ品質で業務を行える状態にします。",
    illustration: "standardize",
  },
  {
    title: "実行・実践",
    subtitle: "タスク管理",
    description:
      "やるべきことを明確にし、進捗や抜け漏れをリアルタイムで可視化します。",
    illustration: "execute",
  },
  {
    title: "教育・定着",
    subtitle: "ラーニング",
    description:
      "テキスト・動画・テストで理解を深め、理解度や定着度を確認できます。",
    illustration: "educate",
  },
] as const;

const featureGroups = [
  {
    category: "マニュアル管理",
    description: "現場で使う手順や社内ルールを、探しやすく見やすい形で管理します。",
    illustration: "manual",
    features: [
      "マニュアル作成・閲覧",
      "カテゴリ管理",
      "画像・動画の添付",
      "お気に入り",
      "閲覧履歴",
      "更新履歴",
    ],
  },
  {
    category: "タスク管理",
    description: "マニュアルと実施タスクを紐づけ、完了状況まで追えるようにします。",
    illustration: "task",
    features: [
      "タスク配信",
      "グループタスク",
      "定期タスク",
      "期限管理",
      "進捗確認",
      "完了報告",
    ],
  },
  {
    category: "承認・確認",
    description: "実施報告を受け取り、承認・差し戻し・履歴確認まで管理します。",
    illustration: "approval",
    features: [
      "承認待ち管理",
      "差し戻し",
      "確認履歴",
      "対応漏れ防止",
      "管理者確認",
      "完了ステータス",
    ],
  },
  {
    category: "教育・ラーニング",
    description: "教育コンテンツを配信し、受講状況や理解度まで確認できます。",
    illustration: "learning",
    features: [
      "コース作成",
      "テキスト教材",
      "動画教材",
      "理解度テスト",
      "受講状況管理",
      "合格状況管理",
    ],
  },
  {
    category: "ユーザー・組織管理",
    description: "利用者や部署、権限を整理し、運用範囲を分かりやすく管理します。",
    illustration: "security",
    features: [
      "ユーザー管理",
      "部署別管理",
      "権限管理",
      "マスター管理",
      "対象者設定",
      "役割別管理",
    ],
  },
  {
    category: "共有・レポート",
    description: "社内外への共有やQR共有、進捗の見える化で改善につなげます。",
    illustration: "report",
    features: [
      "社内共有",
      "社外共有",
      "QRコード共有",
      "レポート確認",
      "ダッシュボード",
      "進捗の見える化",
    ],
  },
] as const;

const benefits = [
  {
    title: "生産性の向上",
    description: "業務の標準化でムダを削減し、組織全体の生産性向上を支えます。",
  },
  {
    title: "対応漏れの防止",
    description: "タスクの抜け漏れや確認漏れを防ぎ、ミスやトラブルを未然に減らします。",
  },
  {
    title: "教育負担の軽減",
    description: "教育の仕組み化により、人に依存せず効率的に育成できます。",
  },
  {
    title: "コンプライアンス強化",
    description: "社内ルールや研修の運用を仕組み化し、意識を組織全体に浸透させます。",
  },
  {
    title: "ナレッジ共有・活用",
    description: "社内の知識やノウハウを資産として蓄積し、組織の力を底上げします。",
  },
];

const useCases = [
  "新人教育・OJT",
  "社内マニュアル",
  "コンプライアンス研修",
  "多店舗・拠点運営",
  "業務標準化",
  "ナレッジ共有",
  "定期点検・チェック業務",
  "承認が必要な報告業務",
];

const useCaseVisuals = [
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/back_to_school_inwc.svg",
    alt: "新人教育を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/taking_notes_tjaf.svg",
    alt: "社内マニュアルを確認するイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/target_kriv.svg",
    alt: "コンプライアンス研修を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/mobile_browsers_lib5.svg",
    alt: "多店舗や拠点運営を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/on_the_way_ldaq.svg",
    alt: "業務標準化を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/conversation_h12g.svg",
    alt: "ナレッジ共有を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/focus_sey6.svg",
    alt: "定期点検やチェック業務を表すイラスト",
  },
  {
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/thoughts_e49y.svg",
    alt: "承認が必要な報告業務を表すイラスト",
  },
] as const;

function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-slate-950";
  const descriptionColor = tone === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow-pill text-sm font-bold uppercase tracking-[0.2em] ${center ? "mx-auto" : ""}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-5 text-3xl font-bold tracking-tight md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 leading-9 ${descriptionColor}`}>{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#e0f2fe_0%,#ffffff_48%,#f0fdf4_100%)] px-5 py-16 md:py-24">
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="eyebrow-pill text-sm font-bold tracking-[0.16em]">
              {siteConfig.tagline}
            </p>

            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              伝えた業務を、
              <br />
              実施されるところまで。
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 md:text-lg md:leading-9">
              TOACHは、マニュアル・タスク・承認・教育を一元管理し、
              現場の標準化から実行、定着までをつなぐクラウドサービスです。
            </p>

            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href={primaryCta.href}
                className="rounded-full bg-gradient-to-r from-blue-700 to-sky-600 px-7 py-4 text-center font-bold text-white shadow-xl shadow-blue-700/20 transition hover:from-blue-800 hover:to-blue-700"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-bold text-slate-900 transition hover:bg-slate-50"
              >
                {secondaryCta.label}
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm">
              {["標準化", "実行管理", "教育定着"].map((item) => (
                <div
                  key={item}
                  className="soft-panel rounded-2xl px-4 py-3 text-center font-bold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="soft-panel relative rounded-[2rem] p-5 md:p-6">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-bold text-blue-200">TOACH Dashboard</p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-blue-100">
                    Live
                  </span>
                </div>
                <div className="mt-6 grid gap-3">
                  {["マニュアル確認", "タスク完了", "承認待ち", "教育進捗"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/10 p-4"
                    >
                      <span>{item}</span>
                      <span className="rounded-full bg-blue-400/20 px-3 py-1 text-xs text-blue-100">
                        管理中
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-400 p-5">
                  <p className="text-sm text-blue-100">今月の確認状況</p>
                  <p className="mt-2 text-3xl font-bold">87%</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Problem"
            title="組織でこんなお悩みありませんか？"
            description="情報管理・教育・実行確認で起こりやすい課題を、立場ごとに整理しました。"
          />

          <div className="reveal-stagger mt-10 grid gap-6 lg:grid-cols-2">
            {problemPersonas.map((persona) => (
              <article
                key={persona.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-100 bg-slate-50 px-6 py-5 text-center">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {persona.title}
                  </h3>
                </div>
                <div className="grid gap-5 p-5 sm:grid-cols-[170px_1fr] sm:items-center">
                  <div className="relative min-h-[210px] rounded-2xl bg-blue-50">
                    <Image
                      src={persona.image}
                      alt={persona.alt}
                      fill
                      sizes="(min-width: 1024px) 170px, 80vw"
                      className="object-contain p-4"
                      unoptimized
                    />
                  </div>
                  <div className="grid gap-3">
                    {persona.items.map(([label, text]) => (
                      <div
                        key={label}
                        className="relative rounded-2xl bg-white p-4 shadow-md shadow-slate-200/80 ring-1 ring-slate-100 sm:before:absolute sm:before:left-[-10px] sm:before:top-1/2 sm:before:h-5 sm:before:w-5 sm:before:-translate-y-1/2 sm:before:rotate-45 sm:before:bg-white sm:before:ring-1 sm:before:ring-slate-100"
                      >
                        <p className="text-sm font-bold text-blue-700">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-bold leading-7 text-slate-800">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Concept"
            title="TOACHが、組織の「仕組み化」を実現します"
            description="標準化・実行・教育の3つをつなげることで、情報共有だけで終わらない一気通貫の運用をつくります。"
            center
          />

          <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <ToachSceneIllustration variant={item.illustration} className="h-48" />
                <div className="p-7">
                  <p className="text-sm font-bold text-blue-700">{item.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="All Features"
            title="TOACHの機能をすべて洗い出し"
            description="マニュアル作成からタスク配信、教育、承認、共有、レポートまで、現場運用に必要な機能をまとめています。"
          />

          <div className="reveal-stagger mt-12 grid gap-6 lg:grid-cols-2">
            {featureGroups.map((group) => (
              <article
                key={group.category}
                className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[150px_1fr]"
              >
                <ToachSceneIllustration
                  variant={group.illustration}
                  className="h-40"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    {group.category}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {group.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Benefits"
            title="導入で期待できる効果"
            description="対応漏れを減らし、教育と業務を標準化することで、組織全体の生産性と品質向上を支えます。"
            tone="dark"
          />

          <div className="reveal-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6"
              >
                <h3 className="font-bold text-blue-200">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Use Cases"
            title="幅広いシーンで活用できます"
            description="NotePMのように活用シーンを一覧化し、TOACHで使える場面がひと目で分かるように整理しました。"
            center
          />

          <div className="reveal-stagger mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item, index) => (
              <article
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="relative mb-4 h-24 overflow-hidden rounded-2xl bg-gradient-to-br from-white to-sky-50">
                  <Image
                    src={useCaseVisuals[index].src}
                    alt={useCaseVisuals[index].alt}
                    fill
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 88vw"
                    className="object-contain p-3"
                    unoptimized
                  />
                </div>
                <h3 className="font-bold text-slate-950">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Flow"
            title="導入までの流れ"
            description="相談から初期設定、操作説明、運用改善までサポートします。"
          />

          <div className="reveal-stagger mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {flowSteps.slice(0, 4).map((step) => (
              <article
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="font-bold text-blue-700">STEP {step.step}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="まずは、今の運用を一緒に整理しませんか？"
        description="導入を決めていない段階でも大丈夫です。マニュアル・教育・タスク運用の課題を伺いながら、TOACHで整えられる範囲をご案内します。"
      />

      <Footer />
    </main>
  );
}
