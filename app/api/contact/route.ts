import { NextResponse } from "next/server";

type ContactPayload = {
  inquiryType?: string;
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  company?: string;
  department?: string;
  position?: string;
  foundVia?: string;
  employeeSize?: string;
  industry?: string;
  purpose?: string;
  message?: string;
  mailOptIn?: boolean;
  privacyAccepted?: boolean;
  website?: string;
  sourcePath?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "inquiryType",
  "lastName",
  "firstName",
  "email",
  "phone",
  "company",
  "privacyAccepted",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL;
  const secret = process.env.CONTACT_WEBHOOK_SECRET;

  if (!webhookUrl || !secret) {
    return NextResponse.json(
      {
        ok: false,
        message: "お問い合わせ設定が未完了です。",
      },
      { status: 500 },
    );
  }

  const body = (await request.json()) as ContactPayload;

  // Honeypot。通常ユーザーには見えない項目です。
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const missingFields = requiredFields.filter((field) => {
    if (field === "privacyAccepted") {
      return body.privacyAccepted !== true;
    }

    return !getString(body[field]);
  });

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "必須項目を入力してください。",
        missingFields,
      },
      { status: 400 },
    );
  }

  const email = getString(body.email);

  if (!isValidEmail(email)) {
    return NextResponse.json(
      {
        ok: false,
        message: "メールアドレスの形式が正しくありません。",
      },
      { status: 400 },
    );
  }

  const payload = {
    secret,
    inquiryType: getString(body.inquiryType),
    lastName: getString(body.lastName),
    firstName: getString(body.firstName),
    email,
    phone: getString(body.phone),
    company: getString(body.company),
    department: getString(body.department),
    position: getString(body.position),
    foundVia: getString(body.foundVia),
    employeeSize: getString(body.employeeSize),
    industry: getString(body.industry),
    purpose: getString(body.purpose),
    message: getString(body.message),
    mailOptIn: body.mailOptIn === true,
    sourcePath: getString(body.sourcePath),
    userAgent: request.headers.get("user-agent") || "",
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const text = await response.text();

  if (!response.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: "送信に失敗しました。",
        detail: text,
      },
      { status: 500 },
    );
  }

  let result: { ok?: boolean; message?: string } = {};

  try {
    result = JSON.parse(text);
  } catch {
    result = { ok: true };
  }

  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: result.message || "送信に失敗しました。",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "お問い合わせを受け付けました。",
  });
}