import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "@/components/navbar/navbar";
import Container from "@/components/global/container";
import Home from "./page";
import FooterWithMap from "@/components/footer/footer";

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const alegreya = Alegreya({
  subsets: ["latin", "greek"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kotopoulatodiamanti.gr"),
  title: "Το Διαμάντι – Ψητοπωλείο",
  description:
    "Το Διαμάντι – ψητοπωλείο στο Ελληνικό. Κοτόπουλο σχάρας & σούβλας, κοντοσούβλι, κοκορέτσι, γουρουνοπούλα και παραδοσιακές σαλάτες. Delivery 12:00–23:00.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://www.kotopoulatodiamanti.gr",
    siteName: "Το Διαμάντι",
    title: "Το Διαμάντι – Ψητοπωλείο στο Ελληνικό",
    description:
      "Κοτόπουλο σχάρας & σούβλας, κοντοσούβλι, κοκορέτσι, γουρουνοπούλα και παραδοσιακές σαλάτες. Delivery 12:00–23:00.",
    images: [
      {
        url: "/og-front.jpg",
        width: 1600,
        height: 1064,
        alt: "Το Διαμάντι – ψητοπωλείο στο Ελληνικό",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Το Διαμάντι – Ψητοπωλείο στο Ελληνικό",
    description:
      "Κοτόπουλο σχάρας & σούβλας, κοντοσούβλι, κοκορέτσι και παραδοσιακές σαλάτες. Delivery 12:00–23:00.",
    images: ["/og-front.jpg"],
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Το Διαμάντι",
  alternateName: "Diamanti Grill House",
  description:
    "Ψητοπωλείο στο Ελληνικό — κοτόπουλο σχάρας & σούβλας, κοντοσούβλι, κοκορέτσι, γουρουνοπούλα και παραδοσιακές σαλάτες.",
  image: "https://www.kotopoulatodiamanti.gr/og-front.jpg",
  logo: "https://www.kotopoulatodiamanti.gr/logo.jpg",
  url: "https://www.kotopoulatodiamanti.gr",
  sameAs: [
    "https://www.facebook.com/KotopoulaToDiamanti/",
    "https://www.instagram.com/kotopoulatodiamanti/",
  ],
  telephone: "+302109635560",
  servesCuisine: ["Greek", "Grill", "Rotisserie"],
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Δημητρίου Γούναρη 2",
    addressLocality: "Ελληνικό",
    addressRegion: "Αττική",
    postalCode: "16777",
    addressCountry: "GR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "23:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1976d2" />
        {/* Restaurant structured data (JSON-LD) for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd),
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WBJKFQ2M');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4X9NWXF5PE"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4X9NWXF5PE');
              
              // Handle analytics blocking gracefully
              window.addEventListener('error', function(e) {
                if (e.filename && e.filename.includes('googletagmanager.com')) {
                  console.log('Analytics blocked by ad blocker - this is normal and expected');
                }
              }, true);
            `,
          }}
        />
      </head>
      <body className={`${alegreyaSans.variable} ${alegreya.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBJKFQ2M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
        <Analytics />
      </body>
    </html>
  );
}
