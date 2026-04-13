import React from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, MapPin } from 'lucide-react';
import type { DemoConfig } from '../demoConfig';
import { themeColors, defaultTheme } from '../themeColors';

interface LPTemplateProps {
  config: DemoConfig;
}

const getTheme = (config: DemoConfig) =>
  config.theme ? themeColors[config.theme] : themeColors[defaultTheme];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const LPTemplate: React.FC<LPTemplateProps> = ({ config }) => {
  const theme = getTheme(config);
  return (
    <div className="bg-white">
      {/* Hero - Full impact */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {config.heroImage && (
          <>
            <img
              src={config.heroImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          </>
        )}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.p
            className="text-sm uppercase tracking-[0.2em] opacity-90 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {config.title}
          </motion.h1>
          {config.catchcopy && (
            <motion.p
              className="text-xl sm:text-2xl opacity-95 mb-2 font-light"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {config.catchcopy}
            </motion.p>
          )}
          {config.tagline && (
            <motion.p
              className="text-base sm:text-lg opacity-80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {config.tagline}
            </motion.p>
          )}
          <motion.a
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-4 ${theme.bg} text-white rounded-full font-semibold text-lg ${theme.hover} transition-all shadow-xl hover:shadow-2xl hover:scale-105`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            お問い合わせ・ご予約
          </motion.a>
        </div>
      </section>

      {/* Features - Polished cards */}
      {config.features && config.features.length > 0 && (
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-4 text-slate-900"
              {...fadeUp}
            >
              選ばれる理由
            </motion.h2>
            {config.story && (
              <motion.p
                className="text-slate-600 text-center mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {config.story}
              </motion.p>
            )}
            <div className="grid md:grid-cols-3 gap-8">
              {config.features.map((f, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={`w-14 h-14 rounded-full ${theme.bg} text-white flex items-center justify-center mb-5`}>
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing - Clean table */}
      {config.pricing && config.pricing.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-slate-900"
              {...fadeUp}
            >
              料金一覧
            </motion.h2>
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {config.pricing.map((p, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-5 px-6 ${
                    i < config.pricing!.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <span className="text-slate-700 font-medium">{p.label}</span>
                  <span className="text-slate-900 font-bold text-lg">{p.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA - Professional footer */}
      <section
        id="contact"
        className={`py-20 px-6 ${theme.bg} text-white`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {config.contactText || 'お気軽にお問い合わせください'}
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="tel:03-1234-5678"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              03-1234-5678
            </a>
            <span className="text-slate-400">または</span>
            <a
              href="mailto:info@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all"
            >
              メールでお問い合わせ
            </a>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <MapPin className="w-4 h-4" />
            東京都〇〇区〇〇 1-2-3
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LPTemplate;
