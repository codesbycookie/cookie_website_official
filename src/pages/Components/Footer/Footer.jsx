import React from 'react'

export default function Footer() {
  return (
    <div className='h-full px-14 py-18 bg-black text-white'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around items-center gap-15">
      {/* Col-1 */}
        <div className='flex flex-col gap-8'>

          <div className="flex ">
             <img src="/imgs/cookie_white.png" className='h-8 w-8 me-3' alt="" /><h2 className="text-2xl font-bold">Cookie Inc <span className="text-light-cream">.</span></h2>
          </div>

          <div className="flex">
             <input type="text" className='w-[333px] h-[44px] bg-white text-black font-semibold  placeholder-black p-2 rounded' placeholder='Enter your Mail' />
              <button className='bg-black text-white border-2 border-white rounded font-semibold px-4 py-2 ms-2 w-2/4'>Get a Qoute</button>
          </div>

          <p className='text-white'>By getting a quote, you agree to our Privacy Policy and consent to receive updates.</p>

         </div>
         
         {/* Col-2 */}
         <div className="flex flex-col gap-2 flex-start lg:ms-[100px]">
         <h1 className="text-xl font-cantarell">Quick Links</h1>
         <a href='#' className='textarea-md hover:text-light-cream '>Home</a>
         <a href='#' className='textarea-md hover:text-light-cream '>About Us</a>
         <a href='#' className='textarea-md hover:text-light-cream '>Service</a>
         <a href='#' className='textarea-md hover:text-light-cream '>Contact Us</a>
         </div>
         {/* col 3 */}
         <div className="flex flex-col gap-2 flex-start lg:ms-[100px]">
         <h1 className="text-xl font-cantarell">Resources</h1>
         <a href='#' className='textarea-md hover:text-light-cream '>Help Center</a>
         <a href='#' className='textarea-md hover:text-light-cream '>FAQ's</a>
         <a href='#' className='textarea-md hover:text-light-cream '>Case studies</a>
         <a href='#' className='textarea-md hover:text-light-cream '>E-books</a>
         </div>
         {/* col 4 */}
         <div className="flex flex-col gap-2 flex-start lg:ms-[100px]">
         <h1 className="text-xl font-cantarell">Follow us on</h1>
         <a href='#' className='textarea-md hover:text-light-cream '>Instagram</a>
         <a href='#' className='textarea-md hover:text-light-cream '>Facebook</a>
         <a href='#' className='textarea-md hover:text-light-cream '>X</a>
         <a href='#' className='textarea-md hover:text-light-cream '>Linkedin</a>
         </div>
      </div>
      <hr className='mt-8 text-gray-500'/>
      <div className="flex flex-col gap-5 md:flex-row justify-between mt-5">
        <p>© 2024 Cookie. All rights reserved.</p>
        <div className="flex gap-4 ">
          <p className='underline'>Privacy Policies</p>
          <p className='underline'>Terms &  Conditions</p>
        </div>
      </div>
    </div>
  )
}
