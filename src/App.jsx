import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Gallery from './Components/InteriorCard';
import ContactForm from './Components/ContactForm';
import Blog from './Components/Vlog';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import InteriorCard from './Components/InteriorCard';
import Vlog from './Components/Vlog';

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Initialize state for mobile menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="flex justify-between items-center h-20 bg-black shadow-lg px-7">
        {/* Logo / Title */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-white tracking-wide hover:text-yellow-200 transition-all duration-300 transform hover:scale-105">
            Yashpal Surya
          </h1>
        </div>

        {/* Hamburger Icon (Mobile Menu) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-xl font-medium">
          <Link to="/" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            About
          </Link>
          <Link to="/projects" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            Projects
          </Link>
          <Link to="/gallery" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            Services
          </Link>
          <Link to="/blog" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            Blog
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center space-y-4 py-16 z-50">
            <Link to="/" className="text-white hover:text-yellow-300 transition duration-300 text-xl" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-yellow-300 transition duration-300 text-xl" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/projects" className="text-white hover:text-yellow-300 transition duration-300 text-xl" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/gallery" className="text-white hover:text-yellow-300 transition duration-300 text-xl" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/blog" className="text-white hover:text-yellow-300 transition duration-300 text-xl" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-yellow-300 transition duration-300 text-xl" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Routes for the pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<InteriorCard />} />
        <Route path="/blog" element={<Vlog />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

     
    </>
  );
};

export default App;
