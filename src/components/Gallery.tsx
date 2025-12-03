'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const images = [
  { src: '/images/наша жизнь/509602516_10022649514454643_8556444660979512373_n.webp', alt: 'Дети в детском саду БИБО' },
  { src: '/images/наша жизнь/499369044_10093078867411707_7215628561690900272_n.webp', alt: 'Творческие занятия' },
  { src: '/images/наша жизнь/481467813_1155250146300485_4921002663492483248_n.webp', alt: 'Игры и развитие' },
  { src: '/images/наша жизнь/480392934_1149045713587595_2892048886258677518_n.webp', alt: 'Активности в саду' },
  { src: '/images/наша жизнь/473785110_1126943559131144_228129965593422881_n.webp', alt: 'Обучение и игры' },
  { src: '/images/наша жизнь/473200074_1124220029403497_2493343347242294360_n.webp', alt: 'Наши дети' },
];

export default function Gallery() {
  const { t } = useI18n();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-to-b from-cream to-pure relative overflow-hidden">
      {/* Magical floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 23 + 15) % 95}%`,
              top: `${(i * 31 + 20) % 85}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + (i % 2),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div className={`w-3 h-3 rounded-full ${i % 3 === 0 ? 'bg-coral/40' : i % 3 === 1 ? 'bg-sky/40' : 'bg-fairy/40'}`} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header with storybook style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-fairy-lightest rounded-full text-cocoa font-medium text-sm mb-6 shadow-fairy"
          >
            <span className="text-xl">📸</span>
            Moments
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cocoa mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-cocoa-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        {/* Storybook Gallery Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-8"
          >
            <motion.div
              onClick={() => setSelectedImage(0)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative h-[350px] md:h-[550px] rounded-6xl overflow-hidden cursor-pointer group shadow-fairy-lg hover:shadow-fairy-xl transition-all"
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/50 via-transparent to-transparent" />
              {/* Magical sparkle on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-sunrise/10 via-transparent to-coral/10"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <span className="inline-block px-6 py-3 bg-pure/95 backdrop-blur-md rounded-full text-cocoa font-semibold shadow-fairy-lg border border-sunrise/30">
                  <span className="mr-2">✨</span>
                  Daily adventures
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Small images column */}
          {images.slice(1, 3).map((image, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="col-span-6 md:col-span-4"
            >
              <motion.div
                onClick={() => setSelectedImage(index + 1)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative h-[200px] md:h-[265px] rounded-5xl overflow-hidden cursor-pointer group shadow-fairy hover:shadow-fairy-lg transition-all"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-transparent" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-meadow/10 via-transparent to-sky/10"
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Bottom row */}
          {images.slice(3).map((image, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="col-span-6 md:col-span-4"
            >
              <motion.div
                onClick={() => setSelectedImage(index + 3)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative h-[200px] md:h-[265px] rounded-5xl overflow-hidden cursor-pointer group shadow-fairy hover:shadow-fairy-lg transition-all"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-transparent" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-fairy/10"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Link with fairy style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mt-20"
        >
          <motion.a
            href="https://www.instagram.com/bibo.kindergarten"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-5 px-10 py-5 bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral rounded-full transition-all shadow-fairy-lg hover:shadow-glow-coral"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-inner-glow">
              <svg className="w-6 h-6 text-pure" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-pure font-bold text-lg">@bibo.kindergarten</div>
              <div className="text-pure/80 text-sm">Follow our daily stories</div>
            </div>
            <motion.svg
              className="w-6 h-6 text-pure/80 group-hover:text-pure transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Magical Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-cocoa/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[85vh] rounded-5xl object-contain shadow-fairy-xl"
              />

              {/* Close button */}
              <motion.button
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-coral to-coral-dark rounded-full flex items-center justify-center shadow-fairy-lg hover:shadow-glow-coral transition-all"
              >
                <svg className="w-6 h-6 text-pure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Navigation buttons */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
                }}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-pure/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-fairy-lg hover:shadow-glow-sunrise transition-all"
              >
                <svg className="w-6 h-6 text-cocoa" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
                }}
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-pure/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-fairy-lg hover:shadow-glow-sunrise transition-all"
              >
                <svg className="w-6 h-6 text-cocoa" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Counter dots */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {images.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(i); }}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`rounded-full transition-all ${
                      i === selectedImage
                        ? 'w-8 h-3 bg-gradient-to-r from-coral via-sunrise to-meadow shadow-glow-sunrise'
                        : 'w-3 h-3 bg-pure/40 hover:bg-pure/70'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
