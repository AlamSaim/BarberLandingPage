// components/HeroSection.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80')] bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Subtitle */}
        <p className="text-amber-400 font-medium mb-2 text-lg md:text-xl">
          PREMIUM BARBER EXPERIENCE
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          FAMA <span className="text-amber-400">BARBER</span> SHOP
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Where precision meets style. Our master barbers provide the finest
          grooming services in Denton, TX.
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < 4 ? "text-amber-400" : "text-gray-400"}
              />
            ))}
          </div>
          <span className="text-white">4.6 (116+ reviews)</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
            BOOK YOUR APPOINTMENT
          </button>
          <button className="border-2 border-white hover:border-amber-400 text-white hover:text-amber-400 font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
            OUR SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
