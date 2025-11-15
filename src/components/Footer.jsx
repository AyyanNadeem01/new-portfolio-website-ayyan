import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
      className={`footer-container font-poppins ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="footer-content">
        {/* Social Icons */}
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/OfficialAyyanNadeem/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer-social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/AyyanNadeem01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ayyan-nadeem-a1bb9795/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-icon"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright Text */}
        <p className={`footer-text ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          © {new Date().getFullYear()} Ayyan Nadeem | Built with React 🚀
        </p>
      </div>

      <style>
        {`
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }

          .footer-container {
            padding: 30px 20px;
            text-align: center;
            border-top: 1px solid rgba(59, 130, 246, 0.2);
            margin-top: 50px;
          }

          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
          }

          .footer-social-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
          }

          .footer-social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: #3b82f6;
            color: white;
            font-size: 1.2rem;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            text-decoration: none;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
          }

          .footer-social-icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            border-radius: 50%;
            transform: scale(0);
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            z-index: 0;
          }

          .footer-social-icon svg {
            position: relative;
            z-index: 1;
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .footer-social-icon:hover::before {
            transform: scale(1);
          }

          .footer-social-icon:hover {
            transform: translateY(-5px) rotate(360deg) scale(1.15);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.6);
          }

          .footer-social-icon:hover svg {
            transform: scale(1.1);
          }

          .footer-social-icon:active {
            transform: translateY(-2px) scale(1.05);
          }

          .footer-text {
            font-size: 14px;
            font-weight: 400;
            margin: 0;
          }

          @media (max-width: 768px) {
            .footer-container {
              padding: 25px 15px;
            }

            .footer-social-icons {
              gap: 15px;
            }

            .footer-social-icon {
              width: 40px;
              height: 40px;
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </motion.footer>
  );
};

export default Footer;