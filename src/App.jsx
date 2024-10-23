import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Gallery from './Components/InteriorCard';
import Contact from './Components/ContactForm';
import Blog from './Components/Vlog';  
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import InteriorCard from './Components/InteriorCard';
import Vlog from './Components/Vlog';
import ContactForm from './Components/ContactForm';

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Initialize state for mobile menu

  return (
    <>
      <nav className="flex justify-between items-center h-20 bg-black shadow-lg px-7 rounded">
        {/* Logo / Title */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-white tracking-wide hover:text-yellow-200 transition-all duration-300 transform hover:scale-105">
            Yashpal Surya
          </h1>
        </div>

        {/* Hamburger Icon (Mobile Menu) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-xl font-medium">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            Projects
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            Services
          </Link>
          <Link
            to="/blog"
            className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-black flex flex-col items-center space-y-4 py-5">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
            >
              Projects
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Routes for the pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} /> {/* Fixed route path */}
        <Route path="/gallery" element={<InteriorCard/>} />
        <Route path="/blog" element={<Vlog/>} /> 
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
    </>
  );
};

export default App;
