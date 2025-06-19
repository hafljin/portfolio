// All interfaces are for static/mock data only - no backend integration
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
  videoUrl?: string;
  likes: number; // Mock data - stored locally only
  comments: Comment[]; // Mock data - not persisted
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: number;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  skills: string[];
  avatarUrl: string;
}