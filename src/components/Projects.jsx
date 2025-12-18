import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import PageTransition from "./PageTransition";
import ProjectDetail from "./ProjectDetail";

const coverImage = "https://tse4.mm.bing.net/th/id/OIP.DaAYb48QCqqwuvapJdMoWgHaEc?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3";

const projects = [
  {
    id: 'sensai',
    title: 'SensAI - Live',
    shortDesc: 'Full-stack AI-powered platform using Next.js and Google Gemini API',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
      'https://via.placeholder.com/260x160?text=SS3',
    ],
    tech: ['Next.js', 'PostgreSQL (Neon)', 'Clerk Auth', 'Inngest', 'Google Gemini API'],
    description: 'Developed a full-stack AI-powered platform using Next.js, PostgreSQL (Neon), and Clerk Authentication for secure user management. Integrated Google Gemini API for intelligent, real-time AI responses and implemented background jobs with Inngest for auto-updating industry insights.',
    link: 'https://github.com/AyyanNadeem01/sensai',
    liveLink: 'https://sensai-pi-red.vercel.app/'
  },
  {
    id: 'product-nextjs',
    title: 'PRODUCT - Next.js Service Website',
    shortDesc: 'Service website with full user auth, UI, and admin dashboard in Next.js',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
      'https://via.placeholder.com/260x160?text=SS3',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'React', 'Node.js', 'Admin Dashboard'],
    description: 'A complete service website built entirely in Next.js, featuring full user authentication, responsive UI, and a powerful admin dashboard for managing content and users.',
    link: 'https://github.com/AyyanNadeem01/product-nextjs',
    liveLink: 'https://productclean.onrender.com/'
  },
  {
    id: 'WhatsApp-Clone',
    title: 'WhatsApp Clone',
    shortDesc: 'Full Stack WhatsApp Clone using MERN stack and Socket.io',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
      'https://via.placeholder.com/260x160?text=SS3',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', "Socket.io", "Web RTC", "Axios", "Zustand"],
    description: 'A real-time Full Stack WhatsApp Clone built with the MERN stack, featuring instant messaging, media sharing, and user authentication. Utilizes Socket.io for real-time communication and Zustand for state management.',
    link: 'https://github.com/AyyanNadeem01/whatsapp-clone',
    liveLink: 'https://whatsapp-clone-1-4bmi.onrender.com/'
  },
  {
    id: 'AI-Virtual-Assistant',
    title: 'AI Virtual Assistant',
    shortDesc: 'AI-powered virtual assistant web application',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
      'https://via.placeholder.com/260x160?text=SS3',
    ],
    tech: ['React', "Node JS", "Express.js", "Context API", "Gemini Api", "JS Speech Recognition", "Web Speech API"],
    description: 'An AI-powered virtual assistant web application that leverages advanced natural language processing to assist users with various tasks, answer questions, and provide recommendations in real-time.',
    link: 'https://github.com/AyyanNadeem01/AI-Virtual-Assistant',
    liveLink: 'http://ai-virtual-assistant-frontend-p9zb.onrender.com/'
  },
  {
    id: 'microerp',
    title: 'Micro ERP System',
    shortDesc: 'Full Stack ERP system built with MERN stack',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
      'https://via.placeholder.com/260x160?text=SS3',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    description: 'A comprehensive Full Stack ERP system built with MERN stack that tracks sales, manages clients, vendors, and ledgers for organizations. Features real-time updates and a modern UI.',
    link: 'https://github.com/AyyanNadeem01/THE-FOOD-EXPRESS---ERP',
    liveLink: 'https://erp-version-1-1-frontend.onrender.com/'
  },
  {
    id: 'book-review',
    title: 'Express Book Review',
    shortDesc: 'Backend-focused web app showcasing Node.js capabilities',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
    ],
    tech: ['Node.js', 'Express.js', 'REST APIs'],
    description: 'A backend-focused application built with Node.js and Express demonstrating excellent backend engineering practices, robust API design, and database management.',
    link: 'https://github.com/AyyanNadeem01/expressBookReviews'
  },
  {
    id: 'e-plant-shop',
    title: 'E Plant Shopping',
    shortDesc: 'Frontend-focused React application with great UX',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
      'https://via.placeholder.com/260x160?text=SS3',
    ],
    tech: ['React', 'Redux', 'CSS3', 'JavaScript'],
    description: 'An e-commerce plant shopping application showcasing advanced React capabilities, state management with Redux, and modern frontend design patterns.',
    link: 'https://github.com/AyyanNadeem01/e-plantShopping'
  },
  {
    id: 'nomi-ansari',
    title: 'Nomi Ansari Clone',
    shortDesc: 'E-commerce landing page with admin dashboard',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
    ],
    tech: ['Node.js', 'EJS', 'Express.js', 'MongoDB'],
    description: 'A complete e-commerce store landing page with a powerful backend user dashboard built with Node.js and EJS, supporting admin tasks and inventory management.',
    link: 'https://github.com/AyyanNadeem01/sp-23-bse-a-049/tree/main/Lab%20Assignment%204'
  },
  {
    id: 'text-utils',
    title: 'Text Utils',
    shortDesc: 'Frontend React app for text analysis and manipulation',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
    ],
    tech: ['React', 'JavaScript', 'CSS3'],
    description: 'A React.js application that enables users to analyze text in creative ways and perform various text operations with an intuitive interface.',
    link: 'https://github.com/AyyanNadeem01/Learning-React-Js/tree/main/TextUtils/my-app'
  },
  {
    id: 'news-monkey',
    title: 'NewsMonkey - News App',
    shortDesc: 'React news application fetching from multiple sources',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
      'https://via.placeholder.com/260x160?text=SS3',
    ],
    tech: ['React', 'REST APIs', 'JavaScript'],
    description: 'A React.js-based news application that fetches and displays news articles from various sources in a user-friendly, responsive interface.',
    link: 'https://github.com/AyyanNadeem01/Learning-React-Js/tree/main/NewsApp/my-app'
  },
  {
    id: 'inotebook',
    title: 'iNoteBook - Notes App',
    shortDesc: 'React notes application with CRUD operations',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
    ],
    tech: ['React', 'Context API', 'Node.js'],
    description: 'A React.js notes application that allows users to create, edit, and delete notes with a clean, intuitive interface and persistent storage.',
    link: 'https://github.com/AyyanNadeem01/Learning-React-Js/tree/main/inotebook/my-app'
  },
  {
    id: 'callify',
    title: 'Callify - Language Learning App',
    shortDesc: 'Connects language learners with native speakers',
    cover: coverImage,
    screenshots: [
      'https://via.placeholder.com/260x160?text=SS1',
      'https://via.placeholder.com/260x160?text=SS2',
      'https://via.placeholder.com/260x160?text=SS3',
      'https://via.placeholder.com/260x160?text=SS4',
    ],
    tech: ['React', 'WebRTC', 'Twilio', 'Node.js'],
    description: 'A React.js application that connects language learners with native speakers. Features text messaging, audio calls, and video calls for immersive language practice.',
    link: 'https://github.com/AyyanNadeem01/Callify'
  },
];

export default function Projects() {
  const { theme } = useTheme();

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
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects 💻
        </motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                theme === "dark" ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={project.cover} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.shortDesc}</p>

                <div className="flex gap-3 flex-wrap">
                  <Link
                    to={`/projects/${project.id}`}
                    state={{ project }}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold transition"
                  >
                    View Details
                  </Link>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md font-semibold transition"
                  >
                    GitHub
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageTransition>
  );
}
