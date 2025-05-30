import Hero from "../pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Footer from "../pages/Components/Footer/Footer";
import Navbar from "../pages/Components/Navbar/Navbar";
import AssistiveBall from '../pages/Components/AssistiveBall/AssistiveBall'
function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
