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
        "Crafting Intuitive Interfaces",
        "That Delight Users And",
        "Drive Engagement."
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
        "Crafting Intuitive Interfaces",
        "That Delight Users And",
        "Drive Engagement."
      ]
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What's On The Menu ?
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          A Full-Stack Of Creative Services Cooked With Care.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {service.title}
              </h2>
              <div className="space-y-2 text-gray-700">
                {service.description.map((line, i) => (
                  <p key={i} className="text-lg leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;