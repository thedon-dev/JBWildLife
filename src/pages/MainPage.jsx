import React, { useEffect, useState } from "react";
import { LuLink } from "react-icons/lu";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [pastWorks, setPastWorks] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    // Load favorites from local storage
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    const fetchPastWorks = async () => {
      try {
        const response = await fetch("/wildlife.json");
        if (!response.ok) {
          throw new Error("Failed to fetch past works.");
        }
        const data = await response.json();
        setPastWorks(data);
      } catch (error) {
        console.error("Error fetching past works:", error);
      }
    };

    fetchPastWorks();
  }, []);

  // Save favorites to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (workId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(workId)
        ? prevFavorites.filter((id) => id !== workId) // Remove from favorites
        : [...prevFavorites, workId] // Add to favorites
    );
  };

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
        </div>
      </section>

      {/* Works Section */}
      <section className="bg-white py-16 px-6" id="works">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Some Endangered Wildlife</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWorks.map((work) => (
              <div
                key={work.id}
                className="bg-gray-100 shadow-lg rounded-lg p-6"
              >
                <img
                  src={work.image}
                  alt={work.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {work.name}
                </h3>
                <p className="text-gray-600">{work.habitat}</p>

                <button
                  onClick={() => toggleFavorite(work.id)}
                  className={`${favorites.includes(work.id)
                    ? "bg-red-500"
                    : "bg-green-700"
                    } p-3 text-white rounded-md mt-4`}
                >
                  {favorites.includes(work.id) ? "Remove from Favorites" : "Set as Favorite"}
                </button>
              </div>
            ))}
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
