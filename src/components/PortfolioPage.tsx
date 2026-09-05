import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Intro from './Intro';
import Services from './Services';
import Projects from './Projects';
import Pricing from './Pricing';
import Contact from './Contact';

const PortfolioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: '自己紹介', component: <Intro onNavigateTo={setActiveTab} /> },
    { id: 'services', label: '作れるもの', component: <Services onNavigateTo={setActiveTab} /> },
    { id: 'sample', label: 'サンプル', component: <Projects onNavigateTo={setActiveTab} /> },
    { id: 'pricing', label: '料金目安', component: <Pricing onNavigateTo={setActiveTab} /> },
    { id: 'contact', label: '問い合わせ', component: <Contact /> },
  ];

  return (
    <div className="h-screen overflow-hidden bg-business.base flex flex-col">
      {/* トップナビゲーション */}
      <nav className="flex-shrink-0 bg-[#0f172a]/95 backdrop-blur-sm border-b border-blue-400/40 shadow-lg shadow-black/20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-4 py-3 sm:py-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-slate-200 hover:text-white'
                }`}
                aria-label={tab.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-lg border border-blue-300/50 bg-blue-600 shadow-md shadow-blue-900/40"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* コンテンツエリア */}
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 16, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="h-full absolute inset-0"
              >
                {tab.component}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioPage;
