import '../../../src/App.css';
import logo from '../../assets/logo.png';
import women from '../../assets/women.png';
import dryer from '../../assets/dryer.png';
import React, { useEffect, useState } from "react";

const Home = () => {
  const slides = [
    { id: 0, content: "Banner 1", bgColor: "#E2A8C9" },
    { id: 1, content: "Banner 2", bgColor: "#72ABC3" },
    { id: 2, content: "Banner 3", bgColor: "#FEBF83" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  // State to manage mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
    return () => clearInterval(timeoutId);
  }, [isPaused, slides.length]);

  const handleSlideClick = () => {
    setIsPaused(true);
    if (timeoutId) clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
    setTimeoutId(newTimeoutId);
  };

  const handleNavClick = (index) => {
    setActiveNavItem(index);
  };

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
    setTimeout(() => setActiveButton(null), 200);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-1/4 flex flex-col flex-shrink-0 items-center justify-start rounded-2xl"
            style={{
              backgroundColor: slide.bgColor,
            }}
            onClick={handleSlideClick}
          >
            {/* Navbar */}
            <div className="w-full py-4 px-6 flex justify-between items-center bg-transparent">
              <img src={logo} width={100} alt="Logo" />
              {/* Desktop navigation */}
              <ul className="hidden md:flex space-x-6 text-white">
                <li
                  className={`font-bold cursor-pointer ${
                    activeNavItem === 0 ? 'text-[#CF5C9E]' : 'hover:text-[#CF5C9E]'
                  }`}
                  onClick={() => handleNavClick(0)}
                >
                  HOME
                </li>
                <li
                  className={`font-bold cursor-pointer ${
                    activeNavItem === 1 ? 'text-[#CF5C9E]' : 'hover:text-[#CF5C9E]'
                  }`}
                  onClick={() => handleNavClick(1)}
                >
                  SHOP
                </li>
                <li
                  className={`font-bold cursor-pointer ${
                    activeNavItem === 2 ? 'text-[#CF5C9E]' : 'hover:text-[#CF5C9E]'
                  }`}
                  onClick={() => handleNavClick(2)}
                >
                  ABOUT US
                </li>
                <li
                  className={`font-bold cursor-pointer ${
                    activeNavItem === 3 ? 'text-[#CF5C9E]' : 'hover:text-[#CF5C9E]'
                  }`}
                  onClick={() => handleNavClick(3)}
                >
                  CONTACT
                </li>
              </ul>

              {/* Mobile navigation (Hamburger menu) */}
              <button
                className="md:hidden text-white"
                onClick={toggleMenu}
              >
                {/* Hamburger icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="md:hidden w-full bg-[#E2A8C9] p-4">
                <ul className="flex flex-col text-white">
                  <li
                    className={`font-bold cursor-pointer ${
                      activeNavItem === 0 ? 'text-[#CF5C9E]' : 'hover:text-[#CF5C9E]'
                    }`}
                    onClick={() => handleNavClick(0)}
                  >
                    HOME
                  </li>
                  <li
                    className={`font-bold cursor-pointer ${
                      activeNavItem === 1 ? 'text-[#CF5C9E]' : 'hover:text-[#CF5C9E]'
                    }`}
                    onClick={() => handleNavClick(1)}
                  >
                    SHOP
                  </li>
                  <li
                    className={`font-bold cursor-pointer ${
                      activeNavItem === 2 ? 'text-[#CF5C9E]' : 'hover:text-[#CF5C9E]'
                    }`}
                    onClick={() => handleNavClick(2)}
                  >
                    ABOUT US
                  </li>
                  <li
                    className={`font-bold cursor-pointer ${
                      activeNavItem === 3 ? 'text-[#CF5C9E]' : 'hover:text-[#CF5C9E]'
                    }`}
                    onClick={() => handleNavClick(3)}
                  >
                    CONTACT
                  </li>
                </ul>
              </div>
            )}

            {/* Slide Content */}
            {slide.id === 0 && (
              <div className="flex flex-col sm:flex-row w-full items-center justify-between px-4 sm:px-8 py-0 mt-0">
                <div className="w-full sm:w-1/2 mx-4">
                  <h1 className="font-sans text-4xl sm:text-5xl tracking-wide font-bold text-[#CF5C9E] my-2">
                    The Hair Dryer That Cares for Your Hair
                  </h1>
                  <h6 className="font-sans text-xs sm:text-sm font-bold mb-4">
                    Experience faster drying, reduced heat damage, and sleek, frizz-free results with advanced technology designed to protect and perfect your hair.
                  </h6>
                  <div className="mb-4">
                    <button
                      className="bg-[#CF5C9E] text-white font-bold tracking-wide rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
                      onClick={() => handleButtonClick(0)}
                    >
                      SHOP NOW
                    </button>
                    <button
                      className="text-[#CF5C9E] mx-2 bg-white font-bold tracking-wide rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
                      onClick={() => handleButtonClick(1)}
                    >
                      SHOP ALL PRODUCTS
                    </button>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 flex justify-center items-center">
                  <img
                    src={women}
                    className="object-cover w-full h-full sm:w-3/4 sm:h-auto"
                    alt="Hair Dryer"
                  />
                </div>
              </div>
            )}

            {/* Other slides content goes here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
