import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import type { DemoConfig } from '../demoConfig';

const HPTemplate: React.FC<{ config: DemoConfig }> = ({ config }) => {
  const [navOpen, setNavOpen] = useState(false);
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'メニュー・サービス', href: '#menu' },
    ...(config.galleryImages?.length ? [{ label: 'ギャラリー', href: '#gallery' }] : []),
    { label: 'お問い合わせ', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-slate-900">
              {config.title}
            </a>
            <button
              className="sm:hidden p-2"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <nav
              className={`absolute sm:relative top-16 left-0 right-0 sm:top-0 bg-white sm:bg-transparent border-b sm:border-0 border-slate-100 ${
                navOpen ? 'block' : 'hidden sm:flex'
              }`}
            >
              <ul className="flex flex-col sm:flex-row gap-0 sm:gap-8 py-4 sm:py-0 px-4 sm:px-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block py-2 sm:py-0 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                      onClick={() => setNavOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        {config.heroImage && (
          <>
            <img
              src={config.heroImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          </>
        )}
        <div className="relative z-10 text-center text-white px-6 pt-24">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {config.title}
          </motion.h1>
          {config.catchcopy && (
            <motion.p
              className="text-xl sm:text-2xl opacity-95 font-light max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {config.catchcopy}
            </motion.p>
          )}
          {config.tagline && (
            <motion.p
              className="mt-2 text-base sm:text-lg opacity-80 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {config.tagline}
            </motion.p>
          )}
        </div>
      </section>

      {/* About */}
      {config.about && (
        <section id="about" className="py-20 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About
            </motion.h2>
            <motion.p
              className="text-slate-600 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {config.about}
            </motion.p>
          </div>
        </section>
      )}

      {/* Menu */}
      {config.menuItems && config.menuItems.length > 0 && (
        <section id="menu" className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              メニュー・料金
            </motion.h2>
            <div className="space-y-0 overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
              {config.menuItems.map((m, i) => (
                <motion.div
                  key={i}
                  className="flex flex-wrap justify-between items-center py-5 px-6 bg-white border-b last:border-b-0 border-slate-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ backgroundColor: 'rgb(248 250 252)' }}
                >
                  <div>
                    <span className="font-semibold text-slate-900">{m.name}</span>
                    {m.desc && (
                      <span className="text-slate-500 text-sm ml-2 block sm:inline mt-0.5 sm:mt-0">
                        {m.desc}
                      </span>
                    )}
                  </div>
                  {m.price && (
                    <span className="font-bold text-slate-900 text-lg mt-2 sm:mt-0">
                      {m.price}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {config.galleryImages && config.galleryImages.length > 0 && (
        <section id="gallery" className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ギャラリー
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Footer */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            お問い合わせ
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a
              href="tel:03-1234-5678"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-xl font-medium hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              03-1234-5678
            </a>
            <a
              href="mailto:info@example.com"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-white rounded-xl font-medium hover:bg-white hover:text-slate-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@example.com
            </a>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center justify-center gap-2 text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>東京都〇〇区〇〇 1-2-3</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HPTemplate;
