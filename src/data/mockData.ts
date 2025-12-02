import { Project, Profile } from '../types';

// This is static mock data for display purposes only
// No backend or API integration - all data is local
export const profile: Profile = {
  name: "Osawaru",
  title: "AI開発者・ソフトウェアエンジニア",
  bio: "モバイル開発を専門とするエンジニアです。AI技術を活用し、超高速・使いやすく・安全なソリューションを提供します。",
  location: "Tokyo, Japan",
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
    title: "CalculatorApp_ai_challenge",
    description: "AIを活用した電卓アプリのチャレンジプロジェクト",
    longDescription: "A calculator app project created as part of an AI challenge, focusing on smart calculation features and user experience.",
    techStack: ["React Native", "JavaScript"],
    githubUrl: "https://github.com/hafljin/CalculatorApp_ai_challenge",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  },
  {
    id: "2",
    title: "NoteBook_ai_challenge",
    description: "AIを活用したノートアプリのチャレンジプロジェクト",
    longDescription: "A notebook app project created as part of an AI challenge, featuring smart note organization and search.",
    techStack: ["React Native", "JavaScript"],
    githubUrl: "https://github.com/hafljin/NoteBook_ai_challenge",
    imageUrl: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  },
  {
    id: "3",
    title: "tmeFlex_ai_challenge",
    description: "AIを活用した時間管理アプリのチャレンジプロジェクト",
    longDescription: "A time management app project created as part of an AI challenge, focusing on flexible scheduling and productivity.",
    techStack: ["React Native", "JavaScript"],
    githubUrl: "https://github.com/hafljin/tmeFlex_ai_challenge",
    imageUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  },
  {
    id: "4",
    title: "todoapp_ai_challenge",
    description: "AIを活用したToDoアプリのチャレンジプロジェクト",
    longDescription: "A todo app project created as part of an AI challenge, featuring smart task management and reminders.",
    techStack: ["React Native", "JavaScript"],
    githubUrl: "https://github.com/hafljin/todoapp_ai_challenge",
    imageUrl: "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  },
  {
    id: "5",
    title: "deep-focusing",
    description: "集中力向上のためのAIアプリ",
    longDescription: "An AI-powered app designed to help users improve focus and productivity.",
    techStack: ["React Native", "JavaScript"],
    githubUrl: "https://github.com/hafljin/deep-focusing",
    imageUrl: "https://images.pexels.com/photos/3183159/pexels-photo-3183159.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  }
];