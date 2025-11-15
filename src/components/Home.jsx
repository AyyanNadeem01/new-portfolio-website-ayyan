import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { useTheme } from "../context/ThemeContext";


export default function Home() {
  const { theme } = useTheme();

  const fullText = "Software Engineer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (forward) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) setForward(false);
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setForward(true);
      }
    }, 120); // typing speed
    return () => clearTimeout(timeout);
  }, [index, forward]);

  const certifications = [
    {
      title: "IBM Certified Full Stack Developer",
      description: "A professional certification of 12 courses",
    },
    {
      title: "CISCO Introduction to Data Science",
      description: "",
    },
    {
      title: "HP Data Science & Analytics",
      description: "",
    },
  ];

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className={`min-h-screen flex flex-col items-center px-6 py-16 transition-colors duration-500 font-poppins ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900"
        }`}
      >
        {/* Spacer for top positioning */}
        <div className="flex-grow min-h-[2vh]"></div>
        
        {/* Profile Image */}
        <motion.img
          src="/ayyanimg.jpg"
          alt="Ayyan Nadeem"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-2xl border-4 border-blue-500 dark:border-blue-400 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center font-poppins"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm Ayyan Nadeem
        </motion.h1>

        {/* Typing Tagline */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-blue-500 h-10 mb-6 text-center font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {displayedText}
          <span className="blinking-cursor">|</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className={`text-center max-w-3xl text-base md:text-lg leading-relaxed mb-8 font-normal ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A Passionate Software Engineer 💻 with a strong foundation in Full-Stack Web Development 🌐. 
          Currently expanding my expertise in Data Science 📊, with a keen interest in integrating intelligent data-driven solutions 🤖 into web applications. 
          Committed to continuous learning 📚 and exploring the intersection of modern web technologies ⚡ and data analytics 📈. 
          Let's build the future together! 🚀
        </motion.p>

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1EpJ3Mzih_QNS2gHpsxDF3alXw_RzldjK/view?usp=drive_open"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95, y: 1 }}
          className="inline-block px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          Resume
        </motion.a>

        {/* Certifications Section */}
        <motion.div
          className="mt-16 mb-16 w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Certifications 📜
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                  theme === "dark" 
                    ? "bg-gray-800 hover:bg-gray-750 border-transparent hover:border-blue-500" 
                    : "bg-gray-100 hover:bg-white border-transparent hover:border-blue-400"
                }`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: theme === "dark" 
                    ? "0 25px 50px rgba(59, 130, 246, 0.4)" 
                    : "0 25px 50px rgba(59, 130, 246, 0.2)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-3">
                  <motion.span 
                    className="text-2xl"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    🏆
                  </motion.span>
                  <div>
                    <motion.h3 
                      className="text-xl font-semibold mb-2"
                      whileHover={{ x: 5, color: "#3b82f6" }}
                      transition={{ duration: 0.2 }}
                    >
                      {cert.title}
                    </motion.h3>
                    {cert.description && (
                      <p className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <style>
          {`
            .blinking-cursor {
              font-weight: 600;
              font-size: 1em;
              color: #3b82f6;
              animation: blink 1s infinite;
            }
            @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 1; }
            }

            .font-inter {
              font-family: 'Inter', sans-serif;
            }
            .font-poppins {
              font-family: 'Poppins', sans-serif;
            }
          `}
        </style>
      </motion.div>
    </PageTransition>
  );
}