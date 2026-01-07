import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Send, X, Bot } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { profile } from '../data/mockData';

const Header: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [step, setStep] = useState(0);

  // モーダルが開いている時は背景のスクロールを無効化
  useEffect(() => {
    if (isChatbotOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isChatbotOpen]);
  const [formData, setFormData] = useState({
    type: '', // 起業家 or 個人
    purpose: '', // 依頼 or 相談
    contact: '', // 電話番号 or メアド
    content: '', // 依頼内容
    otherContent: '' // その他の内容
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // EmailJSの設定値（環境変数から取得）
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // 環境変数のチェック
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJSの設定が完了していません。環境変数を確認してください。');
      }
      
      const templateParams = {
        to_email: 'mitsuru.donrichy@gmail.com',
        type: formData.type,
        purpose: formData.purpose,
        contact: formData.contact,
        content: formData.content === 'その他' ? formData.otherContent : formData.content,
        subject: `お問い合わせ: ${formData.type} - ${formData.purpose}`,
      };
      
      console.log('送信パラメータ:', { serviceId, templateId, publicKey: publicKey.substring(0, 10) + '...', templateParams });
      
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('送信成功:', response);
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setStep(0);
      setFormData({ type: '', purpose: '', contact: '', content: '', otherContent: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('メール送信エラー:', error);
      const errorMsg = error?.text || error?.message || '不明なエラーが発生しました';
      setErrorMessage(errorMsg);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0: return formData.type !== '';
      case 1: return formData.purpose !== '';
      case 2: return formData.contact.trim() !== '';
      case 3: return formData.content !== '' && (formData.content !== 'その他' || formData.otherContent.trim() !== '');
      default: return false;
    }
  };

  return (
    <header className="bg-business.blue text-business.light h-full overflow-y-auto">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12 min-h-full flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* 左側: プロフィール情報 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Avatar */}
              <div className="flex-shrink-0 mb-4">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-business.accent/30 shadow-2xl object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h1 className="text-3xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-business.accent to-business.green bg-clip-text text-transparent">
                  <span className="text-business.accent">Osawaruのポートフォリオ</span>
                </h1>
                <h2 className="text-lg sm:text-xl text-business.accent mb-3 font-medium">
                  <span className="text-business.accent">{profile.title}</span>
                </h2>
                <p className="text-base sm:text-lg text-business.light/90 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <span className="text-business.light">{profile.bio}</span>
                </p>
                
                {/* Location */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-business.accent" />
                  <span className="text-sm sm:text-base text-business.light">{profile.location}</span>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="https://github.com/hafljin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 hover:scale-110 text-business.accent"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/osawaru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 hover:scale-110 text-business.accent"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:mitsuru.donrichy@gmail.com"
                    className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 hover:scale-110 text-business.accent"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* フローティングチャットボットボタン */}
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-business.accent text-white rounded-full shadow-2xl hover:bg-business.accent/90 transition-all duration-300 hover:scale-110 flex items-center justify-center z-50 animate-bounce-subtle"
          aria-label="お問い合わせチャットボットを開く"
        >
          <Bot className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>
      )}

      {/* チャットボットモーダル背景（オーバーレイ） */}
      {isChatbotOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:bg-transparent"
          onClick={() => {
            setIsChatbotOpen(false);
            setStep(0);
            setFormData({ type: '', purpose: '', contact: '', content: '', otherContent: '' });
            setSubmitStatus('idle');
          }}
        />
      )}

      {/* チャットボットモーダル */}
      {isChatbotOpen && (
        <div className="fixed bottom-0 left-0 right-0 sm:bottom-6 sm:left-auto sm:right-6 sm:w-full sm:max-w-md sm:h-[600px] sm:max-h-[600px] sm:rounded-xl h-[calc(100vh-4rem)] sm:h-[600px] bg-business.navy shadow-2xl z-50 flex flex-col border-t-2 sm:border-2 border-business.accent/30 sm:rounded-t-xl">
          {/* ヘッダー */}
          <div className="bg-business.accent text-gray-900 rounded-t-xl sm:rounded-t-xl px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <h3 className="font-bold text-sm sm:text-base">お問い合わせ・ご相談</h3>
            </div>
            <button
              onClick={() => {
                setIsChatbotOpen(false);
                setStep(0);
                setFormData({ type: '', purpose: '', contact: '', content: '', otherContent: '' });
                setSubmitStatus('idle');
              }}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="閉じる"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* チャットボットコンテンツ */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {/* チャットボット風UI */}
            <div className="space-y-4 mb-4">
                  {/* 質問1: 起業家個人か */}
                  {step >= 0 && (
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-business.accent flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div className="bg-business.base rounded-lg px-3 py-2 text-sm text-business.light">
                          {step === 0 ? 'どちらでいらっしゃいますか？' : `どちらでいらっしゃいますか？ → ${formData.type}`}
                        </div>
                      </div>
                      {step === 0 && (
                        <div className="flex gap-2 ml-10">
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, type: '起業家' });
                              setTimeout(() => setStep(1), 300);
                            }}
                            className="px-4 py-2 bg-business.accent text-gray-900 rounded-lg hover:bg-business.accent/90 transition-colors text-sm font-medium"
                          >
                            起業家
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, type: '個人' });
                              setTimeout(() => setStep(1), 300);
                            }}
                            className="px-4 py-2 bg-business.accent text-gray-900 rounded-lg hover:bg-business.accent/90 transition-colors text-sm font-medium"
                          >
                            個人
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 質問2: 依頼か相談か */}
                  {step >= 1 && (
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-business.accent flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div className="bg-business.base rounded-lg px-3 py-2 text-sm text-business.light">
                          {step === 1 ? 'ご依頼ですか？それともご相談ですか？' : `ご依頼ですか？それともご相談ですか？ → ${formData.purpose}`}
                        </div>
                      </div>
                      {step === 1 && (
                        <div className="flex gap-2 ml-10">
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, purpose: '依頼' });
                              setTimeout(() => setStep(2), 300);
                            }}
                            className="px-4 py-2 bg-business.accent text-gray-900 rounded-lg hover:bg-business.accent/90 transition-colors text-sm font-medium"
                          >
                            依頼
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, purpose: '相談' });
                              setTimeout(() => setStep(2), 300);
                            }}
                            className="px-4 py-2 bg-business.accent text-gray-900 rounded-lg hover:bg-business.accent/90 transition-colors text-sm font-medium"
                          >
                            相談
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 質問3: 電話番号又はメアド */}
                  {step >= 2 && (
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-business.accent flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div className="bg-business.base rounded-lg px-3 py-2 text-sm text-business.light">
                          {step === 2 ? '連絡先（電話番号またはメールアドレス）を教えてください' : `連絡先 → ${formData.contact}`}
                        </div>
                      </div>
                      {step === 2 && (
                        <div className="ml-10">
                          <input
                            type="text"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            className="w-full px-3 py-2 bg-white text-gray-900 rounded-lg border border-business.base focus:ring-2 focus:ring-business.accent focus:border-transparent text-sm"
                            placeholder="電話番号またはメールアドレス"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && formData.contact.trim() !== '') {
                                e.preventDefault();
                                setStep(3);
                              }
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* 質問4: 依頼内容 */}
                  {step >= 3 && (
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-business.accent flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div className="bg-business.base rounded-lg px-3 py-2 text-sm text-business.light">
                          {step === 3 ? 'どのような内容でしょうか？' : `依頼内容 → ${formData.content === 'その他' ? formData.otherContent : formData.content}`}
                        </div>
                      </div>
                      {step === 3 && (
                        <div className="ml-10 space-y-2">
                          <select
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full px-3 py-2 bg-white text-gray-900 rounded-lg border border-business.base focus:ring-2 focus:ring-business.accent focus:border-transparent text-sm"
                          >
                            <option value="">選択してください</option>
                            <option value="LPの作成・改修について">LPの作成・改修について</option>
                            <option value="アプリやWEB開発について">アプリやWEB開発について</option>
                            <option value="自動化について">自動化について</option>
                            <option value="その他">その他</option>
                          </select>
                          {formData.content === 'その他' && (
                            <input
                              type="text"
                              value={formData.otherContent}
                              onChange={(e) => setFormData({ ...formData, otherContent: e.target.value })}
                              className="w-full px-3 py-2 bg-white text-gray-900 rounded-lg border border-business.base focus:ring-2 focus:ring-business.accent focus:border-transparent text-sm"
                              placeholder="その他の内容を入力してください"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 送信ボタン */}
                {step === 3 && canProceed() && (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !canProceed()}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-business.accent text-gray-900 rounded-lg hover:bg-business.accent/90 transition-colors font-medium text-sm disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                )}

                {submitStatus === 'success' && (
                  <p className="text-sm text-business.green text-center mt-4">お問い合わせありがとうございます。メールを送信しました。</p>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-red-500 text-center">送信に失敗しました。</p>
                    {errorMessage && (
                      <p className="text-xs text-red-400 text-center break-words">
                        エラー詳細: {errorMessage}
                      </p>
                    )}
                    <p className="text-xs text-business.light/70 text-center">
                      ブラウザのコンソール（F12キー）で詳細を確認できます。
                    </p>
                  </div>
                )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;