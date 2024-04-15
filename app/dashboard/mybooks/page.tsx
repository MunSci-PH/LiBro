import CloseButton from "@/app/components/CloseButton";
import { createSSRClient } from "@/app/config/server";
import { Metadata } from "next";
import { BookModal } from "./bookModal";

export const metadata: Metadata = {
  title: "Borrowed Book | MunSci LiBro",
};

export default async function Success() {
  const supabase = createSSRClient();
  const user = (await supabase.auth.getUser()).data.user;

  const getOrders = async () => {
    let bookQuery = supabase
      .from("orders")
      .select("*")
      .eq("user_id", `${user?.id}`)
      .order("created_at", { ascending: false });

    const { data, error } = await bookQuery;

    if (error) throw error;
    return data;
  };

  const orders = await getOrders();

  const getBook = async (book_id: number) => {
    let bookQuery = supabase
      .from("books")
      .select("*")
      .eq("acc_num", `${book_id}`);

    const { data, error } = await bookQuery;

    if (error) throw error;
    return data;
  };

  return (
    <main className="flex-1 flex container size-11/12 md:size-8/12 mx-auto text-center px-2 md:px-4 bg-gradient-to-br dark:from-green-800 dark:to-green-950 from-green-100 to-green-200 border border-green-200 rounded-xl shadow-sm dark:border-emerald-800">
      <div className="w-full mx-auto">
        <div className="flex flex-col items-center my-4 mx-6 md:my-12 md:mx-16">
          <div className="w-full flex flex-nowrap justify-between">
            <p className="text-left text-4xl font-sans font-bold inline w-fit my-auto">
              Borrowed Books
            </p>
            <CloseButton />
          </div>
          <div className="overflow-x-auto w-11/12">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Borrow ID</th>
                  <th>Name</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(async (e) => (
                  <tr key={e.id}>
                    <th>{e.id}</th>
                    <td>{(await getBook(e.book_num)).map((e) => e.name)}</td>
                    <td>{e.duration} Days</td>
                    <td>{e.status}</td>
                    <BookModal
                      orderData={e}
                      bookData={e.book_num}
                      userData={user?.id}
                    ></BookModal>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
