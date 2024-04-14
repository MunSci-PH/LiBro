"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { createClient } from "../config/client";
import { FormEvent, Suspense, use, useEffect, useState } from "react";
import Loading from "../loading";
import { QueryData } from "@supabase/supabase-js";

const supabase = createClient();

const getBooks = async (searchQuery: string, genre: string, range: number) => {
  let bookQuery = supabase
    .from("books")
    .select("*")
    .order("acc_num", { ascending: true })
    .range(0, range);

  if (searchQuery != "" && genre != "") {
    const { data, error } = await bookQuery
      .ilike("name", `%${searchQuery}%`)
      .eq("genre", `${genre}`);
    if (error) throw error;
    return data;
  } else if (searchQuery == "" && genre != "") {
    const { data, error } = await bookQuery.eq("genre", `${genre}`);
    if (error) throw error;
    return data;
  } else if (searchQuery != "" && genre == "") {
    const { data, error } = await bookQuery.ilike("name", `%${searchQuery}%`);
    if (error) throw error;
    return data;
  } else {
    const { data, error } = await bookQuery;
    if (error) throw error;
    return data;
  }
};

export default function Dashboard() {
  const [genre, setGenre] = useState<string>("");
  const [searchQuery, setQuery] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const bookQuery = supabase.from("books").select("*");

  type booksType = QueryData<typeof bookQuery>;
  const [BookList, setBookList] = useState<booksType | undefined>();

  useEffect(() => {
    getBooks("", "", 19).then((e) => setBookList(e));
  }, []);

  const queryChange = async (e: FormEvent) => {
    e.preventDefault();

    setBookList(await getBooks(searchQuery, genre, 19));
  };

  const genreChange = async (e: { target: { value: string } }) => {
    setGenre(e.target.value);

    setBookList(await getBooks(searchQuery, genre, 19));
  };
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
            Search
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Find the books that will interest you.
          </p>
          <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
            <form
              className="form-control"
              onKeyDown={(event) => {
                if (event.key == "Enter") {
                  event.preventDefault();
                }
              }}
            >
              <div className="join">
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item"
                      placeholder="Search"
                      onKeyDown={async (e) => {
                        if (e.key == "Enter") {
                          await queryChange(e);
                        }
                      }}
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <select
                  className="select select-bordered join-item"
                  defaultValue="none"
                  onChange={async (e) => {
                    await genreChange(e);
                  }}
                >
                  <option value="none" disabled>
                    Filter
                  </option>
                  <option value="General Reference">General Reference</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Filipiñana">Filipiñana</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loading></Loading>}>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {BookList?.map((e) => (
              <Link
                key={e.acc_num}
                className="group flex flex-col bg-emerald-200 border shadow-sm rounded-xl hover:shadow-md transition dark:bg-emerald-900 dark:border-gray-800"
                href={`/dashboard/book?acc_num=${e.acc_num}`}
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="group-hover:text-green-600 font-semibold text-gray-800 dark:group-hover:text-green-400 dark:text-gray-200">
                        {e.name} {e.vol} {e.edition}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {e.author ? e.author : e.publisher}
                      </p>
                    </div>
                    <div className="ps-3">
                      <FaArrowRight className="flex-shrink-0 size-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Suspense>
    </>
  );
}
