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
        className={`${montserrat.className} bg-neutral-200 dark:bg-neutral-900 text-black dark:text-neutral-200 h-dvh overflow-hidden`}
      >
        <div
          aria-hidden="true"
          className="flex absolute -top-80 start-1/2 transform -translate-x-1/2 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-green-300/50 to-lime-100 blur-3xl w-[25rem] h-[45rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-green-900/50 dark:to-lime-900"></div>
          <div className="bg-gradient-to-tl from-green-50 via-green-100 to-green-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-emerald-900/70 dark:via-emerald-900/70 dark:to-emerald-900/70"></div>
        </div>
        <div className="relative h-full flex flex-col">
          <Nav></Nav>
          <div className="z-10 w-screen flex items-center justify-center my-auto">
            {children}
          </div>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
