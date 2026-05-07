"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Тип проекта для TypeScript.
 * Project type for TypeScript.
 */
export interface ProjectItem {
  title: string;
  description: string;
  href: string;
  tags: string[];
  /** Локальный или внешний скрин; если нет — генерируем превью по href / Optional screenshot URL; if omitted, preview is derived from href */
  previewSrc?: string;
}

/** Превью страницы по URL (внешний сервис скриншотов) / Page preview from URL via screenshot service */
function projectPreviewUrl(href: string, override?: string): string {
  if (override) return override;
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(href)}?w=800`;
}

/**
 * Секция проектов с карточками и анимациями.
 * Projects section with cards and animations.
 */
export function Projects() {
  const { t } = useLanguage();
  const projects: ProjectItem[] = t.projects.items;

  return (
    <section
      id="projects"
      className="border-t border-slate-800 bg-slate-900/50 px-6 py-20 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-12 text-3xl font-semibold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={`${project.title}-${project.href}`}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition-colors hover:border-emerald-500/50 hover:bg-slate-800"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Превью страницы (как выглядит сайт) / Live page preview thumbnail */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element -- внешний URL превью / external preview URL */}
                <img
                  src={projectPreviewUrl(project.href, project.previewSrc)}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-emerald-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-slate-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-slate-700 px-2 py-0.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
