import React, { useState, useEffect } from "react";
import CookieBtn from "../CookieBtn/CookieBtn";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <a className="text-white lg:text-2xl text-lg font-bold cursor-pointer inline-flex">
              Cookie Inc <span className="text-light-cream ms-2">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl transition ${
                  isActive
                    ? "text-light-cream font-bold"
                    : "text-white hover:text-light-cream"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `text-xl transition ${
                  isActive
                    ? "text-light-cream font-bold"
                    : "text-white hover:text-light-cream"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/service"
              className={({ isActive }) =>
                `text-xl transition ${
                  isActive
                    ? "text-light-cream font-bold"
                    : "text-white hover:text-light-cream"
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-xl transition ${
                  isActive
                    ? "text-light-cream font-bold"
                    : "text-white hover:text-light-cream"
                }`
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `text-xl transition ${
                  isActive
                    ? "text-light-cream font-bold"
                    : "text-white hover:text-light-cream"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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

          {/* Desktop CTA Button */}
          <div className="hidden xl:block">
            <CookieBtn name={"Get a Quote"} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden mt-4 pb-4 space-y-4">
            <a
              href="/"
              className="block text-white text-xl py-2 hover:text-dark-cream"
            >
              Home
            </a>
            <a
              href="/about-us"
              className="block text-white text-xl py-2 hover:text-dark-cream"
            >
              About
            </a>
            <a
              href="/service"
              className="block text-white text-xl py-2 hover:text-dark-cream"
            >
              Services
            </a>
            <a
              href="/portfolio"
              className="block text-white text-xl py-2 hover:text-dark-cream"
            >
              Portfolio
            </a>
            <div className="pt-2">
              <CookieBtn name={"Get a Quote"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
