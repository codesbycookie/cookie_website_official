import React, { useEffect, lazy, Suspense } from "react";
import { servicespage } from "../../../utils/content";

// ✅ Lazy imports for each section
const Section1 = lazy(() => import("./Components/Section1"));
const Section2 = lazy(() => import("./Components/Section2"));
const Section3 = lazy(() => import("./Components/Section3"));
const Section4 = lazy(() => import("./Components/Section4"));

export default function Service() {
  const { section1, section2, section3, section4 } = servicespage;

  useEffect(() => {
    document.title = "Cookie Inc.  |  Services";
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
