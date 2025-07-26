"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { AuroraText } from "../magicui/aurora-text";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  font-sans md:px-10"
      ref={containerRef}
    >


      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
            <img src="/imgs/cookie-hd.png" loading="lazy" className="h-5 w-5" alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-light-cream ">
                           <AuroraText
                             colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
                           >
                             {item.title}
                           </AuroraText>
              </h3>
            </div>

            <div className="relative pl-20 pr-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
               <AuroraText
                             colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
                           >
                             {item.title}
                           </AuroraText>
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-dark-cream via-light-cream to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
