import React, { useEffect } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";






export default function NotFound() {

    useEffect(() => {
    document.title = "Cookie Inc.  |  Not Found";
  }, []);


  return (
    <AuroraBackground className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden px-4">
      <div className="text-center space-y-6 z-10">
        <div className="flex justify-center">
          <AlertTriangle className="text-yellow-400 w-14 h-14 md:w-16 md:h-16 animate-pulse" />
        </div>

        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          <AuroraText
            colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            className="inline"
          >
            Page Not Found
          </AuroraText>
        </h1>

        <p className="text-base md:text-xl text-gray-300 max-w-xl mx-auto">
          Oops! The page you're looking for doesn't exist. <br />
          Maybe it got moved or never existed at all.
        </p>

        <Link
        to="/"
          className="inline-block mt-4 text-sm md:text-base font-semibold bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Go Back Home
        </Link>

      </div>
    </AuroraBackground>
  );
}
