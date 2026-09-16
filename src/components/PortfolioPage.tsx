import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Intro from './Intro';
import Services from './Services';
import Projects from './Projects';
import Pricing from './Pricing';
import Contact from './Contact';

const PortfolioPage: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => (location.state as { activeTab?: string } | null)?.activeTab ?? 'intro');

  const tabs = [
    { id: 'intro', label: 'TOP', component: <Intro onNavigateTo={setActiveTab} /> },
    { id: 'services', label: 'サービス', component: <Services onNavigateTo={setActiveTab} /> },
    { id: 'sample', label: 'サンプル', component: <Projects onNavigateTo={setActiveTab} /> },
    { id: 'pricing', label: '料金・水準', component: <Pricing onNavigateTo={setActiveTab} /> },
    { id: 'contact', label: '問い合わせ', component: <Contact /> },
  ];

  return (
    <div className="h-screen overflow-hidden bg-[#f6f3ed] flex flex-col">
      {/* トップナビゲーション */}
      <nav className="flex-shrink-0 bg-[#1c1c1a]/95 backdrop-blur-sm border-b border-[#d9d0bd]/15 shadow-lg shadow-black/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
            <button onClick={() => setActiveTab('intro')} className="hidden sm:flex items-baseline gap-2 text-left" aria-label="トップへ戻る">
              <span className="font-display text-base tracking-[0.16em] text-[#f5f1e8]">OSAWARU</span>
              <span className="text-[9px] tracking-[0.18em] text-[#d3b985]">PORTFOLIO</span>
            </button>
            <div className="flex items-center justify-center gap-1 sm:gap-3 mx-auto sm:mx-0">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-2.5 sm:px-4 py-2 rounded-sm text-xs sm:text-sm font-medium transition-colors duration-200 ${
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
                    className="absolute inset-0 rounded-sm border border-[#d6bc83]/50 bg-[#3a3934] shadow-md shadow-black/30"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </motion.button>
            ))}
            </div>
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
