import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import HomeButton from "../HomeButton/HomeButton";

export default function Section1({ content }) {
  return (
    <HeroHighlight
      className="h-screen w-full flex items-center justify-center px-4 text-white bg-black"
      data-theme="dark"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-3xl md:text-5xl font-bold leading-relaxed lg:leading-snug"
        >
          Crafting experiences that feel real. Even when &nbsp;
          <Highlight className="text-white ">Everything is unreal.</Highlight>
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          A creative tech studio building immersive digital products with design and code.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <HomeButton name={content.first_button} to="/portfolio" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <HomeButton name={content.second_button} to="/contact-us" />
          </motion.div>
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}
