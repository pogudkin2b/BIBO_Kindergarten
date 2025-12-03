'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n, Locale, localeNames } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#advantages', label: t.nav.about },
    { href: '#program', label: t.nav.program },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#nutrition', label: t.nav.nutrition },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contacts', label: t.nav.contacts },
  ];

  const locales: Locale[] = ['ru', 'en', 'ka'];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-pure/95 backdrop-blur-xl shadow-fairy-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo with magical sparkle */}
          <a href="#" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="relative w-12 h-12 bg-gradient-to-br from-meadow to-meadow-dark rounded-3xl flex items-center justify-center shadow-fairy"
            >
              <svg className="w-6 h-6 text-pure" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37-.48-.62-.83-1.32-1.07-2.07-.96.59-2.08.94-3.28.94-3.58 0-6.5-2.92-6.5-6.5S9.42 6.5 13 6.5c2.73 0 5.06 1.7 6.02 4.1.63-.11 1.28-.1 1.9.03C20.08 6.6 16.47 2 12 2zm1 5v4.41l3.29 3.29-1.41 1.41L11 12.41V7h2z"/>
              </svg>
              {/* Tiny sparkle */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-sunrise rounded-full shadow-glow-sunrise"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl text-cocoa tracking-tight">
                БИБО
              </span>
              <span className="text-[10px] text-cocoa-light tracking-widest uppercase hidden md:block">
                Детский сад
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                className="relative px-4 py-2 text-cocoa-light hover:text-cocoa transition-colors text-sm font-medium group rounded-full hover:bg-sunrise-lightest/50"
              >
                {item.label}
                <motion.span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-coral via-sunrise to-meadow rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-4">
            {/* Language Switcher with fairy style */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-pure border-2 border-sky-light/40 hover:border-sky transition-all text-cocoa font-medium text-sm shadow-fairy"
              >
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-light to-sky flex items-center justify-center text-[11px] font-bold text-pure shadow-inner-glow">
                  {locale.toUpperCase().charAt(0)}
                </span>
                {localeNames[locale]}
                <motion.svg
                  animate={{ rotate: isLangOpen ? 180 : 0 }}
                  className="w-3 h-3 text-cocoa-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.9 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 mt-3 w-36 bg-pure rounded-3xl shadow-fairy-xl border border-sky-light/30 overflow-hidden"
                  >
                    {locales.map((loc, idx) => (
                      <motion.button
                        key={loc}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => {
                          setLocale(loc);
                          setIsLangOpen(false);
                        }}
                        className={`w-full px-4 py-3.5 text-left text-sm transition-all flex items-center gap-3 ${
                          locale === loc
                            ? 'bg-gradient-to-r from-sky-lightest to-meadow-lightest text-cocoa font-semibold'
                            : 'text-cocoa-light hover:bg-sunrise-lightest hover:text-cocoa'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shadow-fairy ${
                          locale === loc
                            ? 'bg-gradient-to-br from-sky to-meadow text-pure'
                            : 'bg-latte text-cocoa-light'
                        }`}>
                          {loc.toUpperCase().charAt(0)}
                        </span>
                        {localeNames[loc]}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Desktop with gradient */}
            <motion.a
              href="#contacts"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-meadow to-meadow-dark hover:from-meadow-dark hover:to-meadow text-pure font-semibold text-sm rounded-full transition-all shadow-fairy-lg hover:shadow-glow-meadow"
            >
              <span>{t.hero.cta}</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>

            {/* Mobile Menu Button with gradient */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-11 h-11 rounded-2xl bg-gradient-to-br from-sunrise-light to-sunrise flex items-center justify-center shadow-fairy"
            >
              <motion.svg
                className="w-5 h-5 text-cocoa"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with fairy style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-gradient-to-b from-pure to-cream border-t border-sky-light/30"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring' }}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ x: 5 }}
                  className="block w-full text-left py-4 px-5 rounded-3xl text-cocoa hover:bg-gradient-to-r hover:from-sunrise-lightest hover:to-meadow-lightest transition-all font-medium shadow-fairy hover:shadow-fairy-lg"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-coral to-meadow" />
                    {item.label}
                  </span>
                </motion.button>
              ))}
              <motion.a
                href="#contacts"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navItems.length * 0.05, type: 'spring' }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center py-5 mt-4 bg-gradient-to-r from-meadow to-meadow-dark text-pure font-bold text-lg rounded-3xl shadow-fairy-lg hover:shadow-glow-meadow transition-all"
              >
                {t.hero.cta}
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
