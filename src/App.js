import React from "react";
import { motion } from "framer-motion";
// import finalVideo from './assets/final.mp4'; // Import video
import dryer from '../src/assets/dryer.png';
import electricbrush from '../src/assets/electricbrush.png';
import dentalcare from '../src/assets/dentalcare.png';
import waterfloss from '../src/assets/waterfloss.png';
import vogelogo from '../src/assets/vogelogo.png';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#D9C0B7] via-[#F1E0D6] to-[#C0A194] text-white flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50">
        <div className="flex items-center justify-between px-8 py-2">
          <h1 className="text-2xl font-bold text-white">
            <img src={vogelogo} width={100} href="#home"/>
          </h1>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-black hover:text-[#B99889] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black hover:text-[#B99889] transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <header
        id="home"
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full object-cover z-0 mobile-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${process.env.PUBLIC_URL}/final.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Over Video */}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold mb-4 text-white"
          >
            Discover <span className="text-[#B99889]">Iconic Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Elevate your lifestyle with our premium range of beauty and care
            products. Start your journey with us today.
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="#products"
              className="px-6 py-3 bg-gradient-to-r from-[#D9C0B7] via-[#F1E0D6] to-[#C0A194] text-black font-bold text-lg rounded-full shadow-lg hover:scale-105 transform transition"
            >
              Explore Products
            </a>
          </motion.div>
        </div>

        {/* Optional: Overlay for Contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>
      </header>

      {/* Products Section */}
      <section
        id="products"
        className="bg-white text-gray-900 py-20 px-6 sm:px-16 lg:px-32"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gradient-to-r from-[#D9C0B7] via-[#F1E0D6] to-[#C0A194] rounded-xl shadow-lg flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-lg text-center">{product.description}</p>

              {/* Redirect Button */}
              <a
                href={product.link} // This will redirect to a unique URL for each product
                className="mt-4 px-6 py-2 bg-[#B99889] text-white rounded-full text-lg transition hover:scale-105 transform"
              >
                View Details
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-[#D9C0B7] via-[#F1E0D6] to-[#C0A194] text-white py-12 px-8 sm:px-16 lg:px-32"
      >
        <h3 className="text-4xl font-bold mb-6 text-center text-black">Contact Us</h3>
        <div className="flex justify-center space-x-8 text-center">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+966594203751"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition transform hover:scale-125 hover:text-[#25D366]"
          >
            <i className="fab fa-whatsapp text-3xl mb-2 text-green-600"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/voge.ksa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition transform hover:scale-125 hover:text-[#E1306C]"
          >
            <i className="fab fa-instagram text-3xl mb-2 text-purple-900"></i>
          </a>

          {/* Email */}
          <a
            href="mailto:Info@tb-sa.com"
            className="flex flex-col items-center transition transform hover:scale-125 hover:text-[#FF4500]"
          >
            <i className="fas fa-envelope text-3xl mb-2 text-purple-900"></i>
          </a>
        </div>
      </section>




    </div>
  );
};

const products = [
  {
    image: dryer,
    name: "Hair Dryer",
    description: "Quick-drying technology with a sleek design.",
    link: "https://voge-sa.com/ar/Vqmqpab",
  },
  {
    image: electricbrush,
    name: "Electric Brush",
    description: "Gentle and effective brushing for shiny hair.",
    link: "https://voge-sa.com/ar/zvQaPDA",
  },
  {
    image: dentalcare,
    name: "Dental Care",
    description: "Maintain a sparkling smile effortlessly.",
    link: "https://voge-sa.com/ar/category/BgAvD",
  },
  {
    image: waterfloss,
    name: "Water Floss",
    description: "Advanced water flossing for perfect hygiene.",
    link: "https://voge-sa.com/ar/zvmmjrg",
  },
];

export default App;
