/**
 * Поддерживаемые локали интерфейса / Supported UI locales.
 */
export type Locale = "az" | "ru" | "en";

/** Список локалей для переключателя / Locales list for the switcher */
export const LOCALES: readonly Locale[] = ["az", "ru", "en"] as const;

/**
 * Проверка строки на допустимую локаль / Guard: string is a valid Locale.
 */
export function isLocale(value: string): value is Locale {
  return value === "az" || value === "ru" || value === "en";
}
