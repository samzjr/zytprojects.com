import type { Metadata } from "next";
import DevSourceBanner from "@/components/DevSourceBanner";
import IntroOverlay, { IntroScript } from "@/components/IntroOverlay";
import "./globals.css";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: "/media/images/Website-heroshot.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/media/images/Website-heroshot.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <IntroScript />
      </head>
      <body className="font-sans min-h-full flex flex-col bg-white text-[#111111] antialiased selection:bg-neutral-200 selection:text-black">
        <IntroOverlay />
        {children}
        <DevSourceBanner />
      </body>
    </html>
  );
}
