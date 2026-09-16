import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layout, Workflow } from 'lucide-react';
import { services } from '../data/mockData';

const serviceIcons = [Sparkles, Workflow, Layout];

interface ServicesProps {
  onNavigateTo?: (tabId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigateTo }) => {
  return (
    <section className="bg-[#f6f3ed] text-[#252525] h-full overflow-y-auto py-8 sm:py-12" aria-labelledby="services-heading">
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-[10px] tracking-[0.28em] text-[#9a7d45] mb-3">WHAT I BUILD</p>
            <h2 id="services-heading" className="font-display text-3xl sm:text-5xl font-semibold text-[#252525] mb-3">
              提供できること
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-7">
              ホームページ・LP制作と、AIを活用した業務効率化ツールの制作を承ります。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#b5965a]/35">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <motion.div
                  key={service.id}
                  className={`h-full bg-transparent p-6 sm:p-8 transition-colors hover:bg-[#eee8dc]/65 ${index !== 0 ? 'md:border-l border-[#b5965a]/35' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 border border-[#b5965a]/45 rounded-full flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#876d3e]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.18em] text-[#9a7d45] mb-2">0{index + 1}</p>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#252525]">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-stone-600 leading-7 mt-3">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {onNavigateTo && (
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={() => onNavigateTo('sample')}
                className="px-6 py-3 border border-[#8d7343] text-[#5d4a29] rounded-sm font-medium hover:bg-[#eae2d3] transition-colors"
              >
                サンプルを見る
              </button>
              <button
                onClick={() => onNavigateTo('pricing')}
                className="px-6 py-3 bg-[#252525] text-white rounded-sm font-medium hover:bg-[#45433e] transition-colors"
              >
                料金・お問い合わせ
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
