"use client";

// import type { Metadata } from "next";

import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Silviu Bogan (oficial)",
//   description:
//     "[ see description of root page in src/app/layout.tsx ]",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p>
        <Link href="/blog">◀ Înapoi la blog</Link>
      </p>
      {children}
    </>
  );
}
