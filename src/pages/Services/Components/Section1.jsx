import { AuroraText } from "@/components/magicui/aurora-text";

export default function Section1({content}) {
  return (
    <div className="bg-black text-white h-screen" data-theme="dark">
      <div className="mx-auto max-w-7xl h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
        <div className="pt-10 md:pt-20 flex flex-col justify-center items-center align-center h-full">
          <h4 className="font-hahmlet font-semibold text-center text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl leading-tight ">
           {content.title[0]}
            <AuroraText
              className="font-bold"
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
                      {content.title[2]}

          </h4>
          <p className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          {content.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
