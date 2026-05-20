import Image from "next/image";

export type ToachSceneIllustrationVariant =
  | "manual"
  | "task"
  | "learning"
  | "approval"
  | "search"
  | "security"
  | "report"
  | "support"
  | "standardize"
  | "execute"
  | "educate";

type ToachSceneIllustrationProps = {
  variant: ToachSceneIllustrationVariant;
  className?: string;
};

const illustrations: Record<
  ToachSceneIllustrationVariant,
  {
    alt: string;
    src: string;
  }
> = {
  manual: {
    alt: "マニュアルや資料を整理するイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/upload_87y9.svg",
  },
  task: {
    alt: "予定やタスクを確認するイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/to_do_list_a49b.svg",
  },
  learning: {
    alt: "チームで学習や教育を進めるイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/studying_s3l7.svg",
  },
  approval: {
    alt: "質問への回答や確認を行うイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_deal_cpi9.svg",
  },
  search: {
    alt: "必要な情報やデータを確認するイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/analysis_4jis.svg",
  },
  security: {
    alt: "安全に情報を扱うイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/server_status_5pbv.svg",
  },
  report: {
    alt: "レポートやデータを確認するイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/report_mx0a.svg",
  },
  support: {
    alt: "問い合わせや相談を送るイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/instant_support_elxh.svg",
  },
  standardize: {
    alt: "業務の型を整理しているイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/product_teardown_elol.svg",
  },
  execute: {
    alt: "実行する業務を確認しているイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/work_time_lhoj.svg",
  },
  educate: {
    alt: "教育内容を学んでいるイラスト",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_list_4boi.svg",
  },
};

export default function ToachSceneIllustration({
  variant,
  className = "",
}: ToachSceneIllustrationProps) {
  const illustration = illustrations[variant];

  return (
    <figure
      className={`relative flex min-h-[160px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-white via-sky-50 to-blue-50 p-4 ${className}`}
    >
      <div className="relative h-full min-h-[132px] w-full">
        <Image
          src={illustration.src}
          alt={illustration.alt}
          fill
          sizes="(min-width: 1024px) 220px, (min-width: 768px) 38vw, 86vw"
          className="object-contain"
          unoptimized
        />
      </div>
    </figure>
  );
}
