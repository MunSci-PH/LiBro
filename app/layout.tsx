import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./globals.css";
import Nav from "./components/Nav";

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
        <Nav></Nav>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
