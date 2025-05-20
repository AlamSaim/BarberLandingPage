// components/Barbers.jsx
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Barbers = () => {
  const barbers = [
    {
      name: "Carlos Mendez",
      role: "Master Barber",
      bio: "With 12 years experience, Carlos specializes in classic and modern cuts.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    },
    {
      name: "James Wilson",
      role: "Beard Specialist",
      bio: "James transforms beards with his precision trimming and styling techniques.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Marcus Chen",
      role: "Senior Stylist",
      bio: "Marcus creates contemporary styles while respecting traditional barbering.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <section id="barbers" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-amber-500">Barbers</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Our skilled professionals are ready to give you the perfect look
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition duration-300"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={barber.img}
                  alt={barber.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{barber.name}</h3>
                <p className="text-amber-500 mb-3">{barber.role}</p>
                <p className="text-gray-400 mb-4">{barber.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full transition duration-300">
            Book Your Barber
          </button>
        </div>
      </div>
    </section>
  );
};

export default Barbers;
