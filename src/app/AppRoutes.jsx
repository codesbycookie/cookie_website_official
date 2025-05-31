import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import AboutUs from "../pages/AboutUs/AboutUs";
import Service from "../pages/Services/Services";
import ContactUs from "../pages/ContactUs/ContactUs";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />  
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}
