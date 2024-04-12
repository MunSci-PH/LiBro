import { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaBackward } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "404 | MunSci LiBro",
};

export default function NotFound() {
  return (
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
  );
}
