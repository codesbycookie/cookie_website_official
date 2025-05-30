import React from 'react';

const Section3 = () => {
  // Content configuration
  const content = {
    title: "Who Are We ?",
    tagline: [
      "A Tech-Powered Creative Studio.",
      "Powered By Engineers. Inspired By Designers"
    ],
    mission: [
      "A Creative Studio Which Turn",
      "Ideas Into Brands,",
      "Clicks Into Experiences,",
      "And Screens Into Stories."
    ],
    values: [
      "We Don't Just Offer Services",
      "Here, We Bring",
      "Commitment, Creativity,",
      "And Care."
    ],
    images: [
      "/imgs/placeholder.png", // First image (left)
      "/imgs/placeholder.png"  // Second image (right)
    ]
  };

  return (
    <div className="bg-white text-black font-sans">
      {/* Title Section */}
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          {content.title}
        </h1>
      </div>

      {/* First Section (Text only - centered) */}
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <div className="mb-12">
          <p className="text-2xl md:text-3xl font-light italic mb-2 leading-snug">
            "{content.tagline[0]}
          </p>
          <p className="text-2xl md:text-3xl font-light italic leading-snug">
            {content.tagline[1]}"
          </p>
        </div>
      </div>

      {/* Second Section (Image Left) */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:pr-8">
          <img 
            src={content.images[0]} 
            alt="Creative studio workspace" 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4 md:space-y-6">
          {content.mission.map((line, index) => (
            <p key={index} className="text-xl md:text-2xl font-medium leading-tight text-center md:text-left">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Third Section (Image Right) */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-4 md:space-y-6">
          {content.values.map((line, index) => (
            <p key={index} className="text-xl md:text-2xl font-medium leading-tight text-center md:text-left">
              {line}
            </p>
          ))}
        </div>
        <div className="order-1 md:order-2 md:pl-8">
          <img 
            src={content.images[1]} 
            alt="Design team collaborating" 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;