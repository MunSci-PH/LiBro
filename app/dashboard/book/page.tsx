import CloseButton from "@/app/components/CloseButton";
import { createSSRClient } from "@/app/config/server";
import NotFound from "@/app/not-found";
import { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaBackward } from "react-icons/fa6";
import { BorrowOptions } from "./borrowOptions";
import isDarkTheme from "@/app/config/theme";
import { toast } from "react-toastify";

export const metadata: Metadata = {
  title: "Borrow | MunSci LiBro",
};

export default async function Success({
  searchParams,
}: {
  searchParams: { acc_num: number };
}) {
  if (!searchParams.acc_num) return <NotFound></NotFound>;
  const supabase = createSSRClient();

  const getBooks = async () => {
    let bookQuery = supabase
      .from("books")
      .select("*")
      .eq("acc_num", `${searchParams.acc_num}`);

    const { data, error } = await bookQuery;

    if (error) throw error;
    return data;
  };

  const book = await getBooks();

  return (
    <main className="flex-1 flex container size-11/12 md:size-8/12 mx-auto text-center px-2 md:px-4 bg-gradient-to-br dark:from-green-800 dark:to-green-950 from-green-100 to-green-200 border border-green-200 rounded-xl shadow-sm dark:border-emerald-800">
      <div className="w-full mx-auto">
        <div className="flex flex-col items-center my-4 mx-6 md:my-12 md:mx-16">
          <div className="w-full flex flex-nowrap justify-between">
            <p className="text-left text-4xl font-sans font-bold inline w-fit my-auto">
              Borrow
            </p>
            <CloseButton />
          </div>
          <div className="w-11/12 my-5 space-y-4">
            <div className="w-full flex flex-nowrap justify-between">
              <p className="text-left text-xl font-sans font-bold inline w-fit my-auto flex-grow">
                Name
              </p>
              <p className="text-right text-xl font-sans font-medium inline w-fit my-auto flex-grow">
                {book.map((e) => e.name)}
              </p>
            </div>
            <div className="w-full flex flex-nowrap justify-between">
              <p className="text-left text-xl font-sans font-bold inline w-fit my-auto flex-grow">
                Volume
              </p>
              <p className="text-right text-xl font-sans font-medium inline w-fit my-auto flex-grow">
                {book.map((e) => e.vol)}
              </p>
            </div>
            <div className="w-full flex flex-nowrap justify-between">
              <p className="text-left text-xl font-sans font-bold inline w-fit my-auto flex-grow">
                Edition
              </p>
              <p className="text-right text-xl font-sans font-medium inline w-fit my-auto flex-grow">
                {book.map((e) => e.edition)}
              </p>
            </div>
            <div className="w-full flex flex-nowrap justify-between">
              <p className="text-left text-xl font-sans font-bold inline w-fit my-auto flex-grow">
                Publisher
              </p>
              <p className="text-right text-xl font-sans font-medium inline w-fit my-auto flex-grow">
                {book.map((e) => e.publisher)}
              </p>
            </div>
            <div className="w-full flex flex-nowrap justify-between">
              <p className="text-left text-xl font-sans font-bold inline w-fit my-auto flex-grow">
                Genre
              </p>
              <p className="text-right text-xl font-sans font-medium inline w-fit my-auto flex-grow">
                {book.map((e) => e.genre)}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-nowrap">
            <p className="text-left text-2xl font-sans font-bold inline w-fit my-auto flex-grow">
              Options
            </p>
          </div>
          <BorrowOptions acc_num={searchParams.acc_num}></BorrowOptions>
        </div>
      </div>
    </main>
  );
}
