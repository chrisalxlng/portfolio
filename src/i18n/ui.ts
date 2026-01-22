export const languages = {
  en: "English",
  de: "German",
};
export const localeOptions = Object.keys(languages);

export type Language = keyof typeof languages;

export const defaultLang = "en";

export const ui = {
  en: {
    "name": "Christopher Lang",
    "hero.me": "Me",
    "hero.title": "I build thoughtful digital products.",
    "hero.description": "Full-stack developer in Munich with over 3 years of experience. From idea to implementation – with a focus on users, design, and technology.",
    "socials.linkedin": "LinkedIn",
    "socials.github": "GitHub",
  },
  de: {
    "name": "Christopher Lang",
    "hero.me": "Ich",
    "hero.title": "Ich entwickle durchdachte digitale Produkte.",
    "hero.description": "Full-Stack Developer in München mit über 3 Jahren Erfahrung. Von der Idee bis zur Umsetzung – mit Blick auf Nutzer, Design und Technik.",
    "socials.linkedin": "LinkedIn",
    "socials.github": "GitHub",
  },
} as const;
