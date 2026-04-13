import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectCategories } from '../data/mockData';
import { Project, Comment } from '../types';
import ProjectCard from './ProjectCard';

const LOCAL_STORAGE_KEY = 'portfolio_project_overrides_v4';

interface ProjectOverrides {
  [projectId: string]: { likes: number; comments: Comment[] };
}

interface ProjectsProps {
  onNavigateTo?: (tabId: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigateTo }) => {
  const [overrides, setOverrides] = useState<ProjectOverrides>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(overrides));
  }, [overrides]);

  const mergeProject = (project: Project): Project => {
    const o = overrides[project.id];
    if (!o) return project;
    return { ...project, likes: o.likes, comments: o.comments };
  };

  const handleLike = (projectId: string, liked: boolean) => {
    setOverrides(prev => {
      const current = prev[projectId];
      const baseLikes = current?.likes ?? 0;
      const newLikes = liked ? baseLikes + 1 : Math.max(0, baseLikes - 1);
      return {
        ...prev,
        [projectId]: {
          likes: newLikes,
          comments: current?.comments ?? []
        }
      };
    });
  };

  const handleComment = (projectId: string, newComment: Omit<Comment, 'id' | 'timestamp'>) => {
    const comment: Comment = {
      id: Date.now().toString(),
      ...newComment,
      timestamp: Date.now()
    };

    setOverrides(prev => {
      const current = prev[projectId];
      const comments = [...(current?.comments ?? []), comment];
      return {
        ...prev,
        [projectId]: {
          likes: current?.likes ?? 0,
          comments
        }
      };
    });
  };

  return (
    <section className="bg-business.base text-business.light h-full overflow-y-auto py-6">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-business.accent mb-2 sm:mb-3">
              制作サンプル
            </h2>
            <p className="text-base sm:text-lg text-business.light/80 max-w-3xl mx-auto">
              LP・HP・Webアプリ・学習サイトなど、ジャンル別の制作事例です。実案件を想定したオリジナルのデモをご覧いただけます。「こんなものが作れるなら相談したい」と思っていただけたら幸いです。
            </p>
          </motion.div>

          {projectCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className="mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <div className="mb-4 sm:mb-5">
                <h3 className="text-lg sm:text-xl font-bold text-business.accent">
                  {category.title}
                </h3>
                <p className="text-sm text-business.light/70 mt-0.5 max-w-2xl">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                {category.projects.map((project, index) => {
                  const merged = mergeProject(project);
                  return (
                    <motion.div
                      key={merged.id}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.03,
                        ease: 'easeOut'
                      }}
                    >
                      <ProjectCard
                        project={merged}
                        onLike={handleLike}
                        onComment={handleComment}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {onNavigateTo && (
            <motion.div
              className="text-center mt-8 sm:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => onNavigateTo('pricing')}
                className="px-6 py-3 bg-business.accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity mr-2"
              >
                料金を見る
              </button>
              <button
                onClick={() => onNavigateTo('contact')}
                className="px-6 py-3 bg-business.green text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                お問い合わせ
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
