import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoShowcase from "../components/VideoShowcase";
import PortfolioGallery from "../components/PortfolioGallery";
import AboutSection from "../components/AboutSection";
import SkillsExperience from "../components/SkillsExperience";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <VideoShowcase />
      <PortfolioGallery />
      <AboutSection />
      <SkillsExperience />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;