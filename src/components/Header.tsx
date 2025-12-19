import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/mockData';

const Header: React.FC = () => {
  return (
    <header className="bg-business.blue text-business.light">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-48 h-48 rounded-full border-4 border-business.accent/30 shadow-2xl object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-business.accent to-business.green bg-clip-text text-transparent">
              <span className="text-business.accent">Osawaruのポートフォリオ</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-business.accent mb-6 font-medium">
              <span className="text-business.accent">{profile.title}</span>
            </h2>
            <p className="text-lg text-business.light/90 mb-8 leading-relaxed max-w-2xl">
              <span className="text-business.light">{profile.bio}</span>
            </p>
            
            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <MapPin className="w-5 h-5 text-business.accent" />
              <span className="text-business.light">{profile.location}</span>
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