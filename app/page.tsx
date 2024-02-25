import Link from "next/link";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav></Nav>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-green-300/50 to-lime-100 blur-3xl w-[25rem] h-[45rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-green-900/50 dark:to-lime-900"></div>
          <div className="bg-gradient-to-tl from-green-50 via-green-100 to-green-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-emerald-900/70 dark:via-emerald-900/70 dark:to-emerald-900/70"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-green-600 to-lime-500 text-transparent dark:from-green-400 dark:to-lime-400">
                MunSci
              </p>

              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  LiBro App
                </h1>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {" "}
                  Munsci LiBro is an e-library that contains categories of books
                  that are accessible for finding books. Moreover, it can help
                  you borrow books; you just have to log in, and you will be
                  given a time when you can get the books you reserved
                  categories of books.
                </p>
              </div>
              <div className="mt-8 gap-3 flex justify-center">
                <Link
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/auth/login"
                >
                  Get started
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
