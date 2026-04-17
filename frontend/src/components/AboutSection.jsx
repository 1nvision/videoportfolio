import React from "react";

const AboutSection = ({ personal }) => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1774050021649-0f41cf9d6022"
                alt="Behind the scenes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              About Me
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p className="text-lg">{personal.about}</p>
              <p className="text-lg">
                My approach combines technical expertise with creative storytelling,
                ensuring every frame serves the narrative. Whether it's capturing the
                decisive moment in a match, conducting professional interviews, or
                creating scroll-stopping social content, I'm committed to delivering
                exceptional quality that resonates with audiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div
                  className="text-4xl font-bold text-blue-400 mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  200+
                </div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div
                  className="text-4xl font-bold text-blue-400 mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  50+
                </div>
                <div className="text-sm text-slate-400">Match Coverages</div>
              </div>
              <div className="text-center">
                <div
                  className="text-4xl font-bold text-blue-400 mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  5+
                </div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;