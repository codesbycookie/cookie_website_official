/* eslint-disable no-unused-vars */
import React, { useEffect, lazy, Suspense } from "react";
import { homepage } from "../../../utils/content";

// Lazy import each section component
const Section1 = lazy(() => import("./Components/Section1/Section1"));
const Section2 = lazy(() => import("./Components/Section2/Section2"));
const Section3 = lazy(() => import("./Components/Section3/Section3"));
const Section4 = lazy(() => import("./Components/Section4/Section4"));
// const Section5 = lazy(() => import("./Components/Section5/Section5")); // included even if not used
const Section6 = lazy(() => import("./Components/Section6/Section6"));
const Section7 = lazy(() => import("./Components/Section7/Section7"));
const Section8 = lazy(() => import("./Components/Section8/Section8"));
import { StickyBanner } from "@/components/ui/sticky-banner";

export default function Home() {
  const {
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
  } = homepage;

  useEffect(() => {
    document.title = "Cookie Inc.  |  Home";
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading Section 1...</div>}>
        <Section1 content={section1} />
      </Suspense>

      <Suspense fallback={<div>Loading Section 2...</div>}>
        <Section2 content={section2} />
      </Suspense>

      <Suspense fallback={<div>Loading Section 3...</div>}>
        <Section3 content={section3} />
      </Suspense>

      <Suspense fallback={<div>Loading Section 4...</div>}>
        <Section4 content={section4} />
      </Suspense>

      {/* You skipped Section5 in your original render — add if needed */}
      {/* <Suspense fallback={<div>Loading Section 5...</div>}>
        <Section5 content={section5} />
      </Suspense> */}

      <Suspense fallback={<div>Loading Section 6...</div>}>
        <Section6 content={section6} />
      </Suspense>

      <Suspense fallback={<div>Loading Section 7...</div>}>
        <Section7 content={section7} />
      </Suspense>

      <Suspense fallback={<div>Loading Section 8...</div>}>
        <Section8 content={section8} />
      </Suspense>
             {/* <StickyBanner hideOnScroll className="bg-black text-white">
        <p className="text-sm font-medium">
          <a href="https://forms.gle/q6oKGqRJbfwTmqZx9" target="_blank" rel="noopener noreferrer" className="underline">⚡️ Special Offer: Get 20% off your first project! 
  Contact us now
</a>.
        </p>
      </StickyBanner> */}
    </>
  );
}
