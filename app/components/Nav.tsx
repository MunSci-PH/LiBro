"use client";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar bg-green-300 dark:bg-primary">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          <Image
            src={"/logo/without-text.png"}
            width={32}
            height={32}
            alt="Logo"
            className="inline-block"
          />
          MunSci LiBro
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="/dashboard/auth/login">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
