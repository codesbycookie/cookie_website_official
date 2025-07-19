import React from "react";
import LongFeatureCard, { CardHoverEffectDemo } from "../LongFeatureCard/LongFeatureCard";

export default function Section3({content}) {
  
  return (
    <div className="bg-black text-white py-16">
      <div className="text-center md:px-section-lg px-section-sm">
        <h1 className="font-hahmlet text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto leading-snug">
        {content.heading}
        </h1>
      </div>

      <div className=" sm:px-10 md:px-20 mt-16">
        <CardHoverEffectDemo contents={content.cards}/>
      </div>
    </div>
  );
}
