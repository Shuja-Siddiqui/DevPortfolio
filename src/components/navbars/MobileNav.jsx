import React from "react";

export const MobileNav = () => {
  return (
    <div className=" w-full  bg-gradient-to-t from-black to-white opacity-75">
      <div className=" w-full py-2 flex justify-start items-center">
        <div className="w-full navbar-start">User</div>
        <div className="w-full navbar-end flex justify-start items-center">
          <div className="w-full flex justify-end items-center dropdown relative">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-primaryDark rounded-box w-52 absolute right-5 top-7 min-h-screen flex justify-start items-start gap-4 "
            >
              <li>
                <a href="#resume">Homepage</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
