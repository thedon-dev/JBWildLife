import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import WhatWeDoPage from "./pages/WhatWeDo";
import AboutPage from "./pages/AboutPage";
import DonationPage from "./pages/DonationPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/animals" element={<WhatWeDoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<DonationPage />} />
          <Route path="/kids" element={<ContactPage />} />
        </Routes>
        <Footer title={'2025 Wildlife Reservation'} />
      </BrowserRouter>
    </>
  );
}

export default App;
