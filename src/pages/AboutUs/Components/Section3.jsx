import React from 'react';

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
        <p className="text-2xl md:text-3xl font-light italic whitespace-pre-line leading-snug">
          {content.tagline}
        </p>
      </div>

      {/* Mission Section with Left Image */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:pr-8">
          <img 
            src={content.images.left} 
            alt="Creative studio workspace" 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
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
          <img 
            src={content.images.right} 
            alt="Design team collaborating" 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;