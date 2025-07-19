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

function App() {
  return (
    <Router className='cursor-none'>
              <ScrollToTop/>
      <Navbar />
     {/*  <AssistiveBall/> */}
       <AppRoutes /> 
      <Footer />
    </Router>
  );
}

export default App;
