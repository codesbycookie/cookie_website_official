import { AuroraText } from "@/components/magicui/aurora-text";



export default function Section1({ content }) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20 min-h-screen flex items-center justify-center lg:mt-8">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="font-hahmlet font-semibold leading-tight text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {content.title[0]}{" "}
            <AuroraText
              colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            >
              {content.title[1]}
            </AuroraText>
          </h2>

          {/* Subtitle/Paragraph */}
          {content.description && (
            <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-base sm:text-lg md:text-xl max-w-3xl">
              {content.description}
            </p>
          )}

          {/* Image 
          <div className="mt-8 sm:mt-12 md:mt-16 w-full max-w-6xl">
            <img
              src={content.img}
              alt={content.imgAlt || "Creative team working"}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
            />
          </div>*/}
        </div>
      </div>
    </section>
  );
}

