import React from 'react'
import './CookieBtn.css'
import { useNavigate } from 'react-router-dom';

export default function CookieBtn({ name }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact-us');
  }


  return (
    <button
  onClick={handleClick}
  class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-black shadow hover:bg-white/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2 "
>
  <span
    class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-black opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
  ></span>
  <img
        src="/imgs/cookie-hd.png" loading="lazy"
        alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
        className="h-5 w-5 cookie-float transition-transform duration-300"
      />
  
    
    <span class="ml-1 text-black">{name}</span>
  
  
</button>
  );
}
