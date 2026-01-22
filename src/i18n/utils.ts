import { ui, defaultLang } from './ui';

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export const useTranslations = (lang: keyof typeof ui) => {
  return (key: keyof typeof ui[typeof defaultLang]) => {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  };
}
