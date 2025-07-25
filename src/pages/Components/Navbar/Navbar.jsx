import React, { useState, useEffect } from "react";
import CookieBtn from "../CookieBtn/CookieBtn";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navbar } from "../../../../utils/content";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div
      className={`fixed z-45 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
        scrolled
          ? "top-4 w-[90%] md:w-[70%] bg-black/60 backdrop-blur-lg shadow-lg px-6 py-4 rounded-2xl"
          : "top-0 w-full bg-black px-5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href='/' className="text-white lg:text-2xl text-lg font-bold cursor-pointer inline-flex">
              {navbar.title[0]}{" "}
              <span className="text-light-cream ms-2">{navbar.title[1]}</span>
            </a>
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            {navbar.pages.map((page, idx) => (
              <NavLink
                key={idx}
                to={page.link}
                className={({ isActive }) =>
                  `text-xl transition ${
                    isActive
                      ? "text-light-cream font-bold"
                      : "text-white hover:text-light-cream"
                  }`
                }
              >
                {page.name}
              </NavLink>
            ))}


          </div>

          {/* Mobile Menu Button */}
<div className="xl:hidden">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-white focus:outline-none transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
  >
    <svg
      className={`w-6 h-6 transform transition-transform duration-300 ${
        isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  </button>
</div>


          <div className="hidden xl:block">
            <CookieBtn name={"Get a Quote"} />
          </div>
        </div>

<div
  className={`xl:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
    isOpen ? "max-h-96 opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
  }`}
>

  <div className="space-y-4 flex flex-col">
    {navbar.pages.map((page, idx) => (
      <NavLink
        key={idx}
        to={page.link}
        className={({ isActive }) =>
          `text-xl transition ${
            isActive
              ? "text-light-cream font-bold"
              : "text-white hover:text-light-cream"
          }`
        }
      >
        {page.name}
      </NavLink>
    ))}
    <div className="pt-2">
      <CookieBtn name={"Get a Quote"} />
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
