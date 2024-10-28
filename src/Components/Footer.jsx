import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-[#0D0C0D] text-white py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src="https://st4.depositphotos.com/16030310/25210/v/450/depositphotos_252108254-stock-illustration-vector-illustration-silver-golden-letters.jpg" alt="Company Logo" className="w-32 mb-4" />
          <p className="text-center md:text-left italic">Your trusted partner in development.</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <Link to="/" className="mb-2 hover:text-sky-300 transition duration-300">Home</Link>
          <Link to="/about" className="mb-2 hover:text-sky-300 transition duration-300">About</Link>
          <Link to="/projects" className="mb-2 hover:text-sky-300 transition duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-sky-300 transition duration-300">Contact</Link>
        </div>

       
      

        {/* Contact Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2"><i class="ri-arrow-right-line"></i> Phone: +1 123 456 7890</p>
          <p className="mb-2">📧 Email: info@example.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-white pt-4">
        <p className="text-sm">© 2024 All rights reserved by Surya.</p>
      </div>
    </footer>
  );
};

export default Footer;
