"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Секция Hero — имя, должность, краткое описание, CTA.
 * Hero section — name, title, short bio, call-to-action.
 */
export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-start justify-center px-6 md:px-16 overflow-hidden"
    >
      {/* Фоновый градиент / Background gradient */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 max-w-3xl">
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          {t.hero.name}
        </motion.h1>

        <motion.h2
          className="mb-6 text-xl text-slate-300 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {t.hero.role}
        </motion.h2>

        <motion.p
          className="mb-10 max-w-xl text-slate-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {t.hero.bio}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.ctaContact}
          </motion.a>
          <motion.a
            href="/cv.pdf"
            download
            className="rounded-full border border-slate-600 px-6 py-3 text-slate-100 transition-colors hover:bg-slate-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.ctaCv}
          </motion.a>
        </motion.div>
      </div>

      {/* Декоративная линия вниз / Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="h-10 w-6 rounded-full border-2 border-slate-500 p-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div className="mx-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
