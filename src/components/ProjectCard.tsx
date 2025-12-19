import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Github, ExternalLink, Code } from 'lucide-react';
import { Project, Comment } from '../types';

interface ProjectCardProps {
  project: Project;
  onLike: (projectId: string, liked: boolean) => void;
  onComment: (projectId: string, comment: Omit<Comment, 'id' | 'timestamp'>) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onLike, onComment }) => {
  const LIKE_KEY = `portfolio_like_${project.id}`;
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState({ author: '', text: '' });
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

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.text.trim()) {
      onComment(project.id, newComment);
      setNewComment({ author: '', text: '' });
    }
  };

  return (
    <div className="bg-business.navy rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
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
          <span className="text-business.accent">{project.title}</span>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          <span className="text-business.light">{project.description}</span>
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-business.base text-business.green rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
              <span className="text-business.green">+{project.techStack.length - 3}件以上</span>
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
              className="flex items-center gap-2 px-3 py-2 bg-business.navy text-business.light rounded-lg hover:bg-business.base transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              コード
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-business.green text-business.light rounded-lg hover:bg-business.base transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                デモ
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
                  ? 'bg-business.base text-business.green'
                  : 'bg-business.light text-business.navy hover:bg-business.base hover:text-business.green'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{project.likes}</span>
            </button>
            
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-2 px-3 py-2 bg-business.light text-business.navy rounded-lg hover:bg-business.base hover:text-business.green transition-all"
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
                  placeholder="お名前"
                  value={newComment.author}
                  onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <textarea
                  placeholder="コメントを追加..."
                  value={newComment.text}
                  onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  rows={3}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  コメント投稿
                </button>
              </div>
            </form>

            {/* Comments List */}
            {project.comments.length > 0 && (
              <div className="space-y-3">
                {project.comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-business.navy text-sm">{comment.author}</span>
                      <span className="text-business.green text-xs">
                        {new Date(comment.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-business.navy text-sm">{comment.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Mock Data Warning Comment */}
            {project.comments.length === 0 && (
              <p className="text-business.green text-sm italic text-center py-4">
                コメントはまだありません。最初のコメントを投稿しませんか？
                <span className="block text-xs mt-1">
                  （注意：コメントはローカル保存のみで永続化されません）
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