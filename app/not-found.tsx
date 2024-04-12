import { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaBackward } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "404 | MunSci LiBro",
};

export default function NotFound() {
  return (
    <div className="relative overflow-hidden h-5/6">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-green-300/50 to-lime-100 blur-3xl w-[25rem] h-[45rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-green-900/50 dark:to-lime-900"></div>
        <div className="bg-gradient-to-tl from-green-50 via-green-100 to-green-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-emerald-900/70 dark:via-emerald-900/70 dark:to-emerald-900/70"></div>
      </div>
      <main className="relative z-10 w-screen flex items-center justify-center h-full">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
            404
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Sorry, we couldn&apos;t find your page.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link className="btn btn-primary" href="/">
              <FaArrowLeft />
              Back to homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
