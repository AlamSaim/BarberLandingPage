import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      quote:
        "Best haircut I've ever had in Denton. Worth every penny of the premium price.",
      author: "Michael T.",
      date: "March 2023",
    },
    {
      rating: 4,
      quote:
        "Consistently great service. My barber remembers exactly how I like my fade every time.",
      author: "James L.",
      date: "January 2023",
    },
    {
      rating: 5,
      quote:
        "The hot towel shave is an experience everyone should try at least once. I'm hooked!",
      author: "David K.",
      date: "February 2023",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < testimonial.rating
                        ? "text-amber-500"
                        : "text-gray-600"
                    }
                  />
                ))}
              </div>
              <FaQuoteLeft className="text-gray-600 text-2xl mb-4" />
              <p className="text-gray-200 italic mb-6">{testimonial.quote}</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-bold py-3 px-8 rounded-full transition duration-300">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
