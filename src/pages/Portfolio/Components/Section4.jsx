import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ExpandableCardDemo } from "@/components/ui/expandable-card-demo-grid";




export default function Section4({content}) {
  return (
    <section className="pt-8 pb-20 px-section-sm lg:px-section-lg bg-white text-center">
        
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
<ExpandableCardDemo cards={content.cards}/>
    </section>
  );
}
