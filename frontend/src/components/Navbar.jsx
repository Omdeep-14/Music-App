import React, { useState } from "react";
import logo from "../assets/main-logo.png";
import { Link } from "react-router";
import { MenuIcon, XIcon } from "lucide-react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="flex text-white justify-between py-5  px-6 md:px-12 lg:px-24 fixed top-0 left-0 z-50 items-center w-full">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="h-15 w-15 rounded-full object-contain brightness-125 bg-primary-500 flex-1"
        />
      </Link>

      <div
        className={`flex max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:flex-col justify-center sm:space-x-4 items-center max-sm:h-screen overflow-hidden z-50 max-sm:flex-col" max-sm:hidden"   md:space-x-16 lg:space-x-22 bg-blue-950/60 backdrop-blur-sm p-6 min-sm:rounded-full font-semibold text-lg transition-[width] durtion-300 ${
          navbar
            ? "max-sm:w-full max-sm:space-y-6 "
            : "max-sm:w-0 p-0 max-sm:opacity-0"
        }`}
      >
        <XIcon
          className={`sm:hidden w-6 h-6 ${
            navbar ? " cursor-pointer absolute top-6 left-6" : "max-sm:hidden"
          }`}
          onClick={() => setNavbar(!navbar)}
        />

        <Link to="/" className="hover:scale-105">
          Home
        </Link>
        <Link to="/" className="hover:scale-105">
          Help
        </Link>
        <Link to="/" className="hover:scale-105">
          Contact{" "}
        </Link>
      </div>
      <div className="flex space-x-6 max-sm:hidden font-bold">
        <button className="bg-blue-500/80 max-sm:p-2 sm:p-4 rounded-full cursor-pointer  hover:bg-secondary w-24 h-15">
          Log In
        </button>
        <button className="bg-blue-500/80 max-sm:p-2 sm:p-4 rounded-full cursor-pointer w-24 hover:bg-secondary transition duration-300">
          Sign Up
        </button>
      </div>

      <MenuIcon
        className="sm:hidden w-6 h-6 cursor-pointer"
        onClick={() => setNavbar(!navbar)}
      />
    </div>
  );
}

export default Navbar;
