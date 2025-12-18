

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavMenu from "./NavMenu";
import Script from "next/script";
import { MyParticles } from "@/components/MyParticles";
import Footer from "./Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofoliul lui Silviu Bogan",
  description: "Portofoliul lui Silviu Bogan, dezvoltator de pagini & aplicații pe Internet. " +
    "Tutoriale React în pregătire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <h1><Link href="/">Silviu Bogan</Link></h1>
          <Link href="/"><Image src="avatar.jpg" width={250} height={150} alt="avatar" className="photo-logo" /></Link>
          <NavMenu />
        </header>
        {children}
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/cmatrix"
          strategy="beforeInteractive"
        />
        <MyParticles />
      </body>
    </html>
  );
}
