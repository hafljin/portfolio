import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/mockData';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeYMecg-82GLXNKDyDIWxCIUalRRseSTT8vLRQ5lsuNL9C6-A/viewform?usp=dialog';

interface IntroProps {
  onNavigateTo?: (tabId: string) => void;
}

const Intro: React.FC<IntroProps> = ({ onNavigateTo }) => {
  const focusAreas = [
    { label: 'LP・Web制作', detail: '伝わる構成と、迷わない導線' },
    { label: 'AI自動化', detail: '判断と確認を残した業務設計' },
    { label: '業務効率化', detail: '日々の手作業を、続く仕組みに' },
  ];

  return (
    <section className="bg-[#f6f3ed] text-[#252525] h-full min-h-0 overflow-y-auto" aria-labelledby="intro-heading">
      <div className="top-intro-shell relative isolate w-full mx-auto px-5 sm:px-8 lg:px-12 py-7 sm:py-10 min-h-full flex items-center justify-center overflow-hidden">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex justify-center">
            <motion.div
              className="w-full flex flex-col items-center text-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                className="top-avatar flex-shrink-0 mb-4 sm:mb-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.2 },
                  scale: { duration: 0.5, delay: 0.2 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
                }}
              >
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#d7c49c] p-1 bg-[#f6f3ed] shadow-xl shadow-stone-900/15 object-cover"
                />
              </motion.div>

              <motion.p
                className="font-display text-[10px] sm:text-xs tracking-[0.28em] text-[#827456] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                ENGINEER / TOKYO
              </motion.p>

              <div className="w-full flex-1 flex flex-col items-center">
                <motion.h1
                  id="intro-heading"
                  className="w-full max-w-4xl mx-auto text-center font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] text-[#252525] mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="block -translate-x-3 sm:-translate-x-8">伝わるLPと、</span>
                  <span className="block translate-x-3 sm:translate-x-8">回る業務を。</span>
                </motion.h1>
                <motion.h2
                  className="w-full text-center text-[11px] sm:text-sm tracking-[0.16em] text-[#9a7d45] mb-4 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {profile.title}
                </motion.h2>
                <motion.p
                  className="w-full text-center text-sm sm:text-base text-stone-600 mb-7 leading-7 sm:leading-8 max-w-xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {profile.bio}
                </motion.p>

                <motion.div
                  className="grid w-full max-w-4xl grid-cols-3 border-y border-[#b5965a]/35 mb-6 bg-[#f6f3ed]/35 backdrop-blur-[2px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  {focusAreas.map((area, i) => (
                    <div key={area.label} className={`px-2 py-3 sm:px-5 sm:py-4 text-left ${i !== 0 ? 'border-l border-[#b5965a]/35' : ''}`}>
                      <p className="font-display text-sm sm:text-lg text-[#252525] mb-1">{area.label}</p>
                      <p className="text-[11px] sm:text-sm leading-4 sm:leading-5 text-stone-500">{area.detail}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.58 }}
                >
                  <span className="text-xs sm:text-sm text-stone-500">要件整理から設計・実装・公開まで対応</span>
                  <span className="hidden sm:block h-4 w-px bg-[#b5965a]/50" />
                  <span className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-500"><MapPin className="w-4 h-4 text-[#9a7d45]" />{profile.location}</span>
                </motion.div>

                <motion.div
                  className="top-social flex gap-3 justify-center mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.a
                    href="https://github.com/hafljin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-[#b5965a]/40 hover:bg-[#eae2d3] rounded-full transition-all duration-200 text-[#6d5934]"
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
                    className="p-2.5 border border-[#b5965a]/40 hover:bg-[#eae2d3] rounded-full transition-all duration-200 text-[#6d5934]"
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
                    className="p-2.5 border border-[#b5965a]/40 hover:bg-[#eae2d3] rounded-full transition-all duration-200 text-[#6d5934]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="お問い合わせ"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  {onNavigateTo && (
                    <>
                      <motion.button
                        onClick={() => onNavigateTo('services')}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#252525] text-white rounded-sm font-medium hover:bg-[#45433e] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        サービスを見る <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => onNavigateTo('contact')}
                        className="px-5 py-2.5 border border-[#8d7343] text-[#5d4a29] rounded-sm font-medium hover:bg-[#eae2d3] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        お問い合わせ
                      </motion.button>
                    </>
                  )}
                </motion.div>
                <motion.button
                  type="button"
                  className="mt-6 hidden sm:flex flex-col items-center gap-1 text-[10px] tracking-[0.16em] text-stone-500 hover:text-[#745d31]"
                  onClick={() => onNavigateTo?.('services')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  SCROLL TO EXPLORE <ArrowDown className="w-4 h-4 animate-bounce-subtle" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
