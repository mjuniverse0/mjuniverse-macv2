import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mj-universe.net"),
  title: {
    default: "MJ Universe",
    template: "%s · MJ Universe",
  },
  description:
    "Offisiell skaperplattform for Mariell Berntzen og Jhonatan Wik — video, live, community og digital hub.",
  openGraph: {
    title: "MJ Universe",
    description:
      "Profesjonell creator-hub for Mariell og Jhonatan. Utforsk universet og åpne hovedappen.",
    type: "website",
    locale: "nb_NO",
  },
};

export const viewport: Viewport = {
  themeColor: "#060607",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" className={`${display.variable} ${sans.variable}`}>
      <body className="relative min-h-dvh">
        <div className="v2-grain" aria-hidden />
        <div className="relative z-10 flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
