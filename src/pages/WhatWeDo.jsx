import { useEffect, useState } from "react";

const WhatWeDoPage = () => {
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
    <div>
      <header className="bg-green-700 text-white py-32 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Animals</h1>
        <p className="mt-4 text-lg md:text-xl">
          Empowering Communities, Preserving Habitats, and Protecting Wildlife.
        </p>
      </header>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Animals</h2>
          <p className="text-gray-600 text-lg mb-8">
            We dedicate ourselves to protecting wildlife and ensuring a sustainable future for the planet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWorks.map((activity) => (
              <div
                key={activity.id}
                className="p-6 bg-white shadow-lg rounded-lg"
              >
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {activity.name}
                </h3>
                <p className="text-gray-600">{activity.habitat}</p>
                <button
                  onClick={() => toggleFavorite(activity.id)}
                  className={`${favorites.includes(activity.id)
                    ? "bg-red-500"
                    : "bg-green-700"
                    } p-3 text-white rounded-md mt-4`}
                >
                  {favorites.includes(activity.id) ? "Remove from Favorites" : "Set as Favorite"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoPage;
