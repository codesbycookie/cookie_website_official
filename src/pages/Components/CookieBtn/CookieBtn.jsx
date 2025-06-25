import React from 'react'
import './CookieBtn.css'


export default function CookieBtn({ name }) {
  return (
    <button className="group bg-black border-2 border-white text-white px-4 py-2 rounded-xl shadow-md transition-all duration-300 flex items-center gap-2 relative overflow-hidden hover:bg-white hover:text-black">
      {/* Floating Cookie Icon */}
      <img
        src="/imgs/cookie_white.png"
        alt="Cookie"
        className="h-5 w-5 cookie-float transition-transform duration-300"
      />
      <span className="z-10 font-semibold">{name}</span>

      {/* Subtle white glow on hover */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white rounded-xl blur-sm transition duration-500 pointer-events-none" />
    </button>
  );
}
