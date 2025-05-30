import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

export default function Portfolio() {
  return (
    <>
    <div className="hero bg-black w-100% h-screen flex flex-col items-center justify-center p-3 relative">
      <div className="flex flex-col absolute top-60 gap-[40px] ms-lg justify-center items-center">
        <h1 className='text-8xl text-white font-hahmlet font-semibold '>Cooked with <span className='text-light-cream '>Code,</span> </h1>
        <h2 className='text-8xl text-white font-hahmlet font-semibold'>Served With <span className='text-light-cream '>Care</span></h2>
        <p className='text-2xl text-white lg:mt-4'>Not just a Cookie-Cutter Work -It's our Custom Creation</p>
      </div>
    </div>
    </>
  )
}
