import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children, className = '' }) {
  const [showOverlay, setShowOverlay] = useState(true);

  // Show blue overlay for 0.5s then remove it
  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Variants for sliding overlay
  const overlayVariants = {
    hidden: { y: "100%" }, // start from bottom
    enter: { y: "0%", transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    exit: { y: "-100%", transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  // Variants for page content (fade in)
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <div className={`relative w-full ${className}`}>

      {/* Blue overlay sliding from bottom to top */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-[#001f3f] z-50"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={overlayVariants}
          />
        )}
      </AnimatePresence>

      {/* Page content appears after overlay animation */}
      <motion.div
        key="content"
        initial="hidden"
        animate="enter"
        variants={contentVariants}
      >
        {children}
      </motion.div>
    </div>
  );
}
