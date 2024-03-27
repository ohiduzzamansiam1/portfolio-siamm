import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ohiduzzaman Siam",
  description: "A portfolio website of Ohiduzzaman Siam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        {/* @ts-ignore */}
        <ThemeProvider attribute="class" defaultTheme="light">
          <Toaster />
          <Header />
          {children}
          <Footer />
          <Analytics />
          <GoogleAnalytics measurementId="G-70T23F0FH6" />
        </ThemeProvider>
      </body>
    </html>
  );
}
