import React from "react";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { useTheme } from "../context/ThemeContext";

export default function Experience() {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 transition-colors duration-500 font-poppins ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience 💼
        </motion.h1>

        {/* Single Card */}
        <motion.div
          className={`p-8 rounded-xl shadow-2xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer w-full max-w-md text-center ${
            theme === "dark" ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: theme === "dark" ? "0 25px 50px rgba(59,130,246,0.3)" : "0 25px 50px rgba(59,130,246,0.2)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-2xl font-semibold mb-2">2023 - Now</h3>
          <p className="text-blue-500 font-medium">Academic & Freelance Projects</p>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
