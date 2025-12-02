/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        business: {
          light: '#E6F0E6', // やや緑がかった明るいグレー
          base: '#1A2421', // 深緑に近い黒
          blue: '#2C3E3A', // 深緑系ブルー
          navy: '#16211C', // ほぼ黒に近い深緑
          green: '#234D32', // 落ち着いた深緑
          accent: '#3A5A40', // アクセント深緑
        },
      },
    },
  },
  plugins: [],
};
