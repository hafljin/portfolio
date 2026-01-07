import React from 'react';
import { Code2, Brain, Smartphone, Database } from 'lucide-react';
import { profile } from '../data/mockData';

const About: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "言語・フレームワーク",
      skills: profile.skills.slice(0, 4)
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI・機械学習",
      skills: profile.skills.slice(4, 7)
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "モバイル・バックエンド",
      skills: profile.skills.slice(7, 10)
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "ツール・インフラ",
      skills: profile.skills.slice(10)
    }
  ];

  return (
    <section className="bg-business.base text-business.light h-full flex items-center overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-business.light mb-2 sm:mb-3">
            <span className="text-business.light">私について</span>
          </h2>
          <p className="text-base sm:text-lg text-business.light/80 max-w-3xl mx-auto">
            <span className="text-business.light">業界特化のLPやWEBサイト・WEB開発を得意とし、AI活用の自動化も可能です。<br />迅速で且つ、問題解決に寄与する実装に自信があります。</span>
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-business.navy rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                  <span
                    key={skillIndex}
                    className="px-2 sm:px-3 py-1 bg-business.base text-business.accent rounded-full text-xs sm:text-sm font-medium hover:bg-business.accent hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-business.accent mb-1 sm:mb-2">6+</div>
            <div className="text-sm sm:text-base text-business.light">注目プロジェクト</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-business.green mb-1 sm:mb-2">3+</div>
            <div className="text-sm sm:text-base text-business.light">経験年数</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-business.accent mb-1 sm:mb-2">12+</div>
            <div className="text-sm sm:text-base text-business.light">技術スタック</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;