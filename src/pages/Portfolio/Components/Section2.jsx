"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div
      className="mx-auto my-10  rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}


const Section2 = () => {

  const content = {
    title: "Our Work Speaks. And It Says Cookie",
    tagline: [
      "Designs that click. Code that sticks.",
      "Marketing, that’s magic"
    ],
    project: [
      "Name of the project 1",
      "Description of the project 1 in one or two lines (should include the stack or the tool used in it)",
      "Name of the project 2",
      "Description of the project 2 in one or two lines (should include the stack or the tool used in it)"
    ],
    images: [
      "/imgs/placeholder.png", // First image (left)
      "/imgs/placeholder.png"  // Second image (right)
    ]
  };

  return (
    <div className="bg-white text-black font-sans">
      
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          {content.title}
        </h1>
      </div>

     <ThreeDMarqueeDemo/>
      {/* <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <div className="mb-12">
          <p className="text-2xl md:text-3xl font-light italic mb-2 leading-snug">
            "{content.tagline[0]}
          </p>
          <p className="text-2xl md:text-3xl font-light italic leading-snug">
            {content.tagline[1]}"
          </p>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:pr-8">
          <img 
            src={content.images[0]} 
            alt="Creative studio workspace" 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            {content.project[0]}
          </h2>
          <p className="text-xl md:text-2xl font-small leading-tight">
            {content.project[1]}
          </p>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            {content.project[2]}
          </h2>
          <p className="text-xl md:text-2xl font-small leading-tight">
            {content.project[3]}
          </p>
        </div>
        <div className="order-1 md:order-2 md:pl-8">
          <img 
            src={content.images[1]} 
            alt="Design team collaborating" 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div> */}

     
    </div>
  );
};

export default Section2;
