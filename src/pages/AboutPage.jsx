import React, { useState, useEffect } from "react";

const AboutPage = () => {
  const [pastWorks, setPastWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPastWorks = async () => {
      try {
        const response = await fetch("/pastworks.json");
        if (!response.ok) {
          throw new Error("Failed to fetch past works.");
        }
        const data = await response.json();
        setPastWorks(data);
      } catch (error) {
        console.error("Error fetching past works:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPastWorks();
  }, []);

  return (
    <div className="pb-10 lg:pb-0">
      <header className="bg-green-700 text-white py-32 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">About JB Wildlife</h1>
        <p className="mt-4 text-lg md:text-xl">
          Dedicated to preserving wildlife and creating sustainable ecosystems.
        </p>
      </header>
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            JB Wildlife is a global wildlife preservation organization committed
            to protecting endangered species and their habitats. Since our
            founding, we have been at the forefront of conservation efforts,
            collaborating with communities, researchers, and governments to
            create a lasting impact.
          </p>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Our mission is to ensure that future generations can experience the
            beauty of wildlife by conserving nature and promoting awareness.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Events
          </h2>
          {loading ? (
            <p className="text-gray-600 text-center">Loading past works...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWorks.map((work) => (
                <div
                  key={work.id}
                  className="bg-gray-100 shadow-lg rounded-lg p-6"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="text-gray-600 bg-gray-300 w-16 text-center p-1 rounded-3xl mb-3">{work.type}</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    {work.title}
                  </h3>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
