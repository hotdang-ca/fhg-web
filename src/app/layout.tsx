import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Four and a Half Giraffes Ltd. | We craft Internet-powered Customer Experiences",
  description: "Four And A Half Giraffes Ltd. is responsible for carefully placing independent parts in just the right places, to craft the perfect Internet-powered Customer Experience.",
  metadataBase: new URL("https://fourandahalfgiraffes.ca"),
  openGraph: {
    title: "Four And A Half Giraffes Ltd. | Crafting Internet-powered Customer Experiences",
    description: "Four And A Half Giraffes Ltd. is responsible for carefully placing independent parts in just the right places, to craft the perfect Internet-powered Customer Experience.",
    url: "https://fourandahalfgiraffes.ca",
    siteName: "Four And A Half Giraffes Ltd.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    site: "@4point5giraffes",
    creator: "@4point5giraffes",
    title: "Four And A Half Giraffes Ltd. | Crafting Internet-powered Customer Experiences",
    description: "Four And A Half Giraffes Ltd. is responsible for carefully placing independent parts in just the right places, to craft the perfect Internet-powered Customer Experience.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth snap-y snap-mandatory">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-background text-foreground font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
