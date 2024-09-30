import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <Container className="py-20s">
            <Home />
          </Container>
          <FooterWithMap />
        </LanguageProvider>
      </body>
    </html>
  );
}
