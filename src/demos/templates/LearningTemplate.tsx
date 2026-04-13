import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Circle, ChevronRight } from 'lucide-react';
import type { DemoConfig } from '../demoConfig';
import { themeColors, defaultTheme } from '../themeColors';

const getTheme = (config: DemoConfig) =>
  config.theme ? themeColors[config.theme] : themeColors[defaultTheme];

const LearningTemplate: React.FC<{ config: DemoConfig }> = ({ config }) => {
  const theme = getTheme(config);
  const items = config.learningItems ?? [];
  const [selectedId, setSelectedId] = useState<string | null>(items[0]?.id ?? null);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const selected = items.find((i) => i.id === selectedId);

  const totalProgress = items.length > 0 ? (completedIds.size / items.length) * 100 : 0;

  const toggleComplete = (id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 flex-shrink-0 hidden lg:block">
        <div className="sticky top-0 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-12 h-12 rounded-xl ${theme.bg}/10 flex items-center justify-center`}>
              <BookOpen className={`w-6 h-6 ${theme.text}`} />
            </div>
            <div>
              <h1 className="font-bold text-slate-900">{config.title}</h1>
              <p className="text-sm text-slate-500">{config.catchcopy}</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-600">進捗</span>
              <span className="font-semibold text-slate-900">{Math.round(totalProgress)}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${theme.bg} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${totalProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <nav className="space-y-1">
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                  selectedId === item.id
                    ? `${theme.bg} text-white`
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                {completedIds.has(item.id) ? (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 flex-shrink-0 opacity-50" />
                )}
                <span className="flex-1 truncate text-sm font-medium">{item.title}</span>
                {selectedId === item.id && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
          {/* Mobile header + dropdown */}
          <div className="lg:hidden mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg ${theme.bg}/10 flex items-center justify-center`}>
                <BookOpen className={`w-5 h-5 ${theme.text}`} />
              </div>
              <div>
                <h1 className="font-bold text-slate-900">{config.title}</h1>
                <p className="text-xs text-slate-500">{config.catchcopy}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${theme.bg} rounded-full transition-all`}
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-slate-600 w-10">
                {Math.round(totalProgress)}%
              </span>
            </div>
            <select
              value={selectedId ?? ''}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white focus:border-indigo-500 focus:outline-none"
            >
              {items.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          {selected ? (
            <motion.div
              key={selected.id}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">{selected.title}</h2>
                <button
                  onClick={() => toggleComplete(selected.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    completedIds.has(selected.id)
                      ? 'bg-green-100 text-green-700'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {completedIds.has(selected.id) ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      完了
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4" />
                      完了にする
                    </>
                  )}
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {selected.content}
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center text-slate-500">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <p>左のメニューからコンテンツを選択してください</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LearningTemplate;
