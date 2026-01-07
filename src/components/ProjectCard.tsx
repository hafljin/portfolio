import React, { useState, useEffect } from 'react';
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
    <div className="bg-business.navy rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group h-full flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform duration-300"
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
          <button
            onClick={handleLike}
            className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded transition-all text-xs font-medium flex-1 ${
              isLiked
                ? 'bg-business.accent text-gray-900'
                : 'bg-business.base text-business.accent hover:bg-business.accent hover:text-gray-900 border border-business.accent'
            }`}
          >
            <Heart className={`w-3 h-3 ${isLiked ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{project.likes}</span>
          </button>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-2 py-1.5 bg-white text-business.green rounded hover:bg-business.green hover:text-gray-900 border border-business.green transition-colors text-xs font-medium flex-1"
            >
              <ExternalLink className="w-3 h-3" />
              <span className="hidden sm:inline">デモ</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;