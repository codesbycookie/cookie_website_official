import React from "react";


import { HoverEffect } from "@/components/ui/card-hover-effect";



export function CardHoverEffectDemo({contents}) {
  return (
    <div className="mx-auto px-8 z-1">
      <HoverEffect items={contents} />
    </div>
  );
}



export default function LongFeatureCard() {
  return (
    <div className="card bg-black border-none rounded-xl  hover:shadow-lg transition-shadow duration-300">
      <figure className="px-6 pt-6">
        <img
          src="/imgs/placeholder.png"
          alt="Feature"
          className="rounded-xl w-full h-52 sm:h-64 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center text-white">
        <h2 className="card-title font-hahmlet text-2xl sm:text-3xl font-medium">
          Long heading is what you see here in this feature section
        </h2>
        <p className="mt-4 text-base sm:text-lg font-light">
          Our digital marketing services are designed to engage and convert.
        </p>
        <div className="card-actions mt-6">
          <a href="#" className=" hover:underline">
            Learn More &nbsp; {'>'}
          </a>
        </div>
      </div>
    </div>
  );
}
