import React from "react";
import { LuLink } from "react-icons/lu";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="mb-10 lg:mb-0">
      <section
        className=" text-white py-40 px-6 text-center "
        style={{
          backgroundImage:
            "url(https://th.bing.com/th/id/OIP.3ZoMqxuXCX0WfPqXD9aI-AHaEK?rs=1&pid=ImgDetMain)",
          backgroundRepeat: "no-repat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Preserving Wildlife for Future Generations
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join us in protecting endangered species and conserving their
            natural habitats.
          </p>
          <a
            href="#contact"
            className="bg-white text-green-700 py-3 px-6 rounded-lg font-medium hover:bg-green-200 transition"
          >
            Get Involved
          </a>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6" id="what-we-do">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Habitat Conservation</h3>
              <p className="text-gray-600">
                Restoring and protecting habitats to ensure wildlife thrives in
                their natural environments.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Endangered Species</h3>
              <p className="text-gray-600">
                Safeguarding the most vulnerable species through research and
                conservation efforts.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Community Education</h3>
              <p className="text-gray-600">
                Engaging the public with workshops, tours, and awareness
                campaigns.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <Link
              to="/whatwedo"
              className="bg-green-700 text-white py-3 px-6 rounded-lg"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="bg-white py-16 px-6" id="works">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Wildlife Project"
                className="rounded-lg shadow-lg"
              />
              <p className="mt-4 text-gray-600">
                Protecting forests to create safe havens for animals.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Conservation Effort"
                className="rounded-lg shadow-lg"
              />
              <p className="mt-4 text-gray-600">
                Partnering with local communities to promote sustainable living.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Research Initiatives"
                className="rounded-lg shadow-lg"
              />
              <p className="mt-4 text-gray-600">
                Conducting research to protect endangered species and their
                habitats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-6" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            We’d love to hear from you. Whether you want to get involved or just
            learn more, feel free to reach out.
          </p>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
