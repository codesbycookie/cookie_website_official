import React, { useEffect, lazy, Suspense } from "react";
import { aboutpage } from "../../../utils/content";

// Lazy load section components
const Section1 = lazy(() => import("./Components/Section1"));
const Section2 = lazy(() => import("./Components/Section2"));
const Section3 = lazy(() => import("./Components/Section3"));
const Section4 = lazy(() => import("./Components/Section4"));

export default function AboutUs() {
  const { section1, section2, section3, section4 } = aboutpage;

  useEffect(() => {
    document.title = "Cookie Inc.  |  About Us";
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
    </>
  );
}
