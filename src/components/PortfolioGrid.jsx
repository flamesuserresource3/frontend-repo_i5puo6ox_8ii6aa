import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  // Portrait / Editorial
  'https://images.unsplash.com/photo-1520975693418-d701251c7b54?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503341338985-c0477be52513?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1640&auto=format&fit=crop',
  // Architecture / Minimal
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529913747985-734fc9ea69b3?q=80&w=1640&auto=format&fit=crop',
  // Lifestyle / Details
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514030938959-93c95ccd10b0?q=80&w=1640&auto=format&fit=crop',
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-10 md:mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Selected Work</h2>
            <p className="mt-3 text-neutral-600 max-w-2xl">
              A refined curation across portraits, architecture, and lifestyle. Clean lines, soft light, and intentional space.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {photos.map((src, idx) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (idx % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100"
            >
              <img
                src={src}
                alt="Portfolio"
                className="h-72 w-full object-cover md:h-80 lg:h-72 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
