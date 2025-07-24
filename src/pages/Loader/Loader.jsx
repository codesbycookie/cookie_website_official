import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <AuroraBackground className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-6 z-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="inline-block"
        >
          <Loader2 className="w-14 h-14 md:w-16 md:h-16 text-yellow-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-6xl font-bold leading-tight"
        >
          <AuroraText
            colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            className="inline"
          >
            Loading...
          </AuroraText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-base md:text-xl text-gray-300 max-w-xl mx-auto"
        >
          Please wait while we prepare something awesome for you 🍪
        </motion.p>
      </motion.div>
    </AuroraBackground>
  );
}
