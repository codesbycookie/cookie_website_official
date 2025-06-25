import { AuroraText } from "@/components/magicui/aurora-text";

export function AuroraTextDemo() {
  return (
    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      Ship <AuroraText>beautiful</AuroraText>
    </h1>
  );
}

export default function Section1({content}) {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-7xl h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
        <div className="pt-10 md:pt-20 flex flex-col justify-center items-center">
          <h1 className="font-hahmlet font-semibold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            {content.title[0]} <br />
            <AuroraText
              colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            >
              {content.title[1]} 
            </AuroraText>
          </h1>
          <p className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          </p>
          <div className="mt-8 sm:mt-12 md:mt-16 w-full max-w-6xl">
            <img
              src={content.img}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-none"
              alt="Creative team working"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
