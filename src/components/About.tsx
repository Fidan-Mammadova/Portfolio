"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Секция «О себе» — расширенное описание.
 * About section — extended bio.
 */
export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative border-t border-slate-800 bg-slate-900/50 px-6 py-20 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-8 text-3xl font-semibold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t.about.title}
        </motion.h2>

        <motion.div
          className="space-y-4 text-slate-300 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </motion.div>
      </div>
    </section>
  );
}
