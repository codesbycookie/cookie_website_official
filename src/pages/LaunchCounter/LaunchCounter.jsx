import React, { useState, useEffect } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraText } from "@/components/magicui/aurora-text";
import { motion } from "framer-motion";
import { Clock } from "lucide-react"; // Clock icon from Lucide
import { Link } from "react-router-dom";

export default function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState({});
  const [showSite, setShowSite] = useState(false);

  const launchTime = new Date("2025-07-27T18:00:00+05:30");

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = launchTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setShowSite(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (showSite) {
    window.location.href = "/"; // Redirect to homepage
    return null;
  }

  return (
    <AuroraBackground className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden px-4">
      <div className="text-center z-10 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          <AuroraText
            colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            className="inline"
          >
            Cookie Inc. Website Launch
          </AuroraText>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-gray-300 max-w-xl mx-auto">
          We're almost ready to reveal something exciting. Stay tuned!
        </p>

        {/* Clock Icon Animation */}
        <motion.div
          className="flex justify-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <Clock className="text-yellow-400 w-8 h-8 md:w-10 md:h-10 mb-2" />
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="flex justify-center space-x-4 text-lg md:text-3xl font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-yellow-400">{timeLeft[unit] || "00"}</span>
              <span className="text-xs uppercase text-gray-400">{unit}</span>
            </div>
          ))}
        </motion.div>

        {/* Launch Note */}
        <p className="text-sm text-gray-400">
          Launching at 6:00 PM, 27 July 2025
        </p>
      </div>
    </AuroraBackground>
  );
}
