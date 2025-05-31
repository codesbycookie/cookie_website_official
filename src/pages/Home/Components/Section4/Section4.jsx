import React from "react";

const steps = [
  {
    title: "Transforming Ideas into Digital Reality: Our Step-by-Step Approach",
    desc: "We start with a consultation to understand your vision and goals.",
    label: "Start",
  },
  {
    title: "Design and Development: Crafting Your Unique Digital Experience",
    desc: "Our team designs and develops tailored solutions that reflect your brand.",
    label: "Build",
  },
  {
    title: "Testing and Feedback: Ensuring Quality and Satisfaction in Every Step",
    desc: "We conduct thorough testing and incorporate your feedback for optimal results.",
    label: "Launch",
  },
];

export default function Section4() {
  return (
    <div className="bg-white text-black py-16">
      <div className="text-center md:px-section-lg px-section-sm">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-hahmlet max-w-4xl mx-auto">
          Our Seamless Process: From Concept to Completion in Just a Few Steps
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-6 md:px-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            
            <img src="/imgs/featurepic.svg" className="h-15 w-15 m-5" alt="" />
            <h3 className="font-medium text-lg sm:text-xl mb-3">
              {step.title}
            </h3>
            <p className="text-base text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
