import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-6 shadow-md font-poppins relative">
      <h1 className="text-2xl font-bold text-blue-500">Ayyan.dev</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li className="nav-link-wrapper">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-link-wrapper">
          <Link to="/skills" className="nav-link">Skills</Link>
        </li>
        <li className="nav-link-wrapper">
          <Link to="/projects" className="nav-link">Projects</Link>
        </li>
        
        <li className="nav-link-wrapper">
          <Link to="/about" className="nav-link">About Me</Link>
        </li>
        <li className="nav-link-wrapper">
          <Link to="/experience" className="nav-link">Experience</Link>
        </li>
        <li className="nav-link-wrapper">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>

      {/* Desktop Theme Toggle and Social Icons */}
      <div className="hidden md:flex ml-4 items-center gap-4">
        {/* Social Icons */}
        <div className="social-icons flex gap-3">
          <a
            href="https://www.facebook.com/OfficialAyyanNadeem/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/AyyanNadeem01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ayyan-nadeem-a1bb9795/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Theme Toggle */}
        <span className="text-sm font-medium">{theme === "light" ? "☀️" : "🌙"}</span>
        <button
          onClick={toggleTheme}
          className={`theme-switch ${theme === "dark" ? "theme-switch-dark" : ""}`}
          aria-label="Toggle theme"
        >
          <span className="theme-switch-slider"></span>
        </button>
      </div>

      {/* Mobile Menu Button and Theme Toggle */}
      <div className="md:hidden flex items-center gap-4">
        {/* Mobile Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`theme-switch ${theme === "dark" ? "theme-switch-dark" : ""}`}
          aria-label="Toggle theme"
        >
          <span className="theme-switch-slider"></span>
        </button>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""} ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
        <ul className="flex flex-col gap-6 p-8">
          <li className="nav-link-wrapper">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-link-wrapper">
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-link-wrapper">
            <Link to="/skills" className="nav-link" onClick={closeMenu}>Skills</Link>
          </li>
          <li className="nav-link-wrapper">
            <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
          </li>
          <li className="nav-link-wrapper">
            <Link to="/experience" className="nav-link" onClick={closeMenu}>Experience</Link>
          </li>
          <li className="nav-link-wrapper">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Social Icons */}
        <div className="social-icons flex gap-4 px-8 pb-8 justify-center">
          <a
            href="https://www.facebook.com/OfficialAyyanNadeem/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/AyyanNadeem01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ayyan-nadeem-a1bb9795/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={closeMenu}
        ></div>
      )}

      {/* Styles */}
      <style>
        {`
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }

          /* NAV LINKS */
          .nav-link-wrapper {
            position: relative;
            list-style: none;
          }

          .nav-link {
            position: relative;
            text-decoration: none;
            padding-bottom: 4px;
            display: inline-block;
            font-weight: 500;
            font-size: 1.1rem;
            color: inherit; /* Keep text color same */
          }

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #60a5fa; /* blue-400 underline */
  transition: width 0.4s ease;
}

          .nav-link:hover::after {
            width: 100%;
          }

          /* THEME TOGGLE */
          .theme-switch {
            position: relative;
            width: 60px;
            height: 30px;
            background: #3b82f6;
            border-radius: 30px;
            border: none;
            cursor: pointer;
            transition: all 0.4s ease;
            box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
          }

          .theme-switch:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(59, 130, 246, 0.4);
          }

          .theme-switch-slider {
            position: absolute;
            top: 3px;
            left: 3px;
            width: 24px;
            height: 24px;
            background: white;
            border-radius: 50%;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }

          .theme-switch-dark {
            background: #1e40af;
          }

          .theme-switch-dark .theme-switch-slider {
            transform: translateX(30px);
          }

          /* HAMBURGER */
          .hamburger {
            display: flex;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            z-index: 1001;
          }

          .hamburger-line {
            width: 28px;
            height: 3px;
            background-color: currentColor;
            border-radius: 3px;
            transition: all 0.3s ease;
          }

          .hamburger-line.open:nth-child(1) {
            transform: rotate(45deg) translateY(8px);
          }

          .hamburger-line.open:nth-child(2) {
            opacity: 0;
          }

          .hamburger-line.open:nth-child(3) {
            transform: rotate(-45deg) translateY(-8px);
          }

          /* MOBILE MENU */
          .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 75%;
            max-width: 300px;
            height: 100vh;
            background: #1f2937;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
            transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            z-index: 1000;
            overflow-y: auto;
          }

          .theme-light .mobile-menu {
            background: #ffffff;
          }

          .theme-dark .mobile-menu {
            background: #1f2937;
          }

          .mobile-menu-open {
            right: 0;
          }

          .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            animation: fadeIn 0.3s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* SOCIAL ICONS */
          .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #3b82f6;
            color: white;
            font-size: 1.1rem;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            text-decoration: none;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
          }

          .social-icon::before {
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

          .social-icon svg {
            position: relative;
            z-index: 1;
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .social-icon:hover::before {
            transform: scale(1);
          }

          .social-icon:hover {
            transform: translateY(-5px) rotate(360deg) scale(1.15);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.6);
          }

          .social-icon:hover svg {
            transform: scale(1.1);
          }

          .social-icon:active {
            transform: translateY(-2px) scale(1.05);
          }
        `}
      </style>
    </nav>
  );
}
