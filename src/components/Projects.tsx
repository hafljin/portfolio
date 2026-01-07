import React, { useState, useEffect } from 'react';
import { projects as initialProjects } from '../data/mockData';
import { Project, Comment } from '../types';
import ProjectCard from './ProjectCard';

const LOCAL_STORAGE_KEY = 'portfolio_projects_v2';

const Projects: React.FC = () => {
  // localStorageから初期値を取得
  const getInitialProjects = () => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialProjects;
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
          <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-business.light mb-2 sm:mb-3">
            <span className="text-business.accent">プロジェクト一覧</span>
          </h2>
          <p className="text-base sm:text-lg text-business.light/80 max-w-3xl mx-auto">
            <span className="text-business.light">開発の事例をご紹介します。</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onLike={handleLike}
              onComment={handleComment}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;