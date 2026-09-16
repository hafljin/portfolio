import { Project, Profile, Service, PricingPlan, ProjectCategory } from '../types';
import avatarImage from '../assets/myphoto.png';

export const profile: Profile = {
  name: "Osawaru",
  title: "LP制作・AI自動化・業務効率化",
  bio: "事業の魅力が伝わるLPと、日々の手作業を整えるAI活用・業務ツールを設計・実装します。要件整理から公開・運用まで、エンジニアとして一貫して伴走します。",
  location: "Tokyo, Japan",
  skills: [
    "AI活用", "業務自動化", "Webアプリ", "LP制作",
    "ホームページ制作", "スマホ対応", "業務設計", "迅速MVP"
  ],
  avatarUrl: avatarImage
};

export const services: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI活用・業務自動化',
    description: '問い合わせ、見積後の追客、議事録、タスク管理などから、止まっている1工程を選びます。AIは分類・下書き・整理を補助し、最終確認は担当者が行う前提で、画面・通知・手順書まで固定範囲で整えます。',
  },
  {
    id: 'web-app',
    title: 'Webアプリ・業務ツール制作',
    description: '案件ボード、承認票、顧客フォロー、社内用ダッシュボードなど、既存の表やチャットだけでは追いにくい業務を、使う人と必要な画面に絞って形にします。基幹システムの置換や無制限のカスタムは行いません。',
  },
  {
    id: '0',
    title: 'LP・ホームページ制作',
    description: '集客用の1ページLP、店舗・小規模事業者向けのホームページを制作します。伝えたい内容、料金、問い合わせ導線を整理し、スマホで読みやすい構成にします。',
  },
];

export const pricingPlans: PricingPlan[] = [
  { id: '1', service: 'LP改善', priceRange: '¥20,000〜', note: '既存ページの構成・CTA・スマホ導線を1ページ改善。素材支給、修正1回' },
  { id: '2', service: '1ページLP制作', priceRange: '¥49,800〜', note: '構成・デザイン・実装・問い合わせ導線。素材支給、修正1回' },
  { id: 'ai-mini', service: '業務整理ミニ', priceRange: '¥50,000〜', note: '1業務の整理、テンプレート・手順書・最小画面。1〜5営業日を目安' },
  { id: '3', service: '簡易ホームページ制作', priceRange: '¥69,800〜', note: 'トップ・サービス・会社/問い合わせの最小3ページ。機能追加は別見積' },
  { id: 'ai-core', service: 'AI自動化・業務ツール', priceRange: '¥98,000〜', note: '1業務フロー、1〜2画面、人が確認して使うAI活用。通知またはCSV出力は別途ご相談' },
  { id: 'ai-system', service: '業務システム', priceRange: '個別見積もり', note: '複数担当・複数画面・既存データ連携など。必要な範囲を伺ってご提案' },
];

export const projectCategories: ProjectCategory[] = [
  {
    id: 'showcase',
    title: '用途別の制作サンプル',
    description: 'LPは公開サイトへ、AI自動化・業務ツールは匿名データを使った機能デモへ遷移します。実案件の画面やデータは掲載していません。',
    projects: [
      {
        id: 'yakitori-lp',
        title: '炭火焼き鳥 匠｜店舗LP',
        description: '店舗の魅力、メニュー、来店導線を一つのページにまとめた飲食店向けLPです。',
        longDescription: 'ファーストビューからメニュー、店舗情報、予約導線までを一貫して設計した公開LPです。スマホで読みやすく、来店前に必要な情報へすぐたどり着ける構成にしています。',
        techStack: ['LP制作', 'スマホ対応', '予約導線'],
        githubUrl: 'https://github.com/hafljin/yakitori-swipe-story',
        demoUrl: 'https://yakitori-swipe-story.vercel.app',
        imageUrl: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: [],
        beforeAfter: { before: '店舗情報が点在している状態', after: '魅力と来店導線を1ページに整理' },
        isDemo: true
      },
      {
        id: '21',
        title: 'AI問い合わせ一次対応',
        description: '匿名の問い合わせ文をAIが分類し、担当者が確認する返信文の下書きを作る機能デモです。',
        longDescription: '実データを使わずに、問い合わせの分類・緊急度の整理・返信文の下書きを体験できる機能デモです。AIの出力は人が確認してから使う設計にしています。',
        techStack: ['生成AIのAPI連携', '自動分類', '返信文生成'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/21',
        imageUrl: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: [],
        beforeAfter: { before: '問い合わせを読んで分類・下書きする流れ', after: 'AIが分類と下書きを補助する流れ' },
        isDemo: true
      },
      {
        id: '15',
        title: '在庫管理ダッシュボード',
        description: '商品ごとの在庫、発注の目安、注意が必要な状態を一覧で確認する機能デモです。',
        longDescription: '匿名のサンプルデータで、在庫一覧・不足アラート・発注判断の画面構成を確認できる機能デモです。実在企業の在庫データや管理画面は使用していません。',
        techStack: ['一覧管理', '在庫アラート', '業務ダッシュボード'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/15',
        imageUrl: 'https://images.pexels.com/photos/4481328/pexels-photo-4481328.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: [],
        beforeAfter: { before: '在庫と発注状況を個別に確認', after: '必要な情報を一覧で把握' },
        isDemo: true
      }
    ]
  },
];

export const projects: Project[] = projectCategories.flatMap(cat => cat.projects);
