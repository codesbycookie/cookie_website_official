"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { PinContainer } from "@/components/ui/3d-pin";


export function ThreeDMarqueeDemo({images}) {
  return (
    <div
      className="mx-auto my-10  bg-white p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}







const Section2 = ({content}) => {



  return (
    <div className="bg-white text-black font-sans">
      
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          {content.content.title}
        </h1>
      </div>

     <ThreeDMarqueeDemo images={content.images}/>
    </div>
  );
};

export default Section2;
