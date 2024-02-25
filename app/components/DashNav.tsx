"use client";

import Link from "next/link";

const DashNav = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content bg-white dark:bg-green-800 dark:border-green-700">
            {/* Sidebar content here */}
            <li>
              <Link href="#">Sidebar Item 1</Link>
            </li>
            <li>
              <Link href="#">Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashNav;
