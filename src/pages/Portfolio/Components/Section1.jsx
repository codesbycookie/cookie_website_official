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
      className="w-15 h-15 md:w-25 md:h-25 flex items-center justify-center rounded-xl border p-4 mx-2
      border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]
      transition"
    >
      <Icon className="w-5 h-5 md:w-8 md:h-8  text-white" />
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

export default function Section1({ content }) {
  return (
    <div className="bg-black text-white min-h-screen relative flex items-center">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-hahmlet font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
            {content.title[0]}{" "}
            <AuroraText
              className="font-bold"
              colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            >
              {content.title[1]}
            </AuroraText>
            <br />
            {content.title[2]}{" "}
            <AuroraText
              className="font-bold"
              colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            >
              {content.title[3]}
            </AuroraText>
          </h1>

          <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-base sm:text-lg md:text-xl max-w-2xl text-neutral-300">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <TechStackMarquee />
        </div>
      </div>
    </div>
  );
}
