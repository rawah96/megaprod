import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";
import logo from '../src/assets/logo.png'
import women from '../src/assets/women.png';
import dryer from '../src/assets/dryer.png';

const Navbar = ({ isOpen, toggleMenu }) => (
  <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-20">
    <div className="container mx-auto flex items-center justify-between">
      <img src={logo} width={100} />
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About Us</a>
        <a href="#contact" className="hover:text-blue-400">Contact Us</a>
      </div>
      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
    {isOpen && (
      <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
        <a href="#home" className="hover:text-blue-400" onClick={toggleMenu}>Home</a>
        <a href="#about" className="hover:text-blue-400" onClick={toggleMenu}>About Us</a>
        <a href="#contact" className="hover:text-blue-400" onClick={toggleMenu}>Contact Us</a>
      </div>
    )}
  </nav>
);

const ProductSection = ({ title, description, image, onNextClick }) => (
  <div className="relative flex items-center justify-center h-screen text-center px-6">
    {/* Left side: Title and Description */}
    <div className="absolute left-12 max-w-lg text-left">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-6">{description}</p>
    </div>

    {/* Right side: Image */}
    <div className="absolute right-12">
      <img
        src={image}
        alt={title}
        className="w-2/3 max-w-sm md:w-1/2 rounded-lg shadow-lg mb-6"
      />
    </div>
    
    {/* Right Circular "Next" Button on Top */}
    <button
      onClick={onNextClick}
      className="absolute right-10 top-10 w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
    >
      <span className="text-2xl">→</span>
    </button>
  </div>
);


const ContactForm = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_e0dhqpr",
        "template_df1nd38",
        e.target,
        "zxIq4tNdT8LxkijR4"
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="flex flex-col items-center py-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form
        onSubmit={sendEmail}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`${
            status === "loading" ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>
      </form>
      {status === "success" && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      {status === "error" && <p className="text-red-500 mt-4">Failed to send the message. Try again!</p>}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);

  const products = [
    {
      title: "Hair Dryer",
      description: "Experience unmatched drying power and sleek style.",
      image: dryer,
    },
    {
      title: "Electric Brush",
      description: "Revolutionize your brushing with smart technology.",
      image: "https://via.placeholder.com/300x200?text=Electric+Brush",
    },
    {
      title: "Water Floss",
      description: "Achieve cleaner teeth with advanced water flossing.",
      image: "https://via.placeholder.com/300x200?text=Water+Floss",
    },
  ];

  const handleNextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="relative">
      <Navbar isOpen={isMenuOpen} toggleMenu={() => setMenuOpen(!isMenuOpen)} />
      
      {/* Hero Section */}
      <div id="home" className="mt-16">
        <ProductSection
          {...products[currentProduct]}
          onNextClick={handleNextProduct}
        />
      </div>

      {/* About Us Section */}
      <section id="about" className="h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-4xl font-bold">About Us</h2>
      </section>

      {/* Contact Us Section */}
      <ContactForm />
    </div>
  );
};

export default App;
