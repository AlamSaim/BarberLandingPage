// components/AboutSection.jsx
import React from "react";
import { FaMapMarkerAlt, FaAward, FaUsers, FaClock } from "react-icons/fa";

const AboutSection = () => {
  const stats = [
    {
      icon: <FaAward className="text-2xl" />,
      value: "8+",
      label: "Years Experience",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      value: "2.5K+",
      label: "Happy Clients",
    },
    {
      icon: <FaClock className="text-2xl" />,
      value: "10AM-7PM",
      label: "Working Hours",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Fama Barber Shop interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-amber-500 bg-opacity-20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gray-800 p-6 rounded-lg shadow-lg hidden lg:block">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-amber-400 text-2xl mr-2" />
                <div>
                  <p className="font-bold text-white">Our Location</p>
                  <p className="text-sm text-gray-400">
                    500 N Bell Ave #109, Denton, TX
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-amber-400">Fama Barber Shop</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Established in 2015, Fama Barber Shop has been providing premium
              grooming services to the Denton community. Our skilled barbers
              combine traditional techniques with modern styles to deliver
              exceptional results.
            </p>
            <p className="text-gray-300 mb-8">
              While we may be priced slightly higher than some competitors, our
              clients consistently tell us our attention to detail and quality
              of service make it worth every penny. We take pride in being more
              than just a barber shop - we're a place where gentlemen come to
              look and feel their best.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg text-center shadow-sm"
                >
                  <div className="text-amber-400 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-full transition duration-300">
              Meet Our Barbers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
