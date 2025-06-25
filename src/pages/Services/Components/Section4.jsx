import React from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
      </span>
    </NeonGradientCard>
  );
}

const Section4 = ({ content }) => {

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {content.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          {content.subtitle}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {content.services.map((service, index) => (
            <NeonGradientCard
              key={index}
              neonColors={{ firstColor: "#c18b13", secondColor: "#ffffff" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {service.title}
              </h2>
              <div className="space-y-2 text-gray-700 w-full flex flex-col">
                {service.description.map((line, i) => (
                  <p
                    key={i}
                    className="text-lg leading-relaxed text-center flex items-start gap-3 px-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c18b13"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevrons-right-icon lucide-chevrons-right"
                    >
                      <path d="m6 17 5-5-5-5" />
                      <path d="m13 17 5-5-5-5" />
                    </svg>
                    {line}
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
