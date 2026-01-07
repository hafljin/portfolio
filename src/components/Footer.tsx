import React from 'react';
import { Heart, Code2 } from 'lucide-react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-business.blue text-business.light h-full flex items-center overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-business.accent" />
            <span className="text-xl font-bold text-business.accent">Osawaruのポートフォリオ</span>
          </div>
          <p className="text-business.light/80 mb-6">
            <span className="text-business.light">AIと革新的なソフトウェアで未来を創る</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-business.light/70">
            <span className="text-business.accent">制作:</span>
            <Heart className="w-4 h-4 text-business.accent fill-current" />
            <span className="text-business.accent">Osawaruのポートフォリオ</span>
            <span className="mx-2 text-business.accent">•</span>
            <span className="text-business.accent">{new Date().getFullYear()}</span>
          </div>
          <div className="mt-4">
            <a href="https://github.com/hafljin" target="_blank" rel="noopener noreferrer" className="underline hover:text-business.accent text-business.accent">GitHub</a>
            <span className="mx-2">•</span>
            <a href="mailto:mitsuru.donrichy@gmail.com" className="underline hover:text-business.accent text-business.accent">お問い合わせ</a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;