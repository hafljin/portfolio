import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, Code2, Zap } from 'lucide-react';
import { services } from '../data/mockData';

const serviceIcons = [Layout, Globe, Code2, Zap];

interface ServicesProps {
  onNavigateTo?: (tabId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigateTo }) => {
  return (
    <section className="bg-business.base text-business.light h-full overflow-y-auto py-6" aria-labelledby="services-heading">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="services-heading" className="text-2xl sm:text-3xl font-bold text-business.accent mb-2 sm:mb-3">
              作れるもの
            </h2>
            <p className="text-base sm:text-lg text-business.light/80 max-w-3xl mx-auto">
              お店の集客ページ、ホームページ、業務の効率化まで。ご要望に合わせてご対応します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <motion.div
                  key={service.id}
                  className="bg-business.navy rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-business.accent/20 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-business.accent" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-business.light">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-business.light/80 leading-relaxed mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {onNavigateTo && (
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => onNavigateTo('sample')}
                        className="px-3 py-1.5 text-sm bg-business.base text-business.accent rounded-lg font-medium hover:bg-business.accent/20 transition-colors"
                      >
                        サンプルを見る
                      </button>
                      <button
                        onClick={() => onNavigateTo('pricing')}
                        className="px-3 py-1.5 text-sm bg-business.accent text-white rounded-lg font-medium hover:bg-business.accent/90 transition-colors"
                      >
                        料金・お問い合わせ
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {onNavigateTo && (
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={() => onNavigateTo('contact')}
                className="px-6 py-3 bg-business.green text-white rounded-lg font-medium hover:bg-business.green/90 transition-colors"
              >
                お気軽にご相談ください
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
