import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import SiteHeader from "@/components/SiteHeader";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "The Logic Scale | Software Training Programs",
  description:
    "Professional software engineering training for students, teams, and working professionals.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "The Logic Scale"
  },
  formatDetection: {
    telephone: false
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=4", type: "image/png" },
      { url: "/favicon-32.png?v=4", sizes: "32x32", type: "image/png" }
    ],
    shortcut: { url: "/favicon.png?v=4", type: "image/png" },
    apple: { url: "/apple-touch-icon.png?v=4", sizes: "180x180", type: "image/png" }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={plusJakarta.variable}>
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
      <body className={`app-shell ${plusJakarta.className}`}>
        <ScrollToTopOnNavigate />
        <SiteHeader />
        <div className="app-shell-main">{children}</div>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppFloat />
        <MobileBottomNav />
      </body>
    </html>
  );
}
