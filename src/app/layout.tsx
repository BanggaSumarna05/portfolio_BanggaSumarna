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
  title: "Bangga Sumarna - Portfolio",
  description: "Web Developer Portfolio of Bangga Sumarna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable} antialiased selection:bg-white selection:text-black`}>
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
