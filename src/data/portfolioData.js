export const portfolioData = {
  personal: {
    name: "Shuayeb Hossain",
    designation: "Full Stack Web Developer",
    tagline: "Building sleek, responsive, and performance-driven web applications with modern web technologies.",
    heroBio: "Undergraduate student at the University of Dhaka passionate about full-stack engineering, React ecosystems, and solving real-world challenges through elegant code.",
    avatarUrl: "/profile.jpg",
    resumeUrl: "/resume.pdf",
    location: "Dhaka, Bangladesh",
    availability: "Open to Internships, Freelance & Full-time Opportunities"
  },

  socialLinks: {
    github: "https://github.com/ShuayebProgrammingLife",
    linkedin: "https://www.linkedin.com/in/shuayeb-hossain-3329b03ab/",
    twitter: "https://x.com/ShuayebHossain1",
    facebook: "https://www.facebook.com/shuayeb.hossain.2024/"
  },

  aboutMe: {
    journey: "My programming journey started with a genuine fascination for building things that live on the internet. As a student at the University of Dhaka, I have immersed myself in modern web architecture, responsive UI design, and JavaScript ecosystems, constantly pushing myself to write cleaner, more maintainable code.",
    workEnjoyed: "I enjoy architecting intuitive React frontends, designing seamless user experiences with Tailwind CSS, and connecting robust backend APIs. Transforming complex problems into simple, elegant digital interfaces is what drives me every day.",
    hobbies: [
      { name: "Tech & Innovation", icon: "Activity", desc: "Exploring emerging web tools, open-source libraries, and modern frontend frameworks." },
      { name: "Sports & Fitness", icon: "Activity", desc: "Enjoying workout sessions and outdoor sports to stay disciplined and energized." },
      { name: "Tech Podcasts & Discussions", icon: "Headphones", desc: "Listening to software engineering podcasts and developer stories." },
      { name: "Reading & Learning", icon: "Coffee", desc: "Continuous learning across technology, science, and problem-solving." }
    ],
    personality: "Driven, detail-oriented, and eager to learn. I take pride in being a quick learner, an adaptable team player, and someone who always strives to deliver polished, bug-free work."
  },

  skills: {
    frontend: [
      { name: "React.js", level: 92, status: "Advanced", icon: "Code2" },
      { name: "JavaScript (ES6+)", level: 90, status: "Advanced", icon: "FileCode" },
      { name: "Tailwind CSS", level: 95, status: "Expert", icon: "Palette" },
      { name: "HTML5 & Modern CSS3", level: 95, status: "Expert", icon: "Layout" },
      { name: "Next.js", level: 80, status: "Proficient", icon: "Globe" },
      { name: "Redux Toolkit", level: 82, status: "Proficient", icon: "Layers" }
    ],
    backend: [
      { name: "Node.js", level: 84, status: "Proficient", icon: "Server" },
      { name: "Express.js", level: 86, status: "Proficient", icon: "Cpu" },
      { name: "MongoDB & Mongoose", level: 82, status: "Proficient", icon: "Database" },
      { name: "Firebase (Auth / Firestore)", level: 88, status: "Advanced", icon: "Flame" },
      { name: "RESTful APIs", level: 90, status: "Advanced", icon: "Send" },
      { name: "PostgreSQL Basics", level: 70, status: "Intermediate", icon: "DatabaseBackup" }
    ],
    tools: [
      { name: "Git & GitHub", level: 92, status: "Advanced", icon: "GitBranch" },
      { name: "VS Code", level: 96, status: "Expert", icon: "Terminal" },
      { name: "Vite", level: 90, status: "Advanced", icon: "Zap" },
      { name: "Postman", level: 88, status: "Advanced", icon: "CheckCircle2" },
      { name: "Figma (UI/UX Handoff)", level: 78, status: "Proficient", icon: "Figma" },
      { name: "Vercel / Netlify", level: 90, status: "Advanced", icon: "Cloud" }
    ]
  },

  education: [
    {
      degree: "Bachelor of Science (B.Sc.) - 3rd Year (1st Semester)",
      institution: "Dhaka University (University of Dhaka)",
      period: "Currently Running (3rd Year, 1st Semester)",
      grade: "CGPA: 3.53",
      description: "Pursuing undergraduate degree at the University of Dhaka. Actively focused on software development, algorithmic problem solving, database management, and building high-performance modern web applications.",
      highlights: [
        "Current CGPA: 3.53",
        "Running: 3rd Year 1st Semester",
        "Dhaka University",
        "Strong focus on Full Stack Web Technologies"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Naogaon Government College, Naogaon",
      period: "Batch: 2022",
      grade: "Science Group",
      description: "Successfully completed Higher Secondary Certificate (HSC) in Science with rigorous coursework in Mathematics, Physics, Chemistry, and Information & Communication Technology.",
      highlights: [
        "HSC Batch 2022",
        "Naogaon Government College, Naogaon",
        "Science Background"
      ]
    }
  ],

  experience: [], // Removed as requested

  projects: [
    {
      id: "bazar-dor",
      title: "Bazar Dor - Daily Commodity & Market Price Tracker",
      category: "Utility / E-Commerce",
      badge: "Featured",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80",
      shortDescription: "A real-time web application to track daily market commodity rates and grocery price fluctuations across local markets with price comparison.",
      fullDescription: "Bazar Dor is an intuitive, localized commodity price tracking platform designed to bring transparency to daily grocery market rates (vegetables, fish, meat, rice, spices) for consumers and traders. It features item categorization, instant search filtering, price change indicators, and a clean, mobile-first responsive layout.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "REST APIs", "Vercel", "Lucide Icons"],
      liveUrl: "https://bazar-dor-rosy.vercel.app",
      clientGithub: "https://github.com/ShuayebProgrammingLife/Bazar_Dor",
      challenges: [
        "Structuring dynamic search and filter algorithms that execute quickly on mobile devices with zero UI lag.",
        "Handling diverse commodity measurement units (kg, piece, liter) and formatting currency values clearly in Bangladeshi Taka (BDT).",
        "Designing a lightweight, clean UI that remains readable and accessible even on slow mobile data connections."
      ],
      futurePlans: [
        "Add interactive 7-day and 30-day price trend history charts (price rise and fall indicators).",
        "Implement location-based market filtering (e.g., Karwan Bazar, Mirpur, Mohammadpur, etc.).",
        "Introduce automated notifications or daily email/SMS price drop alerts for essential items."
      ]
    },
    {
      id: "fit-web-app",
      title: "FitWebApp - Interactive Fitness & Workout Tracker",
      category: "Health & Fitness",
      badge: "Web App",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
      shortDescription: "A modern health and fitness web application allowing users to explore customized workout plans, track exercise routines, and monitor wellness goals.",
      fullDescription: "FitWebApp empowers fitness enthusiasts to discover targeted workout splits (chest, back, legs, cardio), view exercise execution guides with rep counts, calculate body health metrics (BMI/BMR), and log daily physical activities with an intuitive, energetic dark-mode theme.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Context API", "Vercel", "Responsive UI"],
      liveUrl: "https://fit-web-app-one.vercel.app",
      clientGithub: "https://github.com/ShuayebProgrammingLife/FitWebApp",
      challenges: [
        "Designing a modular exercise catalog with categorized muscle group filtering and detailed instruction cards.",
        "Managing user routine state across session reloads while keeping the application responsive on all mobile viewports.",
        "Ensuring high contrast and accessible typography suitable for users on gym equipment or outdoors."
      ],
      futurePlans: [
        "Integrate a customized calorie & macronutrient nutrition calculator.",
        "Implement interactive workout countdown timers with audio cues for rest intervals.",
        "Add user authentication to sync personal workout logs and progress photo logs to the cloud."
      ]
    },
    {
      id: "movie-explorer",
      title: "Movie Explorer - Film Discovery & Ratings Platform",
      category: "Entertainment / Media",
      badge: "API Driven",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80",
      shortDescription: "An entertainment portal to discover trending cinema, search movies by genre or actor, view IMDb/TMDB ratings, and watch trailers.",
      fullDescription: "Movie Explorer connects with real-time movie databases to provide users with up-to-date cinema discoveries. Features debounced live search, dynamic genre tabs (Action, Drama, Sci-Fi, Horror), comprehensive movie details with cast information, ratings, plot overviews, and YouTube trailer embeds.",
      techStack: ["React.js", "TMDB API", "Tailwind CSS", "JavaScript", "Vercel", "Lucide React"],
      liveUrl: "https://movieexplorer01.vercel.app",
      clientGithub: "https://github.com/ShuayebProgrammingLife/Movie_Explorer",
      challenges: [
        "Implementing debounced API search queries to prevent hitting API rate limits during rapid keystroke input.",
        "Handling asynchronous poster image fallbacks smoothly when certain titles lack promotional artwork.",
        "Designing an immersive cinematic layout with backdrop gradients that adapt gracefully across desktop and mobile screens."
      ],
      futurePlans: [
        "Add a personal 'Watchlist' and 'Favorites' feature stored in localStorage / user accounts.",
        "Implement TV Shows and anime series browsing sections with episode guides.",
        "Introduce an AI-driven 'What to Watch Next' recommendation engine based on user favorites."
      ]
    }
  ],

  contact: {
    email: "shuayebhossaineng@gmail.com",
    phone: "01330546984",
    whatsapp: "01330546984",
    whatsappLink: "https://wa.me/8801330546984?text=Hello%20Shuayeb,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    address: "Dhaka, Bangladesh",
    socialNote: "Feel free to drop a message anytime. I usually reply promptly."
  }
};
