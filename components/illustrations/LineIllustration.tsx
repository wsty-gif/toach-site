import Image from "next/image";

export type LineIllustrationVariant =
  | "worry"
  | "service"
  | "reason"
  | "flow"
  | "case"
  | "pricing"
  | "faq"
  | "company"
  | "contact";

type LineIllustrationProps = {
  variant?: LineIllustrationVariant;
  caption?: string;
};

const illustrations: Record<
  LineIllustrationVariant,
  {
    alt: string;
    caption: string;
    src: string;
  }
> = {
  worry: {
    alt: "フォルダと書類を整理しているイラスト",
    caption: "情報の管理や教育の仕組み化をしたいが、なかなか進まない...",
    src: "https://cdn.undraw.co/illustrations/folder-files_5www.svg",
  },
  service: {
    alt: "資料やコンテンツを作成している人物のイラスト",
    caption: "マニュアル・タスク・教育をひとつにまとめたい",
    src: "https://cdn.undraw.co/illustrations/create_8val.svg",
  },
  reason: {
    alt: "チームを選定している人物のイラスト",
    caption: "現場で使い続けられる仕組みにしたい",
    src: "https://cdn.undraw.co/illustrations/selecting-team_zehd.svg",
  },
  flow: {
    alt: "予定表を確認している人物のイラスト",
    caption: "導入までの流れを整理したい",
    src: "https://cdn.undraw.co/illustration/schedule_ry1w.svg",
  },
  case: {
    alt: "データを確認している人物のイラスト",
    caption: "他社ではどう活用している？",
    src: "https://cdn.undraw.co/illustration/visual-data_1eya.svg",
  },
  pricing: {
    alt: "財布とお金のイラスト",
    caption: "必要な範囲と費用感を知りたい",
    src: "https://cdn.undraw.co/illustration/wallet_diag.svg",
  },
  faq: {
    alt: "質問への回答を書いている人物のイラスト",
    caption: "導入前の疑問を解消したい",
    src: "https://cdn.undraw.co/illustration/my-answer_au1h.svg",
  },
  company: {
    alt: "チームでサービスを運営しているイラスト",
    caption: "運営会社の基本情報をご確認いただけます。",
    src: "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/team_spirit_hrr4.svg",
  },
  contact: {
    alt: "メールを作成している人物のイラスト",
    caption: "まずは相談してみたい",
    src: "https://cdn.undraw.co/illustration/compose-email_s6kf.svg",
  },
};

export default function LineIllustration({
  variant = "worry",
  caption,
}: LineIllustrationProps) {
  const illustration = illustrations[variant];

  return (
    <figure className="reveal-on-scroll soft-panel relative mx-auto w-full max-w-sm rounded-[1.5rem] p-5">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={illustration.src}
          alt={illustration.alt}
          fill
          sizes="(min-width: 1024px) 320px, 90vw"
          className="object-contain"
          unoptimized
        />
      </div>

      <figcaption className="mt-3 text-sm font-bold leading-7 text-blue-900">
        {caption ?? illustration.caption}
      </figcaption>
    </figure>
  );
}
