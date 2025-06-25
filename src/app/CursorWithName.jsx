'use client';
import React, { useState, useEffect, useRef } from "react";
import { useMotionValue, AnimatePresence } from "framer-motion";
import FollowPointer from "@/components/ui/following-pointer";

const CursorWithNamePrompt = ({ children }) => {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState("");
  const [open, setOpen] = useState(false);
  const [isInside, setIsInside] = useState(false);

  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    localStorage.removeItem("visitor-name"); // Clear previous name for testing
    const userName = localStorage.getItem("visitor-name");
    if (userName) {
      setStoredName(userName);
    } else {
      setOpen(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };

  const handleSubmit = () => {
    if (name.trim()) {
      localStorage.setItem("visitor-name", name);
      setStoredName(name);
      setOpen(false);
    }
  };

  return (
    <>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsInside(true)}
        onMouseLeave={() => setIsInside(false)}
        style={{ cursor: "none" }}
        className="relative w-full min-h-screen"
      >
        {children}

        <AnimatePresence>
          {isInside && storedName && (
            <FollowPointer x={x} y={y} title={`Hi ${storedName}`} />
          )}
        </AnimatePresence>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white text-black rounded-lg p-6 w-4/10 shadow-lg space-y-4">
            <h2 className="text-xl font-semibold">How can we call you?</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="btn bg-black text-white hover:bg-gray-800"
              >
                Submit & Explore
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CursorWithNamePrompt;
