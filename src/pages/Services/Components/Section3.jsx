import React from 'react';

const Section3 = () => {
  const steps = [
    {
      title: "Design The Blueprint",
      description: "We Start By Drafting The Perfect Plan — Every Detail Measured And Mapped Out To Match Your Vision."
    },
    {
      title: "Design The Blueprint",
      description: "We Start By Drafting The Perfect Plan — Every Detail Measured And Mapped Out To Match Your Vision."
    },
    {
      title: "Design The Blueprint",
      description: "We Start By Drafting The Perfect Plan — Every Detail Measured And Mapped Out To Match Your Vision."
    },
    {
      title: "Design The Blueprint",
      description: "We Start By Drafting The Perfect Plan — Every Detail Measured And Mapped Out To Match Your Vision."
    },
    {
      title: "Design The Blueprint",
      description: "We Start By Drafting The Perfect Plan — Every Detail Measured And Mapped Out To Match Your Vision."
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Making Of A Masterpiece</h1>
        <p className="mt-4 text-lg md:text-xl">From Blueprint To Bullet – Every Part Of Our Process Is Built To Fire Straight At Your Goals.</p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line with Images */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center">
          {/* Line */}
          <div className="w-0.5 h-full bg-gray-500"></div>
          
          {/* Images on the line */}
          {steps.map((_, index) => (
            <div 
              key={index} 
              className="absolute flex items-center justify-center"
              style={{ top: `${(index * 20) + 10}%` }}
            >
              <img 
                src="/imgs/cookie_white.png" 
                alt="Timeline marker" 
                className="w-8 h-8 bg-black p-1 rounded-full border-2 border-gray-500"
              />
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start`}>
              {/* Spacer for mobile */}
              <div className="md:hidden w-8 h-8">
                <img src="/imgs/cookie_white.png" alt="logo" height/>
              </div>
              
              {/* Content Box */}
              <div className={`bg-black p-6 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'}`}>
                <img src="/imgs/cookie_white.png" alt="logo" className="w-16 h-16" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-base md:text-lg text-white">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;