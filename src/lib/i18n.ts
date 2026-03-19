// i18n configuration and utilities

export const languages = ["it", "en"] as const;
export type Language = (typeof languages)[number];

export const defaultLang: Language = "it";

export const languageNames: Record<Language, string> = {
  it: "Italiano",
  en: "English",
};

export function isValidLang(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

export function getAlternateLang(lang: Language): Language {
  return lang === "it" ? "en" : "it";
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (isValidLang(lang)) return lang;
  return defaultLang;
}
