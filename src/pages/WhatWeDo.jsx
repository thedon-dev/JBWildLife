import React, { useEffect, useState } from "react";

const WhatWeDoPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/whatwedo.json"); 
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-600">Loading data...</p>
      </div>
    );
  }

  return (
    <div>
      <header className="bg-green-700 text-white py-32 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">What We Do</h1>
        <p className="mt-4 text-lg md:text-xl">
          Empowering Communities, Preserving Habitats, and Protecting Wildlife.
        </p>
      </header>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Activities</h2>
          <p className="text-gray-600 text-lg mb-8">
            We dedicate ourselves to protecting wildlife and ensuring a sustainable future for the planet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="p-6 bg-white shadow-lg rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoPage;
