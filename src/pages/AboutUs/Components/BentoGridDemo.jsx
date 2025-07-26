import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  AlignRight as IconBoxAlignRightFilled,
  ClipboardCopy as IconClipboardCopy,
  FileX as IconFileBroken,
  Signature as IconSignature,
  Columns as IconTableColumn,
} from "lucide-react";

import { motion } from "framer-motion";


export function BentoGridThirdDemo() {
  return (
    <BentoGrid className=" mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon} />
      ))}
    </BentoGrid>
  );
}

// const SkeletonOne = () => {
//   const variants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const variantsSecond = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: -10,
//       rotate: -5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black">
//         <div
//           className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
//         <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
//         <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//         <div
//           className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
//       </motion.div>
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
//         <div
//           className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
//         <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//       </motion.div>
//     </motion.div>
//   );
// };
// const SkeletonTwo = () => {
//   const variants = {
//     initial: {
//       width: 0,
//     },
//     animate: {
//       width: "100%",
//       transition: {
//         duration: 0.2,
//       },
//     },
//     hover: {
//       width: ["0%", "100%"],
//       transition: {
//         duration: 2,
//       },
//     },
//   };
//   const arr = new Array(6).fill(0);
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
//       {arr.map((_, i) => (
//         <motion.div
//           key={"skelenton-two" + i}
//           variants={variants}
//           style={{
//             maxWidth: Math.random() * (100 - 40) + 40 + "%",
//           }}
//           className="flex flex-row rounded-full border border-black dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"></motion.div>
//       ))}
//     </motion.div>
//   );
// };
// const SkeletonThree = () => {
//   const variants = {
//     initial: {
//       backgroundPosition: "0 50%",
//     },
//     animate: {
//       backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       variants={variants}
//       transition={{
//         duration: 5,
//         repeat: Infinity,
//         repeatType: "reverse",
//       }}
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
//       style={{
//         background:
//           "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
//         backgroundSize: "400% 400%",
//       }}>
//       <motion.div className="h-full w-full rounded-lg"></motion.div>
//     </motion.div>
//   );
// };
// const SkeletonFour = () => {
//   const first = {
//     initial: {
//       x: 20,
//       rotate: -5,
//     },
//     hover: {
//       x: 0,
//       rotate: 0,
//     },
//   };
//   const second = {
//     initial: {
//       x: -20,
//       rotate: 5,
//     },
//     hover: {
//       x: 0,
//       rotate: 0,
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
//       <motion.div
//         variants={first}
//         className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
//         <img
//           src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10" />
//         <p
//           className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
//           Just code in Vanilla Javascript
//         </p>
//         <p
//           className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
//           Delusional
//         </p>
//       </motion.div>
//       <motion.div
//         className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
//         <img
//           src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10" />
//         <p
//           className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
//           Tailwind CSS is cool, you know
//         </p>
//         <p
//           className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
//           Sensible
//         </p>
//       </motion.div>
//       <motion.div
//         variants={second}
//         className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
//         <img
//           src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10" />
//         <p
//           className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
//           I love angular, RSC, and Redux.
//         </p>
//         <p
//           className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
//           Helpless
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };
// const SkeletonFive = () => {
//   const variants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const variantsSecond = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: -10,
//       rotate: -5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black">
//         <img
//           src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10" />
//         <p className="text-xs text-neutral-500">
//           There are a lot of cool framerworks out there like React, Angular,
//           Vue, Svelte that can make your life ....
//         </p>
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
//         <p className="text-xs text-neutral-500">Use PHP.</p>
//         <div
//           className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
//       </motion.div>
//     </motion.div>
//   );
// };


const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
        <img
          src="/imgs/cookie-hd.png"
          loading="lazy"
          alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
          className="h-6 w-6 rounded-full object-cover shrink-0"
        />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <img
          src="/imgs/cookie-hd.png"
          loading="lazy"
          alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
          className="h-6 w-6 rounded-full object-cover shrink-0"
        />
      </motion.div>

      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
        <img
          src="/imgs/cookie-hd.png"
          loading="lazy"
          alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
          className="h-6 w-6 rounded-full object-cover shrink-0"
        />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">

      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
        loading="lazy"
          src="/imgs/cookie-hd.png"
          alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
          className="rounded-full h-10 w-10 object-cover"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          We ship full-stack platforms
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Backend Wizards
        </p>
      </motion.div>

      <motion.div
        className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
        loading="lazy"
          src="/imgs/cookie-hd.png"
          alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
          className="rounded-full h-10 w-10 object-cover"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          UI meets performance
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Frontend Gurus
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="/imgs/cookie-hd.png" loading="lazy"
          alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
          className="rounded-full h-10 w-10 object-cover"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          System design is our playground
        </p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Architects
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.2 },
    },
    hover: {
      width: ["0%", "100%"],
      transition: { duration: 2 },
    },
  };

  const arr = new Array(6).fill(0);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-3 py-2">
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two-" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row items-center gap-2 rounded-full border border-black dark:border-white/[0.2] p-2 bg-neutral-100 dark:bg-black w-full h-4">
          
        </motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col justify-center items-center p-4"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}>
      <img
        src="/imgs/cookie-hd.png" loading="lazy"
        alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
        className="h-10 w-10 object-contain opacity-70"
      />
      <p className="text-xs text-white font-medium mt-2">Innovating at Cookie Inc</p>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      
      {/* Left-aligned tech chat bubble */}
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-3 items-start space-x-3 bg-white dark:bg-black">
        <img
          src="/imgs/cookie-hd.png" loading="lazy"
          alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
          className="rounded-full h-10 w-10 object-cover"
        />
        <p className="text-xs text-neutral-600 dark:text-neutral-300">
          We craft scalable web apps, from backend APIs to pixel-perfect UIs.
        </p>
      </motion.div>

      {/* Right-aligned short reply bubble */}
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <p className="text-xs text-neutral-600 dark:text-neutral-300">
          Cookie stack: React.js + Tailwind + Node.js.
        </p>
        <img
          src="/imgs/cookie-hd.png" loading="lazy"
          alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
          className="h-6 w-6 rounded-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};



const items = [
  {
    title: "Conversational Interfaces",
    description: (
      <span className="text-sm">
        Human-like UI patterns that feel natural, intuitive, and branded — just like chatting with Cookie Inc.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dynamic Data Systems",
    description: (
      <span className="text-sm">
        We engineer adaptive data flows and reactive UIs that respond to user interaction in real time.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Creative Visual Identity",
    description: (
      <span className="text-sm">
        Our designs are more than static screens — they're living brand experiences with color, rhythm, and motion.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Full-Stack Engineering",
    description: (
      <span className="text-sm">
        From backend APIs to frontend animations — we craft performant, scalable platforms from top to bottom.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Real-Time Product Experiences",
    description: (
      <span className="text-sm">
        We build interactive interfaces that respond, adapt, and engage — fast, fluid, and always in sync.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

