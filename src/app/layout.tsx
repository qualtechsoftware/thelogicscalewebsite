import type { Metadata } from "next";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Logic Scale | Software Training Programs",
  description:
    "Professional software engineering training for students, teams, and working professionals.",
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    shortcut: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: { url: "/favicon.svg", type: "image/svg+xml" }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C2QYKGK53K"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C2QYKGK53K');
            `
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <Footer />
        <ScrollToTopButton />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
