import React from 'react'
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

import { SpinningText } from "@/components/magicui/spinning-text";

export function SpinningTextBasic() {
  return <SpinningText className={'md:text-3xl text-lg tracking-widest font-bold text-light-cream'} radius={6}>Creativity • Care • Commitment •</SpinningText>;
}



export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 relative">
      {/* Top Row */}

<div className="absolute top-0 md:end-35 end-20">
  <SpinningTextBasic/>
</div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* Left: Logo + Email */}
        <div className="flex-1 w-full">
          <div className="flex items-center mb-4">
            <img src="/imgs/cookie_white.png" alt="Cookie logo" className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold">Cookie Inc<span className="text-yellow-200">.</span></h2>
          </div>
          <div className="flex items-center bg-[#1e1e1e] rounded w-full h-[44px] mb-2">
            <input
              type="text"
              placeholder="Your Email Here"
              className="flex-1 bg-transparent px-4 text-sm text-white placeholder-white focus:outline-none"
            />
            <button className=" hover:bg-gray-400 bg-white text-black text-sm rounded font-semibold px-4 h-full ">
              Get a Quote
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            By getting a quote, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1 mt-10 lg:mt-0">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">Webinars</a></li>
              <li><a href="#" className="hover:text-white">E-books</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Facebook size={16} /> Facebook</li>
              <li className="flex items-center gap-2"><Instagram size={16} /> Instagram</li>
              <li className="flex items-center gap-2"><Twitter size={16} /> X</li>
              <li className="flex items-center gap-2"><Linkedin size={16} /> LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700 my-10" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>© 2025 Cookie. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white underline">Privacy Policy</a>
          <a href="#" className="hover:text-white underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
