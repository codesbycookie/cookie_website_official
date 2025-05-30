import React from 'react'
import './CookieBtn.css'


export default function CookieBtn({name}) {
  return (
    <button className='btn border-t-2 bg-black border-3 rounded-xl border-muted cookie-btn'>
       <img src="/imgs/cookie_white.png" className='h-5 w-5' alt="" /> {name}
    </button>
  )
}
