import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-paper",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const bulgaryRose = localFont({
  src: "./fonts/bulgary-rose.otf",
  variable: "--font-handwritten",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://francescogiannicola.com"),
  title: {
    default: "Francesco Giannicola, Software Engineer & Builder",
    template: "%s · Francesco Giannicola",
  },
  description:
    "Software engineer and founder of Limes Labs. Work across AI systems, developer tools, native apps, compilers, and applied research.",
  keywords: [
    "Francesco Giannicola",
    "metaforismo",
    "Limes Labs",
    "Software Engineer",
    "Developer tools",
    "Compilers",
    "Native apps",
    "Open source",
    "Portfolio",
  ],
  authors: [{ name: "Francesco Giannicola", url: "https://github.com/metaforismo" }],
  creator: "Francesco Giannicola",
  openGraph: {
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Francesco Giannicola — Software Engineer & Builder" }],
    locale: "en_US",
    url: "https://francescogiannicola.com",
    title: "Francesco Giannicola, Software Engineer & Builder",
    description:
      "AI systems, developer tools, native apps, compilers, and applied research. Founder of Limes Labs.",
    siteName: "Francesco Giannicola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesco Giannicola",
    description:
      "Software Engineer & Builder · AI systems, developer tools, native apps & compilers · Founder of Limes Labs.",
    creator: "@fragiannicola",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${newsreader.variable} ${bulgaryRose.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <TooltipProvider delayDuration={150}>
            {children}
            <Toaster position="bottom-right" richColors={false} />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
