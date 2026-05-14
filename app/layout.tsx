import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { siteConfig } from "@/lib/siteContent";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.serviceName}｜${siteConfig.tagline}`,
    template: `%s｜${siteConfig.serviceName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.serviceName}｜${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.serviceName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  );
}