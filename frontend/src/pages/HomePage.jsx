import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoShowcase from "../components/VideoShowcase";
import PortfolioGallery from "../components/PortfolioGallery";
import AboutSection from "../components/AboutSection";
import SkillsExperience from "../components/SkillsExperience";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { portfolioData } from "../mock";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection personal={portfolioData.personal} />
      <VideoShowcase featuredReel={portfolioData.featuredReel} />
      <PortfolioGallery />
      <AboutSection personal={portfolioData.personal} />
      <SkillsExperience 
        skills={portfolioData.skills} 
        experience={portfolioData.experience} 
      />
      <ContactSection personal={portfolioData.personal} />
      <Footer personal={portfolioData.personal} />
    </div>
  );
};

export default HomePage;