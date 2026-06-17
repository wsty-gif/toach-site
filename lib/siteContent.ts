export const siteConfig = {
  serviceName: "TOACH",
  companyName: "株式会社TETOTE",
  tagline: "現場の手順と伝達を、ひとつに",
  description:
    "TOACHは、手順書、タスク、承認、教育をまとめて扱える現場運用向けクラウドです。",
  contactEmail: "info@example.com",
  phone: "075-604-1001",
  address: "京都府京都市下京区",
  area: "全国",
} as const;

export const navLinks = [
  { label: "サービス紹介", href: "/service" },
  { label: "選ばれる理由", href: "/reasons" },
  { label: "導入事例", href: "/cases" },
  { label: "ご利用の流れ", href: "/flow" },
  { label: "料金プラン", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "会社概要", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
] as const;

export const primaryCta = {
  label: "導入相談をする",
  href: "/contact?type=consultation",
} as const;

export const secondaryCta = {
  label: "資料請求する",
  href: "/contact?type=document",
} as const;

export const painPoints = [
  "手順書が紙やファイルに分かれていて、探すところから始まる",
  "教える人によって説明が変わり、同じ内容でも伝わり方に差が出る",
  "誰が終えたか分からず、確認作業が毎回後追いになる",
  "タスクの抜け漏れが起きても、気づくのが遅れやすい",
  "承認や報告がメールやチャットに散らばってしまう",
  "新人教育や引き継ぎのたびに、同じ説明を繰り返している",
] as const;

export const serviceItems = [
  {
    title: "マニュアル管理",
    description:
      "手順やルールをひとつにまとめ、必要なときにすぐ見返せる状態にします。",
  },
  {
    title: "タスク配信",
    description:
      "やることを必要な人へ届けて、期限や進捗もあわせて確認できます。",
  },
  {
    title: "承認・確認",
    description:
      "実施報告の確認や差し戻しを通して、対応の抜けを減らします。",
  },
  {
    title: "ラーニング",
    description:
      "教材やテストをまとめて運用し、理解の定着まで見やすくします。",
  },
  {
    title: "ユーザー・組織管理",
    description:
      "部署や権限を整理して、現場ごとに使いやすい形へ整えます。",
  },
] as const;

export const reasons = [
  {
    title: "続けやすい",
    description:
      "現場で毎日触ることを前提に、見やすさと手早さを大切にしています。",
  },
  {
    title: "迷いにくい",
    description:
      "伝える、実行する、確認するの流れがひと目で分かるようにしています。",
  },
  {
    title: "後から追える",
    description:
      "誰が見たか、どこで止まったかを残しやすく、振り返りもしやすくなります。",
  },
  {
    title: "無理なく広げられる",
    description:
      "最初は小さく始めて、必要な機能から少しずつ広げていけます。",
  },
] as const;

export const operationPillars = [
  {
    step: "01",
    title: "手順をそろえる",
    subtitle: "マニュアル",
    description:
      "ばらばらだった説明や資料をまとめ、同じ手順で動けるようにします。",
  },
  {
    step: "02",
    title: "やることを届ける",
    subtitle: "タスク",
    description:
      "必要な人に必要な作業を渡し、期限と進捗を見える状態にします。",
  },
  {
    step: "03",
    title: "実施を確認する",
    subtitle: "承認・教育",
    description:
      "実施報告や学習状況を残し、確認と定着までつなげます。",
  },
] as const;

export const organizationChallenges = [
  {
    title: "情報が散らかる",
    description:
      "資料や連絡が分かれていると、必要な情報にたどり着くまで時間がかかります。",
  },
  {
    title: "教え方に差が出る",
    description:
      "担当者ごとに説明の仕方が違うと、現場での理解にばらつきが出ます。",
  },
  {
    title: "確認が後回しになる",
    description:
      "実施したかどうかを見返す流れが弱いと、抜け漏れを拾いにくくなります。",
  },
  {
    title: "更新が止まる",
    description:
      "手順書が古いままだと、現場に合わない運用が続いてしまいます。",
  },
] as const;

export const operationBenefits = [
  {
    title: "作業時間を減らす",
    description:
      "手順と資料をまとめることで、探す時間を短くできます。",
  },
  {
    title: "ミスを減らす",
    description:
      "期限と完了状況を見やすくして、抜け漏れを防ぎやすくします。",
  },
  {
    title: "育成をそろえる",
    description:
      "教材や確認テストを通して、教え方の差を小さくできます。",
  },
  {
    title: "ルールを定着させる",
    description:
      "履歴を残しながら、研修や確認の流れを続けやすくします。",
  },
  {
    title: "知識を活かす",
    description:
      "現場で集まったノウハウを、次の改善に使いやすくします。",
  },
] as const;

export const caseStudies = [
  {
    industry: "多店舗のサービス業",
    title: "教え方のばらつきを減らし、引き継ぎを短くしたケース",
    before: [
      "新人教育の内容が店舗ごとに違っていた",
      "実施確認が口頭中心で、記録が残りにくかった",
      "店長の負担が大きく、引き継ぎに時間がかかっていた",
    ],
    after: [
      "教育内容をマニュアルとタスクに整理",
      "確認の流れを画面上で残せるように変更",
      "引き継ぎの説明時間を短縮",
    ],
  },
  {
    industry: "介護・福祉",
    title: "日々の確認業務をまとめて、見落としを減らしたケース",
    before: [
      "記録や確認が紙と口頭に分かれていた",
      "担当者によって手順の伝わり方が違っていた",
      "管理者が後から状況を追うのに時間がかかっていた",
    ],
    after: [
      "手順と確認項目をひとつに整理",
      "報告の流れを明確にして抜け漏れを軽減",
      "確認作業の負担を小さく改善",
    ],
  },
  {
    industry: "製造・保守",
    title: "点検手順をそろえて、報告の待ち時間を短くしたケース",
    before: [
      "点検手順が担当者の経験に依存していた",
      "報告が遅れ、管理者の確認も後ろ倒しになっていた",
      "更新されたルールが現場に届きにくかった",
    ],
    after: [
      "点検内容を標準化して配信",
      "報告と承認の流れを短く整理",
      "更新内容を現場へ届けやすく改善",
    ],
  },
] as const;

export const flowSteps = [
  {
    step: "01",
    title: "お問い合わせ",
    description:
      "今の運用や気になっている点を、ざっくりで構いませんので教えてください。",
  },
  {
    step: "02",
    title: "ヒアリング",
    description:
      "現場の流れを伺いながら、どこを整えると楽になるかを一緒に整理します。",
  },
  {
    step: "03",
    title: "ご提案",
    description:
      "使う機能、始め方、必要な支援を、無理のない形でご案内します。",
  },
  {
    step: "04",
    title: "初期設定",
    description:
      "ユーザーや部署、必要なルールを整えて、使い始められる状態にします。",
  },
  {
    step: "05",
    title: "運用開始",
    description:
      "実際の現場で使いながら、必要に応じて画面や流れを調整します。",
  },
] as const;

export const faqItems = [
  {
    question: "システムに詳しくなくても使えますか？",
    answer:
      "はい。現場の担当者がすぐ使えるように、迷いにくい画面と操作の流れを意識しています。",
  },
  {
    question: "スマートフォンでも使えますか？",
    answer:
      "はい。スマートフォンやタブレットでも見やすく使えるように設計しています。",
  },
  {
    question: "導入までどのくらいかかりますか？",
    answer:
      "内容によって変わりますが、最初は小さく始めて、必要な範囲から広げる進め方ができます。",
  },
  {
    question: "今のマニュアルをそのまま使えますか？",
    answer:
      "はい。既存資料を整理しながら取り込むこともできますし、必要なところだけ作り直すこともできます。",
  },
  {
    question: "料金は利用人数で変わりますか？",
    answer:
      "基本は1つのプランとしてご案内しています。個別の条件がある場合は、導入時にあわせて確認します。",
  },
  {
    question: "導入後の相談はできますか？",
    answer:
      "はい。使い方や運用の整え方について、導入後もご相談いただけます。",
  },
  {
    question: "セキュリティ面が気になります。",
    answer:
      "権限管理や運用ルールを含めて確認しながら進めます。必要な点は個別にご説明します。",
  },
  {
    question: "資料だけ先に見られますか？",
    answer:
      "はい。資料請求からでも大丈夫です。比較検討の段階でも気軽にお問い合わせください。",
  },
] as const;

export const companyProfileRows = [
  ["会社名", "株式会社TETOTE"],
  ["所在地", "京都府京都市下京区"],
  ["電話番号", "075-604-1001"],
  ["FAX番号", "075-604-1003"],
  ["設立", "2021年3月"],
  ["資本金", "2,000万円"],
  ["代表者", "髙橋 陽介"],
  ["事業内容", "クラウドサービスの開発・運営、業務改善支援"],
  ["許認可", "26-ユ-300597"],
] as const;

export const featureShowcases = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "全体の進み具合を、ひと目で確認できます。",
    description:
      "ダッシュボードでは、未完了のタスクや確認待ちの件数をまとめて見られます。",
    image: "/images/features/dashboard-1.png",
    images: ["/images/features/dashboard-1.png", "/images/features/dashboard-2.png"],
    alt: "TOACHのダッシュボード画面",
    points: [
      "未完了をまとめて把握",
      "確認待ちを見逃しにくい",
      "更新の流れを追いやすい",
    ],
  },
  {
    id: "manuals",
    label: "Manuals",
    title: "マニュアルを、現場で見やすい形に整えます。",
    description:
      "写真や動画を交えながら、必要な情報だけを探しやすくまとめられます。",
    image: "/images/features/manuals.png",
    alt: "TOACHのマニュアル管理画面",
    points: [
      "画像付きで整理しやすい",
      "検索しやすい構成にできる",
      "更新後も見返しやすい",
    ],
  },
  {
    id: "tasks",
    label: "Tasks",
    title: "やることを、必要な人へまっすぐ届けます。",
    description:
      "タスク配信で、期限や担当を明確にしながら、進捗の追跡もしやすくなります。",
    image: "/images/features/tasks.png",
    alt: "TOACHのタスク管理画面",
    points: [
      "担当者を明確にできる",
      "期限ごとの確認がしやすい",
      "完了までの流れが見える",
    ],
  },
  {
    id: "learning",
    label: "Learning",
    title: "教育内容をそろえて、定着までつなげます。",
    description:
      "テキストや動画、テストをまとめて扱えるので、学習の流れをつくりやすくなります。",
    image: "/images/features/learning.png",
    alt: "TOACHのラーニング画面",
    points: [
      "教材をひとまとめにできる",
      "理解度を確認しやすい",
      "定着の様子も見返せる",
    ],
  },
  {
    id: "approval",
    label: "Approval",
    title: "承認と確認を、後から追いやすくします。",
    description:
      "報告と承認の流れをそろえることで、判断の抜けや待ち時間を減らせます。",
    image: "/images/features/approval.png",
    alt: "TOACHの承認画面",
    points: [
      "差し戻しが分かりやすい",
      "確認履歴を残しやすい",
      "現場の停滞を見つけやすい",
    ],
  },
] as const;

export const serviceUseCases = [
  {
    title: "新人教育・OJT",
    description:
      "説明の内容をそろえながら、最初のつまずきを減らします。",
  },
  {
    title: "社内マニュアル",
    description:
      "探しやすく、更新しやすい状態にして、現場で使いやすくします。",
  },
  {
    title: "コンプライアンス研修",
    description:
      "受講と確認の流れを残し、研修の抜けを減らします。",
  },
  {
    title: "多店舗・拠点運営",
    description:
      "拠点ごとの運用差を抑えながら、同じ基準で動きやすくします。",
  },
  {
    title: "業務標準化",
    description:
      "日々のやり方をそろえて、ムリ・ムダ・ムラを減らしやすくします。",
  },
  {
    title: "ナレッジ共有",
    description:
      "現場の工夫やノウハウを、次の人へ渡しやすくします。",
  },
] as const;

export const pricingPlan = {
  name: "TOACH 基本プラン",
  badge: "現場に必要な機能をひとまとめ",
  priceLabel: "個別見積",
  lead:
    "マニュアル管理、タスク配信、承認、ラーニング、ユーザー管理をまとめて使えます。導入時に必要な支援がある場合は、内容に合わせてご案内します。",
  ctaLabel: "料金を相談する",
  ctaHref: "/contact?type=pricing",
  includedFeatures: [
    "マニュアル管理",
    "タスク配信",
    "承認・確認",
    "ラーニング",
    "ユーザー管理",
    "部署・権限管理",
    "履歴確認",
    "導入時の相談",
  ],
} as const;

export const pricingPlans = [
  {
    name: "基本プラン",
    badge: "まずはここから",
    priceLabel: "個別見積",
    lead:
      "現場でよく使う機能をまとめたプランです。最初の導入に向いています。",
    ctaLabel: "相談する",
    ctaHref: "/contact?type=pricing",
    recommended: true,
    highlights: [
      "マニュアル管理",
      "タスク配信",
      "承認・確認",
      "ラーニング",
    ],
  },
  {
    name: "導入支援つき",
    badge: "整えるところまで",
    priceLabel: "個別見積",
    lead:
      "初期設定や既存資料の整理を含めて、立ち上げを手伝うプランです。",
    ctaLabel: "内容を聞く",
    ctaHref: "/contact?type=implementation",
    recommended: false,
    highlights: [
      "初期設定支援",
      "既存資料の整理",
      "運用ルール設計",
      "開始時の伴走",
    ],
  },
  {
    name: "運用相談つき",
    badge: "使い続けるために",
    priceLabel: "個別見積",
    lead:
      "導入後の見直しや、現場に合わせた調整を相談しながら進めるプランです。",
    ctaLabel: "相談する",
    ctaHref: "/contact?type=support",
    recommended: false,
    highlights: [
      "運用見直し",
      "定着支援",
      "活用相談",
      "改善提案",
    ],
  },
] as const;

export const pricingOptions = [
  {
    title: "初期設定支援",
    description:
      "ユーザーや部署の設定、基本ルールの整理を一緒に進めます。",
  },
  {
    title: "資料整理",
    description:
      "既存のマニュアルや資料を見直し、入れ替えやすい形に整えます。",
  },
  {
    title: "運用ルール設計",
    description:
      "誰が何を確認するかを決めて、現場で続けやすい形にします。",
  },
  {
    title: "導入時の説明",
    description:
      "現場向けの説明や使い始めの案内を、必要な範囲でお手伝いします。",
  },
  {
    title: "定着サポート",
    description:
      "使い始めてから出てくる疑問や調整点を一緒に見直します。",
  },
  {
    title: "継続改善",
    description:
      "運用の流れを見ながら、少しずつ使いやすい形へ整えます。",
  },
] as const;

export const pricingFeatureDiagramItems = [
  {
    step: "01",
    label: "Manual",
    title: "手順をそろえる",
    description:
      "マニュアルをまとめて、現場で見やすい状態に整えます。",
    points: ["手順整理", "カテゴリ管理", "更新しやすい"],
    colorClass: "bg-blue-600",
  },
  {
    step: "02",
    label: "Task",
    title: "やることを渡す",
    description:
      "必要な人へタスクを届けて、進捗を追いやすくします。",
    points: ["担当を明確に", "期限管理", "進捗確認"],
    colorClass: "bg-indigo-600",
  },
  {
    step: "03",
    label: "Approval",
    title: "確認を残す",
    description:
      "報告や差し戻しの流れを記録して、後から追えるようにします。",
    points: ["承認依頼", "差し戻し", "履歴確認"],
    colorClass: "bg-amber-600",
  },
  {
    step: "04",
    label: "Learning",
    title: "学びを定着させる",
    description:
      "教材とテストをまとめて、理解の定着まで支えます。",
    points: ["教材配信", "テスト", "受講確認"],
    colorClass: "bg-emerald-600",
  },
  {
    step: "05",
    label: "User",
    title: "運用範囲を整える",
    description:
      "ユーザーや部署、権限を整理して使いやすくします。",
    points: ["ユーザー管理", "部署管理", "権限設定"],
    colorClass: "bg-slate-800",
  },
  {
    step: "06",
    label: "Share",
    title: "共有しやすくする",
    description:
      "必要な情報をまとめて、現場へ届きやすくします。",
    points: ["社内共有", "QR共有", "レポート"],
    colorClass: "bg-purple-600",
  },
] as const;

export const pricingIncludedGroups = [
  {
    title: "手順管理",
    items: ["マニュアル作成", "カテゴリ管理", "更新履歴", "検索しやすい構成"],
  },
  {
    title: "実行管理",
    items: ["タスク配信", "グループタスク", "期限管理", "進捗確認"],
  },
  {
    title: "確認・承認",
    items: ["承認依頼", "差し戻し", "確認履歴", "完了ステータス"],
  },
  {
    title: "教育運用",
    items: ["教材配信", "テスト", "受講状況", "定着確認"],
  },
  {
    title: "権限・組織",
    items: ["ユーザー管理", "部署管理", "権限設定", "対象者の整理"],
  },
  {
    title: "共有・報告",
    items: ["社内共有", "社外共有", "QR共有", "レポート確認"],
  },
] as const;

export const pricingFeatureRows = [
  {
    category: "手順管理",
    features: [
      { name: "マニュアル作成・閲覧", light: "○", business: "○", enterprise: "○" },
      { name: "カテゴリ管理", light: "○", business: "○", enterprise: "○" },
      { name: "画像・動画の添付", light: "○", business: "○", enterprise: "○" },
      { name: "更新履歴", light: "−", business: "○", enterprise: "○" },
    ],
  },
  {
    category: "実行管理",
    features: [
      { name: "タスク配信", light: "○", business: "○", enterprise: "○" },
      { name: "グループタスク", light: "−", business: "○", enterprise: "○" },
      { name: "定期タスク", light: "−", business: "○", enterprise: "○" },
      { name: "期限管理", light: "○", business: "○", enterprise: "○" },
    ],
  },
  {
    category: "確認・教育",
    features: [
      { name: "承認・確認", light: "○", business: "○", enterprise: "○" },
      { name: "ラーニング", light: "○", business: "○", enterprise: "○" },
      { name: "理解度テスト", light: "−", business: "○", enterprise: "○" },
      { name: "受講状況の確認", light: "−", business: "○", enterprise: "○" },
    ],
  },
  {
    category: "運用管理",
    features: [
      { name: "ユーザー管理", light: "○", business: "○", enterprise: "○" },
      { name: "部署・権限管理", light: "△", business: "○", enterprise: "○" },
      { name: "レポート確認", light: "−", business: "○", enterprise: "○" },
      { name: "導入時の支援", light: "△", business: "○", enterprise: "○" },
    ],
  },
] as const;

export const pricingFaqItems = [
  {
    question: "料金はどのように決まりますか？",
    answer:
      "基本はひとつのプランでご案内します。必要な支援内容や運用条件がある場合は、その範囲に合わせてご相談します。",
  },
  {
    question: "利用人数で料金は変わりますか？",
    answer:
      "人数だけで自動的に変わる形にはしていません。まずは運用内容を確認して、合う形をお伝えします。",
  },
  {
    question: "導入支援は含まれますか？",
    answer:
      "必要な範囲はご相談いただけます。初期設定や資料整理が必要な場合は、内容に応じてご案内します。",
  },
  {
    question: "途中で機能を増やせますか？",
    answer:
      "はい。最初は必要な機能から始めて、運用が固まってきたら少しずつ広げられます。",
  },
  {
    question: "見積もりだけでも可能ですか？",
    answer:
      "もちろんです。比較検討中でも、現状の運用を聞きながら費用感をお伝えできます。",
  },
  {
    question: "契約前に相談できますか？",
    answer:
      "はい。導入するか決めていない段階でも、気になる点をそのままご相談ください。",
  },
] as const;
