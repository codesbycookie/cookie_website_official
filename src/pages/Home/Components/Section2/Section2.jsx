import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

export default function Section2() {
  return (
    <div className="bg-white text-black">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <div className="max-w-xl">
            <h3 className="font-hahmlet text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              Long heading is what you see here in this feature section
            </h3>
            <p className="mt-6 text-base sm:text-lg leading-relaxed">
              At Cookie, we specialize in crafting stunning websites and apps that captivate users. Our expert team combines creativity and technology to deliver exceptional digital solutions.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <FeatureCard
              title="Web Design"
              content="Bespoke web solutions tailored to elevate your brand's online presence."
            />
            <FeatureCard
              title="App Development"
              content="Innovative mobile applications designed to engage and retain your audience."
            />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <img
            src="/imgs/placeholder.png"
            alt="Feature Illustration"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
