import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import {
  Menu, X, Star, Clock, Euro, CheckCircle, XCircle,
  Facebook, Instagram, Mail, Phone, MapPin, Calendar
} from "lucide-react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TripCard from "./components/trips/TripCard";
import TripDetails from "./components/trips/TripDetails";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<TripList />} />
          <Route path="/trips/:slug" element={<TripDetails />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
