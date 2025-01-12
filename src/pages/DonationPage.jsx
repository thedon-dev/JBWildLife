import React, { useState } from "react";

const DonationPage = () => {
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();

    if (!donorName || !email || !amount) {
      setSuccessMessage("Please fill in all required fields.");
      return;
    }

    setSuccessMessage(
      `Thank you, ${donorName}, for your generous donation of $${amount} to JB Wildlife!`
    );

    // Reset the form after submission
    setDonorName("");
    setEmail("");
    setAmount("");
    setMessage("");
  };

  return (
    <div className="pb-10 lg:pb-0">
      <header className="bg-green-700 text-white py-32 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Support JB Wildlife</h1>
        <p className="mt-4 text-lg md:text-xl">
          Join us in preserving wildlife and ensuring a sustainable future for
          generations to come.
        </p>
      </header>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Make a Donation
          </h2>
          {successMessage && (
            <p className="text-green-700 font-medium text-center mb-6">
              {successMessage}
            </p>
          )}
          <form onSubmit={handleDonate}>
            <div className="mb-4">
              <label
                htmlFor="donorName"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="donorName"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
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
                htmlFor="amount"
                className="block text-gray-700 font-medium mb-2"
              >
                Donation Amount (USD) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter the donation amount"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Leave a message for JB Wildlife"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Donate Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
