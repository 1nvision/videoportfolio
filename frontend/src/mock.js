// Mock data for portfolio website

export const portfolioData = {
  personal: {
    name: "Alex Morgan",
    title: "Video Producer & Sports Photographer",
    tagline: "Capturing the passion and energy of sports through dynamic storytelling",
    about: "Passionate video producer and photographer specializing in sports media production. With extensive experience in capturing high-stakes match moments, producing engaging social content, and creating compelling visual narratives, I bring stories to life through the lens. My work spans matchday coverage, player interviews, highlight reels, and branded content for professional sports organizations.",
    email: "contact@alexmorgan.com",
    social: {
      instagram: "https://instagram.com/alexmorgan",
      linkedin: "https://linkedin.com/in/alexmorgan",
      artstation: "https://artstation.com/alexmorgan"
    }
  },

  featuredReel: {
    title: "2024 Season Highlights Reel",
    description: "A compilation of the best moments from matchday coverage, player interviews, and behind-the-scenes content.",
    thumbnail: "https://images.unsplash.com/photo-1771208940366-8ece5415808e",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  projects: [
    {
      id: 1,
      title: "Matchday Coverage - Season Opener",
      category: "Matchday",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20",
      description: "Full matchday coverage including pre-game, live action, and post-game analysis for season opener.",
      tags: ["Videography", "Live Coverage", "Editing"]
    },
    {
      id: 2,
      title: "Training Session - Tactical Drills",
      category: "Training",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1774050021649-0f41cf9d6022",
      description: "Behind-the-scenes footage of tactical training sessions with cinematic b-roll and player focus shots.",
      tags: ["Videography", "B-Roll", "Sports"]
    },
    {
      id: 3,
      title: "Captain's Interview - Pre-Season",
      category: "Interviews",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1758901466295-a3a67cac9021",
      description: "Professional interview setup with team captain discussing season goals and team dynamics.",
      tags: ["Interview", "Production", "Lighting"]
    },
    {
      id: 4,
      title: "Match Action - Derby Day",
      category: "Matchday",
      type: "photo",
      thumbnail: "https://images.unsplash.com/photo-1475116730596-402cbd4ff6c1",
      description: "High-intensity action photography capturing crucial moments from the city derby match.",
      tags: ["Photography", "Action", "Sports"]
    },
    {
      id: 5,
      title: "Social Media Reels - Goal Celebrations",
      category: "Social Media",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1516725630185-19ae408fbc83",
      description: "Short-form vertical content optimized for Instagram and TikTok featuring goal celebrations.",
      tags: ["Social Media", "Short-form", "Editing"]
    },
    {
      id: 6,
      title: "Stadium Atmosphere",
      category: "Matchday",
      type: "photo",
      thumbnail: "https://images.unsplash.com/photo-1629217855633-79a6925d6c47",
      description: "Wide-angle shots capturing the electric atmosphere and passionate fanbase on matchday.",
      tags: ["Photography", "Atmosphere", "Wide-angle"]
    },
    {
      id: 7,
      title: "Community Event - Youth Clinic",
      category: "Events",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4",
      description: "Coverage of community relations event featuring youth football clinic and player meet-and-greet.",
      tags: ["Community", "Event Coverage", "Storytelling"]
    },
    {
      id: 8,
      title: "Sponsor Activation - Brand Campaign",
      category: "Sponsored Content",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1519315901367-f34ff9154487",
      description: "Branded content for jersey sponsor featuring players and product integration.",
      tags: ["Branded Content", "Commercial", "Production"]
    },
    {
      id: 9,
      title: "Press Conference - Manager's Thoughts",
      category: "Interviews",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1599158150601-1417ebbaafdd",
      description: "Multi-camera press conference setup with professional audio and lighting.",
      tags: ["Press", "Multi-camera", "Audio"]
    }
  ],

  skills: [
    {
      category: "Videography",
      items: [
        "Multi-camera production",
        "Gimbal & stabilization",
        "Drone footage",
        "Live sports coverage",
        "Cinematic b-roll"
      ]
    },
    {
      category: "Photography",
      items: [
        "Sports action photography",
        "Event coverage",
        "Portrait photography",
        "Stadium atmosphere shots",
        "High-speed capture"
      ]
    },
    {
      category: "Post-Production",
      items: [
        "Adobe Premiere Pro",
        "Final Cut Pro",
        "DaVinci Resolve",
        "Adobe Photoshop",
        "Adobe Lightroom"
      ]
    },
    {
      category: "Content Strategy",
      items: [
        "Social media optimization",
        "Storytelling & narrative",
        "Brand alignment",
        "Audience engagement",
        "Content planning"
      ]
    }
  ],

  experience: [
    {
      role: "Freelance Sports Videographer",
      period: "2022 - Present",
      description: "Creating compelling sports content for various teams and organizations, specializing in matchday coverage and social media content."
    },
    {
      role: "Media Production Assistant",
      period: "2020 - 2022",
      description: "Assisted in video production, editing highlight reels, and managing media archives for professional sports team."
    },
    {
      role: "Sports Photographer",
      period: "2019 - 2020",
      description: "Captured action photography for college athletics, events, and team promotions."
    }
  ]
};

export const categories = [
  "All",
  "Matchday",
  "Training",
  "Interviews",
  "Social Media",
  "Events",
  "Sponsored Content"
];