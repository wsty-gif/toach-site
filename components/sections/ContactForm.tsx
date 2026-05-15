"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type FormState = {
  inquiryType: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  position: string;
  foundVia: string;
  employeeSize: string;
  industry: string;
  purpose: string;
  message: string;
  mailOptIn: boolean;
  privacyAccepted: boolean;
  website: string;
};

const positions = [
  "経営者・役員",
  "部長",
  "課長",
  "係長・主任",
  "一般社員",
  "契約・嘱託・派遣等",
  "個人",
  "その他",
];

const foundViaOptions = [
  "インターネット検索",
  "インターネットの紹介記事",
  "インターネット広告",
  "SNS",
  "動画サービス",
  "Eメール",
  "テレビCM",
  "新聞・雑誌記事",
  "交通広告",
  "手紙・紙のダイレクトメール",
  "担当販売店からの紹介",
  "銀行からの紹介",
  "友人・知人・取引先等からの紹介",
  "社内紹介・引き継ぎ",
  "その他",
];

const employeeSizeOptions = [
  "個人〜9名",
  "10名〜99名",
  "100名〜299名",
  "300名〜999名",
  "1,000名〜9,999名",
  "10,000名以上",
];

const industryOptions = [
  "農業，林業",
  "漁業",
  "鉱業，採石業，砂利採取業",
  "建設業",
  "製造業",
  "電気・ガス・熱供給・水道業",
  "情報通信業",
  "運輸業，郵便業",
  "卸売業，小売業",
  "金融業，保険業",
  "不動産業，物品賃貸業",
  "学術研究，専門・技術サービス業",
  "宿泊業",
  "飲食サービス業",
  "生活関連サービス業，娯楽業",
  "教育，学習支援業",
  "医療，福祉",
  "複合サービス事業",
  "サービス業",
  "公務",
  "その他",
];

const purposeOptions = [
  "導入に向けて選定をしている",
  "サービスに興味があり、情報収集をしている",
  "サービス資料がほしい",
  "デモ・導入相談をしたい",
  "他社への紹介",
  "利用は考えていない",
  "その他",
];

function getInitialInquiryType(type: string | null) {
  if (type === "pricing") return "料金について相談する";
  if (type === "document") return "サービス資料を請求する";
  if (type === "demo") return "デモ・導入相談を申し込む";
  return "デモ・導入相談を申し込む";
}

export default function ContactForm() {
  const searchParams = useSearchParams();

  const initialInquiryType = useMemo(
    () => getInitialInquiryType(searchParams.get("type")),
    [searchParams],
  );

  const [form, setForm] = useState<FormState>({
    inquiryType: initialInquiryType,
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    company: "",
    department: "",
    position: "",
    foundVia: "",
    employeeSize: "",
    industry: "",
    purpose: "",
    message: "",
    mailOptIn: true,
    privacyAccepted: false,
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setResultMessage("");
    setIsSuccess(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        sourcePath: window.location.href,
      }),
    });

    const result = (await response.json()) as {
      ok?: boolean;
      message?: string;
    };

    setIsSubmitting(false);

    if (!response.ok || !result.ok) {
      setIsSuccess(false);
      setResultMessage(result.message || "送信に失敗しました。時間をおいて再度お試しください。");
      return;
    }

    setIsSuccess(true);
    setResultMessage("お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。");

    setForm({
      inquiryType: initialInquiryType,
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
      company: "",
      department: "",
      position: "",
      foundVia: "",
      employeeSize: "",
      industry: "",
      purpose: "",
      message: "",
      mailOptIn: true,
      privacyAccepted: false,
      website: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-950">
            お問い合わせ種別 <span className="text-red-600">必須</span>
          </label>
          <select
            value={form.inquiryType}
            onChange={(event) => updateField("inquiryType", event.target.value)}
            required
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
          >
            <option value="デモ・導入相談を申し込む">デモ・導入相談を申し込む</option>
            <option value="サービス資料を請求する">サービス資料を請求する</option>
            <option value="料金について相談する">料金について相談する</option>
            <option value="その他">その他</option>
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <TextField
            label="姓"
            required
            value={form.lastName}
            onChange={(value) => updateField("lastName", value)}
          />
          <TextField
            label="名"
            required
            value={form.firstName}
            onChange={(value) => updateField("firstName", value)}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <TextField
            label="メールアドレス"
            type="email"
            required
            value={form.email}
            onChange={(value) => updateField("email", value)}
          />
          <TextField
            label="電話番号"
            type="tel"
            required
            value={form.phone}
            onChange={(value) => updateField("phone", value)}
          />
        </div>

        <TextField
          label="会社名"
          required
          value={form.company}
          onChange={(value) => updateField("company", value)}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <TextField
            label="部門・部署"
            value={form.department}
            onChange={(value) => updateField("department", value)}
          />

          <SelectField
            label="役職"
            value={form.position}
            options={positions}
            onChange={(value) => updateField("position", value)}
          />
        </div>

        <SelectField
          label="TOACHを知ったきっかけ"
          value={form.foundVia}
          options={foundViaOptions}
          onChange={(value) => updateField("foundVia", value)}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <SelectField
            label="従業員規模"
            value={form.employeeSize}
            options={employeeSizeOptions}
            onChange={(value) => updateField("employeeSize", value)}
          />

          <SelectField
            label="業種"
            value={form.industry}
            options={industryOptions}
            onChange={(value) => updateField("industry", value)}
          />
        </div>

        <SelectField
          label="TOACHについて"
          value={form.purpose}
          options={purposeOptions}
          onChange={(value) => updateField("purpose", value)}
        />

        <div>
          <label className="block text-sm font-bold text-slate-950">
            その他・ご質問等
          </label>
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={6}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            placeholder="現在のお悩み、導入時期、確認したいことなどをご記入ください。"
          />
        </div>

        <input
          type="text"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <label className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          <input
            type="checkbox"
            checked={form.mailOptIn}
            onChange={(event) => updateField("mailOptIn", event.target.checked)}
            className="mt-1"
          />
          <span>
            TOACHに関するお知らせ、セミナー、サービス情報などのメール配信を希望します。
          </span>
        </label>

        <label className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          <input
            type="checkbox"
            checked={form.privacyAccepted}
            onChange={(event) => updateField("privacyAccepted", event.target.checked)}
            required
            className="mt-1"
          />
          <span>
            プライバシーポリシーに同意します。 <span className="text-red-600">必須</span>
          </span>
        </label>

        {resultMessage ? (
          <div
            className={`rounded-2xl p-4 text-sm font-bold ${
              isSuccess
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {resultMessage}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "送信中..." : "入力内容を送信する"}
        </button>
      </div>
    </form>
  );
}

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
};

function TextField({
  label,
  value,
  onChange,
  required = false,
  type = "text",
}: TextFieldProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-slate-950">
        {label} {required ? <span className="text-red-600">必須</span> : null}
      </label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function SelectField({ label, value, options, onChange }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-slate-950">
        {label}
      </label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
      >
        <option value="">選択してください</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}