import Image from "next/image";
import Link from "next/link";
import { FaBars, FaRightToBracket } from "react-icons/fa6";
import { createSSRClient } from "../config/server";
import { LogoutButton } from "./LogoutButton";

const Nav = async () => {
  const supabase = createSSRClient();
  let isLoggedIn: boolean = false;
  const { data } = await supabase.auth.getSession();

  if (data) isLoggedIn = true;

  return (
    <div className="z-10 navbar bg-green-300 dark:bg-primary rounded-box my-4 mx-auto w-[90%] md:w-[97%]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars
              className="text-neutral-200 w-6 h-6"
              width={"1rem"}
              height={"1rem"}
            />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-extrabold">
          <Image
            src={"/logo/without-text.png"}
            width={32}
            height={32}
            alt="Logo"
            className="inline-block h-8 w-8"
          />
          MUNSCI LIBRO
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex px-5">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <LogoutButton />
        ) : (
          <Link
            href="/dashboard/auth/login"
            className="btn btn-accent text-white"
          >
            <FaRightToBracket
              className="text-neutral-200 w-4 h-4 inline-block"
              width={"1rem"}
              height={"1rem"}
            />
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
