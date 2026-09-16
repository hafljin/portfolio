import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeYMecg-82GLXNKDyDIWxCIUalRRseSTT8vLRQ5lsuNL9C6-A/viewform?usp=dialog';

const Contact: React.FC = () => {
  return (
    <section className="bg-[#252525] text-[#f6f3ed] h-full overflow-y-auto py-8 sm:py-12" aria-labelledby="contact-heading">
      <div className="relative w-full mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-12 flex items-center justify-center min-h-full overflow-hidden">
        <div className="absolute w-[42rem] h-[42rem] -right-48 -top-64 rounded-full bg-[#b5965a]/15 blur-3xl" />
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            id="contact-heading"
            className="font-display text-4xl sm:text-5xl sm:whitespace-nowrap font-semibold text-[#f6f3ed] mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            お気軽にご相談ください
          </motion.h2>
          <motion.p
            className="text-left text-sm sm:text-base text-[#f6f3ed]/80 mb-7 leading-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI活用・業務ツール、LP・ホームページなどを、まずは止まっている一工程から伺います。
            お見積もりは無料です。現在の流れが分かる資料が1件あると、より具体的にご提案できます。
          </motion.p>
          <motion.ul
            className="text-sm sm:text-base text-[#f6f3ed]/70 mb-9 text-left max-w-md mx-auto space-y-2 border-y border-[#d6bc83]/30 py-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>・止まっている業務と現在のやり方をヒアリング</li>
            <li>・納品物・対象外・お見積もりをご提示</li>
            <li>・納期・スケジュールをご相談</li>
          </motion.ul>

          <motion.a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e5d1a0] text-[#252525] rounded-sm font-semibold text-lg hover:bg-[#f4e5bf] transition-colors shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-6 h-6" />
            お問い合わせフォームを開く
          </motion.a>

          <motion.div
            className="flex gap-3 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://github.com/hafljin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#d6bc83]/45 hover:bg-[#d6bc83]/15 rounded-full transition-all duration-200 text-[#e5d1a0]"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mic-nem-468b79312"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#d6bc83]/45 hover:bg-[#d6bc83]/15 rounded-full transition-all duration-200 text-[#e5d1a0]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
