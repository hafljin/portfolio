import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'ホーム', component: <Header /> },
    { id: 'about', label: '私について', component: <About /> },
    { id: 'projects', label: 'プロジェクト', component: <Projects /> },
  ];

  return (
    <div className="h-screen overflow-hidden bg-business.base flex flex-col">
      {/* トップナビゲーション */}
      <nav className="flex-shrink-0 bg-business.blue/95 backdrop-blur-sm border-b border-business.accent/20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-4 py-3 sm:py-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-md border-2 border-business.accent'
                    : 'text-gray-900 hover:bg-business.accent/20 hover:text-business.accent'
                }`}
                aria-label={tab.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
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
}

export default App;