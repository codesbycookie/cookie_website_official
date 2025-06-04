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
        <span className="text-xl text-gray-500">
          {" "}
          Experience Every Byte <span className="text-light-cream">.</span>
        </span>
      </VelocityScroll>
    </div>
  );
}

export default function Section7() {
  return (
    <section className="bg-black text-white pb-10">
      <ScrollBasedVelocityDemo />
      <div className="md:px-section-lg py-25 px-section-sm text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Medium length CTA heading goes here
        </h2>
        <p className="mb-6 text-gray-300">
          Fusce at nisi eget dolor rhoncus facilisis. Mauris ante ligula,
          facilisis sed ornare eu.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-black font-medium px-6 py-2 rounded shadow">
            Start
          </button>
          <button className="border border-white px-6 py-2 rounded text-white">
            Contact
          </button>
        </div>
      </div>
      <ScrollBasedVelocityDemo is_reverse={true} />
    </section>
  );
}
