import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Instagram } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h3 className="text-2xl md:text-4xl font-semibold">Let’s create something timeless</h3>
          <p className="mt-4 text-neutral-700">
            For bookings, collaborations, or editorial commissions, get in touch. Share dates, references, locations, and we’ll shape a calm, considered production.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            href="mailto:studio@example.com"
            className="group rounded-2xl border border-neutral-200 p-6 hover:border-neutral-300 hover:shadow-md transition-all bg-white"
          >
            <Mail className="h-6 w-6" />
            <div className="mt-4 font-medium">studio@example.com</div>
            <div className="mt-1 text-sm text-neutral-600">Email</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900">
              Write an email <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            href="tel:+1234567890"
            className="group rounded-2xl border border-neutral-200 p-6 hover:border-neutral-300 hover:shadow-md transition-all bg-white"
          >
            <Phone className="h-6 w-6" />
            <div className="mt-4 font-medium">+1 (234) 567-890</div>
            <div className="mt-1 text-sm text-neutral-600">Phone</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900">
              Schedule a call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-neutral-200 p-6 hover:border-neutral-300 hover:shadow-md transition-all bg-white"
          >
            <Instagram className="h-6 w-6" />
            <div className="mt-4 font-medium">@studio</div>
            <div className="mt-1 text-sm text-neutral-600">Instagram</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900">
              View recent work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </motion.a>
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-200 p-6 md:p-8 bg-neutral-50/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form).entries());
              const params = new URLSearchParams(data);
              window.location.href = `mailto:studio@example.com?subject=Project Inquiry&body=${encodeURIComponent(
                `Name: ${data.name || ''}\nEmail: ${data.email || ''}\n\nMessage:\n${data.message || ''}`
              )}`;
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <input name="name" required placeholder="Your name" className="md:col-span-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10" />
            <input name="email" type="email" required placeholder="Email address" className="md:col-span-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10" />
            <input name="subject" placeholder="Subject (optional)" className="md:col-span-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10" />
            <textarea name="message" rows="5" required placeholder="Tell me about your project—dates, location, vision" className="md:col-span-3 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10" />
            <div className="md:col-span-3 flex items-center justify-between">
              <p className="text-xs text-neutral-500">By sending, you agree to be contacted back about your inquiry.</p>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-lg shadow-black/10 hover:shadow-black/20 transition">
                Send Inquiry <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Studio — All images © their respective owners for demo purposes.
        </div>
      </div>
    </section>
  );
}
