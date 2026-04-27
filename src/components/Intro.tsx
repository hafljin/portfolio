import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/mockData';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeYMecg-82GLXNKDyDIWxCIUalRRseSTT8vLRQ5lsuNL9C6-A/viewform?usp=dialog';

interface IntroProps {
  onNavigateTo?: (tabId: string) => void;
}

const Intro: React.FC<IntroProps> = ({ onNavigateTo }) => {
  const skillTags = profile.skills.slice(0, 8);

  return (
    <section className="bg-business.blue text-business.light h-full overflow-y-auto" aria-labelledby="intro-heading">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12 min-h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-center">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
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

              <motion.p
                className="text-sm sm:text-base text-business.light/70 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                ミツル
              </motion.p>

              <div className="flex-1">
                <motion.h1
                  id="intro-heading"
                  className="text-3xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-business.accent to-business.green bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Osawaruのポートフォリオ
                </motion.h1>
                <motion.h2
                  className="text-lg sm:text-xl text-business.accent mb-3 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {profile.title}
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg text-business.light/90 mb-4 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {profile.bio}
                </motion.p>

                <motion.div
                  className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  {skillTags.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 bg-business.accent/15 text-business.accent rounded-full text-xs sm:text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex items-center justify-center gap-2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-business.accent" />
                  <span className="text-sm sm:text-base text-business.light">{profile.location}</span>
                </motion.div>

                <motion.div
                  className="flex gap-4 justify-center mb-6"
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
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/mic-nem-468b79312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 text-business.accent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 text-business.accent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="お問い合わせ"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  {onNavigateTo && (
                    <>
                      <motion.button
                        onClick={() => onNavigateTo('services')}
                        className="px-6 py-3 bg-business.accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        作れるものを見る
                      </motion.button>
                      <motion.button
                        onClick={() => onNavigateTo('contact')}
                        className="px-6 py-3 bg-business.green text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        お問い合わせ
                      </motion.button>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
