import React, {useEffect} from "react";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";
import Section7 from "./Components/Section7/Section7";
import Section8 from "./Components/Section8/Section8";
import { homepage } from "../../../utils/content";

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
      <Section1 content={section1} />
      <Section2 content={section2} />
      <Section3 content={section3} />
      <Section4 content={section4} />
      <Section6 content={section6} />
      <Section7 content={section7} />
      <Section8 content={section8} />
    </>
  );
}
