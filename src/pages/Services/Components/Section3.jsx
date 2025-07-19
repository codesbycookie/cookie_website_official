import React from 'react';
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo({data}) {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

const Section3 = ({content}) => {


  return (
    <section className="bg-black text-white py-20 md:px-section-lg px-section-sm">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold lg:mb-14">{content.title}</h2>
        <p className="mt-4 text-gray-300 text-lg md:text-xl ">
        {content.subtitle}</p>
      </div>


                <TimelineDemo data={content.timeline_data}/>

    </section>
  );
};

export default Section3;
