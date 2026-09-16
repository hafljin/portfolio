import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="bg-[#fbfaf7] border border-[#b5965a]/35 overflow-hidden group h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: '0 18px 36px rgba(64, 52, 30, 0.14)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            poster={project.imageUrl}
            className="h-24 w-full object-cover sm:h-28"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-44 sm:h-52 object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5 }}
          />
        )}
        {project.isDemo && (
          <span className="absolute left-3 top-3 bg-[#252525]/90 px-2.5 py-1 text-[10px] tracking-[0.08em] font-semibold text-white">
            {project.demoUrl?.startsWith('/') ? '匿名データによる機能デモ' : '制作サンプル'}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-[#252525] mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-xs sm:text-sm leading-6 text-stone-600 mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 2).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#efe9dd] text-[#725d34] text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 2 && (
            <span className="px-2 py-1 bg-[#efe9dd] text-[#725d34] text-[11px] font-medium">
              +{project.techStack.length - 2}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto">
          {project.demoUrl && (
            project.demoUrl.startsWith('/') ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={project.demoUrl}
                  state={{ returnTab: 'sample' }}
                  className="flex items-center justify-center gap-1 px-3 py-2 bg-[#252525] text-white rounded-sm text-sm font-medium hover:bg-[#45433e] transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>機能デモを見る</span>
                </Link>
              </motion.div>
            ) : (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 px-3 py-2 bg-[#252525] text-white rounded-sm text-sm font-medium hover:bg-[#45433e] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink className="w-3 h-3" />
                <span>公開LPを見る</span>
              </motion.a>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
