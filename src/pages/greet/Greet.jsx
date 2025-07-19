// app/components/Greet.jsx
"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Hammer } from "lucide-react";

export default function Greet() {
  return (
    <AuroraBackground className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden px-4">
      <div className="text-center space-y-6 z-10">
        <div className="flex justify-center">
          <Hammer className="text-yellow-400 w-16 h-16 animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <AuroraText
            colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            className="inline"
          >
            Site Under Construction
          </AuroraText>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          We're working hard to bring you something amazing. <br />
          Stay tuned — our website will be live soon!
        </p>
        <p className="text-sm text-gray-500">
          — Cookie Inc. Team
        </p>
      </div>
    </AuroraBackground>
  );
}
