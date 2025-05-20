import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-24 pb-12 px-6 md:px-12 xl:px-20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Logo & About */}
        <div>
          <span className="text-2xl font-bold text-amber-500">FAMA</span>
          <p className="text-lg text-gray-400 mb-4">
            Classic cuts with modern style. We provide premium grooming services
            tailored for every gentleman.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-3 bg-yellow-500 hover:bg-yellow-400 rounded-full text-black text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 bg-yellow-500 hover:bg-yellow-400 rounded-full text-black text-lg"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-lg">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-6">Contact Us</h3>
          <div className="text-lg space-y-4">
            <p className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-yellow-500 text-xl" />
              500 N Bell Ave #109, <br />
              Denton, TX 76209, United States
            </p>
            <p>Phone: +1 940-612-9127</p>
            <p>Email: info@Famabarbershop.com</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-6">Newsletter</h3>
          <p className="text-lg text-gray-400 mb-6">
            Get exclusive grooming tips, discounts, and style updates straight
            to your inbox.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-6 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-full text-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-16 pt-8 text-lg text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-[1600px] mx-auto">
        <p>© 2023 FAMA Barbershop. All rights reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500">
            About
          </a>
          <a href="#" className="hover:text-yellow-500">
            Services
          </a>
          <a href="#" className="hover:text-yellow-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
