"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar bg-green-300 dark:bg-primary">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          MunSci LiBro
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="/auth/login">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
