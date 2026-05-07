"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";

/**
 * Клиентские провайдеры приложения (i18n и др.).
 * Client-side app providers (i18n, etc.).
 */
export function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
