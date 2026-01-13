import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import { Project, Comment } from '../types';

interface ProjectCardProps {
  project: Project;
  onLike: (projectId: string, liked: boolean) => void;
  onComment: (projectId: string, comment: Omit<Comment, 'id' | 'timestamp'>) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onLike }) => {
  const LIKE_KEY = `portfolio_like_${project.id}`;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const liked = localStorage.getItem(LIKE_KEY) === '1';
    setIsLiked(liked);
  }, [LIKE_KEY]);

  const handleLike = () => {
    const nextLiked = !isLiked;
    setIsLiked(nextLiked);
    localStorage.setItem(LIKE_KEY, nextLiked ? '1' : '0');
    onLike(project.id, nextLiked);
  };

  return (
    <motion.div 
      className="bg-business.navy rounded-lg shadow-md overflow-hidden group h-full flex flex-col"
      whileHover={{ y: -5, shadow: '0 10px 25px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-24 sm:h-28 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base font-bold text-business.accent mb-1.5 line-clamp-1">
          {project.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-business.light/80 mb-2 sm:mb-3 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
          {project.techStack.slice(0, 2).map((tech, index) => (
            <span
              key={index}
              className="px-1.5 py-0.5 bg-business.base text-business.accent rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 2 && (
            <span className="px-1.5 py-0.5 bg-business.base/50 text-business.accent rounded text-xs font-medium">
              +{project.techStack.length - 2}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1.5 sm:gap-2 mt-auto">
          <motion.button
            onClick={handleLike}
            className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium flex-1 ${
              isLiked
                ? 'bg-business.accent text-gray-900'
                : 'bg-business.base text-business.accent border border-business.accent'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={isLiked ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart className={`w-3 h-3 ${isLiked ? 'fill-current' : ''}`} />
            </motion.div>
            <span className="hidden sm:inline">{project.likes}</span>
          </motion.button>
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-2 py-1.5 bg-white text-business.green rounded border border-business.green text-xs font-medium flex-1"
              whileHover={{ scale: 1.05, backgroundColor: '#4A90A4', color: 'white' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink className="w-3 h-3" />
              <span className="hidden sm:inline">デモ</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;