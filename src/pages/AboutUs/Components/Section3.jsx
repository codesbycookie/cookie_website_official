import React from 'react';

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className=" mx-auto md:auto-rows-[20rem] text-black  font-mona-sans">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon} />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 font-mona-sans justify-center bg-white items-center w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] dark:bg-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, inventore velit vero dolor optio voluptatem ipsa. Deleniti laboriosam quaerat omnis quidem minima, voluptatum ipsa esse sunt provident facilis libero possimus!</div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

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
    <div className="bg-black text-white font-sans h-full">
      {/* Title Section */}
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-mona-sans tracking-tight">
          {content.title}
        </h1>
      </div>

      {/* Tagline Section */}
      <div className="max-w-3xl mx-auto px-4 py-12 text-center font-mona-sans">
        <p className="text-2xl md:text-3xl font-semibold whitespace-pre-line leading-snug">
          {content.tagline}
        </p>
      </div>

        <BentoGridSecondDemo/>


      {/* Mission Section with Left Image */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        
        
        


      </div>


    </div>
  );
};

export default Section3;