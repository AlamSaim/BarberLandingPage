// components/ServicesSection.jsx
import React from "react";
import { FaScissors } from "react-icons/fa6";
import { GiBeard } from "react-icons/gi";
import { PiHairDryerFill } from "react-icons/pi";
import { GiTowel } from "react-icons/gi";

const ServicesSection = () => {
  const services = [
    {
      icon: <PiHairDryerFill className="text-4xl mb-4 text-amber-400" />,
      title: "Haircut",
      price: "$35",
      description:
        "Precision haircut with clipper and scissor work, including neck shave and styling.",
    },
    {
      icon: <GiBeard className="text-4xl mb-4 text-amber-400" />,
      title: "Beard Trim",
      price: "$20",
      description:
        "Professional beard shaping and trimming with hot towel treatment.",
    },
    {
      icon: <GiTowel className="text-4xl mb-4 text-amber-400" />,
      title: "Hot Towel Shave",
      price: "$30",
      description:
        "Traditional straight razor shave with hot towels and premium products.",
    },
    {
      icon: <FaScissors className="text-4xl mb-4 text-amber-400" />,
      title: "Haircut & Beard",
      price: "$50",
      description: "Complete grooming package with haircut and beard service.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Professional grooming services tailored for the modern gentleman
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              price={service.price}
              description={service.description}
            />
          ))}
        </div>

        {/* Note about pricing */}
        <div className="mt-16 text-center text-gray-400 italic">
          <p>"Costly compared to other barbershops with better haircuts."</p>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, price, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 text-center">
        {icon}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-amber-400 text-2xl font-bold mb-4">{price}</p>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="px-6 pb-6 text-center">
        <button className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
