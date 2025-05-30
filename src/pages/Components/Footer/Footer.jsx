import React from 'react'

export default function Footer() {
  return (
    <div className='h-full px-20 py-30 bg-black text-white'>
      <div className="grid grid-cols-2">
        <div>
          <div className="flex flex col">
                     <img src="/imgs/cookie_white.png" className='h-8 w-8 me-3' alt="" /><h2 className="text-2xl font-bold">Cookie Inc <span className="text-light-cream">.</span></h2>

          </div>
        </div>
      </div>
    </div>
  )
}
