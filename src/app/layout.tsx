import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { MyParticles } from "@/components/MyParticles";
import Footer from "./Footer";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { assetUrl } from "@/lib/assetUrl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silviu Bogan (oficial) | Portofoliu, blog, link-uri",
  description: "Silviu Bogan, dezvoltator de pagini & aplicații pe Internet.",
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
            <Link href="/">
              <Image
                src={assetUrl("/avatar.jpg")}
                width={155}
                height={155}
                alt="avatar"
                className="photo-logo"
                loading="eager"
              />
            </Link>
            <h1>
              <Link href="/">Silviu Bogan</Link>
              <p
                style={{
                  lineHeight: 1,
                  fontSize: "1.23rem",
                }}
              >
                <small>
                  <em>Dezvoltator de site-uri</em>
                </small>
              </p>
            </h1>
            <NavMenu />
          </header>
          <div className="header-footer-separator" />
          {children}
          <div className="header-footer-separator" />
          <Footer />
          {/* <CMatrixScript /> */}
          <MyParticles />
        </ThemeProvider>
      </body>
    </html>
  );
}
