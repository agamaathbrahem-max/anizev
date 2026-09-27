import React, { useState, useRef, useEffect } from 'react';
import { useI18n, Locale } from '../context/I18nContext';
import { Globe, Check, ChevronDown } from 'lucide-react';

export const LanguageDropdown: React.FC = () => {
  const { locale, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Locale; name: string; nativeName: string; flag: string }[] = [
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t('nav.selectLang', 'Select language')}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider transition-all border border-white/20 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:ring-offset-[#0B0F19]"
      >
        <Globe className="w-3.5 h-3.5 text-blue-300" aria-hidden="true" />
        <span className="font-bold uppercase tracking-wider">{currentLang.code.toUpperCase()}</span>
        <span className="hidden sm:inline text-white/70 font-normal">| {currentLang.nativeName}</span>
        <ChevronDown className={`w-3 h-3 text-white/60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu-button"
          className="absolute right-0 mt-2 w-48 rounded-xl bg-[#0f172a] border border-slate-700 shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95 focus:outline-none"
        >
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b border-slate-800">
            {t('nav.langSelector', 'Language / Langue')}
          </div>
          {languages.map((lang) => {
            const isSelected = lang.code === locale;
            return (
              <button
                key={lang.code}
                role="menuitem"
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors text-left ${
                  isSelected
                    ? 'bg-blue-600/30 text-white font-semibold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base" aria-hidden="true">{lang.flag}</span>
                  <div>
                    <span className="font-semibold block">{lang.nativeName}</span>
                    <span className="text-[10px] text-slate-400">{lang.name}</span>
                  </div>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
