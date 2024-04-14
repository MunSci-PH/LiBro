export default function Loading() {
  return (
    <main className="flex-1 flex container m-auto text-center px-4">
      <div className="m-auto">
        <div className="flex flex-col items-center my-12">
          <span className="loading loading-spinner"></span>
          Loading...
        </div>
      </div>
    </main>
  );
}
