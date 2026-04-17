import React, { useState, useEffect } from "react";
import { Camera, Video, ExternalLink } from "lucide-react";
import { categories } from "../mock";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { getProjects } from "../services/api";

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const data = await getProjects(selectedCategory !== "All" ? selectedCategory : null);
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Portfolio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore my work across matchday coverage, interviews, social content, and more
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        ) : (
          /* Portfolio Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Type Icon */}
                  <div className="absolute top-3 right-3">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      {project.type === "video" ? (
                        <Video size={18} className="text-blue-600" />
                      ) : (
                        <Camera size={18} className="text-blue-600" />
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      View Details
                      <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-slate-100 text-slate-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.category} • {selectedProject.type === "video" ? "Video" : "Photography"}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>

              <p className="text-slate-700 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioGallery;