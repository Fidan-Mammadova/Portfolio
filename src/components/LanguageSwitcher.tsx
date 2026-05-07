"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/types";
import { LOCALES } from "@/i18n/types";

/**
 * Переключатель языка (AZ / RU / EN) в шапке страницы.
 * Language switcher (AZ / RU / EN) for the page header.
 */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className="flex shrink-0 items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/80 p-1"
      role="group"
      aria-label={t.languageSwitcher.ariaLabel}
    >
      {LOCALES.map((code: Locale) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={
            locale === code
              ? "rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white"
              : "rounded-md px-2.5 py-1 text-xs font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200"
          }
        >
          {t.languageSwitcher[code]}
        </button>
      ))}
    </div>
  );
}
