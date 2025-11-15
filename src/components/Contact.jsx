import React from "react";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className={`min-h-screen px-6 py-16 font-poppins ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📬 Contact Me
        </motion.h2>

        <motion.div
          className="text-center mb-10 space-y-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p><strong>Email:</strong> ayyan137a@gmail.com</p>
          <p><strong>Phone:</strong> +92 317 4259244</p>
          <p><strong>Location:</strong> Lahore, Pakistan 📍</p>
        </motion.div>

        <motion.h3
          className="text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          📥 Send me a message
        </motion.h3>

        {/* Formspree Form */}
        <motion.form
          action="https://formspree.io/f/xqawbvar"
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-500 text-white font-semibold rounded-md px-6 py-3 hover:bg-blue-600 transition"
          >
            Send Message 📧
          </motion.button>
        </motion.form>
      </div>
    </PageTransition>
  );
}
