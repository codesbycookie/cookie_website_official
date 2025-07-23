import Hero from "../pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Pointer } from "@/components/magicui/pointer";
import './App.css'
import AppRoutes from "./AppRoutes";
import Footer from "../pages/Components/Footer/Footer";
import Navbar from "../pages/Components/Navbar/Navbar";
import AssistiveBall from '../pages/Components/AssistiveBall/AssistiveBall'
import CursorWithNamePrompt from "./CursorWithName";
import ScrollToTop from "@/hooks/ScrollToTop";
import Greet from "@/pages/greet/Greet";
import ScrollBack from "./ScrollBack";
import AnimatedCursor from "@/hooks/AnimatedCursor";

function App() {
  return (
    <Router className='cursor-none '>
              <ScrollToTop/>
      <Navbar />
              <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="193, 139, 19"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
     {/*  <AssistiveBall/> */}
     <ScrollBack/>
       <AppRoutes /> 
      <Footer />
    </Router>
  );
}

export default App;
