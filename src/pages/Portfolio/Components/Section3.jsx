import React from 'react';
import { NumberTicker } from "@/components/magicui/number-ticker";

const Section3 = ({content}) => {
  return (
    <div className="bg-black text-white py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
      
        <div className="mb-4 md:mb-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight md:leading-snug">
                   <NumberTicker
      value={content.count}
      className="whitespace-pre-wrap me-3 font-medium tracking-tighter text-light-cream"
    />{content.title}
             </h2> 
        </div>
        

        <p className="text-lg md:text-xl">
         </p>

<a href="/contact-us" className="group">
  <p className="text-base sm:text-lg md:text-xl font-semibold mt-10 flex items-center justify-center gap-2 text-center">
    {content.button}
    <span className="text-light-cream text-xl transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </p>
</a>


         
      </div>
    </div>
  );
};

export default Section3;