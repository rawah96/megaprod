import React from "react";
import { motion } from "framer-motion";
import finalVideo from './assets/final.mp4';
import dryer from '../src/assets/dryer.png';
import electricbrush from '../src/assets/electricbrush.png';
import dentalcare from '../src/assets/dentalcare.png';
import waterfloss from '../src/assets/waterfloss.png';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#D9C0B7] via-[#F1E0D6] to-[#C0A194] text-white flex flex-col">
      {/* Hero Section with Video Background */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-fit z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={finalVideo} type="video/mp4" />
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
            Elevate your lifestyle with our premium range of beauty and care products. Start your journey with us today.
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
              <h3 className="text-2xl font-bold mb-2 text-center">{product.name}</h3>
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

      {/* Call-to-Action Section */}
      <footer className="bg-gradient-to-r from-[#D9C0B7] via-[#F1E0D6] to-[#C0A194] text-white py-12 px-8 sm:px-16 lg:px-32 text-center">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 tracking-wide text-[#5A4F4A]"
      >
        Upgrade Your Daily Routine
      </motion.h3>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="https://voge-sa.com/ar"  // Your desired external link
          className="px-8 py-4 bg-gradient-to-r from-[#D9C0B7] via-[#F1E0D6] to-[#C0A194] text-black font-semibold text-xl rounded-full shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
        >
          Shop Now
        </a>
      </motion.div>
    </footer>
    </div>
  );
};

const products = [
  {
    image: dryer,
    name: "Hair Dryer",
    description: "Quick-drying technology with a sleek design.",
    link: "https://voge-sa.com/ar/Vqmqpab"
  },
  {
    image: electricbrush,
    name: "Electric Brush",
    description: "Gentle and effective brushing for shiny hair.",
    link: "https://voge-sa.com/ar/zvQaPDA"
  },
  {
    image: dentalcare,
    name: "Dental Care",
    description: "Maintain a sparkling smile effortlessly.",
    link: "https://voge-sa.com/ar/category/BgAvD"
  },
  {
    image: waterfloss,
    name: "Water Floss",
    description: "Advanced water flossing for perfect hygiene.",
    link: "https://voge-sa.com/ar/zvmmjrg"
  }
];

export default App;
