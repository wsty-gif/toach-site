export const siteConfig = {
  serviceName: "TOACH",
  companyName: "株式会社TETOTE",
  tagline: "現場教育と業務実施をつなぐ運用プラットフォーム",
  description:
    "TOACHは、マニュアル管理、タスク配信、承認フロー、ラーニング運用をひとつにつなげ、現場の実施状況まで見える化するクラウドサービスです。",
  contactEmail: "info@example.com",
  phone: "075-604-1001",
  address: "京都市伏見区京町１０丁目１−４",
  area: "全国対応",
} as const;

export const navLinks = [
  { label: "サービス紹介", href: "/service" },
  { label: "選ばれる理由", href: "/reasons" },
  { label: "導入事例", href: "/cases" },
  { label: "ご利用の流れ", href: "/flow" },
  { label: "料金", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "会社概要", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
] as const;

export const primaryCta = {
  label: "デモ・導入相談を申し込む",
  href: "/contact?type=demo",
} as const;

export const secondaryCta = {
  label: "サービス資料を請求する",
  href: "/contact?type=document",
} as const;

export const painPoints = [
  "マニュアルや社内資料が散在して、必要な情報がすぐに見つからない",
  "業務の進め方や対応が人によって違い、品質にばらつきが出てしまう",
  "新人教育やOJTに時間がかかり、教育担当の負担が大きい",
  "やるべきことの抜け漏れや、確認漏れが発生してしまう",
  "コンプライアンス研修や社内ルールの運用・管理が大変",
  "本当に理解・定着できているかを確認できず、不安が残る",
] as const;

export const serviceItems = [
  {
    title: "マニュアル管理",
    description:
      "決まったガイドに沿って入力するだけで、画像や動画つきのマニュアルを作成・共有できます。",
  },
  {
    title: "タスク配信",
    description:
      "マニュアルとタスクを紐づけて配信し、誰がどこまで完了したかをリアルタイムで確認できます。",
  },
  {
    title: "承認フロー",
    description:
      "完了報告、確認、差し戻しまでをひとつの流れで管理できます。",
  },
  {
    title: "ラーニング運用",
    description:
      "テキスト、動画、テストを組み合わせて、理解度や定着度まで可視化できます。",
  },
] as const;

export const reasons = [
  {
    title: "標準化から実行までつながる",
    description:
      "マニュアルを共有するだけでなく、読んだか、実施したか、承認されたかまで確認できます。",
  },
  {
    title: "対応漏れを防ぎやすい",
    description:
      "タスクの進捗管理や期限管理により、やるべきことの抜け漏れや確認漏れを防ぎやすくなります。",
  },
  {
    title: "教育負担を軽減できる",
    description:
      "新人教育、OJT、研修内容を仕組み化し、人に依存しすぎない教育運用を支えます。",
  },
  {
    title: "ナレッジを組織の資産にできる",
    description:
      "社内の知識やノウハウを蓄積・共有し、店舗や部署をまたいで活用できます。",
  },
] as const;

export const organizationChallenges = [
  {
    title: "人材不足・人手の負担増",
    description:
      "人に依存した教育・運用では、現場の負担が増え続け、改善の余裕が生まれません。",
  },
  {
    title: "業務の属人化",
    description:
      "この人しか分からない状態が続くと、急な欠員や異動時に大きなリスクになります。",
  },
  {
    title: "教育・品質のばらつき",
    description:
      "教える人によって内容や進め方が違い、品質や成果にばらつきが出ます。",
  },
  {
    title: "社内資料・ノウハウの散在",
    description:
      "マニュアルや資料が各所に散在すると、探す時間が増え、活用されにくくなります。",
  },
] as const;

export const operationPillars = [
  {
    step: "01",
    title: "標準化",
    subtitle: "マニュアル",
    description:
      "業務手順や社内ルールを見える化し、誰でも同じ品質で業務を行える状態にします。",
  },
  {
    step: "02",
    title: "実行・実践",
    subtitle: "タスク管理",
    description:
      "やるべきことを明確にし、進捗や抜け漏れをリアルタイムで可視化します。",
  },
  {
    step: "03",
    title: "教育・定着",
    subtitle: "ラーニング",
    description:
      "テキスト・動画・テストで理解を深め、理解度や定着度を確認できます。",
  },
] as const;

export const operationBenefits = [
  {
    title: "生産性の向上",
    description:
      "業務の標準化でムダを削減し、組織全体の生産性向上を支えます。",
  },
  {
    title: "対応漏れの防止",
    description:
      "タスクの抜け漏れや確認漏れを防ぎ、ミスやトラブルを未然に減らします。",
  },
  {
    title: "教育負担の軽減",
    description:
      "教育の仕組み化により、人に依存せず効率的に育成できます。",
  },
  {
    title: "コンプライアンス強化",
    description:
      "社内ルールや研修の運用を仕組み化し、意識を組織全体に浸透させます。",
  },
  {
    title: "ナレッジの共有・活用",
    description:
      "社内の知識やノウハウを資産として蓄積し、組織の力を底上げします。",
  },
] as const;

export const caseStudies = [
  {
    industry: "多店舗サービス業",
    title: "店舗ごとの教育ばらつきを減らし、確認業務を削減",
    before: [
      "新人教育の内容が店舗ごとに違っていた",
      "マニュアルを読んだか確認できなかった",
      "本部が進捗を毎回確認していた",
    ],
    after: [
      "教育内容を共通化",
      "受講・確認状況を管理画面で把握",
      "確認業務の時間を約40％削減",
    ],
  },
  {
    industry: "介護・福祉事業",
    title: "確認作業と承認業務をひとつにまとめ、対応漏れを防止",
    before: [
      "紙や口頭での確認が多かった",
      "承認状況が担当者ごとに分かれていた",
      "対応漏れの確認に時間がかかっていた",
    ],
    after: [
      "タスクごとの進捗を一覧化",
      "承認・差し戻しをシステム上で管理",
      "確認時間を約30％短縮",
    ],
  },
  {
    industry: "製造・メンテナンス業",
    title: "作業手順と実施報告をつなげ、引き継ぎをスムーズに",
    before: [
      "作業手順が人によって違っていた",
      "完了報告がチャットや紙に分散していた",
      "引き継ぎに時間がかかっていた",
    ],
    after: [
      "手順をマニュアルとして統一",
      "完了報告をタスク上で管理",
      "引き継ぎ時間を約35％削減",
    ],
  },
] as const;

export const flowSteps = [
  {
    step: "01",
    title: "お問い合わせ",
    description:
      "まずはフォームまたはメールからご連絡ください。現在のお悩みがまとまっていなくても大丈夫です。",
  },
  {
    step: "02",
    title: "無料相談・ヒアリング",
    description:
      "現場教育、マニュアル管理、タスク運用の状況を伺います。",
  },
  {
    step: "03",
    title: "ご提案",
    description:
      "課題に合わせて、TOACHでどのように運用できるかをご案内します。",
  },
  {
    step: "04",
    title: "お申し込み",
    description:
      "内容と費用にご納得いただいたうえでお申し込みとなります。",
  },
  {
    step: "05",
    title: "初期設定",
    description:
      "ユーザー、部署、マニュアル、タスク配信の基本設定を行います。",
  },
  {
    step: "06",
    title: "操作説明",
    description:
      "管理者向け、現場スタッフ向けに分けて、使い方をご説明します。",
  },
  {
    step: "07",
    title: "運用開始・改善",
    description:
      "運用開始後も、使い方や改善点についてご相談いただけます。",
  },
] as const;

export const faqItems = [
  {
    question: "システムに詳しくなくても使えますか？",
    answer:
      "はい、使えます。TOACHは、管理者だけでなく現場スタッフにも分かりやすい画面を目指しています。導入時には操作説明も行います。",
  },
  {
    question: "スマホからも利用できますか？",
    answer:
      "はい、スマホやタブレットからも利用できます。現場でマニュアルを確認したり、タスクの完了報告を行ったりできます。",
  },
  {
    question: "料金はどのように決まりますか？",
    answer:
      "利用人数、拠点数、必要な機能、導入支援の内容によって変わります。まずは無料相談で現在の状況をお聞かせください。",
  },
  {
    question: "導入までどのくらいかかりますか？",
    answer:
      "運用内容にもよりますが、シンプルな構成であれば短期間で開始できます。詳しい期間はヒアリング後にご案内します。",
  },
  {
    question: "今あるマニュアルを移行できますか？",
    answer:
      "はい、可能です。PDF、画像、テキストなど、現在の管理方法を確認したうえで移行方法をご提案します。",
  },
  {
    question: "タスクの承認や差し戻しはできますか？",
    answer:
      "はい、完了報告、承認、差し戻しまで管理できます。誰が確認したかも履歴として残せます。",
  },
  {
    question: "複数店舗や複数部署で使えますか？",
    answer:
      "はい、店舗や部署ごとの管理に対応できます。本部や管理者が進捗を確認しやすい運用を設計できます。",
  },
  {
    question: "導入後のサポートはありますか？",
    answer:
      "はい、あります。操作方法だけでなく、運用が定着するまでの改善相談にも対応します。",
  },
  {
    question: "無料相談だけでも大丈夫ですか？",
    answer:
      "はい、大丈夫です。相談したからといって、すぐに導入を決める必要はありません。",
  },
  {
    question: "セキュリティ面は大丈夫ですか？",
    answer:
      "業務情報を扱うサービスとして、適切な管理体制で運用します。権限管理など、安全に使うための方法もご案内します。",
  },
  {
    question: "小規模な会社でも利用できますか？",
    answer:
      "はい、少人数の会社でも利用できます。まずは必要な範囲から小さく始めることができます。",
  },
  {
    question: "オンラインで相談できますか？",
    answer:
      "はい、全国どこからでもオンライン相談が可能です。",
  },
] as const;

export const companyProfileRows = [
  ["会社名", "株式会社TETOTE"],
  ["所在地", "京都市伏見区京町１０丁目１−４"],
  ["電話番号", "075-604-1001"],
  ["FAX番号", "075-604-1003"],
  ["設立", "2021年3月"],
  ["資本金", "2,000万円"],
  ["代表者", "長田脩平"],
  [
    "事業内容",
    "B to B向けのクラウドサービスの開発、人材紹介業、ホームページ制作事業",
  ],
  ["有料職業紹介事業許可番号", "26-ユ-300597"],
] as const;

export const featureShowcases = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "現場の状況を、ひと目で確認できます。",
    description:
      "ダッシュボードでは、マニュアル確認、タスク完了、承認待ち、教育進捗などをまとめて確認できます。",
    image: "/images/features/dashboard.png",
    alt: "TOACHのダッシュボード画面",
    points: [
      "確認が必要な情報を一覧で把握",
      "対応待ちや承認待ちを見逃しにくい",
      "現場ごとの進捗確認に役立つ",
    ],
  },
  {
    id: "manuals",
    label: "Manuals",
    title: "マニュアルを、現場で見やすい形に整理できます。",
    description:
      "画像つきの手順書や業務マニュアルを、必要な人が必要なタイミングで確認できるように整理します。",
    image: "/images/features/manuals.png",
    alt: "TOACHのマニュアル管理画面",
    points: [
      "画像つき手順書を分かりやすく管理",
      "関連するマニュアルをまとめて確認",
      "新人教育や引き継ぎにも活用しやすい",
    ],
  },
  {
    id: "tasks",
    label: "Tasks",
    title: "伝えた業務が、実施されたかまで追えます。",
    description:
      "マニュアルや業務指示をタスクとして配信し、誰が完了したか、どこで止まっているかを確認できます。",
    image: "/images/features/tasks.png",
    alt: "TOACHのタスク管理画面",
    points: [
      "対象者に合わせてタスクを配信",
      "完了・未完了を一覧で確認",
      "対応漏れや確認漏れを減らす",
    ],
  },
  {
    id: "learning",
    label: "Learning",
    title: "教育の進捗と理解度を管理できます。",
    description:
      "動画、テキスト、クイズを組み合わせた教育コンテンツを配信し、受講状況や合格状況を確認できます。",
    image: "/images/features/learning.png",
    alt: "TOACHのラーニング管理画面",
    points: [
      "教育コンテンツをまとめて配信",
      "受講状況や合格状況を確認",
      "教育のばらつきを減らす",
    ],
  },
  {
    id: "approval",
    label: "Approval",
    title: "承認・差し戻しまで、ひとつの流れで管理できます。",
    description:
      "完了報告を受け取るだけでなく、管理者による承認や差し戻しまで管理できます。",
    image: "/images/features/approval.png",
    alt: "TOACHの承認管理画面",
    points: [
      "完了報告後の確認まで管理",
      "承認待ち・差し戻しを見える化",
      "確認履歴を残しやすい",
    ],
  },
] as const;

export const serviceUseCases = [
  {
    title: "新人教育・OJT",
    description:
      "入社時研修やOJTの内容を体系化し、効率的に教育を実施できます。",
  },
  {
    title: "社内マニュアル",
    description:
      "業務手順や社内ルールを一元管理し、いつでも共有できます。",
  },
  {
    title: "コンプライアンス研修",
    description:
      "法令・社内規程の教育を計画的に実施し、理解度も確認できます。",
  },
  {
    title: "多店舗・拠点運営",
    description:
      "店舗・拠点ごとの標準化を実現し、品質やサービスを均一化します。",
  },
  {
    title: "業務標準化",
    description:
      "業務プロセスを標準化し、属人化を防ぎ、生産性を高めます。",
  },
  {
    title: "ナレッジ共有",
    description:
      "社内の知識やノウハウを蓄積・共有し、組織の力として活用できます。",
  },
] as const;

export const pricingPlan = {
  name: "TOACH 基本プラン",
  badge: "1プランで基本機能をまとめて提供",
  priceLabel: "月額：個別案内",
  lead:
    "マニュアル管理、タスク配信、承認、ラーニング、ユーザー管理をひとつのプランで利用できます。利用人数による料金変動はありません。",
  ctaLabel: "料金を相談する",
  ctaHref: "/contact?type=pricing",
  includedFeatures: [
    "マニュアル作成・閲覧",
    "カテゴリ管理",
    "お気に入り",
    "タスク配信",
    "グループタスク",
    "定期タスク",
    "承認・差し戻し",
    "ラーニング管理",
    "受講状況管理",
    "ユーザー管理",
    "部署別管理",
    "閲覧履歴・更新履歴",
    "社内共有・社外共有",
    "QRコード共有",
  ],
} as const;

export const pricingPlans = [
  {
    name: "基本プラン",
    badge: "標準機能をまとめて提供",
    priceLabel: "個別案内",
    lead:
      "マニュアル管理、タスク配信、承認、ラーニング、ユーザー管理をまとめて利用できます。",
    ctaLabel: "料金を相談する",
    ctaHref: "/contact?type=pricing",
    recommended: true,
    highlights: [
      "マニュアル作成・共有",
      "タスク配信・進捗管理",
      "教育・理解度チェック",
      "ユーザー・部署管理",
    ],
  },
  {
    name: "導入支援",
    badge: "初期運用を整える支援",
    priceLabel: "要相談",
    lead:
      "既存資料の整理、運用ルール設計、初期設定など、導入時に必要な支援をご案内します。",
    ctaLabel: "導入支援を相談する",
    ctaHref: "/contact?type=implementation",
    recommended: false,
    highlights: [
      "既存マニュアル整理",
      "部署・権限の初期設定",
      "運用ルール設計",
      "管理者向け説明",
    ],
  },
  {
    name: "運用支援",
    badge: "定着と改善を支える支援",
    priceLabel: "要相談",
    lead:
      "運用開始後の活用状況を見ながら、教育やタスク運用の改善を支援します。",
    ctaLabel: "運用支援を相談する",
    ctaHref: "/contact?type=support",
    recommended: false,
    highlights: [
      "活用状況の確認",
      "教育コンテンツ改善",
      "タスク運用の見直し",
      "レポート活用支援",
    ],
  },
] as const;

export const pricingOptions = [
  {
    title: "初期設定支援",
    description:
      "ユーザー、部署、権限、カテゴリなど、利用開始に必要な設定を支援します。",
  },
  {
    title: "マニュアル整理支援",
    description:
      "既存の資料や手順書を、現場で探しやすく使いやすい構成に整理します。",
  },
  {
    title: "教育コンテンツ設計",
    description:
      "新人教育、OJT、コンプライアンス研修などの教材設計を支援します。",
  },
  {
    title: "運用ルール設計",
    description:
      "タスク配信、承認、確認頻度、管理者の役割などを現場に合わせて整理します。",
  },
  {
    title: "操作説明",
    description:
      "管理者や現場スタッフ向けに、基本操作や運用の流れを説明します。",
  },
  {
    title: "定着・改善支援",
    description:
      "運用開始後の課題を確認し、利用定着や改善サイクルづくりを支援します。",
  },
] as const;

export const pricingFeatureDiagramItems = [
  {
    step: "01",
    label: "Manual",
    title: "マニュアル管理",
    description:
      "画像つき手順書や業務マニュアルを作成し、カテゴリごとに整理できます。",
    points: ["マニュアル作成", "カテゴリ管理", "お気に入り", "閲覧履歴・更新履歴"],
    colorClass: "bg-blue-600",
  },
  {
    step: "02",
    label: "Task",
    title: "タスク配信",
    description:
      "作成したマニュアルや業務指示をタスクとして配信できます。",
    points: ["単発タスク", "グループタスク", "定期タスク", "進捗管理"],
    colorClass: "bg-indigo-600",
  },
  {
    step: "03",
    label: "Approval",
    title: "承認・差し戻し",
    description:
      "完了報告を受け取るだけでなく、管理者による承認や差し戻しまで管理できます。",
    points: ["承認待ち管理", "差し戻し", "完了報告", "確認履歴"],
    colorClass: "bg-amber-600",
  },
  {
    step: "04",
    label: "Learning",
    title: "ラーニング管理",
    description:
      "教育コンテンツをコースとして配信し、受講状況や合格状況を確認できます。",
    points: ["コース作成", "受講状況", "合格管理", "教育進捗"],
    colorClass: "bg-emerald-600",
  },
  {
    step: "05",
    label: "User",
    title: "ユーザー・部署管理",
    description:
      "ユーザーや部署を管理し、役割に応じて閲覧・作成・管理の範囲を整理できます。",
    points: ["ユーザー管理", "部署別管理", "権限管理", "マスター管理"],
    colorClass: "bg-slate-800",
  },
  {
    step: "06",
    label: "Share",
    title: "共有・レポート",
    description:
      "マニュアルの社内共有、社外共有、QRコード共有に対応します。",
    points: ["社内共有", "社外共有", "QRコード", "レポート確認"],
    colorClass: "bg-purple-600",
  },
] as const;

export const pricingIncludedGroups = [
  {
    title: "マニュアル管理",
    items: ["マニュアル作成", "カテゴリ管理", "お気に入り", "閲覧履歴", "更新履歴"],
  },
  {
    title: "タスク管理",
    items: ["タスク配信", "グループタスク", "定期タスク", "進捗確認", "完了報告"],
  },
  {
    title: "承認管理",
    items: ["承認待ち管理", "差し戻し", "確認履歴", "対応漏れ防止"],
  },
  {
    title: "ラーニング管理",
    items: ["コース作成", "受講状況管理", "合格状況管理", "教育進捗確認"],
  },
  {
    title: "管理機能",
    items: ["ユーザー管理", "部署別管理", "権限管理", "マスター管理"],
  },
  {
    title: "共有・活用",
    items: ["社内共有", "社外共有", "QRコード共有", "レポート確認"],
  },
] as const;

export const pricingFeatureRows = [
  {
    category: "マニュアル管理",
    features: [
      { name: "マニュアル作成・閲覧", light: "○", business: "○", enterprise: "○" },
      { name: "カテゴリ管理", light: "○", business: "○", enterprise: "○" },
      { name: "画像・動画の添付", light: "○", business: "○", enterprise: "○" },
      { name: "閲覧履歴・更新履歴", light: "△", business: "○", enterprise: "○" },
    ],
  },
  {
    category: "タスク管理",
    features: [
      { name: "タスク配信", light: "○", business: "○", enterprise: "○" },
      { name: "グループタスク", light: "△", business: "○", enterprise: "○" },
      { name: "定期タスク", light: "△", business: "○", enterprise: "○" },
      { name: "進捗確認・完了報告", light: "○", business: "○", enterprise: "○" },
    ],
  },
  {
    category: "教育・ラーニング",
    features: [
      { name: "コース作成", light: "△", business: "○", enterprise: "○" },
      { name: "動画・テキスト教材", light: "△", business: "○", enterprise: "○" },
      { name: "テスト・理解度確認", light: "−", business: "○", enterprise: "○" },
      { name: "受講状況・合格状況管理", light: "−", business: "○", enterprise: "○" },
    ],
  },
  {
    category: "管理・共有",
    features: [
      { name: "ユーザー管理", light: "○", business: "○", enterprise: "○" },
      { name: "部署別管理", light: "△", business: "○", enterprise: "○" },
      { name: "社内共有・社外共有", light: "△", business: "○", enterprise: "○" },
      { name: "レポート確認", light: "−", business: "○", enterprise: "○" },
    ],
  },
] as const;

export const pricingFaqItems = [
  {
    question: "料金はいくらですか？",
    answer:
      "TOACHは基本プランとしてご案内しています。具体的な金額は、導入時の支援範囲や個別対応の有無を確認したうえでご案内します。",
  },
  {
    question: "利用人数によって料金は変わりますか？",
    answer:
      "いいえ、利用人数による料金変動はありません。社内で利用者が増えても、人数を理由に月額費用が変わることはありません。",
  },
  {
    question: "プランは1つだけですか？",
    answer:
      "はい。現時点では、マニュアル管理、タスク配信、承認、ラーニング、ユーザー管理をまとめた基本プランとしてご案内しています。",
  },
  {
    question: "必要な機能だけ使い始めることはできますか？",
    answer:
      "はい、可能です。契約プランは1つですが、最初はマニュアル管理だけ、次にタスク配信やラーニング管理へ広げるなど、段階的に運用できます。",
  },
  {
    question: "初期費用はかかりますか？",
    answer:
      "初期設定や導入支援が必要な場合は、内容に応じてご案内します。ユーザー登録、部署設定、既存マニュアルの整理など、必要な支援範囲を確認します。",
  },
  {
    question: "オプションはありますか？",
    answer:
      "現時点では明確なオプションメニューは設けていません。必要な支援や個別対応がある場合は、導入相談時に内容を確認してご提案します。",
  },
  {
    question: "無料相談だけでも大丈夫ですか？",
    answer:
      "はい、大丈夫です。導入前の情報収集や、現在の管理方法を整理する目的でもお気軽にご相談ください。",
  },
] as const;
