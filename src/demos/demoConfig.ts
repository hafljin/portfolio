export type TemplateType = 'lp' | 'hp' | 'webapp' | 'learning';

export interface DemoConfig {
  id: string;
  title: string;
  template: TemplateType;
  heroImage?: string;
  catchcopy?: string;
  features?: { title: string; description: string }[];
  pricing?: { label: string; value: string }[];
  about?: string;
  menuItems?: { name: string; price?: string; desc?: string }[];
  galleryImages?: string[];
  contactText?: string;
  // オリジナリティ用：テーマカラー（tailwindで使用）
  theme?: 'rose' | 'emerald' | 'stone' | 'indigo' | 'amber' | 'teal' | 'slate';
  // 追加テキスト（ストーリー・訴求など）
  story?: string;
  tagline?: string;
  webAppType?: 'booking' | 'inventory' | 'inquiry' | 'member';
  learningItems?: { id: string; title: string; content: string }[];
}

export const demoConfigs: Record<string, DemoConfig> = {
  // ─── LP ─────────────────────────────────────────────
  '6': {
    id: '6',
    title: 'ネイルサロン Luna',
    template: 'lp',
    theme: 'rose',
    heroImage: 'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg?auto=compress&cs=tinysrgb&w=1200',
    catchcopy: 'あなたの爪を、もっと素敵に。',
    tagline: '表参道の隠れ家サロンで、自分だけのネイルを。',
    story: '創業15年、表参道の路地裏でひっそりと営むネイルサロン。流行に流されず、お客様一人ひとりに合ったデザインをご提案します。',
    features: [
      { title: '確かな技術', description: 'JNAネイル技能検定1級取得者が在籍。細かな仕上がりと長持ちする施術に定評があります。' },
      { title: '落ち着いた空間', description: '完全個室のプライベート空間。雑踏を忘れ、自分のために過ごす90分をお約束します。' },
      { title: 'オーダーメイド', description: '骨格・爪質・ライフスタイルに合わせたデザインをご提案。似合うネイルで自信を取り戻しましょう。' },
      { title: '完全予約制', description: 'お待たせしません。ゆったり施術に集中できるよう、1日8名様限定でご案内しています。' },
      { title: '持続する美しさ', description: 'オフ施術とアフターケアのアドバイスで、次回までの美しさをしっかりキープ。' }
    ],
    pricing: [
      { label: 'ジェルネイル（フル）', value: '3,300円〜' },
      { label: 'フルセット（オフ＋新設）', value: '5,500円〜' },
      { label: 'リペア・補修', value: '1,100円〜' },
      { label: 'ネイルアート（1本）', value: '220円〜' },
      { label: 'フットネイル', value: '4,400円〜' }
    ],
    contactText: '初めての方も大歓迎。ご予約・お問い合わせはお気軽にどうぞ'
  },
  '7': {
    id: '7',
    title: 'スマイル歯科クリニック',
    template: 'lp',
    theme: 'teal',
    heroImage: 'https://images.pexels.com/photos/3984915/pexels-photo-3984915.jpeg?auto=compress&cs=tinysrgb&w=1200',
    catchcopy: 'いつまでも健康な歯で、笑顔あふれる毎日を。',
    tagline: '痛くない・わかりやすい。患者さん目線の歯科医院。',
    story: '「歯医者は怖い」を変えたい。そんな想いで、説明を丁寧に、痛みに配慮した治療を心がけています。家族で通えるかかりつけ歯科を目指しています。',
    features: [
      { title: '痛みにこだわった治療', description: '表面麻酔の併用、細い針、できる限り無痛に。痛みが苦手なお子様やご高齢の方にもご安心ください。' },
      { title: '土曜も診療', description: '土曜14時まで診療。お仕事帰りにも通いやすいよう、平日は19時まで対応しています。' },
      { title: '説明重視の診療', description: '治療内容・費用・期間をわかりやすくご説明。納得いただいてから治療を進めます。' },
      { title: '予防歯科に力を入れています', description: '治療より予防。定期検診とクリーニングで、健康的な口腔環境を維持しませんか。' },
      { title: '幅広い年代に対応', description: '小児歯科から訪問診療まで。ご家族まとめてお任せください。' }
    ],
    pricing: [
      { label: '初診（カウンセリング含む）', value: '1,100円' },
      { label: '一般診療', value: '保険適用' },
      { label: '歯周病治療', value: '保険適用〜' },
      { label: 'ホワイトニング', value: '15,000円〜' },
      { label: '定期クリーニング', value: '3,300円' }
    ],
    contactText: 'ご予約・ご相談はお電話またはWebから。初診の方はWeb予約でスムーズに'
  },
  '8': {
    id: '8',
    title: '賃貸物件 サンシャインガーデン',
    template: 'lp',
    theme: 'amber',
    heroImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    catchcopy: '駅徒歩3分。快適な暮らしはここから。',
    tagline: '2024年築・全室南向き。子育てファミリーに人気の新築マンション。',
    story: '駅近で利便性が高く、小学校まで徒歩5分。共働き世帯や子育て世代に選ばれる、セキュリティと設備を備えた新築物件です。ペット可のお部屋もご用意。',
    features: [
      { title: '好立地', description: '最寄り駅まで徒歩3分。急行停車で都心まで25分。通勤通学に便利なロケーションです。' },
      { title: '2024年築・新築物件', description: '最新の省エネ設備、24時間換気、防音性の高い設計。快適な住まいをお届けします。' },
      { title: 'ペット可プランあり', description: '1階・専用庭付きのワンルームタイプで、ワンちゃん・ネコちゃんと暮らせます。' },
      { title: 'セキュリティ完備', description: 'オートロック、防犯カメラ、管理人常駐で安心。お子様や女性のお一人暮らしにも。' },
      { title: '充実の共用施設', description: 'コインランドリー、宅配ボックス、バイク置き場完備。暮らしに必要なものが揃っています。' }
    ],
    pricing: [
      { label: '1K（ワンルーム）', value: '8.5万円〜' },
      { label: '1DK', value: '10万円〜' },
      { label: '2K', value: '12万円〜' },
      { label: '2DK', value: '14万円〜' },
      { label: '3LDK', value: '18万円〜' }
    ],
    contactText: '内見予約・お問い合わせは24時間Web受付。空室状況は随時更新中'
  },
  // ─── HP ─────────────────────────────────────────────
  '9': {
    id: '9',
    title: 'カフェ ほんのり',
    template: 'hp',
    theme: 'amber',
    heroImage: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200',
    catchcopy: 'ちょっと一息、ほんのりとした時間を。',
    tagline: '自家焙煎のコーヒーと、今日だけの焼き菓子。',
    about: '住宅街の一角で、10年ほっこりと営んできた地元のカフェです。毎朝、豆から焙煎するコーヒーは、その日の気候や豆の状態を見ながら丁寧に淹れています。手作りの焼き菓子は日替わりで、季節の果物や旬の素材を使ったものばかり。お一人でも、お子様連れでも、のんびり過ごしていただける空間を大切にしています。',
    menuItems: [
      { name: 'ブレンドコーヒー', price: '450円', desc: '自家焙煎・挽きたて' },
      { name: 'カフェラテ', price: '500円', desc: 'オーツミルク対応+50円' },
      { name: '本日のスイーツ', price: '550円〜', desc: '日替わり' },
      { name: 'チーズケーキ', price: '580円', desc: 'プレーン/ベリー' },
      { name: '本日のランチ', price: '950円', desc: '11:30〜14:00' },
      { name: 'アイスコーヒー', price: '480円', desc: '夏季限定' }
    ],
    galleryImages: [
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/205923/pexels-photo-205923.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/2130227/pexels-photo-2130227.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  '10': {
    id: '10',
    title: '整体院 からだ工房',
    template: 'hp',
    theme: 'emerald',
    heroImage: 'https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&w=1200',
    catchcopy: 'からだの不調、お任せください。',
    tagline: '国家資格者が、あなただけの施術プランをご提案。',
    about: '鍼灸師・柔道整復師の国家資格を持つ施術者が、一人ひとりの体の状態に合わせた施術を行っています。デスクワークによる肩こり・腰痛、スポーツによる疲労、産後の不調など、幅広いお悩みに対応。マッサージのように押すだけではない、骨格・筋肉・自律神経にアプローチする本格的な整体で、根本から改善を目指します。完全個室でプライバシーにも配慮しています。',
    menuItems: [
      { name: '全身整体コース', price: '6,600円', desc: '60分・初回はカウンセリング含む' },
      { name: '部分施術（肩・腰など）', price: '4,400円', desc: '30分' },
      { name: '初回体験コース', price: '3,300円', desc: '40分・お試しに' },
      { name: '産後骨盤矯正', price: '5,500円', desc: '45分' },
      { name: '鍼灸施術', price: '4,400円〜', desc: '症状により' }
    ]
  },
  '11': {
    id: '11',
    title: '写真館 フォトスタジオ晴',
    template: 'hp',
    theme: 'indigo',
    heroImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
    catchcopy: '一生の想い出を、美しく残す。',
    tagline: '結婚式・七五三・家族写真。プロの視点で、その瞬間を。',
    about: '創業30年、地元で三代にわたって親しまれている写真館です。結婚式、七五三、成人式、家族写真など、人生の節目をプロの技術で記録します。スタジオ撮影だけでなく、神社や公園でのロケーション撮影も得意。自然光を活かした柔らかな仕上がりが評判です。衣装の着付け、ヘアメイクの手配も承っています。',
    menuItems: [
      { name: '七五三プランA', price: '35,000円〜', desc: '衣装2着・データ20枚・アルバム付き' },
      { name: '七五三プランB', price: '45,000円〜', desc: '衣装3着・データ30枚・アルバム・ロケ撮影' },
      { name: '結婚式プラン', price: '80,000円〜', desc: '挙式・披露宴・前撮り対応' },
      { name: '家族写真プラン', price: '15,000円〜', desc: '1時間・データ10枚' },
      { name: '成人式前撮り', price: '25,000円〜', desc: '着付・メイク・データ15枚' }
    ]
  },
  '12': {
    id: '12',
    title: '株式会社 山田建設',
    template: 'hp',
    theme: 'stone',
    heroImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    catchcopy: '地域に根ざし、50年の実績。',
    tagline: '建築・土木・リフォーム。住まいのことはお任せください。',
    about: '昭和49年創業より、この街で半世紀にわたり建築・土木・リフォームを手がけてきました。新築住宅は設計から施工まで一貫対応。リフォームはキッチン・バス・外壁・屋根など、小さな修理から大規模改修まで。地域の工務店として、アフターサービスや保証にも力を入れています。見積りは無料。まずはお気軽にご相談ください。',
    menuItems: [
      { name: '新築住宅', desc: '注文住宅・設計から施工まで一貫対応' },
      { name: 'リフォーム全般', desc: 'キッチン・バス・外壁・屋根・内装' },
      { name: 'リノベーション', desc: '中古物件の再生・デザイン提案' },
      { name: '外構工事', desc: '庭・駐車場・外壁塗装' },
      { name: '耐震補強・外壁補修', desc: '診断無料・補助金申請サポート' }
    ]
  },
  '13': {
    id: '13',
    title: 'テックソリューション株式会社',
    template: 'hp',
    theme: 'slate',
    heroImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    catchcopy: 'ビジネスの成長を、テクノロジーで。',
    tagline: '業務システム・クラウド・DX。課題解決のパートナー。',
    about: '製造業・小売業・サービス業など、さまざまな業種のお客様に、業務システム開発・クラウド導入・DX支援を提供しています。既存業務の効率化から、新規事業のシステム構築まで。「こんなことができたら」というご要望を、まずはお聞かせください。スモールスタートから、段階的な拡張までご相談に応じます。'
  },
  // ─── Webアプリ ─────────────────────────────────────
  '14': {
    id: '14',
    title: 'Luna Salon 予約管理',
    template: 'webapp',
    theme: 'rose',
    webAppType: 'booking',
    catchcopy: 'ネイルサロン専用のオンライン予約システム。施術者・時間枠を選んで簡単予約。',
    tagline: 'お客様が24時間いつでも予約できる。スタッフの手を煩わせない。'
  },
  '15': {
    id: '15',
    title: '在庫管理ダッシュボード',
    template: 'webapp',
    theme: 'emerald',
    webAppType: 'inventory',
    catchcopy: 'EC・小売店向け。商品・在庫を一元管理。発注アラートで欠品を防ぐ。',
    tagline: '棚卸しの手間を減らし、適正在庫を維持。'
  },
  '16': {
    id: '16',
    title: 'お問い合わせ集約フォーム',
    template: 'webapp',
    theme: 'indigo',
    webAppType: 'inquiry',
    catchcopy: 'メール・Web・窓口の問い合わせを一覧で管理。返信忘れゼロを目指す。',
    tagline: '複数チャネルを1画面で。担当・ステータスでフィルタ。'
  },
  '17': {
    id: '17',
    title: '会員専用ポータル',
    template: 'webapp',
    theme: 'slate',
    webAppType: 'member',
    catchcopy: 'ログインして会員コンテンツをご覧ください。資料ダウンロード・お知らせを配信。',
    tagline: 'BtoB・サブスク向け。会員限定の価値を届ける。'
  },
  // ─── 学習 ─────────────────────────────────────────────
  '18': {
    id: '18',
    title: '英会話スクール ABC',
    template: 'learning',
    theme: 'indigo',
    catchcopy: '楽しく学ぶ、使える英語。',
    tagline: '日常会話からビジネスまで。実践的なフレーズを身につける。',
    learningItems: [
      { id: '1', title: 'Lesson 1: あいさつと自己紹介', content: 'Hello! How are you? I\'m fine, thank you.\n\n基本的なあいさつと、名前・出身の言い方を学びます。\n\n■ 練習フレーズ\n・Nice to meet you. / はじめまして\n・Where are you from? / 出身はどこですか？\n・I\'m from Tokyo. / 東京出身です\n\n■ ポイント\n発音より「伝わること」を優先。間違いを恐れず、まずは口に出すことが大切です。' },
      { id: '2', title: 'Lesson 2: 買い物で使う表現', content: 'How much is this? / これはいくらですか？\n\nお店での会話に必要なフレーズを学びます。\n\n■ よく使う表現\n・I\'ll take this. / これをください\n・Can I try this on? / 試着できますか？\n・Do you have this in a different color? / 別の色はありますか？\n・I\'m just looking. / 見ているだけです\n\n■ ポイント\n数と値段の言い方を覚えておくと、旅先でも便利です。' },
      { id: '3', title: 'Lesson 3: レストランでの注文', content: 'Could I have the menu, please? / メニューをいただけますか？\n\n飲食店での注文・支払いの表現です。\n\n■ 注文の仕方\n・I\'d like to order... / 〜を注文したいです\n・Could I have..., please? / 〜をいただけますか？\n・For here or to go? / 店内で？お持ち帰り？\n\n■ 支払い\n・Can I have the bill, please? / お会計お願いします\n・Together or separate? / 一緒に？別々に？' },
      { id: '4', title: 'Lesson 4: 道案内・場所を尋ねる', content: 'Where is the nearest station? / 一番近い駅はどこですか？\n\n道を尋ねる・案内する表現。海外旅行で役立ちます。\n\n■ 尋ね方\n・Excuse me, how can I get to...? / 〜へはどう行けばいいですか？\n・Is it far from here? / ここから遠いですか？\n\n■ 案内の仕方\n・Go straight. / まっすぐ行ってください\n・Turn left at the corner. / 角を左に曲がってください' },
      { id: '5', title: 'Lesson 5: 簡単な意見を言う', content: 'I think... / 〜だと思います\nIn my opinion... / 私の意見では\n\n自分の考えや好みを伝える表現。会話を広げるコツです。\n\n■ 例文\n・I think it\'s a good idea. / いいアイデアだと思います\n・I prefer coffee to tea. / 紅茶よりコーヒーの方が好きです\n・It depends. / 場合によります' }
    ]
  },
  '19': {
    id: '19',
    title: '料理教室 おいしい時間',
    template: 'learning',
    theme: 'amber',
    catchcopy: '初心者でも作れる、簡単レシピ。',
    tagline: '毎日のごはんが楽しくなる。基本の和洋中を身につける。',
    learningItems: [
      { id: '1', title: '基本のトマトパスタ', content: '材料（1人前）\n・スパゲッティ 100g\n・トマト缶 1/2缶\n・にんにく 1片\n・オリーブオイル 大さじ2\n・塩・胡椒・粉チーズ 適量\n\n作り方\n1. にんにくを薄切りにし、オリーブオイルで香りが出るまで炒める\n2. トマト缶を加え、15分ほど煮詰める\n3. 塩ひとつまみを入れた沸騰したお湯でパスタを表示時間より1分短く茹でる\n4. 茹で汁大さじ2を加えてソースと和え、味を整えて完成\n\nポイント：茹で汁を加えるとソースがパスタによく絡みます。' },
      { id: '2', title: 'ふわふわオムライス', content: '材料（1人前）\n・ご飯 茶碗1杯\n・鶏もも肉 50g\n・玉ねぎ 1/4個\n・ケチャップ 大さじ2\n・卵 2個\n・牛乳 大さじ1\n\n作り方\n1. フライパンで鶏肉・玉ねぎを炒め、ケチャップライスを作る\n2. 別のボールで卵と牛乳を混ぜ、ふんわりした卵焼きを作る\n3. ご飯を卵で包む\n\nふわふわのコツ：卵に牛乳を加える、強火でさっと焼く、余熱で火を通す。' },
      { id: '3', title: '定番の肉じゃが', content: '材料（2人前）\n・牛肉（薄切り） 150g\n・じゃがいも 2個\n・にんじん 1/2本\n・玉ねぎ 1個\n・だしの素 小さじ2\n・醤油・砂糖・みりん 各大さじ2\n\n作り方\n1. 野菜は一口大に切る\n2. 鍋に油を熱し、牛肉を炒める\n3. 野菜を加え、だし・醤油・砂糖・みりんを入れて落とし蓋\n4. 弱火で15分煮て、じゃがいもに火が通れば完成\n\nポイント：煮崩れを防ぐため、じゃがいもは水にさらさずそのまま使います。' },
      { id: '4', title: '味噌汁の基本', content: 'だしの取り方（昆布・かつお）\n1. 水1Lに昆布を入れて20分浸す\n2. 弱火で沸騰直前に昆布を取り出す\n3. かつお節をひとつかみ入れて火を止め、2分待つ\n4. かつお節を漉す\n\n味噌汁の作り方\n1. だしを沸かし、具材を入れて火を通す\n2. 火を弱め、味噌を溶き入れる（沸騰させない）\n3. お好みでねぎを散らす\n\n具の例：豆腐・わかめ・大根・油揚げ・きのこ' },
      { id: '5', title: '基本の炊き込みご飯', content: '材料（3合分）\n・米 3合\n・鶏もも肉 150g\n・しめじ 1パック\n・人参 1/3本\n・だしの素 小さじ2\n・醤油・みりん 各大さじ1.5\n・酒 大さじ1\n\n作り方\n1. 米は通常どおり研ぎ、水加減は通常より少なめ\n2. 具材を刻み、調味料とともに入れる\n3. 通常通り炊飯\n4. 炊き上がったらよく混ぜて完成\n\nポイント：具材の水分を考慮し、水はやや少なめに。' }
    ]
  },
  '20': {
    id: '20',
    title: 'ビジネス実務検定 対策講座',
    template: 'learning',
    theme: 'slate',
    catchcopy: '過去問で合格を目指す。',
    tagline: 'ビジネスマナー・文書・データ。実務に直結する知識を。',
    learningItems: [
      { id: '1', title: '第1回：ビジネスマナー', content: '■ 基本の挨拶\n・出社時：おはようございます\n・退社時：お先に失礼します\n・訪問時：失礼します、〜と申します\n\n■ 身だしなみ\n清潔感を第一に。業種に合わせたフォーマルな服装。派手なアクセサリー・強い香水は避ける。\n\n■ 時間厳守\n約束の5分前には到着。遅れる場合は必ず連絡。' },
      { id: '2', title: '第2回：報告・連絡・相談（ホウ・レン・ソウ）', content: '■ 報告（ホウ）\n指示された内容の結果を伝える。事実と意見は分けて、結論から伝える。\n\n■ 連絡（レン）\n関係者に情報を共有する。正確に、漏れなく。\n\n■ 相談（ソウ）\n判断に迷うときは上司に相談。一人で抱え込まない。早期対応が重要。\n\n「報連相」は情報共有を円滑にし、ミスやトラブルを防ぐ基本。' },
      { id: '3', title: '第3回：敬語の種類', content: '■ 尊敬語（相手の動作を高める）\n・いらっしゃる、おっしゃる、ご覧になる\n・お〜になる、ご〜になる\n\n■ 謙譲語（自分の動作をへりくだる）\n・伺う、申し上げる、拝見する\n・お〜する、ご〜する\n\n■ 丁寧語（丁寧に言う）\n・です、ます、ございます\n\n敬語の誤用に注意：「お召し上がりになる」は二重敬語なので避ける。' },
      { id: '4', title: '第4回：ビジネス文書', content: '■ 文書の構成\n1. 前付け（日付・宛名・発信者）\n2. 件名\n3. 本文（拝啓〜敬具）\n4. 記（箇条書きで本文の要約）\n\n■ 敬称\n・個人：様\n・団体：御中\n・複数人：各位\n\n■ 日付\n発信日を西暦または和暦で明記。' },
      { id: '5', title: '第5回：データの読み取り', content: '■ 表・グラフの読み方\n・縦軸・横軸の単位を確認\n・傾向（増加・減少・横ばい）を把握\n・割合と実数は区別する\n\n■ 計算の基本\n・増加率 = (後の数 - 前の数) / 前の数 × 100\n・構成比 = 部分 / 全体 × 100\n\n実務では数値に基づいた判断が求められます。正確な読み取りを心がけましょう。' }
    ]
  }
};
