import { useState } from "react";

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
        <h1 className="text-4xl md:text-6xl font-bold">For Kids</h1>
        <p className="mt-4 text-lg md:text-xl">
          Learn about amazing animals and how you can help protect them!
        </p>
      </header>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
            Fun Facts About Wildlife
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                The Giraffe’s Neck
              </h3>
              <p className="text-gray-600">
                Did you know a giraffe’s neck can grow up to 6 feet long, but it
                has the same number of neck bones as you do—just seven!
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Elephants are Big Helpers
              </h3>
              <p className="text-gray-600">
                Elephants are nature’s gardeners! They spread seeds far and
                wide, helping new plants grow.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Penguins Can’t Fly!
              </h3>
              <p className="text-gray-600">
                Penguins are amazing swimmers and can stay underwater for up to
                20 minutes while hunting for food.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
            Tips for Protecting Wildlife
          </h2>
          <div className="text-left md:text-center space-y-6">
            <p className="text-gray-700">
              Protecting wildlife starts with small actions. Here are some tips
              you can follow to make a big difference:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>Don’t Litter:</strong> Always throw trash in the bin to
                keep the environment clean and safe for animals.
              </li>
              <li>
                <strong>Plant a Tree:</strong> Trees provide homes for birds and
                other creatures. Plant one in your backyard or school!
              </li>
              <li>
                <strong>Respect Animals:</strong> Never chase or scare animals,
                whether they’re big or small.
              </li>
              <li>
                <strong>Turn Off the Lights:</strong> Help save energy and keep
                the skies dark for nocturnal animals.
              </li>
              <li>
                <strong>Be a Wildlife Detective:</strong> Learn about animals in
                your area and how to protect their homes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
            Get Involved!
          </h2>
          <p className="text-gray-700 mb-6">
            Want to help animals? Here are some cool things you can do:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-left md:text-center space-y-4">
            <li>Draw a picture of your favorite animal and share it with us!</li>
            <li>Write a story about an animal adventure.</li>
            <li>Learn how to recycle and keep our planet clean.</li>
            <li>Visit your local wildlife park or sanctuary to learn more.</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Send Us Your Ideas!</h2>
          {successMessage && (
            <p className="text-green-700 font-medium mb-6">{successMessage}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Ideas or Stories <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Share your ideas or stories"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
