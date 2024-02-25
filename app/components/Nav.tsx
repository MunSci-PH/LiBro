"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar bg-green-300 dark:bg-green-800">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MunSci LiBro</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="/dashboard/admin">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
