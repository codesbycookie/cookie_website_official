import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { GlobeDemo } from "../Globe/Globe";
import HomeButton from "../HomeButton/HomeButton";

export default function Section1({content}) {




  return (
    <div className="bg-black text-white h-full flex items-center justify-center">
      <div className="mx-auto py-20">
        <div className="flex flex-col justify-center items-center text-center">
          <GlobeDemo/>
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
            <HomeButton name={content.first_button} />
            <HomeButton name={content.second_button} />
          </div>


        </div>
      </div>
    </div>
  );
}
