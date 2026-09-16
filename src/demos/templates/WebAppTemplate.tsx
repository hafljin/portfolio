import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, BarChart3, Boxes, Calendar, ChevronRight, Download, Loader2, MessageSquare, Minus, Package, Plus, Search, Send, Sparkles, User } from 'lucide-react';
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
  if (type === 'ai-automation') return <AiAutomationDemo config={config} />;
  return <BookingDemo config={config} />;
};

type AutomationResult = {
  category: string;
  urgency: string;
  reply: string;
};

type ChatMessage = {
  id: number;
  sender: 'customer' | 'bot' | 'agent';
  text: string;
  time: string;
};

const analyzeInquiry = (text: string): AutomationResult => {
  const lower = text.toLowerCase();
  let category = '一般のお問い合わせ';
  if (/(壊れ|不具合|故障|動かない|エラー)/.test(text) || /error|broken/.test(lower)) {
    category = 'クレーム・不具合報告';
  } else if (/(見積|価格|料金|いくら)/.test(text)) {
    category = '見積もり・料金相談';
  } else if (/(予約|日程|空き|来店)/.test(text)) {
    category = '予約・日程調整';
  }

  const urgency = /(至急|今すぐ|急ぎ|困って)/.test(text) ? '高' : '通常';

  const replyMap: Record<string, string> = {
    'クレーム・不具合報告': 'この度はご不便をおかけし申し訳ございません。担当より詳細を確認のうえ、本日中にご連絡いたします。',
    '見積もり・料金相談': 'お問い合わせありがとうございます。内容を確認し、概算のお見積りを1営業日以内にお送りいたします。',
    '予約・日程調整': 'ご連絡ありがとうございます。空き状況を確認し、候補日時を折り返しご案内いたします。',
    '一般のお問い合わせ': 'お問い合わせいただきありがとうございます。内容を確認し、担当より改めてご連絡いたします。',
  };

  return { category, urgency, reply: replyMap[category] };
};

const AiAutomationDemo: React.FC<{ config: DemoConfig }> = ({ config }) => {
  const theme = getTheme(config);
  const [draft, setDraft] = useState('エアコンから異音がして困っています。至急見てもらえますか？料金の目安も知りたいです。');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, sender: 'customer', text: 'エアコンから異音がして困っています。至急見てもらえますか？料金の目安も知りたいです。', time: '10:12' },
    { id: 2, sender: 'bot', text: '内容を確認しました。担当者が確認後、ご案内します。', time: '10:12' },
  ]);
  const [status, setStatus] = useState<'idle' | 'analyzing'>('idle');
  const [result, setResult] = useState<AutomationResult | null>(null);

  const handleSend = () => {
    if (!draft.trim() || status === 'analyzing') return;
    const inquiry = draft.trim();
    setMessages((current) => [...current, { id: Date.now(), sender: 'customer', text: inquiry, time: 'いま' }]);
    setDraft('');
    setStatus('analyzing');
    setTimeout(() => {
      const analysis = analyzeInquiry(inquiry);
      setResult(analysis);
      setMessages((current) => [...current, { id: Date.now() + 1, sender: 'bot', text: analysis.reply, time: 'いま' }]);
      setStatus('idle');
    }, 650);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className={`w-5 h-5 ${theme.text}`} />
            {config.title}
          </h1>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">匿名データによる機能デモ</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <p className="mb-5 text-sm text-slate-600">{config.catchcopy}</p>
        <div className="grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)_260px]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between"><p className="font-semibold">受信トレイ</p><span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-700">3</span></div>
            {['要対応：空調の不具合', '見積もりのご相談', '予約日時の変更'].map((item, index) => (
              <button key={item} className={`mb-2 w-full rounded-xl p-3 text-left text-sm transition-colors ${index === 0 ? 'bg-indigo-50 text-indigo-900' : 'hover:bg-slate-50'}`}>
                <span className="block font-medium">{item}</span><span className="mt-1 block text-xs text-slate-500">{index === 0 ? 'いま' : '本日 09:40'}</span>
              </button>
            ))}
          </aside>

          <motion.section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="border-b border-slate-100 px-5 py-4"><p className="font-semibold">要対応：空調の不具合</p><p className="mt-1 text-xs text-slate-500">Webフォームから受信</p></div>
            <div className="min-h-[360px] space-y-4 bg-slate-50/60 p-5">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.sender === 'customer' ? `${theme.bg} text-white rounded-br-sm` : 'bg-white text-slate-700 shadow-sm rounded-bl-sm'}`}>
                    <p>{message.text}</p><span className={`mt-1 block text-[10px] ${message.sender === 'customer' ? 'text-white/70' : 'text-slate-400'}`}>{message.sender === 'bot' ? 'AIアシスタント ・ ' : ''}{message.time}</span>
                  </div>
                </div>
              ))}
              {status === 'analyzing' && <div className="flex items-center gap-2 text-sm text-slate-500"><Loader2 className="h-4 w-4 animate-spin" />AIが内容を整理しています</div>}
            </div>
            <div className="flex gap-2 border-t border-slate-100 p-3">
              <input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') handleSend(); }} className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500" placeholder="問い合わせ文を入力" />
              <button onClick={handleSend} className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white ${theme.bg}`}><Send className="h-4 w-4" />送信</button>
            </div>
          </motion.section>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-2"><Sparkles className={`h-5 w-5 ${theme.text}`} /><h2 className="font-semibold">AIによる整理</h2></div>
            <div className="space-y-4 text-sm">
              <div><p className="text-xs text-slate-500">分類</p><p className="mt-1 font-medium">{result?.category ?? '不具合・修理相談'}</p></div>
              <div><p className="text-xs text-slate-500">緊急度</p><span className={`mt-1 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${(result?.urgency ?? '高') === '高' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>{result?.urgency ?? '高'}</span></div>
              <div><p className="text-xs text-slate-500">推奨アクション</p><p className="mt-1 leading-relaxed">担当者が内容を確認し、本日中に折り返す</p></div>
            </div>
            <div className="mt-6 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">AIの提案は、担当者が確認してから送信・処理する設計です。</div>
          </aside>
        </div>
      </main>
    </div>
  );
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
  const [items, setItems] = useState([
    { id: 1, name: 'ワイヤレスマウス', sku: 'WM-402', stock: 45, min: 20, incoming: 0, category: '周辺機器', location: 'A-01-03', price: 3480, trend: [28, 31, 29, 38, 41, 45] },
    { id: 2, name: 'USB-Cハブ', sku: 'UC-118', stock: 8, min: 15, incoming: 20, category: '周辺機器', location: 'A-02-01', price: 4980, trend: [33, 28, 22, 17, 12, 8] },
    { id: 3, name: 'モニターアーム', sku: 'MA-021', stock: 24, min: 12, incoming: 0, category: 'オフィス', location: 'B-03-02', price: 7980, trend: [18, 21, 26, 23, 27, 24] },
    { id: 4, name: 'ノートPCスタンド', sku: 'NS-310', stock: 5, min: 10, incoming: 10, category: 'オフィス', location: 'B-01-04', price: 2980, trend: [24, 18, 14, 10, 7, 5] },
    { id: 5, name: 'キーボード', sku: 'KB-090', stock: 32, min: 18, incoming: 0, category: '周辺機器', location: 'A-03-02', price: 6280, trend: [21, 24, 27, 31, 28, 32] },
    { id: 6, name: 'Webカメラ', sku: 'WC-509', stock: 17, min: 12, incoming: 0, category: '会議機器', location: 'C-02-01', price: 5480, trend: [12, 14, 18, 21, 19, 17] },
  ]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'low'>('all');
  const [selectedId, setSelectedId] = useState(2);
  const [notice, setNotice] = useState('');
  const alertCount = items.filter((i) => i.stock < i.min).length;
  const stockTotal = items.reduce((sum, item) => sum + item.stock, 0);
  const incomingTotal = items.reduce((sum, item) => sum + item.incoming, 0);
  const stockValue = items.reduce((sum, item) => sum + item.stock * item.price, 0);
  const selectedItem = items.find((item) => item.id === selectedId) ?? items[0];
  const visibleItems = items.filter((item) => {
    const matchesQuery = item.name.includes(query) || item.sku.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (filter === 'all' || item.stock < item.min);
  });
  const adjustStock = (id: number, amount: number) => setItems((current) => current.map((item) => item.id === id ? { ...item, stock: Math.max(0, item.stock + amount) } : item));
  const createOrders = () => {
    const orderCount = items.filter((item) => item.stock < item.min && item.incoming === 0).length;
    setItems((current) => current.map((item) => item.stock < item.min && item.incoming === 0 ? { ...item, incoming: item.min * 2 - item.stock } : item));
    setNotice(orderCount ? `${orderCount}件の発注候補を作成しました` : '追加の発注候補はありません');
  };
  const getStatus = (item: typeof items[number]) => item.stock <= item.min * 0.6 ? '緊急' : item.stock < item.min ? '要発注' : item.stock < item.min * 1.5 ? '注意' : '適正';

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <div><h1 className="text-xl font-bold text-slate-900">{config.title}</h1><p className="text-slate-600 text-sm mt-0.5">{config.catchcopy}</p></div>
          <div className="flex items-center gap-2"><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">匿名データによる機能デモ</span><button onClick={createOrders} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">発注候補を作成</button></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {notice && <div className="mb-5 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"><span>{notice}</span><button onClick={() => setNotice('')} className="text-emerald-700">閉じる</button></div>}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: '登録商品', value: `${items.length} SKU`, icon: Boxes, color: 'text-slate-700' },
            { label: '現在庫合計', value: `${stockTotal} 点`, icon: BarChart3, color: 'text-indigo-600' },
            { label: '要発注', value: `${alertCount} 件`, icon: AlertTriangle, color: 'text-rose-600' },
            { label: '入荷予定', value: `${incomingTotal} 点`, icon: Package, color: 'text-emerald-600' },
            { label: '在庫金額', value: `¥${stockValue.toLocaleString()}`, icon: BarChart3, color: 'text-amber-600' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-center justify-between"><p className="text-sm text-slate-500">{stat.label}</p><stat.icon className={`h-5 w-5 ${stat.color}`} /></div><p className="mt-3 text-2xl font-semibold text-slate-900">{stat.value}</p></div>
          ))}
        </div>

        {alertCount > 0 && <div className="mb-5 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"><AlertTriangle className="h-4 w-4" />{alertCount}件の商品が発注基準を下回っています。入荷予定も確認してください。</div>}

        <motion.div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-emerald-500" placeholder="商品名・SKUで検索" /></div>
            <div className="flex gap-2"><button onClick={() => setFilter('all')} className={`rounded-lg px-3 py-2 text-sm ${filter === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}>すべて</button><button onClick={() => setFilter('low')} className={`rounded-lg px-3 py-2 text-sm ${filter === 'low' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-700'}`}>要発注のみ</button></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">商品名</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">SKU</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-slate-700">在庫</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-slate-700">最低在庫</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-slate-700">入荷予定</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-slate-700">状態</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-slate-700">操作</th>
                </tr>
              </thead>
              <tbody>
                {visibleItems.map((item, i) => (
                  <motion.tr
                    key={item.id}
                    className={`cursor-pointer border-b border-slate-100 transition-colors hover:bg-slate-50/50 ${selectedId === item.id ? 'bg-emerald-50/50' : ''}`}
                    onClick={() => setSelectedId(item.id)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <td className="py-4 px-6"><p className="font-medium text-slate-900">{item.name}</p><p className="mt-0.5 text-xs text-slate-500">{item.category}</p></td>
                    <td className="py-4 px-6 text-slate-500 text-sm">{item.sku}</td>
                    <td className="py-4 px-6 text-right font-semibold text-slate-900">{item.stock}</td>
                    <td className="py-4 px-6 text-right text-slate-600">{item.min}</td>
                    <td className="py-4 px-6 text-right text-emerald-700">{item.incoming ? `+${item.incoming}` : '—'}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatus(item) === '緊急' ? 'bg-rose-100 text-rose-700' : getStatus(item) === '要発注' ? 'bg-orange-100 text-orange-700' : getStatus(item) === '注意' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{getStatus(item)}</span>
                    </td>
                    <td className="py-4 px-6"><div className="flex justify-end gap-1"><button onClick={() => adjustStock(item.id, -1)} aria-label={`${item.name}の在庫を減らす`} className="rounded-lg border border-slate-200 p-1.5 hover:bg-slate-100"><Minus className="h-3.5 w-3.5" /></button><button onClick={() => adjustStock(item.id, 1)} aria-label={`${item.name}の在庫を増やす`} className="rounded-lg border border-slate-200 p-1.5 hover:bg-slate-100"><Plus className="h-3.5 w-3.5" /></button></div></td>
                  </motion.tr>
                ))}
                {visibleItems.length === 0 && <tr><td colSpan={7} className="px-6 py-12 text-center text-sm text-slate-500">該当する商品はありません</td></tr>}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between"><div><p className="text-sm text-slate-500">選択中の商品</p><h2 className="mt-1 text-lg font-semibold">{selectedItem.name}</h2></div><span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-600">{selectedItem.location}</span></div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center"><div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">現在庫</p><p className="mt-1 text-xl font-semibold">{selectedItem.stock}</p></div><div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">最低在庫</p><p className="mt-1 text-xl font-semibold">{selectedItem.min}</p></div><div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">単価</p><p className="mt-1 text-xl font-semibold">¥{selectedItem.price.toLocaleString()}</p></div></div>
            <div className="mt-5"><p className="mb-3 text-sm font-medium text-slate-700">在庫推移（過去6週）</p><div className="flex h-24 items-end gap-2">{selectedItem.trend.map((value, index) => <div key={`${value}-${index}`} className="flex flex-1 flex-col items-center gap-1"><div className="w-full rounded-t bg-emerald-500/80" style={{ height: `${Math.max(10, value / Math.max(...selectedItem.trend) * 78)}px` }} /><span className="text-[10px] text-slate-400">{index + 1}週前</span></div>)}</div></div>
          </section>
          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-semibold">発注の目安</h2><div className="mt-4 space-y-3 text-sm"><div className="flex justify-between"><span className="text-slate-500">状態</span><span className="font-medium">{getStatus(selectedItem)}</span></div><div className="flex justify-between"><span className="text-slate-500">入荷予定</span><span className="font-medium text-emerald-700">{selectedItem.incoming ? `+${selectedItem.incoming} 点` : 'なし'}</span></div><div className="flex justify-between"><span className="text-slate-500">推奨発注数</span><span className="font-medium">{Math.max(0, selectedItem.min * 2 - selectedItem.stock - selectedItem.incoming)} 点</span></div></div><button onClick={() => { setFilter('low'); setQuery(selectedItem.name); }} className="mt-6 w-full rounded-lg border border-emerald-600 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">発注対象を一覧で確認</button></aside>
        </div>
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
