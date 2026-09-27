import React from 'react';
import { useI18n } from '../context/I18nContext';
import { LanguageDropdown } from './LanguageDropdown';
import { Calendar, Search, Mail, Ticket } from 'lucide-react';

export type NavTab = 'home' | 'about' | 'services' | 'concerts' | 'artists' | 'contact';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenReservationModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenReservationModal,
}) => {
  const { t } = useI18n();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If searching, navigate to artists or concerts if not already there
    if (activeTab !== 'artists' && activeTab !== 'concerts') {
      setActiveTab('concerts');
    }
  };

  return (
    <header className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-40 shadow-xs">
      {/* Tier 1: Brand & Top Utilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo and Brand Title */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center space-x-3.5 group text-left focus:outline-none"
        >
          <div className="w-11 h-11 rounded-lg bg-[#0B0F19] p-1 border border-amber-600/40 flex items-center justify-center shrink-0 shadow-xs overflow-hidden group-hover:border-blue-600 transition-colors">
            <img
              alt="Anizav World Art LLC"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Y9c7o_Ri3Og8ZlSsq2wBKu0MtRLcM-ghE1-PRbMOJQtQRMbo07lVvraMGrK51psdGVQ9q2s2YjaL4gT-gV_dErtCGxWAKdV3_N5KQ-GlLP_iQi1rJ71II680Ts2VtI7KbyXPcVYVFFSU3V79Lbq_eljk8jFPicJ6C1rbyHgCgCywVnpOGx47Ui88FRkS1nTX33nJojCQKplqGOvLBpeDelOwnWBdJNeDprO0VStRbYOoUzjJOsZJL4_SqolO4FECow"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-slate-900 uppercase leading-tight">
              {t('common.brandName', 'ANIZAV WORLD ART LLC')}
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-[#795900] uppercase font-sans">
              {t('common.brandTagline', 'North American Berber & World Music Gateway')}
            </span>
          </div>
        </button>

        {/* Right: Date Badge & Search Input */}
        <div className="flex items-center space-x-4 w-full md:w-auto justify-end">
          <div className="hidden sm:inline-flex items-center text-xs text-slate-600 font-medium gap-1.5 px-3 py-1.5 rounded-full bg-[#faf8ff] border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-[#795900]" aria-hidden="true" />
            <span>{t('common.currentDate', 'Mer. 16 sept. 2026')}</span>
          </div>
          <form onSubmit={handleSearchSubmit} className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('common.searchPlaceholder', 'Rechercher des concerts, artistes, billetterie...')}
              className="w-full bg-[#faf8ff] border border-slate-200 rounded-full text-xs pl-8 pr-3 py-1.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-inner transition-all"
            />
          </form>
        </div>
      </div>

      {/* Tier 2: Dark Primary Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className="bg-[#0B0F19] text-white px-4 sm:px-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-13 sm:h-14">
          {/* Nav Items */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 overflow-x-auto scrollbar-none py-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === 'home'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('nav.home', 'Accueil')}
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === 'about'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('nav.about', 'À propos')}
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === 'services'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('nav.services', 'Nos prestations')}
            </button>

            <button
              onClick={() => setActiveTab('concerts')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0 ${
                activeTab === 'concerts'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>{t('nav.concerts', 'Concerts 2026')}</span>
            </button>

            <button
              onClick={() => setActiveTab('artists')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === 'artists'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('nav.artists', 'Artistes')}
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 ${
                activeTab === 'contact'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('nav.contact', 'Contact')}
            </button>
          </div>

          {/* Right Action Controls: Language Dropdown & Contact CTA */}
          <div className="flex items-center space-x-3 shrink-0 ml-4">
            <LanguageDropdown />

            {activeTab === 'concerts' ? (
              <button
                onClick={onOpenReservationModal}
                className="hidden sm:inline-flex items-center gap-1.5 border border-[#ffdf9e] text-[#ffdf9e] hover:bg-[#ffdf9e] hover:text-[#261a00] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
              >
                <Ticket className="w-3.5 h-3.5" />
                <span>{t('common.btnTickets', 'Billetterie')}</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveTab('contact')}
                className="hidden sm:inline-flex items-center gap-1.5 border border-[#ffdf9e] text-[#ffdf9e] hover:bg-[#ffdf9e] hover:text-[#261a00] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t('common.btnContact', 'Nous contacter')}</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
