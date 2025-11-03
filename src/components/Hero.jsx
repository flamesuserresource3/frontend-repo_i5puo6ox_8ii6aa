import React from 'react';
import Spline from '@splinetool/react-spline';
import { Camera, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay for readability (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-neutral-700/70 backdrop-blur px-3 py-1 rounded-full border border-neutral-200/70 shadow-sm">
              <Camera className="h-4 w-4" />
              Fine Art & Editorial Photography
            </span>
            <h1 className="mt-6 text-4xl leading-[1.1] font-semibold md:text-6xl lg:text-7xl">
              Crafting light, shadow, and story into timeless photographs
            </h1>
            <p className="mt-6 text-base md:text-lg text-neutral-700 max-w-2xl">
              I’m a photographer focused on minimal, modern aesthetics—capturing honest moments with precise composition, natural light, and a calm editorial tone.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#portfolio"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-lg shadow-black/10 hover:shadow-black/20 transition-shadow"
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Book a Session
              </motion.a>
              <div className="ml-2 flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-50">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#contact" aria-label="Email" className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-50">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
