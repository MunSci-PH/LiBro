"use client";
import { createClient } from "@/app/config/client";
import { Tables } from "@/global";
import { useEffect, useRef, useState } from "react";
import { QueryData } from "@supabase/supabase-js";

interface IContainerProps {
  userData: string | undefined;
  bookData: number;
  orderData: Tables<"orders">;
}

const supabase = createClient();

const getBook = async (book_id: number) => {
  let bookQuery = supabase
    .from("books")
    .select("*")
    .eq("acc_num", `${book_id}`);

  const { data, error } = await bookQuery;

  if (error) throw error;
  return data;
};

export const BookModal: React.FC<IContainerProps> = (props) => {
  let bookQuery = supabase.from("books").select("*");
  type booksType = QueryData<typeof bookQuery>;
  const [book, setBook] = useState<booksType | undefined>();

  useEffect(() => {
    getBook(props.bookData).then((e) => setBook(e));
  }, [props.bookData]);

  return (
    <>
      <td>
        <button
          className="btn btn-primary"
          onClick={() =>
            // @ts-expect-error
            document.getElementById(`${props.orderData.id}`)?.showModal()
          }
        >
          View
        </button>
      </td>
      <dialog id={`${props.orderData.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{props.orderData.id}</h3>
          <div className="w-11/12 my-5 space-y-4 mx-auto">
            <div className="w-full flex flex-nowrap justify-between">
              <p className="text-left text-lg font-sans font-bold inline w-fit my-auto flex-grow">
                Book Name
              </p>
              <p className="text-right text-lg font-sans font-medium inline w-fit my-auto flex-grow">
                {book?.map((e) => e.name)}
              </p>
            </div>
            <div className="w-full flex flex-nowrap justify-between">
              <p className="text-left text-lg font-sans font-bold inline w-fit my-auto flex-grow">
                Book Author
              </p>
              <p className="text-right text-lg font-sans font-medium inline w-fit my-auto flex-grow">
                {book?.map((e) => e.author)}
              </p>
            </div>
            <div className="w-full flex flex-nowrap justify-between">
              <p className="text-left text-lg font-sans font-bold inline w-fit my-auto flex-grow">
                Borrow Duration
              </p>
              <p className="text-right text-lg font-sans font-medium inline w-fit my-auto flex-grow">
                {props.orderData.duration} Days
              </p>
            </div>
            <div className="w-full flex flex-nowrap justify-between">
              <p className="text-left text-lg font-sans font-bold inline w-fit my-auto flex-grow">
                Status
              </p>
              <p className="text-right text-lg font-sans font-medium inline w-fit my-auto flex-grow">
                {props.orderData.status}
              </p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
