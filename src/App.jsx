import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import PageTransition from "./components/PageTransition";
import ProjectDetail from "./components/ProjectDetail";

function AppContent() {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <div className={theme === "dark" ? "bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Cursor />
      <Navbar />

      {/* Wrap routes with PageTransition */}
      <PageTransition key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        
  <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </PageTransition>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
