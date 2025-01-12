import React from "react";

const WhatWeDoPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-green-700 text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">What We Do</h1>
        <p className="mt-4 text-lg md:text-xl">
          Empowering Communities, Preserving Habitats, and Protecting Wildlife.
        </p>
      </header>

      {/* Our Mission Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg mb-8">
            At our Wildlife Reservation, we are committed to safeguarding wildlife
            and their natural habitats. Our efforts focus on ensuring a sustainable
            future for endangered species while educating and engaging communities
            to be part of the solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Habitat Conservation</h3>
              <p className="text-gray-600">
                We work to restore and protect natural habitats, providing animals with safe spaces to thrive.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Research & Innovation</h3>
              <p className="text-gray-600">
                Conducting scientific research to develop innovative solutions for wildlife protection.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Community Engagement</h3>
              <p className="text-gray-600">
                Partnering with communities to educate, inspire, and empower individuals to protect wildlife.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Wildlife Conservation */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Wildlife Conservation Matters
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Protecting wildlife is not just about saving animals — it's about ensuring
            the health of our planet and the well-being of future generations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Biodiversity Preservation</h3>
              <p className="text-gray-600">
                Wildlife plays a crucial role in maintaining ecological balance, ensuring
                a healthy and thriving planet.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ecosystem Services</h3>
              <p className="text-gray-600">
                Forests, wetlands, and other habitats provide clean air, water, and climate regulation.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Cultural Significance</h3>
              <p className="text-gray-600">
                Wildlife holds spiritual and cultural importance for communities worldwide.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Economic Benefits</h3>
              <p className="text-gray-600">
                Tourism, sustainable harvesting, and ecosystem services contribute to
                local and global economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 px-6 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How You Can Help</h2>
          <p className="text-lg mb-8">
            Whether you volunteer, donate, or simply spread awareness, your actions
            make a difference in protecting wildlife and preserving our planet.
          </p>
          <a
            href="#contact"
            className="bg-white text-green-700 py-3 px-6 rounded-lg font-medium hover:bg-green-200 transition"
          >
            Get Involved Today
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 Wildlife Reservation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WhatWeDoPage;
