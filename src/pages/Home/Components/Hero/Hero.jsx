import React from 'react'

export default function Hero() {
  return (
    <div className='h-screen bg-black text-white'>
      <div className="mx-50">
        <div className="pt-30 flex flex-col justify-center items-center">
          <h1 className='font-mona-sans font-semibold text-center text-9xl'>Medium length hero <br /> heading goes here</h1>
        <p className='text-center mt-20 text-2xl w-250'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="pt-30 text-center">
         <button className='btn p-8 mx-3 bg-white text-black font-bold rounded-xl'>Explore more</button>
         <button className='btn p-8 mx-3 border-t-1 border-3 border-muted rounded-xl bg-black text-white'>Contact Us</button>

        </div>
        </div>
      </div>
    </div>
  )
}
