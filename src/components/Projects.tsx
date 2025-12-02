import React, { useState, useEffect } from 'react';
import { projects as initialProjects } from '../data/mockData';
import { Project, Comment } from '../types';
import ProjectCard from './ProjectCard';

const LOCAL_STORAGE_KEY = 'portfolio_projects_v1';

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
    <section className="py-20 bg-business.base text-business.green">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            プロジェクト一覧
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI・モバイル・ソフトウェア開発の最新事例をご紹介します。
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onLike={handleLike}
              onComment={handleComment}
            />
          ))}
        </div>

        {/* Mock Data Notice */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Developer Note:</strong> All project interactions (likes, comments) are stored locally only. 
              This is a static portfolio site with no backend integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;