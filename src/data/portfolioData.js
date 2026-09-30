import movieWebsite from "../assets/movie-website2.jpg";
import appImage from "../assets/app1.webp";
import maintenanceImage from "../assets/Maintenance.jpg";

export const skills = {
  FrontEnd: ["React.js", "Node.js", "JavaScript", "Next.js ", "Tailwind CSS:"],

  backend: ["Firebase", "Supabase", "Node.js", "PostgreSQL", "Redis"],

  cloud: ["AWS EC2", "Docker", "GitHub Actions", "Git", "GitHub"],
};

export const projects = [
  {
    title: "MovieHub - Full Stack Project",
    description:
      " Explore a world of movies, from popular hits to hidden gems.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Rest API",
      "mongoDB"
    ],
    image: movieWebsite,
    link: "#",
  },
  {
    title: "Inforato - E-commerce App",
    description:
      "An Full Stack e-commerce application featuring product management, secure payments and real-time inventory.",
    technologies: ["React", "Node.js", "Express", "FastAPI", "MongoDB"],
    image: appImage,
    link: "#",
  },
  {
    title: "AI-Powered QR Maintenance & Asset History Platform",
    description:
      "A smart platform that uses AI and QR codes to simplify asset maintenance, track service history, manage inspections, and provide quick access to equipment records.",
    technologies: ["React", "Node.js", "Express", "FastAPI", "MongoDB"],
    image: maintenanceImage,
    link: "#",
  },
];

export const posts = [
  {
    date: "15 Jul",
    category: "MERN Stack",
    readTime: "5 min read",
    title: "From Zero to MERN Stack: My Journey and Key Takeaways",
    description:
      "One of the most exciting parts of my journey was building full-stack applications. My first project was building a simple login functionality.",
  },
  {
    date: "10 Jul",
    category: "Learning",
    readTime: "7 min read",
    title: "Taking the terminal seriously in the age of AI coding agents",
    description:
      "In the age of AI coding agents, mastering the command-line terminal is more critical than ever for developers.",
  },
  {
    date: "05 Jul",
    category: "Tutorial",
    readTime: "10 min read",
    title: "Building Your First Cross-Platform App",
    description:
      "A beginner-friendly guide to creating your first cross-platform mobile application.",
  },
];
