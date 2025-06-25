import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import {servicespage} from '../../../utils/content'


export default function Service() {

  const {section1, section2, section3, section4} = servicespage;


  return (
    <>
      <Section1 content={section1}/>
      <Section2 content={section2}/>
      <Section3 content={section3}/>
      <Section4 content={section4}/>  
      
    </>
  );
}
