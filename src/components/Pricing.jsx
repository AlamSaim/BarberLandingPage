import React from "react";
import { FaScissors } from "react-icons/fa6";
import { GiBeard } from "react-icons/gi";
import { PiHairDryerFill } from "react-icons/pi";

const Pricing = () => {
  const packages = [
    {
      icon: <FaScissors className="text-4xl text-amber-500" />,
      title: "Basic Grooming",
      price: "$35",
      features: [
        "Precision haircut",
        "Neck shave",
        "Basic styling",
        "Standard products",
      ],
      popular: false,
    },
    {
      icon: <GiBeard className="text-4xl text-amber-500" />,
      title: "Executive Package",
      price: "$65",
      features: [
        "Haircut & beard trim",
        "Hot towel treatment",
        "Premium styling",
        "High-end products",
        "Scalp massage",
      ],
      popular: true,
    },
    {
      icon: <PiHairDryerFill className="text-4xl text-amber-500" />,
      title: "Luxury Experience",
      price: "$95",
      features: [
        "Full haircut & beard service",
        "Traditional straight razor shave",
        "Facial treatment",
        "Deluxe products",
        "Extended consultation",
        "Aftercare kit",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Transparent pricing for our premium services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                pkg.popular
                  ? "border-2 border-amber-500 transform md:-translate-y-4"
                  : "border border-gray-700"
              }`}
            >
              {pkg.popular && (
                <div className="bg-amber-500 text-black text-center py-2 font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-4xl font-bold text-amber-500 mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-8 text-gray-300 text-left">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-amber-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-full font-bold transition ${
                    pkg.popular
                      ? "bg-amber-500 hover:bg-amber-600 text-black"
                      : "border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                  }`}
                >
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400 italic">
          <p>
            "Costly compared to other barbershops with better haircuts." -
            Satisfied Client
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
