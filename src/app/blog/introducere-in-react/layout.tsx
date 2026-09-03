"use client";

import BlogHeader from "../BlogHeader";
import BlogFooter from "../BlogFooter";

// import type { Metadata } from "next";

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
      <BlogHeader />
      {children}
      <BlogFooter />
    </>
  );
}
