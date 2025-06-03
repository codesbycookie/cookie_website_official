import React from 'react';

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-4 border  ">
        
        <CardItem translateZ="100" className="w-full">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}



const Section3 = () => {
  // Content configuration as strings
  const content = {
    title: "Who Are We ?",
    
    tagline: `"A Tech-Powered Creative Studio.
              Powered By Engineers. Inspired By Designers"`,
    
    mission: `A Creative Studio Which Turn Ideas Into Brands, Clicks Into Experiences, And Screens Into Stories.`,
    
    values: `We Don't Just Offer Services Here, We Bring Commitment, Creativity, And Care.`,
    
    images: {
      left: "/imgs/placeholder.png",
      right: "/imgs/placeholder.png"
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Title Section */}
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          {content.title}
        </h1>
      </div>

      {/* Tagline Section */}
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-2xl md:text-3xl font-semibold italic whitespace-pre-line leading-snug">
          {content.tagline}
        </p>
      </div>

      {/* Mission Section with Left Image */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:pr-8">
         <ThreeDCardDemo/>
        </div>
        <div className="text-xl md:text-2xl font-medium whitespace-pre-line">
          {content.mission}
        </div>
      </div>

      {/* Values Section with Right Image */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-xl md:text-2xl font-medium whitespace-pre-line order-2 md:order-1">
          {content.values}
        </div>
        <div className="order-1 md:order-2 md:pl-8">
                   <ThreeDCardDemo/>

        </div>
      </div>
    </div>
  );
};

export default Section3;