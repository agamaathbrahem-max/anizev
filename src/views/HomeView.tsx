import React, { useState } from 'react';
import { useI18n } from '../context/I18nContext';
import { NavTab } from '../components/Header';
import {
  ChevronRight,
  MapPin,
  Clock,
  ArrowRight,
  Calendar,
  Sparkles,
  BellRing,
  CheckCircle2,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: NavTab) => void;
  onOpenReservation: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenReservation }) => {
  const { t } = useI18n();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      alert(t('home.nlSuccess', "Merci pour votre inscription aux annonces officielles d'Anizav World Art !"));
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 400);
  };

  return (
    <div className="space-y-8">
      {/* 1. BREAKING NEWS / FLASH INFO TICKER */}
      <div className="bg-red-50/80 border border-red-200/90 rounded-xl p-3 sm:p-3.5 flex items-center gap-3 shadow-xs">
        <span className="bg-[#C84B31] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider whitespace-nowrap flex items-center gap-1.5 shrink-0 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>{t('home.tickerBadge', 'FLASH INFO')}</span>
        </span>
        <div className="overflow-hidden flex-1">
          <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
            <strong className="text-[#C84B31] font-bold">{t('home.tickerTitle', "Tournée américaine 2026 d’Aït Menguellet :")}</strong>{' '}
            <span className="text-slate-700 font-medium">
              {t('home.tickerDesc', 'dates confirmées à New York, Boston, Chicago, Washington D.C. et San Francisco. Billetterie ouverte !')}
            </span>
          </p>
        </div>
        <button
          onClick={() => onNavigate('concerts')}
          className="hidden sm:inline-flex items-center text-xs font-bold text-[#C84B31] hover:text-red-800 whitespace-nowrap shrink-0 ml-2 group"
        >
          <span>{t('home.tickerLink', 'Calendrier des dates')}</span>
          <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 2. HERO SPLIT SECTION (8 Cols Left / 4 Cols Right) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Block (8 Cols): Featured article card */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row">
          {/* Stage Photo Left Half */}
          <div className="md:w-1/2 relative bg-slate-900 overflow-hidden group min-h-[260px] md:min-h-[360px]">
            <img
              alt="The Town Hall, New York - Aït Menguellet"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGXN93dCyR8DfTby21ac-o7v3PnUYYZE2Wtcc2E9EbinsjFRh4R6JJjZdwhzLCoFoWufZLfTWqUV1rKHkdEaczffKIrZG04I2_BKSaVoAnTX0mBoSjNi0_TVmA3-Be12hzH5gZXVOtszEdZ3UuJD1jRYt2byJJ7ciVo9oULzIiDY3cwMc-c6YWaL0rsz2NwWAYqGATKE5QbjUqkY2zd_OZWmw3xdwH9Sqpq8wT2HnN_cFesuGtyXXWHGgBrnLRglKIwGymi44J9r0zZA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-[#C99700] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md border border-[#C99700]/30 shadow-xs">
              {t('home.heroBadge', 'ÉVÉNEMENT MAJEUR')}
            </span>
            <div className="absolute bottom-3 left-4 right-4 text-white/90 text-xs flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C84B31]" />
                {t('home.heroLocation', 'The Town Hall, New York')}
              </span>
              <span className="text-slate-300 font-medium">
                {t('home.heroSeason', 'Automne 2026')}
              </span>
            </div>
          </div>

          {/* Right Half Content */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-slate-50/50">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600">
                  {t('home.heroCategory', 'ARTS DU MONDE')}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {t('home.heroSubcategory', 'Dossier Curatorial')}
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-3">
                {t('home.heroTitle', 'Une scène d’exception : Rapprocher les maîtres de la chanson kabyle du public américain')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                {t('home.heroDesc', 'Depuis notre fondation en 2020, Anizav World Art LLC s’impose comme le pionnier de la gestion d’événements culturels vivants aux États-Unis. Nous bâtissons des ponts authentiques célébrant le patrimoine nord-africain, les traditions du mandole acoustique et la musique contemporaine au cœur des plus prestigieuses salles de concert américaines.')}
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm transition-all hover:shadow"
              >
                <span>{t('home.heroBtn', 'Découvrir le dossier')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{t('home.heroReadTime', 'Lecture : 4 min')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Block (4 Cols): Trending Now Sidebar Widget */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-2 h-4 bg-[#C84B31] rounded-xs" />
                <span>{t('home.trendingHeading', 'À LA UNE')}</span>
              </h2>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                {t('home.trendingSubheading', 'TOURNÉES PHARES')}
              </span>
            </div>

            <div className="space-y-3.5">
              {/* Item 1 */}
              <div
                onClick={() => onNavigate('concerts')}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <span className="w-6 h-6 rounded bg-[#C84B31] text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  1
                </span>
                <img
                  alt="Aït Menguellet en concert"
                  className="w-14 h-14 rounded-lg object-cover shrink-0 border border-slate-200 group-hover:opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8hMcA_hD50r5Glpf0QGqehlCC7jv5U4b0hDrubsRHxn9v3Fw35RszHu3pmjeA1dHE4puENO2-tmCLj4vrEL0EfazqQiKXWfgY43H3vLhJE082Cdzm77gnQ2A6_jSTJTv5nhUuzBBwzb2hx6_rCJlSOA_nOtKjWan0HxyyDfqgPa_41QVOZm1DCLAmXTOctnxqlU8w_XevaEW0qUjJwyPuEM_pzjk7Pw9VRVoV4AaWSpN7zq68SuX7"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
                    {t('home.trend1Title', 'Tournée US Aït Menguellet en direct')}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {t('home.trend1Desc', 'Poésie kabyle & cordes légendaires')}
                  </p>
                  <span className="text-[10px] text-[#C99700] font-semibold flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    <span>{t('home.trend1Date', 'Oct. – Nov. 2026')}</span>
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div
                onClick={() => onNavigate('artists')}
                className="flex items-start gap-3 group cursor-pointer pt-3 border-t border-slate-100"
              >
                <span className="w-6 h-6 rounded bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  2
                </span>
                <img
                  alt="Concert Ali Amran"
                  className="w-14 h-14 rounded-lg object-cover shrink-0 border border-slate-200 group-hover:opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrM9B1_V5MH-lIRSDV2n8pDRFUHskuDK4_dnY2cQOL3LddoPFFmrIGTTNcOl0U9l3KZRrAeSfkGH6fHBWRd7_YUoS2kUHUn5ui-LgQRCcZqXhwkAj0-1o6GVqxcH0kapXKlT3mSxNYAxn5Afzv3Q_6ZZLb9dPNYhaV5PXeFyG562h0pfsQSwHv_hoGhgrS4wjyz19m1MmRHbzujXnBmgl9Q9fuJvdPgNK2VTk_2fgLx5n5rUrWcDyn"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
                    {t('home.trend2Title', 'Concert Ali Amran')}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {t('home.trend2Desc', 'Fusion folk-rock & sets acoustiques')}
                  </p>
                  <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#C84B31]" />
                    <span>{t('home.trend2Loc', 'Boston & Montréal')}</span>
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div
                onClick={() => onNavigate('artists')}
                className="flex items-start gap-3 group cursor-pointer pt-3 border-t border-slate-100"
              >
                <span className="w-6 h-6 rounded bg-slate-700 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  3
                </span>
                <img
                  alt="Concerts US Mohamed Allaoua"
                  className="w-14 h-14 rounded-lg object-cover shrink-0 border border-slate-200 group-hover:opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiTGYk1vOGw1zm45OI1ELj5dnaFKuPQ0spVwcp4obbQt2aAOYmHnCYl2Di0QLi1jAGgxHYRzd70YLzi9E34FtjAwsVBYcN2aP4keC5lMRyIQvsZUkv5mBZzx_kxytqZrHnNJzZ1TTb4746crTBMBrTs6b78KtssWZIKzQnV12j1Fl80NNHIeKJ2vLjAPL3a_LrQgtUuoCoff1AdOpja4ct2u8d0S8DYIYhcZeK_9SSiJJgPXMgQskw"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
                    {t('home.trend3Title', 'Concerts US Mohamed Allaoua')}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {t('home.trend3Desc', 'Rythmes festifs & pop moderne')}
                  </p>
                  <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#C84B31]" />
                    <span>{t('home.trend3Loc', 'Chicago Métro')}</span>
                  </span>
                </div>
              </div>

              {/* Item 4 */}
              <div
                onClick={() => onNavigate('concerts')}
                className="flex items-start gap-3 group cursor-pointer pt-3 border-t border-slate-100"
              >
                <span className="w-6 h-6 rounded bg-slate-500 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  4
                </span>
                <img
                  alt="Avant-première Tournée 2027"
                  className="w-14 h-14 rounded-lg object-cover shrink-0 border border-slate-200 group-hover:opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdrCX1UaPM8JAce0eSJTi0C5SUqjCKU-FQaHMd33FoLgupMsFH9w-iv9X7GvJk7nObJHd8aSqKX6KTYTxQ6HU0qX0S1oPlBmYSxNNARv5xvMu6IMFsFAt5s-4jqzdY5VWghKiGh3hrz0ravX4ODVPoLrMXhlBs5WgcUpXRGdSiF3wTBj0vNVqwdfm5ekcTjB3zJ3jK64H8g2Uxv8VhiwVsEmDanfSdzZNvjX3XRhgy8T1_SDLbPq8M"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
                    {t('home.trend4Title', 'Avant-première Tournée 2027')}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {t('home.trend4Desc', 'Déploiement dans 8 nouvelles métropoles')}
                  </p>
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{t('home.trend4Status', 'Inscriptions prioritaires ouvertes')}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => onNavigate('concerts')}
              className="text-xs text-center block w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors"
            >
              {t('home.trendingFooterBtn', 'Consulter toutes les dates de concert →')}
            </button>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS & SERVICES (4-Column Equal Cards) */}
      <section className="pt-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <span className="w-2 h-4 bg-blue-600 rounded-xs" />
            <span>{t('home.pillarsHeading', 'NOS PILIERS & PRESTATIONS FONDAMENTALES')}</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            {t('home.pillarsSubheading', 'Excellence curatoriale depuis 2020')}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: PRODUCTION */}
          <div
            onClick={() => onNavigate('services')}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="h-36 overflow-hidden relative bg-slate-800">
              <img
                alt="Production de concerts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrM9B1_V5MH-lIRSDV2n8pDRFUHskuDK4_dnY2cQOL3LddoPFFmrIGTTNcOl0U9l3KZRrAeSfkGH6fHBWRd7_YUoS2kUHUn5ui-LgQRCcZqXhwkAj0-1o6GVqxcH0kapXKlT3mSxNYAxn5Afzv3Q_6ZZLb9dPNYhaV5PXeFyG562h0pfsQSwHv_hoGhgrS4wjyz19m1MmRHbzujXnBmgl9Q9fuJvdPgNK2VTk_2fgLx5n5rUrWcDyn"
              />
              <span className="absolute top-2.5 left-2.5 bg-[#C84B31] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow">
                {t('home.card1Tag', 'PRODUCTION')}
              </span>
            </div>
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {t('home.card1Title', 'Organisation de concerts & Production')}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                  {t('home.card1Desc', 'Régie technique intégrale, ingénierie sonore de pointe, accordage acoustique du mandole et coordination front-of-house pour tournées internationales.')}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{t('home.card1Dept', 'Département Production')}</span>
                <span className="font-semibold text-blue-600">{t('home.card1Scope', 'Envergure nationale')}</span>
              </div>
            </div>
          </div>

          {/* Card 2: PROMOTION */}
          <div
            onClick={() => onNavigate('services')}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="h-36 overflow-hidden relative bg-slate-800">
              <img
                alt="Marketing événementiel & Promotion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6-gWIsKepA3ffpYuKkdsRTVTC0Bmgu34pswI1aEfpALsU6O6hBsROYeBkPiuSgoU-Vb8nb2bbTfYvqcVEGUJ6nR4cE_rtjZXRVLGZe_7EenDp-xOcsg_ENK11vpTGkXGkfAdXS9HN-b2VwaR5Y-e1asbYYyGkwVR_xEQEZtKsQUU-aLAYuKK6kgr1aR4ym-tzemKRwgsGvmqqdIpqWS6W81iXBgXa4JUZ5_oaAQEg9994dyblm4Ie"
              />
              <span className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow">
                {t('home.card2Tag', 'PROMOTION')}
              </span>
            </div>
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {t('home.card2Title', 'Marketing événementiel & Promotion')}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                  {t('home.card2Desc', 'Campagnes ciblées auprès de la diaspora nord-américaine, achats médias numériques, relations presse et partenariats culturels de terrain.')}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{t('home.card2Dept', 'Bureau Marketing')}</span>
                <span className="font-semibold text-slate-700">{t('home.card2Scope', 'Numérique & Édition')}</span>
              </div>
            </div>
          </div>

          {/* Card 3: ARTISTES */}
          <div
            onClick={() => onNavigate('services')}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="h-36 overflow-hidden relative bg-slate-800">
              <img
                alt="Régie de tournée & Accompagnement"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8hMcA_hD50r5Glpf0QGqehlCC7jv5U4b0hDrubsRHxn9v3Fw35RszHu3pmjeA1dHE4puENO2-tmCLj4vrEL0EfazqQiKXWfgY43H3vLhJE082Cdzm77gnQ2A6_jSTJTv5nhUuzBBwzb2hx6_rCJlSOA_nOtKjWan0HxyyDfqgPa_41QVOZm1DCLAmXTOctnxqlU8w_XevaEW0qUjJwyPuEM_pzjk7Pw9VRVoV4AaWSpN7zq68SuX7"
              />
              <span className="absolute top-2.5 left-2.5 bg-[#C99700] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow">
                {t('home.card3Tag', 'ARTISTES')}
              </span>
            </div>
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {t('home.card3Title', 'Régie de tournée & Accompagnement')}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                  {t('home.card3Desc', 'Liaison artistique dédiée, logistique hôtelière haut de gamme, répétitions, transport multi-villes et accueil personnalisé.')}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{t('home.card3Dept', 'Pôle Artistes')}</span>
                <span className="font-semibold text-[#C99700]">{t('home.card3Scope', 'Logistique intégrale')}</span>
              </div>
            </div>
          </div>

          {/* Card 4: CONFORMITÉ */}
          <div
            onClick={() => onNavigate('services')}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="h-36 overflow-hidden relative bg-slate-800">
              <img
                alt="Coordination des salles & Cadre juridique"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWy_-eh4AoUL-hxh7rmTuTLY6C0CzHAzAH9bus5MeF4apfvuHmbp0LJXXH3bHFyIxhEdC5bOv_rLxt0AmeEhrkW-jFbVQnEypSJ3o9NytzDdH0LnUjelzzSDJkOmHeDg-Pw69vV6twwv_uwUr1-dDXgw8jQE_guNxZzl69d7fEdhZgNew0kgWB3DPxNvkqM9guqRLZoQKhzbPcNHhhTwdURxrc-I9joYY3tKqhYuHrWpYnu6Ic_woZ"
              />
              <span className="absolute top-2.5 left-2.5 bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow">
                {t('home.card4Tag', 'CONFORMITÉ')}
              </span>
            </div>
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {t('home.card4Title', 'Coordination des salles & Cadre juridique')}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                  {t('home.card4Desc', 'Traitement des visas P-1/P-3, conformité fiscale américaine, négociation des contrats de théâtre et assurances professionnelles complètes.')}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{t('home.card4Dept', 'Affaires juridiques')}</span>
                <span className="font-semibold text-emerald-600">{t('home.card4Scope', '100% Conforme')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM SECTION (7 Cols News / 5 Cols Curator's Pick & Newsletter) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        {/* Left Column (7 Cols): Vertical list titled "Latest News" */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-2 h-4 bg-[#C84B31] rounded-xs" />
              <span>{t('home.newsHeading', "ACTUALITÉS & ENGAGEMENTS DE L'INSTITUTION")}</span>
            </h2>
            <span className="text-xs text-slate-400 font-medium">
              {t('home.newsSubheading', 'Communiqués officiels')}
            </span>
          </div>

          <div className="space-y-4">
            {/* Row 1: Company Mission */}
            <div className="flex items-start gap-4 pb-4 border-b border-slate-100 group">
              <img
                alt="Patrimoine musical et artistique"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0 border border-slate-200"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVx8KzgPVSQ2mzLWHRkUsZ9FHl_V1nJ1ZhrvRss2BWsYi8i-Q42hhXYZdekixaP4TMnp4_U3YoIxHjUVh_-ls-q8-zYJXo-ITmZ-t44ctMMA1f4nCUbAtMvI6JvtlfNipcqFksUNQfKLYYCAbevzP9jDxFod64gMWQ0yYGYRMlG0Eah2nibA170ETnK-vppjm8QTx9IA1qsIFHrHGKa7MBHHYS70ldwYTw90KsxCePPGS9qIzsN6Vw"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C84B31]">
                  {t('home.news1Badge', "MISSION DE L'ORGANISATION")}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mt-0.5">
                  {t('home.news1Title', 'Promouvoir le patrimoine musical et artistique amazigh en Amérique du Nord')}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {t('home.news1Desc', "Créer des expériences de concert inoubliables qui mettent à l'honneur de riches traditions culturelles tout en garantissant des standards professionnels de production scénique.")}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-2">
                  <span>{t('home.news1Time', 'Il y a 1 heure')}</span>
                  <span>•</span>
                  <span>{t('home.news1Source', 'Archives de presse')}</span>
                </div>
              </div>
            </div>

            {/* Row 2: Vision */}
            <div className="flex items-start gap-4 pb-4 border-b border-slate-100 group">
              <img
                alt="Vision stratégique"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0 border border-slate-200"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKnM5brCwJ-HVcPZEk98iPqVVcXN1bQ8vFLpb3NVVVyqEodYGYlhBS6yHg4mgp8ZfzyEg93qBC-sEODJn6givJ0YYAVv5m7ylgja4zGCk50XMpI1MQGR_bYwuu1neWfgISHw5hCyaiC4pRA1jJUIyVzXDCXH9ecxlUyka1G7tr34s9kVEmXopW7l4y1L4GStn-3rt0psANyBSIBBP-44nzw4ZnbpU94RfWnCjL5FMj8IaFsMSdnN8n"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  {t('home.news2Badge', 'VISION STRATÉGIQUE')}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mt-0.5">
                  {t('home.news2Title', 'Développer la passerelle culturelle majeure pour les artistes internationaux')}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {t('home.news2Desc', "Bâtir des partenariats durables avec les auditoriums historiques et les centres des arts de la scène afin d'offrir une vitrine d'exception aux grands interprètes des musiques du monde.")}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-2">
                  <span>{t('home.news2Time', 'Il y a 3 heures')}</span>
                  <span>•</span>
                  <span>{t('home.news2Source', 'Note de la direction')}</span>
                </div>
              </div>
            </div>

            {/* Row 3: Core Values */}
            <div className="flex items-start gap-4 pb-4 border-b border-slate-100 group">
              <img
                alt="Valeurs fondamentales"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0 border border-slate-200"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuLWRYU0I9V5MsHiLHXWEagzaMCB67JLyYQZfU87xLM1_dQW-ybPya_Pp8KkeyC5HvE8XcNRc9RE5n30uo0roV1XXxTsDdfBI1d7bD_5YNxrkmRJDxj1Ww0PdKo_XnQBVBGblI0pnOLfnUYkhiPemtCPNb3aY7P6dLV8PFmhN303MjS4ggfECB23i7rKNGWagBpw3XISaFz4Egz2jLLqDtItEesHKIXGHT33tWBmB06rr9g2H5c7ig"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99700]">
                  {t('home.news3Badge', 'VALEURS FONDAMENTALES')}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mt-0.5">
                  {t('home.news3Title', 'Authenticité culturelle, intégrité opérationnelle et inclusivité')}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {t('home.news3Desc', 'Contrats transparents pour les créateurs, expérience fluide pour le public et valorisation du dialogue interculturel au sein des communautés.')}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-2">
                  <span>{t('home.news3Time', 'Hier')}</span>
                  <span>•</span>
                  <span>{t('home.news3Source', 'Gouvernance')}</span>
                </div>
              </div>
            </div>

            {/* Row 4: Future 2027 Roadmap */}
            <div className="flex items-start gap-4 group">
              <img
                alt="Feuille de route 2027"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0 border border-slate-200"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkdKtyvscxrxz6m8FDcQBxxdugsogqjkK0NJktURXkTkZJapx8rUAZHWbByrwlhFpld0aEGdQOH6GOXkv3k_FtHxpHMxOl9KPyd-st1NQwbHYItUQTHoPaEh6lf6y9bwFvqsUyku3c_e24-Y7UDga970BPDEYfp-_KJoHIm5yM9l6cGIBld0_cAPjretZVOb2-QoIP33jMnNeSvFEAnnEM1Q6B_oKtSscgfeyHgsNNlw8wBP5loIJ5"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  {t('home.news4Badge', "PERSPECTIVES D'AVENIR")}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mt-0.5">
                  {t('home.news4Title', 'Feuille de route 2027 : Projets symphoniques et résidences multi-États')}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {t('home.news4Desc', 'Lancement des premiers jalons pour des arrangements orchestraux transculturels associant maîtres instrumentistes méditerranéens et ensembles philharmoniques américains.')}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-2">
                  <span>{t('home.news4Time', '14 sept. 2026')}</span>
                  <span>•</span>
                  <span>{t('home.news4Source', 'Développement')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 Cols): Curator's Pick & Newsletter */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-2 h-4 bg-[#C99700] rounded-xs" />
                <span>{t('home.curatorHeading', 'LE CHOIX DU CURATEUR')}</span>
              </h2>
              <span className="text-[11px] font-bold uppercase text-[#C84B31] tracking-wider">
                {t('home.curatorSubheading', 'DOSSIER SPÉCIAL')}
              </span>
            </div>

            {/* Large Spotlight Photo */}
            <div className="rounded-xl overflow-hidden relative bg-slate-900 mb-4 h-48 sm:h-52 group">
              <img
                alt="Conception du circuit 2027"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrM9B1_V5MH-lIRSDV2n8pDRFUHskuDK4_dnY2cQOL3LddoPFFmrIGTTNcOl0U9l3KZRrAeSfkGH6fHBWRd7_YUoS2kUHUn5ui-LgQRCcZqXhwkAj0-1o6GVqxcH0kapXKlT3mSxNYAxn5Afzv3Q_6ZZLb9dPNYhaV5PXeFyG562h0pfsQSwHv_hoGhgrS4wjyz19m1MmRHbzujXnBmgl9Q9fuJvdPgNK2VTk_2fgLx5n5rUrWcDyn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="bg-[#C99700] text-black text-[9px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider">
                  {t('home.curatorExclusive', 'EXCLUSIVITÉ')}
                </span>
                <h3 className="font-serif text-xl font-bold leading-tight mt-1">
                  {t('home.curatorTitle', 'Dans les coulisses : Conception du circuit nord-américain 2027')}
                </h3>
              </div>
            </div>

            {/* Summary Text */}
            <p className="text-xs text-slate-600 leading-relaxed mb-5">
              {t('home.curatorDesc', "Une immersion au cœur de nos critères de sélection pour la saison 2027, l'acoustique exigeante des auditoriums partenaires et la façon dont Anizav World Art LLC assure des conditions de scène incomparables aux formations musicales internationales en tournée aux États-Unis.")}
            </p>
          </div>

          {/* Embedded Newsletter Subscription Input Field */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <BellRing className="w-4 h-4 text-[#C84B31]" />
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                {t('home.nlHeading', 'RESTEZ INFORMÉ DE NOS ANNONCES DE TOURNÉE')}
              </h4>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">
              {t('home.nlSubtext', "Recevez les codes d'accès exclusifs aux préventes, les plans de salle et les alertes de rencontres d'artistes.")}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t('home.nlPlaceholder', 'Votre adresse e-mail professionnelle...')}
                className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-[#121212] hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                {t('home.nlBtn', "S'abonner")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
