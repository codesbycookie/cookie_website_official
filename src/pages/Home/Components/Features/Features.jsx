import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

export default function Features() {
  return (
    <div className=" bg-white text-black">
      <div className="mx-30 py-30 h-full text-black grid grid-cols-1 md:grid-cols-2 gap-5">
       <div className='pt-20 order-2 md:order-1'>
         <div className="w-150">
          <h3 className="font-hahmlet text-5xl font-medium">
          Long heading is what you see here in this feature section
        </h3>
        <p className='mt-10 text-lg'>
          At Cookie, we specialize in crafting stunning websites and apps that captivate users. Our expert team combines creativity and technology to deliver exceptional digital solutions.
        </p>
         </div>
        <div className="mt-20 flex flex-row">
          <FeatureCard title={'Web Design'} content={"Bespoke web solutions tailored to elevate your brand's online presence."}/>
                  <FeatureCard title={'App Development'} content={"Innovative mobile applications designed to engage and retain your audience."}/>

        </div>
       </div>
       <div className='flex flex-col justify-center items-center  order-1 md:order-2'>
         <img src="/imgs/placeholder.png" className='h-full w-9/10' alt="" />
       </div>
      </div>
    </div>
  );
}
