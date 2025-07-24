import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Service = lazy(() => import("../pages/Services/Services"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));
const NotFoundPage = lazy(() => import("@/pages/NotFound/NotFound"));

import CursorWithNamePrompt from "./CursorWithName"; // Keep this static if it’s small
import Loader from "@/pages/Loader/Loader";
import Navbar from "@/pages/Components/Navbar/Navbar";
import Footer from "@/pages/Components/Footer/Footer";


function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}


export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Wrapped with layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <MainLayout>
              <Portfolio />
            </MainLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Service />
            </MainLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />

        {/* No layout for NotFound */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

