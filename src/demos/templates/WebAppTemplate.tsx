import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Package, MessageSquare, User, ChevronRight, Download } from 'lucide-react';
import type { DemoConfig } from '../demoConfig';
import { themeColors, defaultTheme } from '../themeColors';

const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

const getTheme = (config: DemoConfig) =>
  config.theme ? themeColors[config.theme] : themeColors[defaultTheme];

const WebAppTemplate: React.FC<{ config: DemoConfig }> = ({ config }) => {
  const type = config.webAppType || 'booking';
  if (type === 'booking') return <BookingDemo config={config} />;
  if (type === 'inventory') return <InventoryDemo config={config} />;
  if (type === 'inquiry') return <InquiryDemo config={config} />;
  if (type === 'member') return <MemberDemo config={config} />;
  return <BookingDemo config={config} />;
};

const BookingDemo: React.FC<{ config: DemoConfig }> = ({ config }) => {
  const theme = getTheme(config);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const padding = Array(firstDay).fill(null);
  const slots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-slate-900">{config.title}</h1>
          <p className="text-slate-600 text-sm mt-0.5">{config.catchcopy}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <h2 className="font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-slate-600" />
              {year}年 {month + 1}月
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-7 gap-2 text-center">
              {daysOfWeek.map((d) => (
                <div key={d} className="text-xs font-semibold text-slate-500 py-2">
                  {d}
                </div>
              ))}
              {padding.map((_, i) => (
                <div key={`p${i}`} />
              ))}
              {days.map((d) => {
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                const isSelected = selectedDate === dateStr;
                return (
                  <button
                    key={d}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`
                      py-3 rounded-xl text-sm font-medium transition-all
                      ${isSelected
                        ? `${theme.bg} text-white shadow-lg scale-105`
                        : 'hover:bg-slate-100 text-slate-700'
                      }
                    `}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {selectedDate && (
          <motion.div
            className="mt-6 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-6 py-4 border-b border-slate-100">
              <p className="text-sm text-slate-600">
                <span className="font-medium text-slate-900">{selectedDate}</span> の予約可能枠
              </p>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-3">
              {slots.map((t) => (
                <button
                  key={t}
                  className="flex items-center justify-between py-4 px-4 border-2 border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-colors group"
                >
                  <span className="font-medium text-slate-900">{t}〜</span>
                  <span className="text-sm text-green-600 font-medium">予約可能</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-business.accent" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

const InventoryDemo: React.FC<{ config: DemoConfig }> = ({ config }) => {
  const items = [
    { id: 1, name: '商品A', sku: 'SKU-001', stock: 45, min: 10 },
    { id: 2, name: '商品B', sku: 'SKU-002', stock: 8, min: 15 },
    { id: 3, name: '商品C', sku: 'SKU-003', stock: 120, min: 20 },
    { id: 4, name: '商品D', sku: 'SKU-004', stock: 5, min: 10 },
    { id: 5, name: '商品E', sku: 'SKU-005', stock: 32, min: 25 }
  ];

  const alertCount = items.filter((i) => i.stock < i.min).length;

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-slate-900">{config.title}</h1>
          <p className="text-slate-600 text-sm mt-0.5">{config.catchcopy}</p>
          {alertCount > 0 && (
            <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
              <Package className="w-4 h-4" />
              {alertCount}件の商品が発注基準を下回っています
            </div>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">商品名</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">SKU</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-slate-700">在庫</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-slate-700">最低在庫</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-slate-700">状態</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <motion.tr
                    key={item.id}
                    className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <td className="py-4 px-6 font-medium text-slate-900">{item.name}</td>
                    <td className="py-4 px-6 text-slate-500 text-sm">{item.sku}</td>
                    <td className="py-4 px-6 text-right font-semibold">{item.stock}</td>
                    <td className="py-4 px-6 text-right text-slate-600">{item.min}</td>
                    <td className="py-4 px-6 text-center">
                      {item.stock < item.min ? (
                        <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
                          要発注
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                          OK
                        </span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

const InquiryDemo: React.FC<{ config: DemoConfig }> = ({ config }) => {
  const theme = getTheme(config);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'お名前を入力してください';
    if (!email.trim()) e.email = 'メールアドレスを入力してください';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = '正しい形式で入力してください';
    if (!content.trim()) e.content = 'お問い合わせ内容を入力してください';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center border border-slate-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">送信完了しました</h2>
          <p className="text-slate-600">
            内容を確認のうえ、2〜3営業日以内にご連絡いたします。
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-slate-900">{config.title}</h1>
          <p className="text-slate-600 text-sm mt-0.5">{config.catchcopy}</p>
        </div>
      </header>
      <main className="max-w-xl mx-auto px-4 py-8">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.name ? 'border-red-300' : 'border-slate-200'
                } focus:border-indigo-500 focus:outline-none transition-colors`}
                placeholder="山田 太郎"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.email ? 'border-red-300' : 'border-slate-200'
                } focus:border-indigo-500 focus:outline-none transition-colors`}
                placeholder="example@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border-2 resize-none ${
                  errors.content ? 'border-red-300' : 'border-slate-200'
                } focus:border-indigo-500 focus:outline-none transition-colors`}
                placeholder="ご質問などをご記入ください"
              />
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">{errors.content}</p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full py-4 ${theme.bg} text-white rounded-xl font-semibold hover:opacity-95 transition-opacity shadow-lg`}
            >
              送信する
            </button>
          </div>
        </motion.form>
      </main>
    </div>
  );
};

const MemberDemo: React.FC<{ config: DemoConfig }> = ({ config }) => {
  const theme = getTheme(config);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (user === 'demo' && pass === 'demo') {
      setLoggedIn(true);
    } else {
      setError('ID: demo / パス: demo でログインできます');
    }
  };

  if (loggedIn) {
    return (
      <div className="min-h-screen bg-slate-100">
        <header className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">{config.title}</h1>
              <p className="text-slate-600 text-sm">会員専用コンテンツ</p>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <User className="w-5 h-5" />
              <span>demo 様</span>
            </div>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">会員限定資料</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    ログインするとダウンロードできるPDF資料です。
                  </p>
                  <button className={`inline-flex items-center gap-2 ${theme.text} font-semibold hover:underline`}>
                    <Download className="w-4 h-4" />
                    PDFをダウンロード
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold text-slate-900 mb-2">お知らせ</h3>
              <div className="space-y-3">
                <div className="flex gap-3 py-2 border-b border-slate-100 last:border-0">
                  <span className="text-slate-400 text-sm flex-shrink-0">2024/01/15</span>
                  <p className="text-slate-600">新着コンテンツを追加しました。</p>
                </div>
                <div className="flex gap-3 py-2">
                  <span className="text-slate-400 text-sm flex-shrink-0">2023/12/20</span>
                  <p className="text-slate-600">年末年始の営業日のお知らせ。</p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-slate-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={`w-14 h-14 rounded-full ${theme.bg}/10 flex items-center justify-center mb-6`}>
          <User className={`w-7 h-7 ${theme.text}`} />
        </div>
        <h1 className="text-xl font-bold text-slate-900 mb-1">{config.title}</h1>
        <p className="text-slate-600 text-sm mb-6">{config.catchcopy}</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">ID</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none"
              placeholder="demo"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">パスワード</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none"
              placeholder="••••••"
            />
          </div>
          {error && (
            <p className="text-amber-600 text-sm bg-amber-50 px-4 py-2 rounded-lg">{error}</p>
          )}
          <button
            type="submit"
            className={`w-full py-4 ${theme.bg} text-white rounded-xl font-semibold hover:opacity-95 transition-opacity`}
          >
            ログイン
          </button>
        </form>
        <p className="text-xs text-slate-500 mt-4 text-center">
          デモ: ID demo / パス demo
        </p>
      </motion.div>
    </div>
  );
};

export default WebAppTemplate;
