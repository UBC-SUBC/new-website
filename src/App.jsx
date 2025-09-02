import React, { useState, useEffect } from "react";
import { Menu, X, Users, Cog, Award, Mail, ChevronDown } from "lucide-react";

const SUBCWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [waveOffset, setWaveOffset] = useState(0);
  // color scheme, use only 3 because it gives you that rich feeling
  const colors = {
    darkBlue: "#022534",
    mediumBlue: "#08546C",
    lightBlue: "#A0BACC",
  };

  // Smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Update active section, scroll progress, and wave animation
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "team",
        "submarine",
        "sponsors",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      // Calculate scroll progress for wave animation
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    // Wave animation using time-based sine function
    const animateWaves = () => {
      setWaveOffset(Date.now() * 0.001); // Convert to seconds
    };

    const animationFrame = setInterval(animateWaves, 16); // ~60fps
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {/* Animating the waves from bottom of the page to the top */}
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-300 ease-out"
          style={{
            height: `${scrollProgress * 100}vh`,
            backgroundColor: "rgba(2, 37, 52, 0.4)",
          }}
        />

        {/* Wave layers with sine/cosine swaying motion */}
        <div
          className="absolute left-0 right-0 transition-all duration-300 ease-out"
          style={{
            bottom: `${scrollProgress * 100}vh`,
            transform: `translateY(50%)`,
          }}
        >
          <svg
            className="absolute w-full h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ transform: "translateY(-80px)" }}
          >
            {/* Each wave has a diffeent sway speed */}
            {/* Background Wave - Slow sway */}
            <path
              d={`M0,${160 + Math.sin(waveOffset * 0.5) * 15} 
                  C240,${200 + Math.cos(waveOffset * 0.3) * 20} 
                  480,${120 + Math.sin(waveOffset * 0.4) * 18} 
                  720,${160 + Math.cos(waveOffset * 0.6) * 16} 
                  C960,${200 + Math.sin(waveOffset * 0.35) * 22} 
                  1200,${120 + Math.cos(waveOffset * 0.45) * 17} 
                  1440,${160 + Math.sin(waveOffset * 0.55) * 19} 
                  L1440,400 L0,400 Z`}
              fill="rgba(8, 84, 108, 0.15)"
            />

            {/* Middle Wave - Medium sway */}
            <path
              d={`M0,${180 + Math.cos(waveOffset * 0.7) * 20} 
                  C360,${140 + Math.sin(waveOffset * 0.8) * 25} 
                  720,${220 + Math.cos(waveOffset * 0.6) * 22} 
                  1080,${180 + Math.sin(waveOffset * 0.9) * 24} 
                  C1200,${160 + Math.cos(waveOffset * 0.75) * 18} 
                  1320,${200 + Math.sin(waveOffset * 0.65) * 20} 
                  1440,${180 + Math.cos(waveOffset * 0.85) * 23} 
                  L1440,400 L0,400 Z`}
              fill="rgba(8, 84, 108, 0.15)"
            />

            {/* Surface Wave - Fast sway */}
            <path
              d={`M0,${200 + Math.sin(waveOffset * 1.2) * 25} 
                  C200,${160 + Math.cos(waveOffset * 1.4) * 30} 
                  400,${240 + Math.sin(waveOffset * 1.1) * 28} 
                  600,${200 + Math.cos(waveOffset * 1.6) * 26} 
                  C800,${160 + Math.sin(waveOffset * 1.3) * 32} 
                  1000,${240 + Math.cos(waveOffset * 1.5) * 29} 
                  1200,${200 + Math.sin(waveOffset * 1.7) * 27} 
                  C1280,${180 + Math.cos(waveOffset * 1.25) * 24} 
                  1360,${220 + Math.sin(waveOffset * 1.45) * 31} 
                  1440,${200 + Math.cos(waveOffset * 1.65) * 28} 
                  L1440,400 L0,400 Z`}
              fill="rgba(8, 84, 108, 0.15)"
            />

            {/* Surface Foam Layer - Very fast sway */}
            <path
              d={`M0,${210 + Math.cos(waveOffset * 2.0) * 12} 
                  C150,${185 + Math.sin(waveOffset * 2.2) * 15} 
                  300,${235 + Math.cos(waveOffset * 1.8) * 14} 
                  450,${210 + Math.sin(waveOffset * 2.4) * 16} 
                  C600,${185 + Math.cos(waveOffset * 1.9) * 13} 
                  750,${235 + Math.sin(waveOffset * 2.1) * 17} 
                  900,${210 + Math.cos(waveOffset * 2.3) * 15} 
                  C1050,${185 + Math.sin(waveOffset * 1.95) * 14} 
                  1200,${235 + Math.cos(waveOffset * 2.15) * 18} 
                  1350,${210 + Math.sin(waveOffset * 2.35) * 16} 
                  C1395,${198 + Math.cos(waveOffset * 2.05) * 10} 
                  1440,${222 + Math.sin(waveOffset * 2.25) * 12} 
                  1440,${210 + Math.cos(waveOffset * 2.0) * 12} 
                  L1440,400 L0,400 Z`}
              fill="rgba(8, 84, 108, 0.15)"
            />
          </svg>

          {/* Additional Small Wave with sway */}
          <svg
            className="absolute w-full h-24"
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
            style={{ transform: "translateY(-60px)" }}
          >
            <path
              d={`M0,${120 + Math.sin(waveOffset * 2.5) * 8} 
                  Q180,${100 + Math.cos(waveOffset * 2.7) * 10} 
                  360,${120 + Math.sin(waveOffset * 2.3) * 9} 
                  T720,${120 + Math.cos(waveOffset * 2.6) * 8} 
                  Q900,${140 + Math.sin(waveOffset * 2.8) * 11} 
                  1080,${120 + Math.cos(waveOffset * 2.4) * 9} 
                  T1440,${120 + Math.sin(waveOffset * 2.9) * 10} 
                  L1440,240 L0,240 Z`}
              fill="rgba(8, 84, 108, 0.15)"
            />
          </svg>
        </div>
      </div>
      {/* Fixed Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300"
        style={{ backgroundColor: colors.darkBlue }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                SUBC
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("home")}
                  className={`px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 ${
                    activeSection === "home"
                      ? "text-blue-300 font-semibold border-b-2 border-blue-300"
                      : ""
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 ${
                    activeSection === "about"
                      ? "text-blue-300 font-semibold border-b-2 border-blue-300"
                      : ""
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className={`px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 ${
                    activeSection === "team"
                      ? "text-blue-300 font-semibold border-b-2 border-blue-300"
                      : ""
                  }`}
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection("submarine")}
                  className={`px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 ${
                    activeSection === "submarine"
                      ? "text-blue-300 font-semibold border-b-2 border-blue-300"
                      : ""
                  }`}
                >
                  Submarine
                </button>
                <button
                  onClick={() => scrollToSection("sponsors")}
                  className={`px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 ${
                    activeSection === "sponsors"
                      ? "text-blue-300 font-semibold border-b-2 border-blue-300"
                      : ""
                  }`}
                >
                  Sponsors
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 ${
                    activeSection === "contact"
                      ? "text-blue-300 font-semibold border-b-2 border-blue-300"
                      : ""
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-blue-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className={`block w-full text-left px-4 py-2 text-white hover:text-blue-300 hover:bg-blue-800 rounded transition-colors duration-200 ${
                    activeSection === "home"
                      ? "text-blue-300 font-semibold bg-blue-800"
                      : ""
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`block w-full text-left px-4 py-2 text-white hover:text-blue-300 hover:bg-blue-800 rounded transition-colors duration-200 ${
                    activeSection === "about"
                      ? "text-blue-300 font-semibold bg-blue-800"
                      : ""
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className={`block w-full text-left px-4 py-2 text-white hover:text-blue-300 hover:bg-blue-800 rounded transition-colors duration-200 ${
                    activeSection === "team"
                      ? "text-blue-300 font-semibold bg-blue-800"
                      : ""
                  }`}
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection("submarine")}
                  className={`block w-full text-left px-4 py-2 text-white hover:text-blue-300 hover:bg-blue-800 rounded transition-colors duration-200 ${
                    activeSection === "submarine"
                      ? "text-blue-300 font-semibold bg-blue-800"
                      : ""
                  }`}
                >
                  Submarine
                </button>
                <button
                  onClick={() => scrollToSection("sponsors")}
                  className={`block w-full text-left px-4 py-2 text-white hover:text-blue-300 hover:bg-blue-800 rounded transition-colors duration-200 ${
                    activeSection === "sponsors"
                      ? "text-blue-300 font-semibold bg-blue-800"
                      : ""
                  }`}
                >
                  Sponsors
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`block w-full text-left px-4 py-2 text-white hover:text-blue-300 hover:bg-blue-800 rounded transition-colors duration-200 ${
                    activeSection === "contact"
                      ? "text-blue-300 font-semibold bg-blue-800"
                      : ""
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-16"
        style={{ backgroundColor: colors.mediumBlue }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-900"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">SUBC</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            UBC's Submarine Design Team - Designing and building submarines to
            race in international competitions
          </p>
          <button
            onClick={() => scrollToSection("about")}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Learn More
            <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: colors.darkBlue }}
            >
              About SUBC
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: colors.lightBlue }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: colors.mediumBlue }}
              >
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                SUBC is UBC's Submarine Design Team, comprised mostly of
                engineering undergraduate students from a variety of different
                departments including Mechanical Engineering, Civil Engineering
                and Engineering Physics.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a team we design, build, test and race a one person
                human-powered submarine in competitions in England and the
                United States.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: "#f8fafc" }}
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: colors.mediumBlue }}
                  >
                    Practical Experience
                  </h4>
                  <p className="text-sm text-gray-600">
                    Hands-on learning beyond the classroom
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: "#f8fafc" }}
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: colors.mediumBlue }}
                  >
                    Innovation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Cutting-edge submarine technology
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Submarine Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: colors.darkBlue }}
            >
              Our Team
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: colors.lightBlue }}
            ></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated students who make SUBC's submarine dreams a
              reality
            </p>
          </div>
          {/* This is just sort of a loop right now, will change to unique later */}
          <div className="grid md:grid-cols-3 gap-8">
            {["Team Lead", "Design Engineer", "Test Pilot"].map(
              (role, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-gray-400" size={32} />
                  </div>
                  <h3
                    className="text-xl font-semibold text-center mb-2"
                    style={{ color: colors.mediumBlue }}
                  >
                    {role}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">banana.</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Submarine Section */}
      <section id="submarine" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: colors.darkBlue }}
            >
              Our Submarine
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: colors.lightBlue }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Technical Drawings Placeholder</p>
            </div>
            <div>
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: colors.mediumBlue }}
              >
                Engineering Excellence
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our human-powered submarine represents years of engineering
                innovation and design refinement. Built for speed and efficiency
                in underwater racing competitions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Cog className="mr-3" style={{ color: colors.lightBlue }} />
                  <span className="text-gray-700">
                    Advanced hydrodynamic design
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-3" style={{ color: colors.lightBlue }} />
                  <span className="text-gray-700">
                    Competition-tested performance
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3" style={{ color: colors.lightBlue }} />
                  <span className="text-gray-700">
                    Student-designed and built
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section
        id="sponsors"
        className="py-20"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: colors.darkBlue }}
            >
              Our Sponsors
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: colors.lightBlue }}
            ></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're grateful for the support of our industry partners and
              sponsors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((sponsor) => (
              <div
                key={sponsor}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Sponsor Logo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: colors.darkBlue }}
            >
              Get In Touch
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: colors.lightBlue }}
            ></div>
            <p className="text-gray-600">
              Interested in joining SUBC or learning more about our projects?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: colors.mediumBlue }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3" style={{ color: colors.lightBlue }} />
                  <span className="text-gray-700">info@subc.ca</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3" style={{ color: colors.lightBlue }} />
                  <span className="text-gray-700">
                    University of British Columbia
                  </span>
                </div>
              </div>
            </div>

            <div>
              {/* this doesnt work yet */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button
                  type="button"
                  className="w-full py-3 px-6 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: colors.mediumBlue }}
                  onClick={() => alert("Message sent! (This is a demo)")}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-white text-center"
        style={{ backgroundColor: colors.darkBlue }}
      >
        <p>
          &copy; 2024 SUBC - UBC's Submarine Design Team. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SUBCWebsite;
