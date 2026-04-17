import React from "react";
import { Play } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { portfolioData } from "../mock";

const VideoShowcase = ({ featuredReel }) => {
  const thumbnails = portfolioData.projects.slice(0, 4);

  return (
    <section id="showcase" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Featured Reel
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {featuredReel.description}
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-slate-800 border-slate-700">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-slate-950">
                <iframe
                  className="w-full h-full"
                  src={featuredReel.videoUrl}
                  title={featuredReel.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
          {thumbnails.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-all flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 group-hover:bg-blue-500 flex items-center justify-center transition-colors">
                  <Play size={20} className="text-white ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;