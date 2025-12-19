/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        business: {
          light: '#2C3E50', // 目に優しいダークグレー（テキスト用）
          base: '#DCE0E5', // 目に優しい暗めのグレー（背景用）
          blue: '#D4D8E0', // 目に優しい暗めのブルーグレー（背景用）
          navy: '#E5E7EB', // 目に優しい暗めのオフホワイト（カード背景用）
          green: '#4A90A4', // ソフトなティールグリーン（アクセント用）
          accent: '#5B8FA8', // 目に優しいブルーグレー（アクセント用）
        },
      },
    },
  },
  plugins: [],
};
