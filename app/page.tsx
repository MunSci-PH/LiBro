import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <div className="mt-5 max-w-2xl">
            <Image
              src={"/logo/full-logo.png"}
              width={256}
              height={256}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Logo"
              className="mx-auto my-1"
            />
            <h1 className="block font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-green-600 to-lime-500 text-transparent dark:from-green-400 dark:to-lime-400">
              MUNSCI LIBRO
            </h1>
          </div>

          <div className="mt-5 max-w-3xl">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Muntinlupa Science High School&apos;s LiBro web app is an
              e-library that contains categories of books that are accessible
              for finding books. Moreover, it can help you borrow books; you
              just have to log in, and you will be given a time when you can get
              the books you reserved categories of books.
            </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <Link
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/dashboard/"
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
    </>
  );
}
