import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";

import DraftModeToast from "@/app/components/DraftModeToast";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { handleError } from "./client-utils";
import localFont from "next/font/local";


/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}
const standerd = localFont({
  src: [
    {
      path: "./fonts/Standerd-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Standerd-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Standerd-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Standerd-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui, sans-serif"],
});
const grotesk = localFont({
  src: [
    {
      path: "./fonts/TomatoGrotesk-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TomatoGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/TomatoGrotesk-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui, sans-serif"],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${standerd.variable} ${grotesk.variable}  bg-white text-black`}>
      <body >
        <section className="min-h-screen pt-24">
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />
              <VisualEditing />
            </>
          )}
          <SanityLive onError={handleError} />
          {/* <Header /> */}
          <main className="">{children}</main>
          {/* <Footer /> */}
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
