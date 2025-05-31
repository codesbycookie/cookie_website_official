import React from 'react';

const Section2 = () => {
  const packages = [
    {
      title: "Business Essentials",
      subtitle: "Your Brand's Foundation, Built Right.",
      features: [
        "Custom Mobile App Development",
        "Web Application Development",
        "Targeted Digital Marketing",
        "SEO & Performance Optimization",
        "Integrations & Maintenance"
      ]
    },
    {
      title: "The You Project",
      subtitle: "Make Your Personal Brand Unforgettable.",
      features: [
        "Custom Mobile App Development",
        "Web Application Development",
        "Targeted Digital Marketing",
        "SEO & Performance Optimization",
        "Integrations & Maintenance"
      ]
    },
    {
      title: "Build What Matters",
      subtitle: "Digital Solutions That Fit Your Vision Perfectly",
      features: [
        "Custom Mobile App Development",
        "Web Application Development",
        "Targeted Digital Marketing",
        "SEO & Performance Optimization",
        "Integrations & Maintenance"
      ]
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            One Studio. Three Flavors Of Service.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Startups To Scale–Ups, We've Baked Packages For Every Kind Of Brand, Choose The Flavor That Fits Your Vision.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 w-20 mx-auto mb-16"></div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-8">
                <h2 className="text-2xl text-center font-bold text-white mb-2" style={{ color: '#C18B43' }}>
                        {pkg.title}
                </h2>
                <p className="text-lg text-center text-white mb-6">{pkg.subtitle}</p>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-white font-medium">{i + 1}.</span>
                      <span className="ml-2 text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-white text-black py-3 px-6 rounded-md hover:bg-[#C18B43] transition-colors duration-300 font-medium">
                  Get a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;