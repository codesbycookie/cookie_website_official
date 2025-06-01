import Hero from "../pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Pointer } from "@/components/magicui/pointer";
import './App.css'
import AppRoutes from "./AppRoutes";
import Footer from "../pages/Components/Footer/Footer";
import Navbar from "../pages/Components/Navbar/Navbar";
import AssistiveBall from '../pages/Components/AssistiveBall/AssistiveBall'
function App() {
  return (
    <Router className='cursor-none'>
<Pointer className="text-light-cream fixed z-[9999] pointer-events-none" />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
