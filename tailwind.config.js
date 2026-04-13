/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-rose-500', 'bg-emerald-600', 'bg-stone-600', 'bg-indigo-600', 'bg-amber-500', 'bg-teal-600', 'bg-slate-700',
    'bg-rose-500/10', 'bg-emerald-600/10', 'bg-stone-600/10', 'bg-indigo-600/10', 'bg-amber-500/10', 'bg-teal-600/10', 'bg-slate-700/10',
    'text-rose-600', 'text-emerald-600', 'text-stone-600', 'text-indigo-600', 'text-amber-600', 'text-teal-600', 'text-slate-700',
    'hover:bg-rose-600', 'hover:bg-emerald-700', 'hover:bg-stone-700', 'hover:bg-indigo-700', 'hover:bg-amber-600', 'hover:bg-teal-700', 'hover:bg-slate-800'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        business: {
          light: '#1e293b', // 信頼感のあるダークスレート（テキスト）
          base: '#f1f5f9', // やわらかいライトグレー（メイン背景）
          blue: '#e2e8f0', // 薄いスレート（セクション背景）
          navy: '#ffffff', // 白（カード・パネル背景）
          green: '#047857', // 落ち着いたエメラルド（CTA・信頼）
          accent: '#1e40af', // ネイビーブルー（メインアクセント・信頼）
        },
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 2s infinite',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
