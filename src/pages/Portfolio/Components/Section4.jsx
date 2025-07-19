import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AuroraText } from "@/components/magicui/aurora-text";
export function AnimatedTestimonialsDemo({testimonials}) {
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export default function Section4 ({content}) {
    return (
        <div className="h-full text-center md:px-section-lg px-section-sm">
            <AuroraText
                    className="text-5xl font-bold mt-20 mb-10"
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
            <AnimatedTestimonialsDemo testimonials={content.testimonials}/>
        </div>
    )
}