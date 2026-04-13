// 案件ごとのテーマカラー（テンプレートで使用）
export const themeColors: Record<string, {
  bg: string;
  text: string;
  border: string;
  hover: string;
}> = {
  rose: {
    bg: 'bg-rose-500',
    text: 'text-rose-600',
    border: 'border-rose-500',
    hover: 'hover:bg-rose-600'
  },
  emerald: {
    bg: 'bg-emerald-600',
    text: 'text-emerald-600',
    border: 'border-emerald-600',
    hover: 'hover:bg-emerald-700'
  },
  stone: {
    bg: 'bg-stone-600',
    text: 'text-stone-600',
    border: 'border-stone-600',
    hover: 'hover:bg-stone-700'
  },
  indigo: {
    bg: 'bg-indigo-600',
    text: 'text-indigo-600',
    border: 'border-indigo-600',
    hover: 'hover:bg-indigo-700'
  },
  amber: {
    bg: 'bg-amber-500',
    text: 'text-amber-600',
    border: 'border-amber-500',
    hover: 'hover:bg-amber-600'
  },
  teal: {
    bg: 'bg-teal-600',
    text: 'text-teal-600',
    border: 'border-teal-600',
    hover: 'hover:bg-teal-700'
  },
  slate: {
    bg: 'bg-slate-700',
    text: 'text-slate-700',
    border: 'border-slate-700',
    hover: 'hover:bg-slate-800'
  }
};

export const defaultTheme = 'indigo';
