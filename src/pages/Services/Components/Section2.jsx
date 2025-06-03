import React from 'react';
import { Icon } from "@/components/ui/evervault-card";

export function EvervaultCard({title, features}) {
  return (
    <div
      className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative h-full w-full">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon
        className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <h2 className="dark:text-white inline-flex gap-3 justify-center items-center text-black mt-4 font-bold text-center text-2xl pb-5">
       <img src="/imgs/cookie-hd.png" className='ms-2 h-10 w-10' alt="" /> {title}
      </h2>
      <ul className='pb-10'>
{features.map((feature, idx) => {
  return (
    <li key={idx} className='py-3 inline-flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff2a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg> {feature}</li>
  )
})}
      </ul>
      <button
        className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full  text-black dark:text-white px-5 py-3 mt-auto">
        Quote Now
      </button>
    </div>
  );
}




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
        "Integrations & Maintenance",
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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" data-theme="light">
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
            // <div key={index} className="bg-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            //   <div className="p-8">
            //     <h2 className="text-2xl text-center font-bold text-white mb-2" style={{ color: '#C18B43' }}>
            //             {pkg.title}
            //     </h2>
            //     <p className="text-lg text-center text-white mb-6">{pkg.subtitle}</p>
                
            //     <ul className="space-y-4 mb-8">
            //       {pkg.features.map((feature, i) => (
            //         <li key={i} className="flex items-start">
            //           <span className="text-white font-medium">{i + 1}.</span>
            //           <span className="ml-2 text-white">{feature}</span>
            //         </li>
            //       ))}
            //     </ul>
                
            //     <button className="w-full bg-white text-black py-3 px-6 rounded-md hover:bg-[#C18B43] transition-colors duration-300 font-medium">
            //       Get a Quote
            //     </button>
            //   </div>
            // </div>
<EvervaultCard title={pkg.title} key={index} features={pkg.features}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;