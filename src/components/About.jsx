import React from "react";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  // Education data
  const education = [
    { degree: "BS Software Engineering", institute: "COMSATS University Islamabad, Lahore", year: "2023 - 2027" },
    { degree: "Intermediate (ICS)", institute: "Punjab College", year: "2020 - 2022" },
    { degree: "Matriculation (Science)", institute: "Unique Group of Institutions", year: "2018 - 2020" },
  ];

  // Beliefs data
  const beliefs = [
    "Continuous learning 📚",
    "Positive collaboration 🤝",
    "Data-driven innovation 📈",
    "Stay humble & grateful 🙏",
  ];

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className={`min-h-screen flex flex-col items-center px-6 py-16 transition-colors duration-500 font-poppins ${
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
          About Me 📖
        </motion.h1>

        {/* About Text */}
        <motion.p
          className="text-center max-w-3xl text-base md:text-lg leading-relaxed mb-12 font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I'm <strong>Ayyan Nadeem</strong>, a dedicated software engineer 🚀 passionate about web development 🌐 and data science 📊. 
          I enjoy merging modern technologies with intelligent data-driven solutions 🤖, always staying curious and eager to learn 📚.
        </motion.p>

        {/* Education Section */}
        <motion.div
          className="w-full max-w-4xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">🎓 Education</h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 ${
                  theme === "dark" ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-white"
                }`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: theme === "dark" ? "0 20px 40px rgba(59,130,246,0.3)" : "0 20px 40px rgba(59,130,246,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-semibold text-lg">{edu.degree}</h3>
                <p className="text-sm text-gray-400">{edu.institute}</p>
                <p className="text-sm font-medium">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beliefs Section */}
        <motion.div
          className="w-full max-w-4xl flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">📌 A Few Things I Believe In:</h2>
          <ul className="space-y-4 text-center">
            {beliefs.map((item, idx) => (
              <motion.li
                key={idx}
                className="text-base md:text-lg rounded-lg p-3 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 + idx * 0.05 }}
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  color: "#3b82f6",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
