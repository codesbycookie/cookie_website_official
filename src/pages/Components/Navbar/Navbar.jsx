import React, { useState, useEffect } from "react";
import CookieBtn from "../CookieBtn/CookieBtn";

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
  className={`fixed z-45 transition-all duration-300 ease-in-out ${
    scrolled
      ? "left-0 right-0 top-4 bg-black/60 backdrop-blur-lg shadow-lg mx-auto px-6 py-4 rounded-2xl w-[90%] md:w-[70%]"
      : "top-0 bg-black px-5 py-5 w-full"
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
            <a href="/" className="text-white text-xl hover:text-dark-cream transition">
              Home
            </a>
            <a href="/about-us" className="text-white text-xl hover:text-dark-cream transition">
              About
            </a>
            <a href="/service" className="text-white text-xl hover:text-dark-cream transition">
              Services
            </a>
            <a href="/portfolio" className="text-white text-xl hover:text-dark-cream transition">
              Portfolio
            </a>
            <a href="/contact-us" className="text-white text-xl hover:text-dark-cream transition">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            <a href="/" className="block text-white text-xl py-2 hover:text-dark-cream">
              Home
            </a>
            <a href="/about-us" className="block text-white text-xl py-2 hover:text-dark-cream">
              About
            </a>
            <a href="/service" className="block text-white text-xl py-2 hover:text-dark-cream">
              Services
            </a>
            <a href="/portfolio" className="block text-white text-xl py-2 hover:text-dark-cream">
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

