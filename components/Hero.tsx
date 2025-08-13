import { motion } from "framer-motion";
import type { FC } from "react";
import Image from "next/image";
import { useState } from "react";

const Hero: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-[#000913] flex flex-col text-white hero">
      <nav className="w-full mx-auto flex justify-between items-center py-4 px-4 sm:px-6">        
        <Image src="/logo.svg" alt="MyLawbrella Logo" width={60} height={58} />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm lg:text-base">
          <li className="cursor-pointer">Digital Evidence Toolkit</li>
          <li className="cursor-pointer">Self Guided Toolkit</li>
          <li className="cursor-pointer">Track case status</li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">About Us</li>
        </ul>

       
        <div className="hidden md:flex space-x-3">
          <button className="border border-white/40 px-4 py-2 rounded-full text-white text-sm">
            Login as a Lawyer
          </button>
          <button className="bg-[#04529E] px-5 py-2 rounded-full text-white text-sm">
            Start Here
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-7 h-7"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-6 bg-[#000913] border-t border-white/10">
          <ul className="flex flex-col space-y-3 text-sm">
            <li>Digital Evidence Toolkit</li>
            <li>Self Guided Toolkit</li>
            <li>Track case status</li>
            <li>Resources</li>
            <li>About Us</li>
          </ul>
          <div className="flex flex-col space-y-3 pt-4">
            <button className="border border-white/40 px-4 py-2 rounded-full text-white text-sm">
              Login as a Lawyer
            </button>
            <button className="bg-[#04529E] px-5 py-2 rounded-full text-white text-sm">
              Start Here
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-1 flex-col md:flex-row items-center text-center justify-center px-4 sm:px-6 py-12 md:py-16 space-y-6 md:space-y-0 md:space-x-8"
      >
        <div className="flex-1 flex flex-col items-center mt-2 justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to MyLawbrella
          </h1>
          <p className="mb-6 text-base sm:text-lg">
            When help feels far away
          </p>
          <button className="bg-[#04529E] px-6 py-3 rounded-full text-white text-sm sm:text-base">
            Start Here
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
