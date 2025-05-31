import React from 'react';

export default function Section1() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto px-section-sm md:px-section-lg  py-20">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-hahmlet font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-screen-lg">
            Medium length hero heading goes here
          </h1>

          <p className="mt-10 text-lg sm:text-xl md:text-2xl max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="btn px-10 py-10 bg-white text-black font-bold rounded-xl">
              Explore more
            </button>
            <button className="btn px-10 py-10 border-t-1 border-3 border-muted rounded-xl bg-black text-white">
              Contact Us
            </button>
          </div>

          <div className="mt-10 w-full">
            <img
              src="/imgs/heroimg.png"
              className="w-full h-auto rounded-none"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
