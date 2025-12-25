import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavMenu from "./NavMenu";
import Script from "next/script";
import { MyParticles } from "@/components/MyParticles";
import Footer from "./Footer";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silviu Bogan (oficial)",
  description: "Silviu Bogan, dezvoltator de pagini & aplicații pe Internet. " +
    "Tutoriale React în lucru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <header>
            <h1><Link href="/">Silviu Bogan</Link></h1>
            <Link href="/"><Image src="avatar.jpg" width={250} height={150} alt="avatar" className="photo-logo" /></Link>
            <NavMenu />
            <ThemeSwitcher />
          </header>
          {children}
          <Footer />
          <Script
            src="https://cdn.jsdelivr.net/npm/cmatrix"
            strategy="beforeInteractive"
          />
          <MyParticles />
        </ThemeProvider>
      </body>
    </html>
  );
}
