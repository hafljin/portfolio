import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project, Comment } from '../types';

interface ProjectCardProps {
  project: Project;
  onLike: (projectId: string, liked: boolean) => void;
  onComment: (projectId: string, comment: Omit<Comment, 'id' | 'timestamp'>) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

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
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 px-2 py-1.5 bg-business.accent text-white rounded hover:bg-business.accent/80 transition-colors text-xs font-medium flex-1"
          >
            <Github className="w-3 h-3" />
            <span className="hidden sm:inline">コード</span>
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-2 py-1.5 bg-business.green text-white rounded hover:bg-business.green/80 transition-colors text-xs font-medium flex-1"
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