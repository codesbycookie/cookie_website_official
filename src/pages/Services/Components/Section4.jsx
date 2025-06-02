import React from 'react';

const Section4 = () => {
  const services = [
    {
      title: "Web Development",
      description: [
        "Building Websites And Web",
        "Applications That Work Well And",
        "Meet Your Needs."
      ]
    },
    {
      title: "UI/UX Design",
      description: [
        "Crafting Intuitive Interfaces",
        "That Delight Users And",
        "Drive Engagement."
      ]
    },
    {
      title: "Digital Marketing",
      description: [
        "Creating Effective Strategies",
        "To Expand Your Online Presence",
        "And Boost Conversions."
      ]
    },
    {
      title: "Mobile Development",
      description: [
        "Creating Powerful Mobile",
        "Apps That Perform Flawlessly",
        "Across All Devices."
      ]
    },
    {
      title: "Logo Design",
      description: [
        "Designing Unique Visual Identities",
        "That Capture Your Brand's",
        "Essence And Story."
      ]
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          What's On The Menu?
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          A Full-Stack Of Creative Services Cooked With Care.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative bg-black text-white p-8 rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer overflow-hidden"
            >
              {/* Background White Circle Accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10 group-hover:opacity-30 transition-all duration-500"></div>
              
              <h2 className="text-2xl font-bold mb-4 relative z-10">
                {service.title}
              </h2>
              <div className="space-y-2 relative z-10">
                {service.description.map((line, i) => (
                  <p key={i} className="text-base leading-relaxed text-gray-300">
                    {line}
                  </p>
                ))}
              </div>

              {/* Arrow Icon on Hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-500">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
