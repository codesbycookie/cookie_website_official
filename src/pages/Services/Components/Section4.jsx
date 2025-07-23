import React from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";




const Section4 = ({ content }) => {

  return (
    <div className="bg-white py-16 md:px-section-lg px-section-sm">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {content.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          {content.subtitle}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
          {content.services.map((service, index) => (
            <NeonGradientCard
              key={index}
              neonColors={{ firstColor: "#c18b13", secondColor: "#ffffff" }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                {service.title}
              </h2>
              <div className="space-y-2 text-gray-700 w-full flex flex-col">
                {service.description.map((line, i) => (
<p
  key={i}
  className="flex items-start gap-3 px-4 sm:px-6 text-sm sm:text-base md:text-lg leading-relaxed text-center"
>
  <span className="flex-shrink-0 mt-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c18b13"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="m6 17 5-5-5-5" />
      <path d="m13 17 5-5-5-5" />
    </svg>
  </span>
  <span className="text-left w-full">{line}</span>
</p>

                ))}
              </div>
            </NeonGradientCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
