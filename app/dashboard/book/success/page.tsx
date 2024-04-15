import { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaBackward } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Success | MunSci LiBro",
};

export default function Success({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
        Success
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        {searchParams.message}
      </p>
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <Link className="btn btn-primary" href="/dashboard/mybooks/">
          <FaArrowLeft />
          Go to Borrowed Books
        </Link>
      </div>
    </div>
  );
}
