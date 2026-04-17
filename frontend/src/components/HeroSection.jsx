import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = ({ personal }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9"
          alt="Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {personal.name}
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-3xl text-blue-400 mb-8 font-medium"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {personal.title}
        </p>
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          {personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollToSection("portfolio")}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection("showcase")}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
          >
            <Play className="mr-2" size={20} />
            Watch Reel
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;