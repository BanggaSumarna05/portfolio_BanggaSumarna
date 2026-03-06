import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/context/LanguageContext";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bangga Sumarna | Full Stack Developer | Laravel & React Expert",
  description: "Professional portfolio of Bangga Sumarna, a Full Stack Developer specializing in building scalable web applications with Laravel, React, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable} antialiased selection:bg-white selection:text-black`}>
        <meta name="google-site-verification" content="JZAa9rO3Q9FBm4kFbaV4t6LVl6160pd9UycrzoHLyok" />
        <LanguageProvider>
          <SmoothScrolling>
            <Preloader />
            <CustomCursor />
            {children}
          </SmoothScrolling>
        </LanguageProvider>
      </body>
    </html>
  );
}
