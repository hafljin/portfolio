import React, { useState } from 'react';
import { Heart, MessageCircle, Github, ExternalLink, Code } from 'lucide-react';
import { Project, Comment } from '../types';

interface ProjectCardProps {
  project: Project;
  onLike: (projectId: string) => void;
  onComment: (projectId: string, comment: Omit<Comment, 'id' | 'timestamp'>) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onLike, onComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState({ author: '', text: '' });
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    // Mock local-only like functionality - not persisted to any backend
    setIsLiked(!isLiked);
    onLike(project.id);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.text.trim()) {
      // Mock local-only comment functionality - not persisted to any backend
      onComment(project.id, newComment);
      setNewComment({ author: '', text: '' });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
        </div>

        {/* Interaction Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isLiked
                  ? 'bg-red-50 text-red-600'
                  : 'bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{project.likes}</span>
            </button>
            
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">{project.comments.length}</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} className="mb-4">
              <div className="grid grid-cols-1 gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={newComment.author}
                  onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <textarea
                  placeholder="Add a comment..."
                  value={newComment.text}
                  onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  rows={3}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Post Comment
                </button>
              </div>
            </form>

            {/* Comments List */}
            {project.comments.length > 0 && (
              <div className="space-y-3">
                {project.comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900 text-sm">{comment.author}</span>
                      <span className="text-gray-500 text-xs">
                        {new Date(comment.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{comment.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Mock Data Warning Comment */}
            {project.comments.length === 0 && (
              <p className="text-gray-500 text-sm italic text-center py-4">
                No comments yet. Be the first to comment! 
                <span className="block text-xs mt-1">
                  (Note: Comments are stored locally only - not persisted)
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;