import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yaoundé Labelle - Matériaux de Construction au Cameroun",
  description: "Fournisseur de matériaux de construction au Cameroun - Sable, gravier, granite, planches. Livraison Yaoundé et Douala. Devis gratuit.",
  keywords: "matériaux construction, Cameroun, Yaoundé, Douala, sable, gravier, granite, planches, BTP, construction",
  authors: [{ name: "Yaoundé Labelle" }],
  creator: "Yaoundé Labelle",
  publisher: "Yaoundé Labelle",
  metadataBase: new URL('https://www.yaoundelabelle.com'),
  alternates: {
    canonical: 'https://www.yaoundelabelle.com',
  },
  openGraph: {
    title: "Yaoundé Labelle - Matériaux de Construction",
    description: "Fournisseur de matériaux de construction au Cameroun - Sable, gravier, granite, planches",
    url: 'https://www.yaoundelabelle.com',
    siteName: 'Yaoundé Labelle',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yaoundé Labelle - Matériaux de Construction",
    description: "Fournisseur de matériaux de construction au Cameroun",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.yaoundelabelle.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ea580c" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
