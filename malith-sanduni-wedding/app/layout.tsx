import type { Metadata, Viewport } from "next";
import { weddingConfig as config } from "@/src/config/weddingConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production" ? config.seo.websiteUrl : "http://localhost:5173",
  ),
  title: config.seo.title,
  description: config.seo.description,
  applicationName: config.seo.title,
  openGraph: {
    type: "website",
    title: config.seo.title,
    description: config.seo.description,
    url: config.seo.websiteUrl,
    images: [{ url: config.seo.socialImage, width: 1200, height: 630, alt: config.seo.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: [config.seo.socialImage],
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: config.theme.forest,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
