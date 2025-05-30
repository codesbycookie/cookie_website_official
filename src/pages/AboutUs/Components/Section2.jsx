import React, { useState, useEffect } from 'react';

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
      <div className="max-w-5xl mx-auto text-center relative">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Cookie Verse</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">How It All Baked Up</p>
        <div className="border-t border-gray-300 w-20 mx-auto mb-8"></div>

        {/* Animation Wrapper */}
        <div className="relative h-72 sm:h-80 md:h-96 mb-8 flex justify-center items-center overflow-hidden">
          <div
            className={`absolute bg-black text-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col justify-center items-center text-center w-full max-w-md sm:max-w-lg md:max-w-xl min-h-60 sm:min-h-72 md:min-h-80 ${getCardAnimationClass()}`}
          >
            <h2 className="text-xl sm:text-2xl font-bold">{chapters[currentChapter].number}</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4">
              {chapters[currentChapter].title}
            </h3>
            <p className="w-full max-w-full text-sm sm:text-base md:text-lg text-center">
                 {chapters[currentChapter].content}
            </p>

          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => navigateChapter('prev')}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Previous chapter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {chapters.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition ${currentChapter === index ? 'bg-black' : 'bg-gray-300'}`}
                aria-label={`Go to chapter ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => navigateChapter('next')}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Next chapter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
