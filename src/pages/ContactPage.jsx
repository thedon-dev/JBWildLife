import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setSuccessMessage("Please fill in all required fields.");
      return;
    }

    setSuccessMessage(
      `Thank you, ${name}, for reaching out to JB Wildlife! We’ll get back to you soon.`
    );

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <header className="bg-green-700 text-white py-40 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl">
          Have questions or want to connect? Reach out to us today.
        </p>
      </header>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Send Us a Message
            </h2>
            {successMessage && (
              <p className="text-green-700 font-medium mb-6">{successMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Contact Details
            </h2>
            <p className="text-gray-700 mb-4">
              Our team is always ready to hear from you. Whether you have
              questions, feedback, or want to support us, feel free to get in
              touch.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="block font-medium text-gray-800">Address:</span>
                <p className="text-gray-600">
                  JB Wildlife Reserve, 123 Green Valley Road, Nairobi, Kenya
                </p>
              </li>
              <li>
                <span className="block font-medium text-gray-800">Phone:</span>
                <p className="text-gray-600">+254 712 345 678</p>
              </li>
              <li>
                <span className="block font-medium text-gray-800">Email:</span>
                <p className="text-gray-600">contact@jbwildlife.org</p>
              </li>
              <li>
                <span className="block font-medium text-gray-800">
                  Working Hours:
                </span>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
