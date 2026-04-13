import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface DemoLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DemoLayout: React.FC<DemoLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            ポートフォリオに戻る
          </Link>
          {title && (
            <span className="text-sm font-medium text-slate-500 truncate max-w-[200px]">
              {title}
            </span>
          )}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DemoLayout;
