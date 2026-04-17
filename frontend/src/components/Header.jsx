import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white font-bold text-xl tracking-tight hover:text-blue-400 transition-colors"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              AM MEDIA
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("showcase")}
              className="text-slate-200 hover:text-white transition-colors text-sm font-medium"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-slate-200 hover:text-white transition-colors text-sm font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-200 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-200 hover:text-white transition-colors text-sm font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-200 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-400 hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-800">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("showcase")}
              className="block w-full text-left text-slate-200 hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-800"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-slate-200 hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-800"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-slate-200 hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-800"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left text-slate-200 hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-800"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-slate-200 hover:text-white transition-colors py-2 px-3 rounded hover:bg-slate-800"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;