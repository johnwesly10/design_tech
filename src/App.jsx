import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageBanner from "./components/ImageBanner";
import JoinUs from "./components/JoinUs";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import StaffingServices from "./components/StaffingServices";
import ITServices from "./components/ITServices";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Service Detail Pages
import LumoraCloud from "./pages/LumoraCloud";
import LumoraAI from "./pages/LumoraAI";
import LumoraSecure from "./pages/LumoraSecure";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebDevelopment from "./pages/WebDevelopment";
import Portfolio from "./pages/Portfolio";
import VaultenxCloud from "./components/vaultenx-cloud/VaultenxCloud";

// News pages
import UploadNews from "./pages/UploadNews";
import ViewNews from "./pages/ViewNews";
import AdminLogin from "./pages/AdminLogin"; 

function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === '/vaultenx-cloud';

  return (
    <>
      {!hideHeader && <Header />}
      <ScrollToTop />
      <Routes>
        {/* Home / Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ITServices />
              <VisionMission />
              <StaffingServices />
              <WhyChooseUs />
              <ImageBanner />
              <About />
              <Contact />
              <JoinUs />
            </>
          }
        />

        {/* Vaultenx Cloud */}
        <Route path="/vaultenx-cloud" element={<VaultenxCloud />} />

        {/* Admin & News */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/upload-news" element={<UploadNews />} />
        <Route path="/view-news" element={<ViewNews />} />

        {/* Other service pages */}
        <Route path="/cloud" element={<LumoraCloud />} />
        <Route path="/ai" element={<LumoraAI />} />
        <Route path="/secure" element={<LumoraSecure />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="section not-found">
              <h2>404 - Page Not Found</h2>
              <p>The page you are looking for doesn't exist.</p>
              <a href="/" className="btn-primary">
                Go Home
              </a>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
