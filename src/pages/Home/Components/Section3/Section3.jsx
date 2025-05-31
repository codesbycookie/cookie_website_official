import React from "react";
import LongFeatureCard from "../LongFeatureCard/LongFeatureCard";

export default function Section3() {
  return (
    <div className="bg-black text-white py-16">
      <div className="text-center md:px-section-lg px-section-sm">
        <h1 className="font-hahmlet text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto leading-snug">
          Long heading is what you see here in this feature section
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-10 md:px-20 mt-16">
        <LongFeatureCard />
        <LongFeatureCard />
        <LongFeatureCard />
      </div>
    </div>
  );
}
