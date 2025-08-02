import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";







const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" loading="lazy" width="32" height="32" alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions" src={img}/>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo({reviews}) {

  
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default function Section6({content}) {
  return (
    <section className="pt-8 pb-20 bg-white text-center">
         <AuroraText
        className="text-5xl font-bold my-20"
        colors={[
          "#fff3c4", 
          "#c18b13",
          "#86602c",
          "#ffe29a",
          "#e0b352",
        ]}
      >
        {content.title}
      </AuroraText>
      <MarqueeDemo reviews={content.reviews}/>
      <AuroraText
        className="text-5xl font-bold my-20"
        colors={[
          "#fff3c4", 
          "#c18b13",
          "#86602c",
          "#ffe29a",
          "#e0b352",
        ]}
      >
        {content.title2}
      </AuroraText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-9/10 mx-auto">
        {content.projects.map((idx) => (
          <CardContainer className="inter-var" key={idx}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                {idx.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                {idx.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={idx.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
                />
              </CardItem>
<CardItem translateZ="150" className="mt-6 flex justify-center items-center w-full">
  <motion.div
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link
      to="/portfolio"
      className="inline-flex items-center gap-2 hover:text-light-cream hover:underline font-medium group"
    >
      Explore More
      <ArrowRight
        className="transition-transform duration-300 group-hover:translate-x-1"
        size={18}
      />
    </Link>
  </motion.div>
</CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
     
    </section>
  );
}
