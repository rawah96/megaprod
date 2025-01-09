import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";
import logo from '../src/assets/logo.png';
import women from '../src/assets/women.png';
import dryer from '../src/assets/dryer.png';
import electricbrush from '../src/assets/electricbrush.png'
import waterfloss from '../src/assets/waterfloss.png'

const Navbar = ({ isOpen, toggleMenu, navbarBgColor }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-gray-600 p-4 fixed top-0 left-0 w-full z-20 transition-all ${scrolling ? 'bg-white' : ''}`}
      style={{ backgroundColor: scrolling ? 'white' : navbarBgColor, height: '65px' }}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <img src={logo} alt="Logo" className="h-10 md:h-12" />
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
};

const ProductSection = ({ title, description, image, bgColor, onNextClick, setNavbarBgColor, shopLink }) => {
  useEffect(() => {
    setNavbarBgColor(bgColor);
  }, [bgColor, setNavbarBgColor]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center px-6 sm:py-24 h-auto md:h-[50vh] sm:h-auto" // Adjusted for small screens
      style={{ backgroundColor: bgColor }}
    >
      {/* Left side: Title and Description */}
      <div className="max-w-lg sm:max-w-xl text-left z-10 text-center sm:text-left md:mb-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-white">{title}</h2>
        <p className="text-lg sm:text-xl mb-6 text-white">{description}</p>
        <button
          onClick={() => window.location.href = shopLink}
          className="text-white bg-white font-bold tracking-wide rounded-full p-3 px-8 shadow-lg transition-transform transform hover:scale-110 sm:mb-0"
          style={{
            color: bgColor
          }}
>
          SHOP NOW
        </button>
      </div>

      {/* Right side: Image */}
      <div className="w-full sm:w-3/4 md:w-1/2 max-w-none md:order-last mt-4 md:mt-0">
        <img
          src={image}
          alt={title}
          className="w-full h-auto sm:h-[40vh] md:h-[50vh] object-cover rounded-lg" // Adjust height dynamically
        />
      </div>

      {/* Right Circular "Next" Button on Top */}
      <button
        onClick={onNextClick}
        className="absolute right-10 sm:right-16 top-1/2 sm:top-1/3 w-14 sm:w-16 h-14 sm:h-16 text-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110"
        style={{
          backgroundColor: darkenColor(bgColor),
        }}
      >
        <span className="text-xl sm:text-2xl">→</span>
      </button>
    </div>
  );
};


const darkenColor = (hex) => {
  let color = hex.substring(1);
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  r = Math.max(0, r - 30);
  g = Math.max(0, g - 30);
  b = Math.max(0, b - 30);

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

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
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg rounded-lg"
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
        <div className="flex justify-center">
          <button
            type="submit"
            className={`${
              status === "loading" ? "bg-gray-400" : "bg-[#E2A8C9]"
            } text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline`}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Email"}
          </button>
        </div>
      </form>
      {status === "success" && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      {status === "error" && <p className="text-red-500 mt-4">Failed to send the message. Try again!</p>}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [navbarBgColor, setNavbarBgColor] = useState("#E2A8C9");

  const products = [
    {
      title: "The Hair Dryer That Cares for Your Hair",
      description: "Experience faster drying, reduced heat damage, and sleek, frizz-free results with advanced technology designed to protect and perfect your hair.",
      image: women,
      bgColor: "#E2A8C9",
      shopLink: "https://voge-sa.com/ar/Vqmqpab",
    },
    {
      title: "Electric Brush",
      description: "Revolutionize your brushing with smart technology.",
      image: electricbrush,
      bgColor: "#72ABC3",
      shopLink: "https://www.example1.com",
    },
    {
      title: "Water Floss",
      description: "Achieve cleaner teeth with advanced water flossing.",
      image: waterfloss,
      bgColor: "#FEBF83",
      shopLink: "https://www.example1.com",
    },
  ];

  const handleNextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="relative">
      <Navbar isOpen={isMenuOpen} toggleMenu={() => setMenuOpen(!isMenuOpen)} navbarBgColor={navbarBgColor} />
      
      {/* Hero Section */}
      <div id="home" className="mt-16">
        <ProductSection
          {...products[currentProduct]}
          onNextClick={handleNextProduct}
          setNavbarBgColor={setNavbarBgColor}
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
