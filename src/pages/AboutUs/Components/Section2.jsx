import React, { useState, useEffect } from 'react';
import { StoryCard } from './StoryCard/StoryCard';

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
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
     <div className="flex justify-center">
       <StoryCard/>
     </div>
    </div>
  );
};

export default Section2;
