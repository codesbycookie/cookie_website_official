import React from 'react';
import { HyperText } from "@/components/magicui/hyper-text";
import { FlipText } from "@/components/magicui/flip-text";

const Section4 = () => {
  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <div className="mb-4 md:mb-6 font-mona-sans">
            <HyperText className={''}>
                 We Know What It Means To Start From Zero
            </HyperText>
        </div>
        
        <p className="text-lg md:text-xl font-medium font-mona-sans text-gray-600">
            <FlipText>~ Built By Founders, For Founders ~</FlipText>
         </p>
         
      </div>
    </div>
  );
};

export default Section4;