import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <h3 className="text-2xl md:text-4xl font-semibold">A minimalist eye with editorial clarity</h3>
            <p className="mt-5 text-neutral-700 leading-relaxed">
              I build work around patience, precision, and pacing—allowing time, light, and subject to breathe. From portraits to built space, my aim is the same: calm frames, honest stories.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Available for commissions worldwide. Based in a studio with natural light and a deep love for quiet detail.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm">Portrait</span>
              <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm">Editorial</span>
              <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm">Architecture</span>
              <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm">Lifestyle</span>
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100"
            >
              <img
                src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1080&auto=format&fit=crop"
                alt="Monochrome portrait"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="aspect-square overflow-hidden rounded-2xl bg-neutral-100"
            >
              <img
                src="https://images.unsplash.com/photo-1511918984145-48de785d4a4d?q=80&w=1080&auto=format&fit=crop"
                alt="Architectural minimal"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-square overflow-hidden rounded-2xl bg-neutral-100"
            >
              <img
                src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5a?q=80&w=1080&auto=format&fit=crop"
                alt="Lifestyle detail"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100"
            >
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1080&auto=format&fit=crop"
                alt="Editorial still"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
