import { Project, Profile, Service, PricingPlan, ProjectCategory } from '../types';
import avatarImage from '../assets/myphoto.png';

export const profile: Profile = {
  name: "Osawaru",
  title: "スピード重視で問題解決を行うエンジニア",
  bio: "ホームページや集客用LP、予約システムや学習サイトなど幅広くWeb制作/システム開発を承っています。小規模案件からMVP（試作品）まで、スピーディーに形にします。既存のデザインをご指定いただくことも、ゼロから一緒に企画することも可能です。まずはお気軽にご相談ください。",
  location: "Tokyo, Japan",
  skills: [
    "LP制作", "ホームページ制作", "Webサイト", "業務効率化ツール開発",
    "スマホ対応", "迅速MVP", "お問い合わせ対応自動化"
  ],
  avatarUrl: avatarImage
};

export const services: Service[] = [
  {
    id: '1',
    title: 'LP制作（集客ページ）',
    description: '美容室・ネイルサロン・歯科・飲食店・賃貸物件など、業種に合わせた1ページの集客用LPを制作。キャッチコピー・特徴・料金・問い合わせ導線を整理し、来店・予約・問い合わせにつながる設計に。スマホ優先の閲覧を想定し、読みやすさと操作のしやすさを重視します。',
  },
  {
    id: '2',
    title: 'ホームページ・企業サイト',
    description: 'カフェ・整体院・写真館・建設会社・IT企業など、会社やお店の顔となるホームページを制作。メニュー・料金・ギャラリー・事業紹介・お問い合わせなど、必要なセクションを整理。デザインは業界・ターゲットに合わせて調整し、信頼感と世界観を大切にします。',
  },
  {
    id: '3',
    title: 'Webアプリ・ツール開発',
    description: '予約管理・在庫管理・お問い合わせ集約・会員専用ページ・学習コンテンツ配信など、業務やサービスに特化したWebアプリを開発。MVP（試作品）から本番運用まで、段階的に拡張できる設計を提案。既存の業務フローに合わせたカスタマイズも可能です。',
  },
  {
    id: '4',
    title: '業務効率化・自動化',
    description: '繰り返しの作業の自動化、問い合わせの一覧管理、データの整理など、手作業の負担を減らす仕組みづくりをサポート。Excel・スプレッドシート連携、メール通知、シンプルなダッシュボードなど、必要な機能を必要な範囲で実装します。',
  },
];

export const pricingPlans: PricingPlan[] = [
  { id: '1', service: 'LP制作（集客用1ページ）', priceRange: '要お問い合わせ', note: '業種・内容により変動。デザイン込み' },
  { id: '2', service: 'ホームページ制作', priceRange: '要お問い合わせ', note: 'ページ数・更新頻度により変動' },
  { id: '3', service: 'Webアプリ・ツール開発', priceRange: '要お問い合わせ', note: '機能・規模により変動。MVPから対応可' },
  { id: '4', service: '業務効率化・自動化', priceRange: '要お問い合わせ', note: '作業内容・範囲により変動' },
  { id: '5', service: '保守・更新・小規模改修', priceRange: '要相談', note: '月額保守・単発の修正など' },
];

export const projectCategories: ProjectCategory[] = [
  {
    id: 'lp',
    title: 'LP制作・集客ページ',
    description: '1ページに集約した集客用LP。特徴・料金・予約導線を整理し、来店・問い合わせにつなげるデザイン。美容室・ネイル・歯科・賃貸など幅広く対応。',
    projects: [
      {
        id: '1',
        title: '美容室のLP',
        description: '美容室向けの集客用ページ。モダンなデザインで来店導線を設計。カット・カラー・メニューの訴求と予約ボタンを最適配置。',
        longDescription: '美容室向けのランディングページ。業態に合わせた色味・フォント選定、施術メニューの見せ方、店舗の雰囲気を伝える写真レイアウトを設計。スマホでの閲覧をメインに、指で操作しやすいCTA配置。',
        techStack: ['スマホ対応', '美しいデザイン', '予約導線'],
        githubUrl: 'https://github.com/hafljin/CalculatorApp_ai_challenge',
        demoUrl: 'https://salonlp.vercel.app/',
        imageUrl: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '2',
        title: '焼き鳥や横LP',
        description: '焼き鳥店向けのスワイプストーリー形式LP。ストーリー風にメニューを展開し、食指を刺激する演出。',
        longDescription: '焼き鳥店向けのスワイプストーリー形式のランディングページ。Instagramストーリーのような操作感で、メニューを一枚ずつ閲覧。店の雰囲気と美味しさを直感的に伝え、来店・予約への転換を目指した設計。',
        techStack: ['スワイプ操作', 'スマホ向け', 'ストーリー形式'],
        githubUrl: 'https://github.com/hafljin/NoteBook_ai_challenge',
        demoUrl: 'https://yakitori-swipe-story.vercel.app/',
        imageUrl: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '6',
        title: 'ネイルサロン Luna',
        description: '表参道のネイルサロン向けLP。完全予約制・完全個室の価値を訴求。施術メニュー・料金・予約導線を整理。',
        longDescription: '高単価・リピートを狙うネイルサロン向け。落ち着いたトーンで「自分だけの時間」を演出。特徴・料金・口コミ導線を論理的に配置し、初回予約につなげる構成。実案件を想定したオリジナル企画。',
        techStack: ['スマホ対応', '予約導線', '料金訴求'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/6',
        imageUrl: 'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '7',
        title: 'スマイル歯科クリニック',
        description: '歯科医院向けLP。痛みに配慮・土曜診療・説明重視を軸に、不安を払拭する訴求。初診予約の導線設計。',
        longDescription: '「歯医者は怖い」を払拭する訴求設計。信頼感ある医療トーンで、痛みへの配慮・診療時間の利便性・丁寧な説明を明確に伝え、Web予約へ誘導。実案件を想定したオリジナル企画。',
        techStack: ['信頼感', '見やすい情報', 'Web予約'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/7',
        imageUrl: 'https://images.pexels.com/photos/3984915/pexels-photo-3984915.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '8',
        title: '賃貸 サンシャインガーデン',
        description: '新築マンションの賃貸募集LP。駅徒歩3分・2024年築・ペット可を訴求。内見予約・問い合わせへの導線。',
        longDescription: '不動産賃貸向け。物件の強み（立地・築年・設備・ペット可）を整理し、ターゲット（子育て世帯・単身）に合わせた訴求。24時間Web内見予約を強調。実案件を想定したオリジナル企画。',
        techStack: ['情報整理', '問い合わせ導線', '物件訴求'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/8',
        imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      }
    ]
  },
  {
    id: 'hp',
    title: 'ホームページ・企業サイト',
    description: 'カフェ・整体・写真館・建設・IT企業など。メニュー・料金・ギャラリー・事業紹介を整理した、信頼感のあるホームページ。',
    projects: [
      {
        id: '9',
        title: 'カフェ ほんのり',
        description: '地元カフェの紹介サイト。自家焙煎・日替わりスイーツ・雰囲気を伝えるギャラリー。メニュー・営業情報を整理。',
        longDescription: '住宅街のカフェ向け。ほっこりした世界観で、コーヒーと焼き菓子の魅力を伝える。メニュー一覧・ギャラリー・営業時間・アクセスを整理し、初めての方にも分かりやすい構成。実案件を想定したオリジナル企画。',
        techStack: ['雰囲気重視', 'メニュー掲載', 'ギャラリー'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/9',
        imageUrl: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '10',
        title: '整体院 からだ工房',
        description: '整体院のホームページ。施術内容・料金・初回体験を明示。国家資格・個室の安心感を訴求。',
        longDescription: '整体院・治療院向け。施術メニューと料金を一覧化し、初回体験の導線を設計。信頼感のあるトーンで、痛みに配慮・説明重視のスタンスを伝え、予約・問い合わせにつなげる。実案件を想定したオリジナル企画。',
        techStack: ['安心感', '料金表', '予約導線'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/10',
        imageUrl: 'https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '11',
        title: '写真館 フォトスタジオ晴',
        description: '写真館の紹介サイト。七五三・結婚式・家族写真のプランと料金。ギャラリーで仕上がりを訴求。',
        longDescription: '写真館・スタジオ向け。プラン別の料金とサービス内容を整理。ロケーション撮影・衣装・データ納品などの強みを明示し、問い合わせ・予約へ誘導。実案件を想定したオリジナル企画。',
        techStack: ['作品ギャラリー', 'プラン比較', '問い合わせ'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/11',
        imageUrl: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '12',
        title: '株式会社 山田建設',
        description: '建設会社のコーポレートサイト。新築・リフォーム・リノベの事業内容と実績。問い合わせ・見積もり依頼の導線。',
        longDescription: '建設・工務店向け。事業内容をわかりやすく分類し、地域密着・実績・保証をアピール。問い合わせフォーム・電話番号を明示し、見積もり依頼につなげる。実案件を想定したオリジナル企画。',
        techStack: ['実績紹介', '信頼感', '事業一覧'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/12',
        imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '13',
        title: 'テックソリューション',
        description: 'IT会社のサービス紹介サイト。システム開発・クラウド・DX支援を整理。営業・問い合わせの受け口として設計。',
        longDescription: 'IT・コンサル向け。サービスの種類と強みを論理的に整理。業種別の課題解決事例をイメージし、問い合わせ・資料請求の導線を設計。実案件を想定したオリジナル企画。',
        techStack: ['事例紹介', '問い合わせ', 'BtoB訴求'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/13',
        imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      }
    ]
  },
  {
    id: 'webapp',
    title: 'Webアプリ・ツール',
    description: '予約管理・在庫管理・問い合わせ集約・会員専用ページなど。業務やサービスに特化したWebアプリのデモ。',
    projects: [
      {
        id: '4',
        title: '占いアプリMVP',
        description: '占い体験ができるWebアプリ。星に問いかけて結果を表示。楽しい体験とシンプルな操作で利用促進。',
        longDescription: '占い・エンタメ系のWebアプリMVP。ユーザーが選択したテーマに対して結果を表示する体験を設計。楽しいUIと直感的な操作でリピート利用を想定。',
        techStack: ['楽しい体験', 'シンプル操作', 'レスポンシブ'],
        githubUrl: 'https://github.com/hafljin/todoapp_ai_challenge',
        demoUrl: 'https://fortune-food.vercel.app/',
        imageUrl: 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '14',
        title: 'Luna Salon 予約管理',
        description: 'ネイルサロン向けのオンライン予約システム。24時間予約受付・スタッフ選択・時間枠の見える化。',
        longDescription: 'サロン・店舗向けの予約管理ツール。カレンダーで空き状況を表示し、お客様が日時を選んで予約完了までをスムーズに。管理者向けの画面設計も想定。実案件を想定したオリジナル企画。',
        techStack: ['カレンダー', '予約管理', '24h受付'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/14',
        imageUrl: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '15',
        title: '在庫管理ダッシュボード',
        description: 'EC・小売向けの在庫一覧。発注アラート・最低在庫の管理。欠品防止と棚卸しの効率化。',
        longDescription: '在庫管理用ダッシュボード。商品ごとの在庫数・最低在庫を一覧表示。発注が必要な商品をハイライトし、アラート表示。実案件を想定したオリジナル企画。',
        techStack: ['一覧表示', '集計機能', '発注アラート'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/15',
        imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '16',
        title: 'お問い合わせ集約フォーム',
        description: 'メール・Web・窓口の問い合わせを一覧で管理。担当・ステータスでフィルタ。返信忘れ防止。',
        longDescription: 'お問い合わせ管理の集約フォーム。複数チャネルの問い合わせを1画面で管理。バリデーション付きフォームと、送信完了・管理画面の設計。実案件を想定したオリジナル企画。',
        techStack: ['集約', '管理画面', 'バリデーション'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/16',
        imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '17',
        title: '会員専用ポータル',
        description: 'BtoB・サブスク向けの会員ページ。ログインで資料ダウンロード・お知らせ閲覧。会員限定コンテンツの配信。',
        longDescription: '会員専用Webページ。ログイン機能と、会員限定の資料ダウンロード・お知らせ一覧を実装。BtoB・オンラインスクールなどでの活用を想定。実案件を想定したオリジナル企画。',
        techStack: ['ログイン', '専用コンテンツ', '資料配信'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/17',
        imageUrl: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      }
    ]
  },
  {
    id: 'learning',
    title: '学習・教育サイト',
    description: '英会話・料理教室・資格対策など。レッスン教材の配信・進捗管理・コンテンツ閲覧ができる学習サイトのデモ。',
    projects: [
      {
        id: '3',
        title: 'コード道場プロトタイプ',
        description: 'モバイル開発学習サイトのプロトタイプ。カリキュラムの確認・閲覧ができる。進捗表示・コンテンツ一覧付き。',
        longDescription: 'モバイル開発者向けの学習サイトプロトタイプ。レッスン一覧・詳細閲覧・進捗管理の体験を設計。実際の LMS 導入前の検証・提案用として制作。',
        techStack: ['学習コンテンツ', '使いやすいUI', '進捗管理'],
        githubUrl: 'https://github.com/hafljin/tmeFlex_ai_challenge',
        demoUrl: 'https://mobile-developers-road.vercel.app/',
        imageUrl: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '5',
        title: 'Kotlin基礎学習サイト',
        description: 'プログラミング学習サイト。初心者向けにステップ式で学べる。Kotlinの基礎を段階的に習得。',
        longDescription: 'Kotlinの基礎を学ぶための学習サイトMVP。章立てとコード例を組み合わせ、初心者が挫折しにくい構成を設計。',
        techStack: ['ステップ式', '初心者対応', 'コード例'],
        githubUrl: 'https://github.com/hafljin/deep-focusing',
        demoUrl: 'https://ai-fullstack-lab.vercel.app/#/',
        imageUrl: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '18',
        title: '英会話スクール ABC',
        description: '英会話スクール向けの学習ページ。レッスン教材の閲覧・進捗確認。日常会話からビジネスまで。',
        longDescription: '英会話スクール向けの学習コンテンツ配信。レッスン一覧・詳細・進捗バー・完了フラグで、生徒が自分のペースで学べる設計。実案件を想定したオリジナル企画。',
        techStack: ['レッスン予約', '教材閲覧', '進捗管理'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/18',
        imageUrl: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '19',
        title: '料理教室 おいしい時間',
        description: '料理教室向けのレシピサイト。生徒向けの復習用。材料・手順・コツを整理したコンテンツ配信。',
        longDescription: '料理教室向けのレシピ・復習用サイト。基本の和洋中レシピを、材料・手順・ポイント付きで配信。生徒が自宅で復習できる体験を設計。実案件を想定したオリジナル企画。',
        techStack: ['レシピ一覧', '材料・手順', '復習用'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/19',
        imageUrl: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      },
      {
        id: '20',
        title: 'ビジネス実務検定 対策講座',
        description: '資格試験対策の学習サイト。過去問・解説で合格を目指す。ビジネスマナー・文書・データの知識を網羅。',
        longDescription: 'ビジネス実務検定対策用の学習コンテンツ。マナー・ホウレンソウ・敬語・文書・データ読み取りなど、実務に直結する内容を章立てで配信。実案件を想定したオリジナル企画。',
        techStack: ['過去問', '解説付き', '資格対策'],
        githubUrl: 'https://github.com/',
        demoUrl: '/demo/20',
        imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        likes: 0,
        comments: []
      }
    ]
  }
];

export const projects: Project[] = projectCategories.flatMap(cat => cat.projects);
