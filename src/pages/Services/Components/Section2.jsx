import React from "react";
import { Icon } from "@/components/ui/evervault-card";

export function EvervaultCard({ title, features }) {
  return (
    <div className="border border-black/[0.3] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative h-full w-full">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <h2 className="dark:text-white inline-flex gap-3 justify-center items-center text-black mt-4 font-bold text-center text-2xl pb-5">
        <img src="/imgs/cookie-hd.png" className="ms-2 h-10 w-10" alt="" />{" "}
        {title}
      </h2>
      <ul className="pb-10">
        {features.map((feature, idx) => {
          return (
            <>
              <li key={idx} className="py-3 inline-flex gap-2">
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
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>{" "}
                {feature}
              </li>{" "}
              <br />
            </>
          );
        })}
      </ul>
      <button className="text-sm  font-medium bg-light-cream rounded-full  text-black  dark:text-white px-5 py-3 mt-auto hover:shadow-[0_10px_20px_rgba(0,0,0,0.5) transition-all duration-300 ease-in-out hover:scale-105">
        Quote Now
      </button>
    </div>
  );
}

const Section2 = ({content}) => {

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" data-theme="light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
{content.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        </p>
        </div>

        <div className="border-t border-gray-200 w-20 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.packages.map((pkg, index) => (
            <EvervaultCard
              title={pkg.title}
              key={index}
              features={pkg.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
