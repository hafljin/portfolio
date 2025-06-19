import React from 'react';
import { Code2, Brain, Smartphone, Database } from 'lucide-react';
import { profile } from '../data/mockData';

const About: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Languages & Frameworks",
      skills: profile.skills.slice(0, 4)
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      skills: profile.skills.slice(4, 7)
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile & Backend",
      skills: profile.skills.slice(7, 10)
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Tools & Infrastructure",
      skills: profile.skills.slice(10)
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Android engineer specializing in AI-driven app development. I excel at designing and implementing applications that leverage artificial intelligence to deliver innovative and user-friendly experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
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
            <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-600">Featured Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">12+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;