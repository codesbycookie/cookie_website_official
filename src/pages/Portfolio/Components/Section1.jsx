import { AuroraText } from "@/components/magicui/aurora-text";
import { Marquee } from "@/components/magicui/marquee";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";

const techIcons = [FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma, FaDocker];
export function StackCard({ Icon }) {
  return (
    <div
      className="w-25 h-25 flex items-center justify-center rounded-xl border p-4 mx-2
      border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]
      transition"
    >
      <Icon className="w-8 h-8  text-white" />
    </div>
  );
}

export function TechStackMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {techIcons.map((Icon, index) => (
          <StackCard key={index} Icon={Icon} />
        ))}
      </Marquee>
    </div>
  );
}

export default function Section1({content}) {
  return (
    <div className="bg-black text-white h-screen relative">
      <div className="mx-auto max-w-7xl h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-20 items-center lg:absolute lg:top-40 lg:left-90">
        <div className="pt-10 md:pt-20 flex flex-col justify-center items-center">
          <h1 className="font-hahmlet font-semibold text-center items-center text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-7xl leading-tight">
           {content.title[0]}
            <AuroraText
              className=" font-bold"
              colors={[
                "#fff3c4", 
                "#c18b13",
                "#86602c",
                "#ffe29a",
                "#e0b352",
              ]}
            >
                         {content.title[1]}

            </AuroraText>
            <br />
                      {content.title[2]}
 {" "}
            <AuroraText
              className=" font-bold"
              colors={[
                "#fff3c4", 
                "#c18b13",
                "#86602c",
                "#ffe29a",
                "#e0b352",
              ]}
            >
                         {content.title[3]}

            </AuroraText>
          </h1>
          <p className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          </p>
        </div>
        <div className="mt-30">
          <TechStackMarquee />
        </div>
      </div>
    </div>
  );
}
