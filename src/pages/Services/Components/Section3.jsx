import React from 'react';

const Section3 = () => {
  const steps = [
    {
      title: "Design The Blueprint",
      description: "We Start By Drafting The Perfect Plan — Every Detail Measured And Mapped Out To Match Your Vision."
    },
    {
      title: "Development Phase",
      description: "Turning Designs Into Functional Code With Precision And Care For Optimal Performance."
    },
    {
      title: "Quality Assurance",
      description: "Rigorous Testing To Ensure Flawless Functionality Across All Devices And Platforms."
    },
    {
      title: "Deployment",
      description: "Seamless Launch With Continuous Monitoring For Immediate Issue Resolution."
    },
    {
      title: "Maintenance",
      description: "Ongoing Support And Updates To Keep Your Solution Running Smoothly."
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6">
      {/* Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Making Of A Masterpiece</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          From Blueprint To Bullet – Every Part Of Our Process Is Built To Fire Straight At Your Goals.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line with Images - Hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full">
          <div className="w-0.5 h-full bg-gray-600 mx-auto"></div>
          {steps.map((_, index) => (
            <div 
              key={index} 
              className="absolute left-1/2 transform -translate-x-1/2 flex justify-center"
              style={{ top: `${(index * 20) + 10}%` }}
            >
              <img 
                src="/imgs/cookie_white.png" 
                alt="Timeline marker" 
                className="w-10 h-10 bg-black p-1 rounded-full border-2"
              />
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}
            >
              {/* Mobile Cookie Indicator */}
              <div className="md:hidden flex justify-center mb-4">
                <img 
                  src="/imgs/cookie_white.png" 
                  alt="Step indicator" 
                  className="w-8 h-8 bg-black p-1 rounded-full border-2"
                />
              </div>
              
              {/* Content Box */}
              <div className={`bg-black p-6 md:p-8 rounded-lg border border-white-800 md:w-[45%] 
                ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                <div className="flex items-center mb-4">
                  <img 
                    src="/imgs/cookie_white.png" 
                    alt="Step icon" 
                    className="w-8 h-8 mr-3"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-base md:text-lg text-gray-300 pl-11">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;