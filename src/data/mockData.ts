import { Project, Profile } from '../types';
import avatarImage from '../assets/myphoto.png';

// This is static mock data for display purposes only
// No backend or API integration - all data is local
export const profile: Profile = {
  name: "Osawaru",
  title: "スピード重視で問題解決を行うエンジニア",
  bio: "スピードと品質を両立したLP制作やWEB開発を得意とします。迅速な納品と効果的なデザインで、お客様のビジネス成長をサポートします。",
  location: "Tokyo, Japan",
  skills: [
    "Kotlin", "React", "TypeScript", "Python", 
    "AI自動化", "ChatGPT API", "業務効率化", 
    "Node.js", "PostgreSQL",
    "Docker", "AWS", "Git"
  ],
  avatarUrl: avatarImage
};

// Mock project data - replace with real projects as needed
// All interactions (likes, comments) are local-only and not persistent
export const projects: Project[] = [
  {
    id: "1",
    title: "美容室のLP",
    description: "美容室向けのランディングページ。モダンなデザインとユーザビリティを重視したLP制作",
    longDescription: "美容室向けのランディングページ。モダンなデザインとユーザビリティを重視したLP制作。レスポンシブ対応で、様々なデバイスで快適に閲覧できます。",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hafljin/CalculatorApp_ai_challenge",
    demoUrl: "https://salonlp.vercel.app/",
    imageUrl: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  },
  {
    id: "2",
    title: "焼き鳥や横LP",
    description: "焼き鳥店向けのスワイプストーリー形式のランディングページ",
    longDescription: "焼き鳥店向けのスワイプストーリー形式のランディングページ。モバイルファーストのデザインで、直感的な操作感を実現しています。",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hafljin/NoteBook_ai_challenge",
    demoUrl: "https://yakitori-swipe-story.vercel.app/",
    imageUrl: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  },
  {
    id: "3",
    title: "コード道場プロトタイプMVP",
    description: "モバイル開発者向けの学習サイトのプロトタイプ。MVPとして機能を実装",
    longDescription: "モバイル開発者向けの学習サイトのプロトタイプ。MVPとして機能を実装。学習コンテンツの管理と表示機能を提供します。",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hafljin/tmeFlex_ai_challenge",
    demoUrl: "https://mobile-developers-road.vercel.app/",
    imageUrl: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  },
  {
    id: "4",
    title: "占いアプリMVP",
    description: "占い機能を提供するWebアプリのMVP。星に問い合わせる機能を実装",
    longDescription: "占い機能を提供するWebアプリのMVP。星に問い合わせる機能を実装。ユーザーが簡単に占い結果を確認できるインターフェースを提供します。",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hafljin/todoapp_ai_challenge",
    demoUrl: "https://fortune-food.vercel.app/",
    imageUrl: "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  },
  {
    id: "5",
    title: "Kotlin基礎学習サイトMVP",
    description: "Kotlinの基礎を学ぶための学習サイトのMVP。段階的な学習コンテンツを提供",
    longDescription: "Kotlinの基礎を学ぶための学習サイトのMVP。段階的な学習コンテンツを提供。初心者から中級者まで対応したカリキュラムを実装しています。",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hafljin/deep-focusing",
    demoUrl: "https://ai-fullstack-lab.vercel.app/#/",
    imageUrl: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 0,
    comments: []
  }
];