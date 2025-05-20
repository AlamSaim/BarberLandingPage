import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const OurLocation = () => {
  return (
    <section id="location" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Visit us at our cozy and modern barbershop in the heart of Aligarh.
          We're located conveniently for walk-ins or scheduled appointments.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-2xl text-amber-500 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-1">Address</h4>
              <p className="text-gray-300">
                123 Royal Street,
                <br />
                Aligarh, Uttar Pradesh, India
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-2xl text-amber-500 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-1">Phone</h4>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaClock className="text-2xl text-amber-500 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-1">Working Hours</h4>
              <p className="text-gray-300">
                Mon - Sat: 9:00 AM – 8:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-bold py-3 px-8 rounded-full transition duration-300">
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
