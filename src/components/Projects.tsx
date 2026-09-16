import React from 'react';
import { motion } from 'framer-motion';
import { projectCategories } from '../data/mockData';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  onNavigateTo?: (tabId: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigateTo }) => {
  return (
    <section className="bg-[#f6f3ed] text-[#252525] h-full overflow-y-auto py-8 sm:py-12">
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto">
          {projectCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className="mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: Math.min(catIndex * 0.05, 0.2) }}
            >
              <div className="text-center mb-9 sm:mb-12">
                <p className="font-display text-[10px] tracking-[0.28em] text-[#9a7d45] mb-3">SELECTED SAMPLES</p>
                <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#252525] mb-3">{category.title}</h2>
                <p className="max-w-2xl mx-auto text-sm sm:text-base leading-7 text-stone-600">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
                {category.projects.map((project, index) => {
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.4,
                        delay: Math.min(index * 0.03, 0.3),
                        ease: 'easeOut'
                      }}
                    >
                      <ProjectCard
                        project={project}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {onNavigateTo && (
            <motion.div
              className="text-center mt-10 sm:mt-12 border-t border-[#b5965a]/35 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => onNavigateTo('pricing')}
                className="px-6 py-3 bg-[#252525] text-white rounded-sm font-medium hover:bg-[#45433e] transition-colors mr-2"
              >
                料金・制作水準を見る
              </button>
              <button
                onClick={() => onNavigateTo('contact')}
                className="px-6 py-3 border border-[#8d7343] text-[#5d4a29] rounded-sm font-medium hover:bg-[#eae2d3] transition-colors"
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
