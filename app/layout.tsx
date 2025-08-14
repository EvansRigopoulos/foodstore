import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "@/components/navbar/navbar";
import Container from "@/components/global/container";
import Home from "./page";
import FooterWithMap from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diamanti Restaurant",
  description: "The best restaurant in town",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1976d2" />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white p-2 rounded"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          <Navbar />
          <main id="main-content" role="main">
            <Container className="py-20">
              <Home />
            </Container>
          </main>
          <FooterWithMap />
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
