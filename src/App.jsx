import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import {Menu, X, Star, Clock, Euro, CheckCircle, XCircle,Mail, Phone, MapPin, Calendar} from "lucide-react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TripCard from "./components/trips/TripCard";
import TripDetails from "./components/trips/TripDetails";
import AgadirActivitiesHome from "./pages/Home";
import './App.css';

export default function App() {
  return (
   <AgadirActivitiesHome />
  );
}
