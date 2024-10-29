import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://st4.depositphotos.com/16030310/25210/v/450/depositphotos_252108254-stock-illustration-vector-illustration-silver-golden-letters.jpg"
            alt="Company Logo"
            className="w-32 mb-4"
          />
          <p className="italic text-gray-400">Your trusted partner in development.</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-sky-400">Quick Links</h2>
          <Link to="/" className="mb-2 text-gray-300 hover:text-sky-300 transition duration-300">Home</Link>
          <Link to="/about" className="mb-2 text-gray-300 hover:text-sky-300 transition duration-300">About</Link>
          <Link to="/projects" className="mb-2 text-gray-300 hover:text-sky-300 transition duration-300">Projects</Link>
          <Link to="/contact" className="text-gray-300 hover:text-sky-300 transition duration-300">Contact</Link>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-sky-400">Contact Us</h2>
          <p className="mb-2 flex items-center gap-2">
            <i className="ri-phone-line text-sky-400"></i> Phone: +1 123 456 7890
          </p>
          <p className="mb-2 flex items-center gap-2">
            <i className="ri-mail-line text-sky-400"></i> Email: info@example.com
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4 text-sky-400">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-sky-300 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-sky-300 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-sky-300 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-sky-300 transition duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">© 2024 All rights reserved by Surya.</p>
      </div>
    </footer>
  );
};

export default Footer;
