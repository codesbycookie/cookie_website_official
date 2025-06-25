import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import {portfoliopage} from '../../../utils/content'
export default function AboutUs() {

  const {section1, section2, section3, section4} = portfoliopage;

  return (
    <>
      <Section1 content={section1}/>
      <Section2 content={section2}/>
      <Section3 content={section3}/>
      <Section4 content={section4}/>
    </>
  );
}
