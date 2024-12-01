import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center h-[3rem] gap-[.5rem]  sticky top-[0rem] bg-gray-900 z-[50]  ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-blue-800 p-[.5rem] text-white rounded-full "
              : "text-white hover:text-blue-500"
          } cursor-pointer `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-blue-800 p-[.5rem] text-white rounded-full "
              : "text-white hover:text-blue-500"
          }  cursor-pointer `
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
