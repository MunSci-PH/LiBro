"use client";
import { FaRightFromBracket } from "react-icons/fa6";
import { createClient } from "../config/client";

export const LogoutButton = () => {
  const supabase = createClient();

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
    window.location.reload();
  };

  return (
    <button
      onClick={() => {
        logOut();
      }}
      className="btn btn-accent text-white"
    >
      <FaRightFromBracket
        className="w-4 h-4 inline-block"
        width={"1rem"}
        height={"1rem"}
      />
      <span className="hidden md:block">LOGOUT</span>
    </button>
  );
};
