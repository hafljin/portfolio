import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects as initialProjects } from '../data/mockData';
import { Project, Comment } from '../types';
import ProjectCard from './ProjectCard';

const LOCAL_STORAGE_KEY = 'portfolio_projects_v3';

const Projects: React.FC = () => {
  // localStorageから初期値を取得（画像URLを更新するため、一時的に常にinitialProjectsを使用）
  const getInitialProjects = () => {
    // 画像更新のために、一旦localStorageを無視して最新のデータを使用
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // 画像URLを最新のものに更新
      return parsed.map((storedProject: Project, index: number) => ({
        ...storedProject,
        imageUrl: initialProjects[index]?.imageUrl || storedProject.imageUrl,
      }));
    }
    return initialProjects;
  };

  const [projects, setProjects] = useState<Project[]>(getInitialProjects);

  // projectsが変わるたびにlocalStorageへ保存
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  // いいねのトグル機能
  const handleLike = (projectId: string, liked: boolean) => {
    setProjects(currentProjects =>
      currentProjects.map(project =>
        project.id === projectId
          ? { ...project, likes: liked ? project.likes + 1 : Math.max(0, project.likes - 1) }
          : project
      )
    );
  };

  // コメントの永続化
  const handleComment = (projectId: string, newComment: Omit<Comment, 'id' | 'timestamp'>) => {
    const comment: Comment = {
      id: Date.now().toString(),
      ...newComment,
      timestamp: Date.now()
    };

    setProjects(currentProjects =>
      currentProjects.map(project =>
        project.id === projectId
          ? { ...project, comments: [...project.comments, comment] }
          : project
      )
    );
  };

  return (
    <section className="bg-business.base text-business.light h-full flex items-center overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-business.light mb-2 sm:mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-business.accent">プロジェクト一覧</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-business.light/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-business.light">開発の事例をご紹介します。</span>
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.05,
                ease: 'easeOut'
              }}
            >
              <ProjectCard
                project={project}
                onLike={handleLike}
                onComment={handleComment}
              />
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;