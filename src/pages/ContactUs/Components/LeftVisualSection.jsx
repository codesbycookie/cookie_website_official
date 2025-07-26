import { motion } from "framer-motion";
import { useRef } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const LeftVisualSection = ({ step, steps }) => {
  const dragBoundary = useRef(null);

  return (
    <div
      ref={dragBoundary}
      className="w-full md:w-2/5 relative overflow-hidden bg-black h-full"
    >
      <BackgroundBeamsWithCollision className="bg-black h-full">
        <div className="relative bg-gradient-to-br h-full p-8 flex flex-col justify-center items-center">
          <div className="w-full text-center z-20">
            {/* ✅ DRAGGABLE AVATAR */}
            <motion.div
              drag
              dragConstraints={dragBoundary}
              dragElastic={0.2}
              whileDrag={{ scale: 1.1, rotate: 10 }}
              initial={{ y: 0, rotate: 0 }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="relative w-44 h-44 mx-auto mb-8 cursor-grab active:cursor-grabbing rounded-full  flex items-center justify-center overflow-hidden"
            >
              {/* ✅ Avatar Image inside the draggable wrapper */}
              <motion.img
                src="/imgs/cookie_logo_web.jpeg"
                alt="Cookie Inc – Creative tech studio building web, mobile, and branding solutions"
                className="object-contain"
                width={150}
                loading="lazy"
                height={150}
                draggable={false}
                initial={{ scale: 0.95 }}
                animate={{ scale: [0.95, 1, 0.95] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Optional Glow */}
              <div className="absolute -inset-2 z-0 blur-2xl rounded-full  opacity-20 pointer-events-none" />
            </motion.div>

            {/* Step title */}
            <h3 className="text-2xl font-bold mb-3 text-[#fffff0]">
<p className="text-base sm:text-lg md:text-xl font-semibold text-center my-10">
  {step === 4 ? (
    <span className="text-green-500 ">Appointment Confirmed </span>
  ) : (
    <>Step {step} of {steps.length}</>
  )}
</p>
            </h3>

            {/* Step indicators */}
            <div className="flex justify-center gap-4 mb-8">
              {steps.map((stepItem) => (
                <div
                  key={stepItem.id}
                  className={`flex flex-col items-center transition-all duration-300 ${
                    step >= stepItem.id ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full ${stepItem.color} flex items-center justify-center text-[#fffff0] text-xl mb-2 ${
                      step === stepItem.id ? "ring-4 ring-[#fffff0]/50" : ""
                    }`}
                  >
                    {stepItem.icon}
                  </div>
                  <span className="text-[#fffff0] text-xs font-medium">
                    {stepItem.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Message */}
            <div className="bg-[#fffff0]/10 backdrop-blur-sm rounded-lg p-4 border border-[#fffff0]/20">
              <p className="text-[#fffff0]/90 text-sm">
                "Our team is excited to work with you. Let's create something amazing together!"
              </p>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default LeftVisualSection;
