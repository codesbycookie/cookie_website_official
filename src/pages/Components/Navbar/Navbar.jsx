import React from "react";
import CookieBtn from "../CookieBtn/CookieBtn";

export default function Navbar() {
  return (
    <div className="navbar bg-black  px-5 py-5 flex flex-column justify-between">
      <div className="flex">
        <a className="text-white text-2xl font-bold">
          Cookie Inc <span className="text-dark-cream">.</span>
        </a>
      </div>
      <div className="navbar-center text-white">
        <a href="" className="mx-3">
          Home
        </a>
        <a href="" className="mx-3">
          About
        </a>
        <a href="" className="mx-3">
          Services
        </a>
        <a href="" className="mx-3">
          Portfolio
        </a>
      </div>
      <div className="flex-none">
        <CookieBtn name={"Get a Quote"} />
      </div>
    </div>
  );
}
