import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/mockData';

const Header: React.FC = () => {
  return (
    <header className="bg-business.blue text-business.light h-full flex items-center overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-business.accent/30 shadow-2xl object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-business.accent to-business.green bg-clip-text text-transparent">
              <span className="text-business.accent">Osawaruのポートフォリオ</span>
            </h1>
            <h2 className="text-lg sm:text-xl text-business.accent mb-3 font-medium">
              <span className="text-business.accent">{profile.title}</span>
            </h2>
            <p className="text-base sm:text-lg text-business.light/90 mb-6 leading-relaxed max-w-2xl">
              <span className="text-business.light">{profile.bio}</span>
            </p>
            
            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-business.accent" />
              <span className="text-sm sm:text-base text-business.light">{profile.location}</span>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/hafljin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 hover:scale-110 text-business.accent"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/osawaru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 hover:scale-110 text-business.accent"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:moneypro@gmail.com"
                className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 hover:scale-110 text-business.accent"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;