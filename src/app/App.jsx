import React, { useEffect } from "react";
import Hero from "../pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Pointer } from "@/components/magicui/pointer";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Footer from "../pages/Components/Footer/Footer";
import Navbar from "../pages/Components/Navbar/Navbar";
import AssistiveBall from "../pages/Components/AssistiveBall/AssistiveBall";
import CursorWithNamePrompt from "./CursorWithName";
import ScrollToTop from "@/hooks/ScrollToTop";
import Greet from "@/pages/greet/Greet";
import ScrollBack from "./ScrollBack";
import AnimatedCursor from "@/hooks/AnimatedCursor";
import { StickyBanner } from "@/components/ui/sticky-banner";
import CookChat from "@/pages/Components/Cook/Cook";
import Snowfall from "react-snowfall";



export function StickyBannerDemo() {
  return (
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mb-0 max-w-[90%] text-white drop-shadow-md">
          Announcing $10M seed funding from project mayhem ventures.{" "}
          <a href="#" className="transition duration-200 hover:underline">
            Read announcement
          </a>
        </p>
      </StickyBanner>
  );
}

const DummyContent = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 py-8">
      <div
        className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      <div
        className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      <div
        className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
    </div>
  );
};



function App() {
  useEffect(() => {
    // Block common keys
    const blockDevTools = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C", "U"].includes(e.key))
      ) {
        e.preventDefault();
      }
    };

    const blockContextMenu = (e) => e.preventDefault();

    document.addEventListener("keydown", blockDevTools);
    document.addEventListener("contextmenu", blockContextMenu);

    // Tease curious devs 😏
    setTimeout(() => {
      console.log(
        "%c🚫 Access Denied.",
        "color: red; font-size: 18px; font-weight: bold;"
      );
      console.log(
        "%cBut we like curious minds...",
        "color: #f59e0b; font-size: 14px;"
      );
      console.log(
        "%cTry calling crackTheConsole() 😉",
        "color: #10b981; font-size: 14px;"
      );
    }, 3000);

    // Crack method
    window.crackTheConsole = () => {
      console.clear();
      console.log(
        "%c🎉 Congrats! You cracked the console hook.",
        "color: #22c55e; font-size: 18px; font-weight: bold;"
      );
      console.log(
        "%c🎉 You did it! Curious minds like yours build the future.",
        "color: #22c55e; font-size: 18px; font-weight: bold;"
      );
      console.log(
        "%cWishing you an amazing dev journey ahead — from all of us at Cookie Inc 🍪",
        "color: #3b82f6; font-size: 16px;"
      );
    };

    return () => {
      document.removeEventListener("keydown", blockDevTools);
      document.removeEventListener("contextmenu", blockContextMenu);
    };
  }, []);

  return (
    <Router>
       <Snowfall
        snowflakeCount={120}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none", // 👈 important
        }}
      />
      <ScrollToTop />
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="193, 139, 19"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <ScrollBack />
{/* <CookChat/> */}
      {/* Move Navbar & Footer inside AppRoutes */}
      <AppRoutes />

    </Router>
  );
}

export default App;
