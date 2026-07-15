import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://noveris.game";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NOVERIS | The Future We Build",
    template: "%s | NOVERIS",
  },
  description:
    "A premium space civilization game about collecting, exploring, evolving, and growing across an infinite universe.",
  keywords: [
    "NOVERIS",
    "space game",
    "civilization game",
    "exploration game",
    "infinite universe game",
    "collecting game",
    "automation game",
    "science fiction strategy",
  ],
  applicationName: "NOVERIS",
  authors: [{ name: "NOVERIS" }],
  openGraph: {
    title: "NOVERIS | The Future We Build",
    description:
      "Collect resources, explore living galaxies, evolve civilizations, and keep growing across an infinite universe.",
    url: siteUrl,
    siteName: "NOVERIS",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NOVERIS - The Future We Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVERIS | The Future We Build",
    description:
      "Collect, explore, evolve, and keep growing across an infinite universe.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#02060d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
