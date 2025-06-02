import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Section3 = () => {
  // Content configuration as strings
  const content = {
    title: "Who Are We ?",
    tagline: `"A Tech-Powered Creative Studio.\nPowered By Engineers. Inspired By Designers"`,
    mission: `A Creative Studio Which Turn Ideas Into Brands, Clicks Into Experiences, And Screens Into Stories.`,
    values: `We Don't Just Offer Services Here, We Bring Commitment, Creativity, And Care.`,
    images: {
      left: "/imgs/placeholder.png",
      right: "/imgs/placeholder.png"
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const textReveal = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="bg-black text-white font-sans overflow-hidden relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]" />
      </div>

      {/* Title Section */}
      <motion.div 
        className="max-w-6xl mx-auto py-20 px-4 text-center relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter"
          variants={item}
        >
          {content.title.split('').map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>

      {/* Tagline Section */}
      <motion.div 
        className="max-w-3xl mx-auto px-4 py-12 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="border-t border-b border-white/20 py-8">
          <motion.p 
            className="text-2xl md:text-3xl font-light italic whitespace-pre-line leading-snug"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textReveal}
            transition={{ staggerChildren: 0.05 }}
          >
            {content.tagline.split('').map((char, i) => (
              <motion.span 
                key={i} 
                className="inline-block"
                variants={textReveal}
                whileHover={{ scale: 1.2, originY: 0.8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section with Left Image */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          className="relative"
          onMouseMove={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
          style={{ perspective: 1000 }}
        >
          <motion.img 
            src={content.images.left} 
            alt="Creative studio workspace" 
            className="w-full h-auto max-h-[500px] object-cover rounded-sm shadow-xl border border-white/20"
            style={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
          <div className="absolute inset-0 border border-white/10 pointer-events-none" />
        </motion.div>
        
        <motion.div 
          className="text-xl md:text-2xl font-medium whitespace-pre-line"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content.mission.split(' ').map((word, i) => (
            <motion.span 
              key={i}
              className="inline-block mr-2"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.3,
                transition: { duration: 0.2 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Values Section with Right Image */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          className="text-xl md:text-2xl font-medium whitespace-pre-line order-2 md:order-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            {content.values.split('. ').map((sentence, i) => (
              <motion.p 
                key={i}
                className="relative pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="absolute left-0 top-3 w-3 h-0.5 bg-white" />
                {sentence}
              </motion.p>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={content.images.right} 
            alt="Design team collaborating" 
            className="w-full h-auto max-h-[500px] object-cover rounded-sm shadow-xl border border-white/20"
          />
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        </motion.div>
      </div>

      {/* Interactive cursor follower */}
      <motion.div 
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50"
        style={{
          x: useMotionValue(0),
          y: useMotionValue(0)
        }}
        animate={{
          scale: hoveredIndex !== null ? 2 : 1,
          opacity: hoveredIndex !== null ? 0.7 : 0.4
        }}
        transition={{ type: "spring", stiffness: 500 }}
      />
    </div>
  );
};

export default Section3;