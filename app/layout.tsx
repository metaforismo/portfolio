import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://francescogiannicola.com"),
  title: {
    default: "Francesco Giannicola, Computer Science & AI Student",
    template: "%s · Francesco Giannicola",
  },
  description:
    "Personal portfolio of Francesco Giannicola, Computer Science & AI student at Università della Calabria, building robotics, blockchain and machine learning projects.",
  keywords: [
    "Francesco Giannicola",
    "metaforismo",
    "AI",
    "Machine Learning",
    "Robotics",
    "Blockchain",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Francesco Giannicola", url: "https://github.com/metaforismo" }],
  creator: "Francesco Giannicola",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://francescogiannicola.com",
    title: "Francesco Giannicola, Computer Science & AI Student",
    description: "Robotics, blockchain and machine learning. A portfolio by Francesco Giannicola.",
    siteName: "Francesco Giannicola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesco Giannicola",
    description: "Computer Science & AI student building TarsGPT, DeVoSy, Apex2 and more.",
    creator: "@metaforismoo",
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
      className={`${inter.variable} ${jetbrains.variable}`}
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
