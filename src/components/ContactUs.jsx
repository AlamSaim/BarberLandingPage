import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Have a question, feedback, or just want to say hi? Fill out the form
          below and we'll get back to you as soon as possible.
        </p>

        <form className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900/80 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 font-semibold">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-gray-900/80 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 font-semibold">Subject</label>
            <input
              type="text"
              placeholder="What's this about?"
              className="w-full px-4 py-3 bg-gray-900/80 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-gray-900/80 text-white border border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            ></textarea>
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-10 rounded-full shadow-lg transition duration-300"
            >
              ✉️ Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
