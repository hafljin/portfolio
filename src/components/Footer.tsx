import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">Osawaru's Portfolio</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            Building the future with AI and innovative software solutions
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Osawaru's Portfolio</span>
            <span className="mx-2">•</span>
            <span>{new Date().getFullYear()}</span>
          </div>
          
          <div className="mt-4">
            <a href="https://github.com/hafljin" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">GitHub</a>
            <span className="mx-2">•</span>
            <a href="mailto:moneypro@gmail.com" className="underline hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;