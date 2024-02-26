import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MunSci LiBro",
  description: "MunSci's proprietary book borrowing system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-neutral-200 dark:bg-neutral-900 text-black dark:text-neutral-200 h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
