// components/Navbar.jsx
import React from "react";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-amber-500">FAMA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#hero"
                className="hover:text-amber-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="hover:text-amber-500 transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="hover:text-amber-500 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#about"
                className="hover:text-amber-500 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-amber-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Phone and Book Now - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-amber-500">
              <FaPhone className="mr-2" />
              <span>+1 940-612-9127</span>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 rounded-full transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-900`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 hover:text-amber-500">
            Home
          </a>
          <a href="#services" className="block px-3 py-2 hover:text-amber-500">
            Services
          </a>
          <a href="#gallery" className="block px-3 py-2 hover:text-amber-500">
            Gallery
          </a>
          <a href="#about" className="block px-3 py-2 hover:text-amber-500">
            About
          </a>
          <a href="#contact" className="block px-3 py-2 hover:text-amber-500">
            Contact
          </a>
          <div className="pt-4 pb-2 border-t border-gray-700">
            <div className="flex items-center px-3 py-2 text-amber-500">
              <FaPhone className="mr-2" />
              <span>+1 940-612-9127</span>
            </div>
            <button className="w-full mt-2 bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
