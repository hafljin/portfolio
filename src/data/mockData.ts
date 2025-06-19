import { Project, Profile } from '../types';

// This is static mock data for display purposes only
// No backend or API integration - all data is local
export const profile: Profile = {
  name: "Osawaru",
  title: "AI Developer & Software Engineer",
  bio: "Passionate developer specializing in AI-powered applications and modern software solutions. I create innovative projects that bridge the gap between cutting-edge technology and practical user needs.",
  location: "San Francisco, CA",
  skills: [
    "Kotlin", "React", "TypeScript", "Python", 
    "Machine Learning", "AI/ML", "Node.js", "PostgreSQL",
    "Docker", "AWS", "Git", "TensorFlow"
  ],
  avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
};

// Mock project data - replace with real projects as needed
// All interactions (likes, comments) are local-only and not persistent
export const projects: Project[] = [
  {
    id: "1",
    title: "AI Chat Assistant",
    description: "Intelligent chatbot with natural language processing capabilities",
    longDescription: "A sophisticated AI-powered chat assistant built with modern machine learning techniques. Features context-aware responses, multi-language support, and seamless integration capabilities.",
    techStack: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/osawaru/ai-chat-assistant",
    demoUrl: "https://ai-chat-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 42, // Mock data only
    comments: [] // Mock data - not persisted to any backend
  },
  {
    id: "2", 
    title: "Smart Analytics Dashboard",
    description: "Real-time data visualization platform with AI insights",
    longDescription: "Comprehensive analytics platform that transforms raw data into actionable insights using machine learning algorithms. Features real-time updates, customizable dashboards, and predictive analytics.",
    techStack: ["Kotlin", "Spring Boot", "React", "D3.js", "Redis"],
    githubUrl: "https://github.com/osawaru/smart-analytics",
    imageUrl: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 28, // Mock data only
    comments: [] // Mock data - not persisted to any backend
  },
  {
    id: "3",
    title: "Mobile Expense Tracker",
    description: "AI-powered expense categorization and budgeting app",
    longDescription: "Smart mobile application that automatically categorizes expenses using machine learning. Provides intelligent budgeting suggestions and financial insights to help users manage their money better.",
    techStack: ["Kotlin", "Android", "TensorFlow Lite", "SQLite", "Firebase"],
    githubUrl: "https://github.com/osawaru/expense-tracker",
    imageUrl: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 35, // Mock data only
    comments: [] // Mock data - not persisted to any backend
  },
  {
    id: "4",
    title: "Code Review Assistant",
    description: "AI-powered tool for automated code analysis and suggestions",
    longDescription: "Intelligent code review tool that analyzes code quality, suggests improvements, and identifies potential issues using advanced AI models. Integrates seamlessly with popular version control systems.",
    techStack: ["Python", "FastAPI", "OpenAI API", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/osawaru/code-review-ai",
    imageUrl: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 67, // Mock data only
    comments: [] // Mock data - not persisted to any backend
  },
  {
    id: "5",
    title: "Smart Home Controller",
    description: "IoT platform for intelligent home automation",
    longDescription: "Comprehensive smart home platform that learns user preferences and automates home systems accordingly. Features voice control, energy optimization, and seamless device integration.",
    techStack: ["Kotlin", "MQTT", "React Native", "InfluxDB", "Raspberry Pi"],
    githubUrl: "https://github.com/osawaru/smart-home",
    imageUrl: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 51, // Mock data only
    comments: [] // Mock data - not persisted to any backend
  },
  {
    id: "6",
    title: "ML Model Deployment Platform",
    description: "Streamlined platform for deploying and managing ML models",
    longDescription: "Enterprise-grade platform for deploying, monitoring, and scaling machine learning models. Features automated model versioning, A/B testing capabilities, and comprehensive performance analytics.",
    techStack: ["Python", "Kubernetes", "MLflow", "React", "PostgreSQL"],
    githubUrl: "https://github.com/osawaru/ml-platform",
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 73, // Mock data only
    comments: [] // Mock data - not persisted to any backend
  }
];