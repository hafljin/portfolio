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
    <section className="py-20 bg-business.base text-business.light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-business.light mb-4">
            <span className="text-business.light">私について</span>
          </h2>
          <p className="text-xl text-business.light/80 max-w-3xl mx-auto">
            <span className="text-business.light">AIを活用したアプリ開発や自動化を得意とします。<br />革新的で使いやすい体験を提供するアプリケーションの設計・実装に自信があります。</span>
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-business.navy rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-business.accent/20 rounded-lg">
                  <div className="p-2 bg-business.accent text-white rounded-lg">{category.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-business.light">
                  <span className="text-business.light">{category.title}</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-business.base text-business.accent rounded-full text-sm font-medium hover:bg-business.accent hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-business.accent mb-2">6+</div>
            <div className="text-business.light">注目プロジェクト</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-business.green mb-2">3+</div>
            <div className="text-business.light">経験年数</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-business.accent mb-2">12+</div>
            <div className="text-business.light">技術スタック</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;