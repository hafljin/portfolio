import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Zap, Database, Server } from 'lucide-react';
import { profile } from '../data/mockData';

const CountUpNumber: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "言語・フレームワーク",
      skills: profile.skills.slice(0, 4)
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI自動化・効率化",
      skills: profile.skills.slice(4, 7)
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "バックエンド・データベース",
      skills: profile.skills.slice(7, 9)
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "ツール・インフラ",
      skills: profile.skills.slice(9)
    }
  ];

  return (
    <section className="bg-business.base text-business.light h-full flex items-center overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-business.light mb-2 sm:mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-business.light">私について</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-business.light/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-business.light">業界特化のLPやWEBサイト・WEB開発を得意とし、AIを活用した自動化も可能です。<br />迅速で且つ、問題解決に寄与する実装に自信があります。</span>
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-business.navy rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="p-1.5 sm:p-2 bg-business.accent/20 rounded-lg">
                  <div className="p-1.5 sm:p-2 bg-white text-business.accent rounded-lg">{category.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-business.light">
                  <span className="text-business.light">{category.title}</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-2 sm:px-3 py-1 bg-business.base text-business.accent rounded-full text-xs sm:text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(91, 143, 168, 1)', color: 'white' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl sm:text-4xl font-bold text-business.accent mb-1 sm:mb-2">
              <CountUpNumber end={6} />
            </div>
            <div className="text-sm sm:text-base text-business.light">注目プロジェクト</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl sm:text-4xl font-bold text-business.green mb-1 sm:mb-2">
              <CountUpNumber end={3} />
            </div>
            <div className="text-sm sm:text-base text-business.light">経験年数</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl sm:text-4xl font-bold text-business.accent mb-1 sm:mb-2">
              <CountUpNumber end={12} />
            </div>
            <div className="text-sm sm:text-base text-business.light">技術スタック</div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;