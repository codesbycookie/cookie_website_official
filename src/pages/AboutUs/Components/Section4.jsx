import React from 'react';
import { AuroraText } from "@/components/magicui/aurora-text";
import { MaskContainer } from '@/components/ui/svg-mask-effect';
import { PointerHighlight } from '@/components/ui/pointer-highlight';

const Section4 = ({content}) => {
  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="hidden lg:block mx-auto px-section-sm md:px-section-lg text-center">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            We know what it means to start from  <span className="text-light-cream">zero</span> — no investors, no roadmap, just belief and grit. That’s how <span className="text-light-cream">Cookie Inc</span> began. We’ve built, failed, rebuilt, and grown. Every line of code and design comes from that journey. We don’t just get <span className="text-light-cream">founders</span> — we are <span className="text-light-cream">founders</span>.
          </p>
        }
        className="h-[40rem] rounded-md  text-white dark:text-black"
      >
Built by <span className="text-light-cream">founders</span>, for founders.
      </MaskContainer>

         
      </div>
            <div className="block lg:hidden mx-auto px-section-sm md:px-section-lg text-center">
<div className="mx-auto text-center py-20 text-2xl font-bold tracking-tight md:text-4xl">
There has to be some
<PointerHighlight
  rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
  pointerClassName="text-yellow-500"
>
  <span className="relative z-10">meaning tied to motion, not just for show</span>
</PointerHighlight>

    </div></div>
    </div>
  );
};

export default Section4;