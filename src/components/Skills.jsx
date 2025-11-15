import React, { useMemo } from "react";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { useTheme } from "../context/ThemeContext";

// icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAxios,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiGraphql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiTwilio,
} from "react-icons/si";
import { FaDatabase, FaLock, FaKey, FaServer, FaCoffee, FaCode } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

// Skills data
const techSections = {
  "🌐 Frontend": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Axios",
    "Bootstrap",
    "Tailwind CSS",
    "DaisyUI",
    "jQuery",
    "Zustand",
    "GraphQL",
  ],
  "🧠 Backend & Databases": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL Server",
    "RESTful APIs",
    "OAuth2",
    "JWT",
    "Nodemailer",
    "Twilio",
  ],
  "💻 Programming Languages": ["Python", "Java", "C", "C++"],
  "🛠 Tools & Platforms": ["Git", "GitHub", "VS Code"],
};

const iconMap = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  Axios: SiAxios,
  Bootstrap: SiBootstrap,
  "Tailwind CSS": SiTailwindcss,
  DaisyUI: SiTailwindcss,
  jQuery: SiJquery,
  Zustand: SiReact,
  GraphQL: SiGraphql,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  "SQL Server": FaDatabase,
  "RESTful APIs": FaServer,
  OAuth2: FaLock,
  JWT: FaKey,
  Nodemailer: AiOutlineMail,
  Twilio: SiTwilio,
  Python: SiPython,
  Java: FaCoffee,
  C: SiC,
  "C++": SiCplusplus,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": FaCode,
};

export default function Skills() {
  const { theme } = useTheme();

  // generate stable random percents
  const techWithPercents = useMemo(() => {
    return Object.fromEntries(
      Object.entries(techSections).map(([section, items]) => [
        section,
        items.map((name) => ({ name, percent: Math.floor(Math.random() * 16) + 80 })),
      ])
    );
  }, []);

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
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills ⚡
        </motion.h1>

        <div className="grid gap-8 w-full max-w-5xl">
          {Object.entries(techWithPercents).map(([sectionTitle, items], sIdx) => (
            <motion.div
              key={sectionTitle}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
                theme === "dark" ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sIdx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{sectionTitle}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((it, i) => {
                  const Icon = iconMap[it.name];
                  const initials = it.name
                    .split(/\s|\//)
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase();
                  return (
                    <motion.div
                      key={it.name + i}
                      className="flex flex-col gap-2 p-3 rounded-lg cursor-pointer transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: sIdx * 0.05 + i * 0.03 }}
                      whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 20px rgba(59,130,246,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {Icon ? <Icon className="text-blue-500 w-6 h-6" /> : <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full">{initials}</div>}
                          <span className="font-medium">{it.name}</span>
                        </div>
                        <span className="text-sm font-semibold">{it.percent}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${it.percent}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: sIdx * 0.05 + i * 0.03 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageTransition>
  );
}
