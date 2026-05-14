import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.serviceName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.serviceName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.serviceName} | ${siteConfig.tagline}`,
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
      <body>{children}</body>
    </html>
  );
}
