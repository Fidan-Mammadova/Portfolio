"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

/** Навыки из резюме / Skills from resume */
const SKILLS = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "React Query",
  "SWR",
  "Redux Toolkit",
  "Zustand",
  "Shadcn/UI",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "Webpack / Vite",
];

/**
 * Секция навыков с анимированными тегами.
 * Skills section with animated tags.
 */
export function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="border-t border-slate-800 bg-slate-950 px-6 py-20 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-10 text-3xl font-semibold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t.skills.title}
        </motion.h2>

        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill, index) => (
            <motion.span
              key={skill}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-100 md:text-base"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.06, backgroundColor: "rgb(30 64 59)" }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
