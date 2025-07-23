import React from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import HomeButton from "../HomeButton/HomeButton";

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
<div className="flex flex-row gap-3 sm:flex-row justify-center sm:gap-6">
<a
  href="/contact-us"
  className="bg-white text-black font-medium px-5 py-4 text-sm md:text-base lg:text-lg rounded-xl shadow transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-md"
>
  {content.first_button}
</a>

<a
  href={`https://wa.me/918610663178?text=${encodeURIComponent("Hi Cookie Inc, I'd like to talk to your experts about a project.")}`}
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white text-white px-5 py-4 text-sm md:text-base lg:text-lg rounded-xl transition duration-300 ease-in-out hover:font-bold hover:shadow-md"
>
  {content.second_button}
</a>

</div>

      </div>
      <ScrollBasedVelocityDemo is_reverse={true} />
    </section>
  );
}
