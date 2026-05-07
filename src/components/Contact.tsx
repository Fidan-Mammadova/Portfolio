"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Контактные ссылки — замените на свои / Contact links — replace with yours.
 */
const LINKS = [
  { label: "Email", href: "imfidanmamedova@gmail.com" },
  { label: "GitHub", href: "https://github.com/Fidan-Mammadova" },
  { label: "Telegram", href: "https://t.me/@imfidanm" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/imfidanmamedova/" },
];

/**
 * Секция контактов с анимированными кнопками.
 * Contact section with animated buttons.
 */
export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-900/50 px-6 py-20 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="mb-4 text-3xl font-semibold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t.contact.title}
        </motion.h2>
        <motion.p
          className="mb-10 text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t.contact.subtitle}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {LINKS.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-full border border-slate-600 px-6 py-3 text-slate-100 transition-colors hover:border-emerald-500/50 hover:bg-slate-800"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <motion.p
          className="mt-12 text-sm text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} — {t.contact.footerName}
        </motion.p>
      </div>
    </section>
  );
}
