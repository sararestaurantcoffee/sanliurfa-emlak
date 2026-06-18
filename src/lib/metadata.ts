import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SLOGAN } from "./constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanliurfaemlak.com";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | ${SITE_SLOGAN}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "şanlıurfa emlak",
    "gayrimenkul danışmanlığı",
    "şanlıurfa satılık",
    "şanlıurfa kiralık",
    "emlak danışmanı",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_SLOGAN}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function pageMetadata(
  title: string,
  description?: string
): Metadata {
  return {
    title,
    description: description ?? SITE_DESCRIPTION,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description: description ?? SITE_DESCRIPTION,
    },
  };
}
