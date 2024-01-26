import DashNav from "@/app/components/DashNav";

export default function Home() {
  return (
    <>
      <DashNav></DashNav>
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <header>
          <p className="mb-2 text-sm font-semibold text-lime-600">
            Admin Dashboard
          </p>
          <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
            Welcome, Admin!
          </h1>
          <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, at molestias? Cum cumque atque consequatur veniam
            corrupti distinctio non labore architecto quas possimus ad assumenda
            eius aliquam, a sit exercitationem.
          </p>
        </header>
      </div>
    </>
  );
}
