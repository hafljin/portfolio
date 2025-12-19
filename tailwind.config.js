/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        business: {
          light: '#E3E3E3', // 柔らかい明るいグレー
          base: '#22304A', // 落ち着いた暗めの青
          blue: '#1B263B', // さらに暗い青
          navy: '#16213E', // ほぼ黒に近い青
          green: '#2C3333', // 落ち着いたグレー寄りの緑（変更なし）
          accent: '#274472', // アクセント用の青
        },
      },
    },
  },
  plugins: [],
};
