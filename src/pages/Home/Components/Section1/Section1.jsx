import React, {lazy, Suspense} from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import HomeButton from "../HomeButton/HomeButton";
const { GlobeDemo } = lazy(() => import("../Globe/Globe"));

export default function Section1({content}) {




  return (
    <div className="bg-black text-white h-full flex items-center justify-center">
      <div className="mx-auto py-20">
        <div className="flex flex-col justify-center items-center text-center">
          <Suspense fallback={<div className="h-96" />}>
  <GlobeDemo />
</Suspense>

          <p className="mt-10 text-lg sm:text-sm md:text-2xl w-9/10 md:max-w-3xl">
           {content.globe_description}
          </p>

          <div className="flex flex-row gap-2 md:gap-4  mt-10 ">
            {/* <button className="btn px-10 py-10 bg-white text-black font-bold rounded-xl">
              {content.first_button}
            </button>
            <button className="btn px-10 py-10 border-t-1 border-3 border-muted rounded-xl bg-black text-white">
               {content.second_button}
            </button> */}
            <HomeButton name={content.first_button} to={'/portfolio'}/>
            <HomeButton name={content.second_button} to={'/contact-us'}/>
          </div>


        </div>
      </div>
    </div>
  );
}
