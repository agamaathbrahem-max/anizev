import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import frData from '../locales/fr.json';
import enData from '../locales/en.json';

export type Locale = 'fr' | 'en';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string, fallback?: string) => string;
  isFrench: boolean;
}

const dictionaries: Record<Locale, any> = {
  fr: frData,
  en: enData,
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'en' || urlLang === 'fr') {
        return urlLang;
      }
      const stored = localStorage.getItem('anizav_locale') || localStorage.getItem('anizav_lang');
      if (stored === 'en' || stored === 'fr') {
        return stored;
      }
    } catch {
      // Fallback
    }
    return 'fr';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('anizav_locale', newLocale);
      localStorage.setItem('anizav_lang', newLocale);
      document.documentElement.lang = newLocale;

      // Update URL query param cleanly without reloading
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useMemo(() => {
    return (path: string, fallback?: string): string => {
      const keys = path.split('.');
      let current: any = dictionaries[locale];

      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          // Fallback to English dictionary if not found in current
          let fallbackDict: any = dictionaries.en;
          for (const fbKey of keys) {
            if (fallbackDict && typeof fallbackDict === 'object' && fbKey in fallbackDict) {
              fallbackDict = fallbackDict[fbKey];
            } else {
              fallbackDict = undefined;
              break;
            }
          }
          if (fallbackDict && typeof fallbackDict === 'string') {
            return fallbackDict;
          }
          return fallback || path;
        }
      }

      if (typeof current === 'string') {
        return current;
      }
      return fallback || path;
    };
  }, [locale]);

  const value = {
    locale,
    setLocale,
    t,
    isFrench: locale === 'fr',
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
