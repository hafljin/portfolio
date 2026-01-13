import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/mockData';

const Header: React.FC = () => {

  return (
    <header className="bg-business.blue text-business.light h-full overflow-y-auto">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12 min-h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-center">
            {/* プロフィール情報 */}
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Avatar */}
              <motion.div 
                className="flex-shrink-0 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-business.accent/30 shadow-2xl object-cover"
                />
              </motion.div>
              
              {/* Name */}
              <motion.p 
                className="text-sm sm:text-base text-business.light/70 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <span className="text-business.light/70">ミツル</span>
              </motion.p>
              
              {/* Content */}
              <div className="flex-1">
                <motion.h1 
                  className="text-3xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-business.accent to-business.green bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-business.accent">Osawaruのポートフォリオ</span>
                </motion.h1>
                <motion.h2 
                  className="text-lg sm:text-xl text-business.accent mb-3 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-business.accent">{profile.title}</span>
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg text-business.light/90 mb-4 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="text-business.light">{profile.bio}</span>
                </motion.p>
                
                {/* Location */}
                <motion.div 
                  className="flex items-center justify-center gap-2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-business.accent" />
                  <span className="text-sm sm:text-base text-business.light">{profile.location}</span>
                </motion.div>
                
                {/* Social Links */}
                <motion.div 
                  className="flex gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.a
                    href="https://github.com/hafljin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 text-business.accent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/osawaru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 text-business.accent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeYMecg-82GLXNKDyDIWxCIUalRRseSTT8vLRQ5lsuNL9C6-A/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 text-business.accent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;