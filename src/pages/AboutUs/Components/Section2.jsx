/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { StoryCard } from './StoryCard/StoryCard';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo({items, title}) {
  return (
<DraggableCardContainer
  className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-10 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
>
  <p
    className="mb-8 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-neutral-400 dark:text-neutral-800"
  >
    {title}
  </p>

  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
    {items.map((item, index) => (
      <DraggableCardBody key={index} className={`p-6 rounded-xl max-h-250px shadow-md ${item.className}`}>
        <p className="text-sm md:text-lg text-neutral-700 dark:text-neutral-200">
          {item.description}
        </p>
        <h3 className="mt-6 text-center text-lg sm:text-2xl font-bold text-light-cream">
          {item.title}
        </h3>
      </DraggableCardBody>
    ))}
  </div>
</DraggableCardContainer>

  );
}

const Section2 = ({content}) => {

  const containerRef = useRef(null)
  

  return (
    <div className="bg-white h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      
      <DraggableCardDemo ref={containerRef} items={content.items} title={content.title}/>
    </div>
  );
};

export default Section2;
