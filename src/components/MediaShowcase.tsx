"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Медиа-данные (URL) — замените на свои фото и посты Instagram.
 * Media URLs — replace with your photos and Instagram posts.
 */
const INSTRUCTOR_MEDIA = {
  /** Ссылка на профиль Instagram / Instagram profile URL */
  instagramProfile: "https://www.instagram.com/fidan.dev/",
  photos: [
    {
      src: "/images/instructor/WhatsApp_Image_2025-09-01_at_16.17.00__4_-72a41cd4-bd5f-42d1-b82d-0e94328befae.png",
    },
    {
      src: "/images/instructor/WhatsApp_Image_2025-09-01_at_16.17.00__3_-195d79f7-4d72-4e06-a316-d20d2fd2adb5.png",
    },
    {
      src: "/images/instructor/Screenshot_2026-04-29_at_13.56.08-ccf30cb0-388d-4b57-8eea-e942f963b889.png",
    },
  ],
  /**
   * Встраивание: пост → «Встроить» → src iframe / Embed iframe src.
   */
  videoEmbeds: [
    { embedUrl: "https://www.instagram.com/reel/DL5JBMaxoXm/embed" },
    { embedUrl: "https://www.instagram.com/reel/DIg2YplN0wB/embed" },
  ],
} as const;

const DEVELOPER_MEDIA = {
  photos: [
    {
      src: "/images/developer/demoday.png",
    },
    {
      src: "/images/developer/marsolg.jpeg",
    },
    {
      src: "/images/developer/devfest.jpeg",
    },
    {
      src: "/images/developer/senaye1.png",
    },
    {
      src: "/images/developer/sabahhub.jpeg",
    },
    {
      src: "/images/developer/senaye2.png",
    },
  ],
} as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

/**
 * Секция «две роли»: сначала девелопер (хакатоны), затем инструктор (Instagram).
 * "Two roles" section: developer (hackathons) first, then instructor (Instagram).
 */
export function MediaShowcase() {
  const { t } = useLanguage();
  const s = t.showcase;

  return (
    <section
      id="showcase"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950 px-6 py-20 md:px-16 md:py-28"
    >
      {/* Декоративный фон / Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(139, 92, 246, 0.08), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-14 text-center md:mb-16"
          {...fadeUp}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-emerald-400/90">
            {s.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            {s.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">{s.subtitle}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Карточка: девелопер — первая в сетке / Developer card (first) */}
          <motion.article
            className="group relative rounded-3xl border border-violet-500/20 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 shadow-[0_0_0_1px_rgba(139,92,246,0.08)] backdrop-blur-sm md:p-8"
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div
              className="absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl transition-opacity group-hover:bg-violet-500/15"
              aria-hidden
            />

            <header className="relative mb-6">
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {s.developerTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {s.developerDescription}
              </p>
            </header>

            {/* Макет 2+3 сверху и горизонталь снизу / 2+3 top layout and horizontal bottom */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {/* Левая колонка: 2 фото в длину / Left column: 2 vertical photos */}
                <div className="grid grid-rows-2 gap-2 sm:gap-3">
                  <motion.div
                    className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={DEVELOPER_MEDIA.photos[0].src}
                      alt={s.developerAlts[0]}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div
                    className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.06 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={DEVELOPER_MEDIA.photos[1].src}
                      alt={s.developerAlts[1]}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Правая колонка: 3 фото в длину / Right column: 3 vertical photos */}
                <div className="grid grid-rows-3 gap-2 sm:gap-3">
                  <motion.div
                    className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={DEVELOPER_MEDIA.photos[2].src}
                      alt={s.developerAlts[2]}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div
                    className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.14 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={DEVELOPER_MEDIA.photos[3].src}
                      alt={s.developerAlts[3]}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div
                    className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.18 }}
                  >
                    {/* Пятый кадр с ивента / Fifth event shot */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={DEVELOPER_MEDIA.photos[4].src}
                      alt={s.developerAlts[4]}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Нижний горизонтальный ряд / Bottom horizontal row */}
              <motion.div
                className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.22 }}
              >
                <div className="aspect-3/2 w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={DEVELOPER_MEDIA.photos[5].src}
                    alt={s.developerAlts[4]}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {s.developerTip ? (
              <p className="mt-6 text-xs text-slate-500">{s.developerTip}</p>
            ) : null}
          </motion.article>

          {/* Карточка: инструктор / Instructor card */}
          <motion.article
            className="group relative rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 shadow-[0_0_0_1px_rgba(16,185,129,0.08)] backdrop-blur-sm md:p-8"
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <div
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-opacity group-hover:bg-emerald-500/15"
              aria-hidden
            />

            <header className="relative mb-6">
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {s.instructorTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {s.instructorDescription}
              </p>
              <a
                href={INSTRUCTOR_MEDIA.instagramProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 transition-colors hover:border-emerald-400/50 hover:bg-emerald-500/15"
              >
                {s.instagram}
                <span aria-hidden>↗</span>
              </a>
            </header>

            <div className="relative mb-8 grid grid-cols-3 gap-2 sm:gap-3">
              {INSTRUCTOR_MEDIA.photos.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  className="aspect-square overflow-hidden rounded-xl border border-white/5 bg-slate-900"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- внешние URL / external URLs */}
                  <img
                    src={photo.src}
                    alt={s.instructorAlts[i]}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {s.videoSection}
              </p>
              {INSTRUCTOR_MEDIA.videoEmbeds.map((item, index) => (
                <div
                  key={item.embedUrl}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-inner"
                >
                  <div className="flex items-center justify-between border-b border-white/5 px-4 py-2">
                    <span className="text-xs text-slate-400">
                      {s.videoTitles[index]}
                    </span>
                  </div>
                  {/* Крупнее кадр под Reels / Larger frame for Reels */}
                  <div className="relative aspect-[9/16] w-full bg-slate-950 md:aspect-[4/5]">
                    <iframe
                      src={`${item.embedUrl}?autoplay=1&loop=1`}
                      title={s.videoTitles[index]}
                      className="absolute inset-0 h-full w-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
