import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { useTheme } from "../context/ThemeContext";

export default function ProjectDetail() {
  const { theme } = useTheme();
  const location = useLocation();
  const project = location.state?.project;

  if (!project) {
    return (
      <PageTransition>
        <div className={`min-h-screen flex items-center justify-center font-poppins ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}>
          <p>Project not found. Go back to <Link to="/projects" className="text-blue-500 underline">Projects</Link>.</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className={`min-h-screen px-6 py-16 transition-colors duration-500 font-poppins ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-block mb-6 text-blue-500 font-semibold hover:underline"
        >
          &larr; Back to Projects
        </Link>

        {/* Project Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.title} 💻
        </motion.h1>

        {/* Cover Image */}
        <motion.img
          src={project.cover}
          alt={project.title}
          className="w-full max-w-3xl mx-auto rounded-xl shadow-lg object-cover mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Description */}
        <motion.p
          className="text-center max-w-3xl mx-auto mb-6 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {project.screenshots.map((ss, idx) => (
              <img
                key={idx}
                src={ss}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            ))}
          </motion.div>
        )}

        {/* GitHub Link */}
        <div className="text-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-all"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>
    </PageTransition>
  );
}
