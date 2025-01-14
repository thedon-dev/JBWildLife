import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSLuK58wzyUPuWyCH15XOIUTwC7F7Ervs",
  authDomain: "jbwildlife.firebaseapp.com",
  projectId: "jbwildlife",
  storageBucket: "jbwildlife.firebasestorage.app",
  messagingSenderId: "379161583209",
  appId: "1:379161583209:web:1cf967f2c5ac1cfc948cf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const DonationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setSuccessMessage("Please fill in all required fields.");
      return;
    }

    setSuccessMessage("");
    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Signup successful! Welcome to JB Wildlife.");
      setEmail("");
      setPassword("");
      setIsLoggedIn(true)
    } catch (error) {
      setSuccessMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const generateRandomId = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="pb-10 lg:pb-0">
      <header className="bg-green-700 text-white py-32 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">JB Wildlife</h1>
        <p className="mt-4 text-lg md:text-xl">
          Join us in preserving wildlife and ensuring a sustainable future for
          generations to come.
        </p>
      </header>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            {isLoggedIn ? "Dashboard" : "Login"}
          </h2>
          {successMessage && (
            <p className="text-green-700 font-medium text-center mb-6">
              {successMessage}
            </p>
          )}
          {!isLoggedIn ? (
            <>
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
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Password"
                  required
                />
              </div>

              <button
                onClick={handleSignup}
                type="submit"
                className="w-full bg-green-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-800 transition"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </>
          ) : (
            <div className="text-center">
              <p className="mb-6 text-gray-700">
                Thank you for logging in! Access your receipt or continue
                exploring our initiatives.
              </p>
              <p className="mb-4">Your Id is {generateRandomId()}</p>
              <button
                onClick={handlePrintReceipt}
                className="bg-green-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-800 transition"
              >
                Print Receipt
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
