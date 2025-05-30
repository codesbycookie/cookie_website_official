import React from "react";

export default function LongFeatureCard() {
  return (
    <div className="card bg-black">
      <figure className="px-10 pt-10">
        <img
          src="/imgs/placeholder.png"
          className="rounded-xl h-75 w-150 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center mt-10">
        <h2 className="card-title font-normal font-hahmlet text-3xl">Long heading is what you see here in this feature section</h2>
        <p className='mt-5 text-lg font-light'>
          Our digital marketing services are designed to engage and convert.
        </p>
        <div className="card-actions mt-10">
            <a href="#">Learn More &nbsp;{'>'}</a>
        </div>
      </div>
    </div>
  );
}
