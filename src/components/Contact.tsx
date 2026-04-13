import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeYMecg-82GLXNKDyDIWxCIUalRRseSTT8vLRQ5lsuNL9C6-A/viewform?usp=dialog';

const Contact: React.FC = () => {
  return (
    <section className="bg-business.blue text-business.light h-full overflow-y-auto py-6" aria-labelledby="contact-heading">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 flex items-center justify-center min-h-full">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            id="contact-heading"
            className="text-2xl sm:text-4xl font-bold text-business.accent mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            お気軽にご相談ください
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-business.light/90 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            お店のホームページ、集客用ページ、業務効率化など、ご要望に合わせて対応いたします。
            お見積もりは無料です。まずはお気軽にご連絡ください。
          </motion.p>
          <motion.ul
            className="text-sm sm:text-base text-business.light/80 mb-8 text-left max-w-md mx-auto space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>・対応内容のヒアリング（無料）</li>
            <li>・お見積もりのご提示</li>
            <li>・納期・スケジュールのご相談</li>
          </motion.ul>

          <motion.a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-business.green text-white rounded-xl font-semibold text-lg hover:bg-business.green/90 transition-colors shadow-lg"
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
            className="flex gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://github.com/hafljin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 text-business.accent"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/osawaru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-business.accent/20 hover:bg-business.accent/30 rounded-full transition-all duration-200 text-business.accent"
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
