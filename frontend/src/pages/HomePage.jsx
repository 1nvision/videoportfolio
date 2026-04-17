import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoShowcase from "../components/VideoShowcase";
import PortfolioGallery from "../components/PortfolioGallery";
import AboutSection from "../components/AboutSection";
import SkillsExperience from "../components/SkillsExperience";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { getPortfolioData } from "../services/api";

const HomePage = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPortfolioData();
        setPortfolioData(data);
      } catch (error) {
        console.error("Failed to fetch portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600">Failed to load portfolio data</p>
        </div>
      </div>
    );
  }

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