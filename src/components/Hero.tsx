'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sunrise-lightest via-sky-lightest to-meadow-lightest pt-24 pb-16">
      {/* Magical floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${(i * 17 + 10) % 90}%`,
              top: `${(i * 23 + 15) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          >
            <div className="w-2 h-2 rounded-full bg-sunrise-accent shadow-glow-sunrise" />
          </motion.div>
        ))}

        {/* Soft glowing orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-1/4 w-64 h-64 bg-coral/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute bottom-40 left-1/4 w-80 h-80 bg-fairy/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 left-10 w-72 h-72 bg-meadow/20 rounded-full blur-3xl"
        />

        {/* Decorative SVG elements */}
        <svg className="absolute top-32 right-20 w-24 h-24 text-coral/30" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge with sparkle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-pure/80 backdrop-blur-md rounded-full mb-8 shadow-fairy border border-sunrise/20"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                ✨
              </motion.span>
              <span className="text-cocoa-light text-sm font-medium tracking-wide">
                {t.hero.subtitle}
              </span>
            </motion.div>

            {/* Main heading with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-cocoa mb-8 leading-[1.1]"
            >
              <span className="block">Русско-Английский</span>
              <span className="block">детский сад</span>
              <span className="block mt-2 bg-gradient-to-r from-coral via-sunrise to-meadow bg-clip-text text-transparent font-semibold">
                «БИБО»
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-lg md:text-xl text-cocoa-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contacts"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-meadow to-meadow-dark hover:from-meadow-dark hover:to-meadow text-pure font-semibold text-lg rounded-full transition-all shadow-fairy-lg hover:shadow-glow-meadow"
              >
                {t.hero.cta}
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
              <motion.a
                href="https://wa.me/995577712351"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-pure hover:bg-sunrise-lightest text-cocoa font-semibold text-lg rounded-full transition-all border-2 border-sunrise/40 hover:border-sunrise shadow-fairy"
              >
                <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {t.hero.whatsapp}
              </motion.a>
            </motion.div>

            {/* Trust indicators with soft glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-14 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-4">
                {[
                  { bg: 'from-meadow to-sky', letter: 'A' },
                  { bg: 'from-coral to-fairy', letter: 'B' },
                  { bg: 'from-sunrise to-coral', letter: 'C' },
                  { bg: 'from-fairy to-meadow', letter: 'D' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className={`w-12 h-12 rounded-full border-4 border-pure bg-gradient-to-br ${item.bg} flex items-center justify-center text-pure text-sm font-bold shadow-fairy`}
                  >
                    {item.letter}
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-cocoa-light">
                <span className="font-semibold text-cocoa text-lg">50+</span> happy families
              </div>
            </motion.div>
          </motion.div>

          {/* Image Composition with magical effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Glowing background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-sunrise/30 via-coral/20 to-fairy/30 rounded-6xl blur-2xl" />

              {/* Main image container */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-6xl shadow-fairy-xl">
                  <img
                    src="/images/BIBO_Kindergarten_Tbilisi.png"
                    alt="BIBO Kindergarten Tbilisi"
                    className="w-full h-[450px] md:h-[550px] object-cover"
                  />
                  {/* Magical overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coral/10 via-transparent to-sky/10" />
                </div>

                {/* Floating sparkle decorations */}
                {[
                  { pos: 'top-8 right-8', delay: 0 },
                  { pos: 'bottom-16 left-8', delay: 0.5 },
                  { pos: 'top-1/3 left-4', delay: 1 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${item.pos} text-4xl`}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: 'easeInOut',
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </div>

              {/* Floating info cards with new design */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="absolute -left-8 bottom-20 bg-pure/95 backdrop-blur-md rounded-4xl shadow-fairy-lg p-6 border-2 border-sunrise/30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sunrise-light to-sunrise rounded-3xl flex items-center justify-center shadow-inner-glow">
                    <svg className="w-8 h-8 text-cocoa" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-4xl text-cocoa">{t.pricing.price}</div>
                    <div className="text-sm text-cocoa-light">{t.pricing.currency}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="absolute -right-8 top-12 bg-pure/95 backdrop-blur-md rounded-4xl shadow-fairy-lg p-6 border-2 border-sky/30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-light to-sky rounded-3xl flex items-center justify-center shadow-inner-glow">
                    <svg className="w-8 h-8 text-pure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-4xl text-cocoa">2–6</div>
                    <div className="text-sm text-cocoa-light">years old</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 60C240 100 480 100 720 60C960 20 1200 20 1440 60V120H0V60Z"
            fill="#FAF8F6"
          />
        </svg>
      </div>

      {/* Scroll indicator with bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-cocoa-light tracking-widest uppercase font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-cocoa-light/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-meadow rounded-full shadow-glow-meadow"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
