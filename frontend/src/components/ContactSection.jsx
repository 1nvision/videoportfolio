import React, { useState } from "react";
import { Mail, Send, Instagram, Linkedin, Palette } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { submitContact } from "../services/api";

const ContactSection = ({ personal }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await submitContact(formData);
      toast({
        title: "Message Sent!",
        description: response.message,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to create something amazing together? Let's talk about your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="border-slate-200 shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-slate-300 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-slate-300 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-slate-300 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-slate-300 focus:border-blue-600 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    {!submitting && <Send size={20} className="ml-2" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <Card className="border-slate-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Email</h3>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                    <Mail size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg">{personal.email}</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Connect on Social Media
                </h3>
                <div className="space-y-4">
                  <a
                    href={personal.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                      <Instagram size={20} className="text-slate-700 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg">Instagram</span>
                  </a>
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                      <Linkedin size={20} className="text-slate-700 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg">LinkedIn</span>
                  </a>
                  <a
                    href={personal.social.artstation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                      <Palette size={20} className="text-slate-700 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg">ArtStation</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-lg bg-blue-600">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Available for Hire
                </h3>
                <p className="text-blue-100">
                  Open to full-time positions and freelance projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;