import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';  // Die Haupt-One-Page-Scroll-Seite
import BlogPage from './pages/BlogPage';  // Die separate Blog-Seite
import BerlinPage from './pages/BerlinPage';
import TanzaniaPage from './pages/TanzaniaPage';
import NewYorkPage from './pages/NewYorkPage';
import ThailandPage from './pages/ThailandPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import './App.css';
import Footer from './Components/Footer';

const AnimatedRoutes = () => {
  const location = useLocation(); // Router-Location abrufen



  return (

    <AnimatePresence mode="wait">  {/* Animations-Unterstützung */}

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/berlin" element={<BerlinPage />} />
        <Route path="/tanzania" element={<TanzaniaPage />} />
        <Route path="/newyork" element={<NewYorkPage />} />
        <Route path="/thailand" element={<ThailandPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router basename='/photography'>
      <ScrollToTop />
      <Navbar />


      <AnimatedRoutes />  {/* Eingebauter Seitenwechsel mit Animation */}


    </Router>
  );
};

export default App;
