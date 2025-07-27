import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Service = lazy(() => import("../pages/Services/Services"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));
const NotFoundPage = lazy(() => import("@/pages/NotFound/NotFound"));
const LaunchCountdown = lazy(() => import("../pages/LaunchCounter/LaunchCounter"));
import CursorWithNamePrompt from "./CursorWithName";
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
  const now = new Date();
  const launchTime = new Date("2025-07-27T18:00:00+05:30");

  const isBeforeLaunch = now < launchTime;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {isBeforeLaunch ? (
          // Show only countdown if before launch
          <Route path="*" element={<LaunchCountdown />} />
        ) : (
          <>
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
              path="/service"
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
            <Route path="*" element={<NotFoundPage />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
}
