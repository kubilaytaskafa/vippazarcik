import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Cars from "./pages/Cars";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/cars" element={<Cars />} />
    </Routes>
  );
};

export default AppRoutes;
