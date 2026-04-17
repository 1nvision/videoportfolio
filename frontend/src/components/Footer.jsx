import React from "react";
import { Instagram, Linkedin, Palette, Mail } from "lucide-react";
import { portfolioData } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {portfolioData.personal.name}
            </h3>
            <p className="text-slate-400 mb-4">
              {portfolioData.personal.title}
            </p>
            <p className="text-sm text-slate-500">
              Creating compelling sports content and visual stories
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#showcase"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href={portfolioData.personal.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={portfolioData.personal.social.artstation}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Palette size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;