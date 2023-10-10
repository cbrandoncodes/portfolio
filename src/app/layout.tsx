import "./globals.scss";

import PageTransition from "@/components/page-transition";
import BaseLayout from "@/components/layouts/base-layout";
import clsx from "clsx";
import { PT_Sans, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import type { Metadata } from "next";
import { baseMetadata } from "@/utils/base-metadata";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});
const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Light.otf", weight: "300" },
    { path: "../fonts/Satoshi-Regular.otf", weight: "400" },
    { path: "../fonts/Satoshi-Medium.otf", weight: "500" },
    { path: "../fonts/Satoshi-Bold.otf", weight: "700" },
  ],
  variable: "--font-satoshi",
});
const canela = localFont({
  src: [
    { path: "../fonts/Canela-Light.otf", weight: "300" },
    { path: "../fonts/Canela-Regular.otf", weight: "400" },
    { path: "../fonts/Canela-Medium.otf", weight: "500" },
    { path: "../fonts/Canela-Bold.otf", weight: "700" },
  ],
  variable: "--font-canela",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = baseMetadata({
  title: "Software Developer - Brandon",
  description: "Software Developer - Brandon",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "custom-scroll",
          satoshi.variable,
          canela.variable,
          ptSans.variable,
          robotoMono.variable
        )}
        suppressHydrationWarning
      >
        <PageTransition>
          <BaseLayout>{children}</BaseLayout>
        </PageTransition>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js" />
      </body>
    </html>
  );
}
