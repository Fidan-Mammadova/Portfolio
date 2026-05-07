"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

/**
 * Шапка с навигацией и переключателем языка.
 * Header with navigation and language switcher.
 */
export function Header() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.showcase, href: "#showcase" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-16">
        <a href="#hero" className="text-lg font-semibold text-white">
          {t.nav.brand}
        </a>
        <div className="flex flex-wrap items-center justify-end gap-4 md:gap-6">
          <ul className="flex flex-wrap items-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-slate-300 transition-colors hover:text-emerald-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
