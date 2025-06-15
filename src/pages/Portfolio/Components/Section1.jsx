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

export default function Section1() {
  return (
    <div className="bg-black text-white h-screen">
      <div className="mx-auto max-w-7xl h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
        <div className="pt-10 md:pt-20 flex flex-col justify-center items-center">
          <h1 className="font-hahmlet font-semibold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            Cooked with,
            <AuroraText
              className=" font-bold"
              colors={[
                "#fff3c4", // pale gold for glow
                "#c18b13",
                "#86602c",
                "#ffe29a",
                "#e0b352",
              ]}
            >
              creativity
            </AuroraText>
            <br />
            served with{" "}
            <AuroraText
              className=" font-bold"
              colors={[
                "#fff3c4", // pale gold for glow
                "#c18b13",
                "#86602c",
                "#ffe29a",
                "#e0b352",
              ]}
            >
              care
            </AuroraText>
          </h1>
          <p className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Not just a cookie-cutter work — It’s our custom creations.
          </p>
        </div>
        <div className="mt-30">
          <TechStackMarquee />
        </div>
      </div>
    </div>
  );
}
