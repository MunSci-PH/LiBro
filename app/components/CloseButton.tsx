"use client";
import { useRouter } from "next/navigation";
import { FaXmark } from "react-icons/fa6";

const CloseButton = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-accent text-white space-y-4 inline w-fit"
      onClick={() => router.back()}
    >
      <FaXmark />
    </button>
  );
};
export default CloseButton;
