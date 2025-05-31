import React, { useState } from "react";
import CookieBtn from "../CookieBtn/CookieBtn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-black px-5 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a className="text-white text-2xl font-bold">
              Cookie Inc <span className="text-dark-cream">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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

          {/* Desktop CTA Button - Hidden on mobile */}
          <div className="hidden md:block">
            <CookieBtn name={"Get a Quote"} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
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