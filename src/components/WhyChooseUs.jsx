// components/WhyChooseUs.jsx
import React from "react";
import { FaStar, FaUserTie, FaRegClock, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaStar className="text-3xl text-amber-500" />,
      title: "Premium Quality",
      description:
        "We use top-tier products and techniques for superior results",
    },
    {
      icon: <FaUserTie className="text-3xl text-amber-500" />,
      title: "Master Barbers",
      description: "Our team has 8+ years experience in precision grooming",
    },
    {
      icon: <FaRegClock className="text-3xl text-amber-500" />,
      title: "Timely Service",
      description: "Respect for your time with efficient appointments",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-amber-500" />,
      title: "Hygiene First",
      description:
        "Sterilized tools and sanitized environment for every client",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-amber-500">Fama</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg text-center hover:transform hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
