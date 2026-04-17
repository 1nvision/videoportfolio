import React from "react";
import { CheckCircle, Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const SkillsExperience = ({ skills, experience }) => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Technical proficiency and creative capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional journey in sports media production
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-lg transition-all hover:border-blue-600"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-blue-600 font-semibold">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;