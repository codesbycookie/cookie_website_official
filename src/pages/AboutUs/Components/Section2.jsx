/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StoryCard } from './StoryCard/StoryCard';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Chapter 1",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute bottom-80 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Chapter 2",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Chapter 3",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Chapter 4",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Chapter 5",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Chapter 6",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Chapter 7",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer
      className="relative flex h-screen w-full items-center justify-center overflow-clip">
      <p
        className="absolute top-1/2 mx-auto  -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Thats how our cookie made with love
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <p>
            Our major milestones and achievements along the journey.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eum eaque! Tempore sit neque error sed, labore ex voluptatibus recusandae molestiae eos explicabo, vel ea sequi officia? Dolorum, repellendus ipsum?
          </p>
          <h3
            className="mt-20 text-center text-2xl font-bold text-light-cream">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

const Section2 = () => {
  const chapters = [
    {
      number: "CHAPTER 1",
      title: "The Spark",
      content: "Where the initial idea for Cookie was born from late-night coding sessions."
    },
    {
      number: "CHAPTER 2",
      title: "First Batch",
      content: "Our earliest prototypes and the lessons we learned from them."
    },
    {
      number: "CHAPTER 3",
      title: "Rising Heat",
      content: "The challenges we faced as we scaled our operations."
    },
    {
      number: "CHAPTER 4",
      title: "Sweet Success",
      content: "Our major milestones and achievements along the journey."
    }
  ];

  const [currentChapter, setCurrentChapter] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animationStage, setAnimationStage] = useState('enter');

  useEffect(() => {
    let displayTimer, exitTimer;
    if (isAutoPlaying) {
      setAnimationStage('enter');
      displayTimer = setTimeout(() => {
        setAnimationStage('display');
        exitTimer = setTimeout(() => {
          setAnimationStage('exit');
          setTimeout(() => {
            setCurrentChapter((prev) => (prev + 1) % chapters.length);
            setAnimationStage('enter');
          }, 500);
        }, 2000);
      }, 500);
    }
    return () => {
      clearTimeout(displayTimer);
      clearTimeout(exitTimer);
    };
  }, [currentChapter, isAutoPlaying, chapters.length]);

  const navigateChapter = (direction) => {
    setIsAutoPlaying(false);
    setAnimationStage('exit');
    setTimeout(() => {
      setCurrentChapter((prev) =>
        direction === 'next'
          ? (prev + 1) % chapters.length
          : (prev - 1 + chapters.length) % chapters.length
      );
      setAnimationStage('enter');
    }, 500);
  };

  const handleDotClick = (index) => {
    if (index === currentChapter) return;
    setIsAutoPlaying(false);
    setAnimationStage('exit');
    setTimeout(() => {
      setCurrentChapter(index);
      setAnimationStage('enter');
    }, 500);
  };

  const getCardAnimationClass = () => {
    switch (animationStage) {
      case 'enter':
        return 'transform translate-x-full opacity-0 transition-all duration-500 ease-in-out';
      case 'display':
        return 'transform translate-x-0 opacity-100 transition-all duration-500 ease-in-out';
      case 'exit':
        return 'transform -translate-x-full opacity-0 transition-all duration-500 ease-in-out';
      default:
        return 'transform translate-x-0 opacity-100';
    }
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      
      <DraggableCardDemo/>
    </div>
  );
};

export default Section2;
