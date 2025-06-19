import React, { useState } from 'react';
import { projects as initialProjects } from '../data/mockData';
import { Project, Comment } from '../types';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  // Local state for projects - all data is mock and not persisted to any backend
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  // Mock like functionality - local only, not persisted
  const handleLike = (projectId: string) => {
    setProjects(currentProjects =>
      currentProjects.map(project =>
        project.id === projectId
          ? { ...project, likes: project.likes + 1 }
          : project
      )
    );
    // Note: This is mock functionality only - likes are not saved to any backend
  };

  // Mock comment functionality - local only, not persisted
  const handleComment = (projectId: string, newComment: Omit<Comment, 'id' | 'timestamp'>) => {
    const comment: Comment = {
      id: Date.now().toString(), // Simple ID generation for mock data
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
    // Note: This is mock functionality only - comments are not saved to any backend
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest work in AI development, mobile applications, and innovative software solutions.
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