import React from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo({ is_reverse = false }) {
  return (
    <div className="relative w-full flex-col items-center justify-center overflow-hidden ">
      <VelocityScroll
        numRows={1}
        defaultVelocity={2}
        reverse={is_reverse}
        className={""}
      >
        <span className="text-xl text-gray-500 opacity-50">
          {" "}
          Experience Every Byte <span className="text-light-cream">.</span>
        </span>
      </VelocityScroll>
    </div>
  );
}

export default function Section7({content}) {
  return (
    <section className="bg-black text-white pb-10">
      <ScrollBasedVelocityDemo />
      <div className="md:px-section-lg py-25 px-section-sm text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {content.title}
        </h2>
        <p className="mb-6 text-gray-300">
          {content.description}
        </p>
<div className="flex flex-row gap-3 sm:flex-row sm:justify-center sm:gap-6">
  <button className="bg-white text-black font-medium px-5 py-4 text-sm md:text-base lg:text-lg rounded shadow">
    {content.first_button}
  </button>
  <button className="border border-white text-white px-5 py-4 text-sm md:text-base lg:text-lg rounded">
    {content.second_button}
  </button>
</div>

      </div>
      <ScrollBasedVelocityDemo is_reverse={true} />
    </section>
  );
}
