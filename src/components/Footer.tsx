import React from 'react';
import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { NavTab } from './Header';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  onOpenReservation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservation }) => {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-[#0B0F19] text-white border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Institutional Identity */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img
              alt="Anizav World Art LLC"
              className="w-9 h-9 rounded object-contain border border-white/20 p-0.5 bg-black"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Y9c7o_Ri3Og8ZlSsq2wBKu0MtRLcM-ghE1-PRbMOJQtQRMbo07lVvraMGrK51psdGVQ9q2s2YjaL4gT-gV_dErtCGxWAKdV3_N5KQ-GlLP_iQi1rJ71II680Ts2VtI7KbyXPcVYVFFSU3V79Lbq_eljk8jFPicJ6C1rbyHgCgCywVnpOGx47Ui88FRkS1nTX33nJojCQKplqGOvLBpeDelOwnWBdJNeDprO0VStRbYOoUzjJOsZJL4_SqolO4FECow"
            />
            <span className="font-serif text-lg tracking-wider text-white font-bold uppercase">
              {t('common.brandName', 'ANIZAV WORLD ART LLC')}
            </span>
          </div>

          <p className="text-white/70 text-xs leading-relaxed">
            {t('footer.desc', "Entité enregistrée aux États-Unis dédiée à la production de concerts, au management de tournées et au rayonnement des musiques amazighes et méditerranéennes auprès du public nord-américain.")}
          </p>

          <div className="text-xs text-white/60 pt-2 space-y-1">
            <span className="block">
              {t('footer.generalInquiries', 'Demandes générales :')}{' '}
              <a
                className="text-blue-300 hover:text-white hover:underline font-medium"
                href="mailto:contact@anizav.com"
              >
                contact@anizav.com
              </a>
            </span>
            <span className="block text-white/50">{t('footer.offices', 'Bureau institutionnel : New York • Montréal')}</span>
          </div>
        </div>

        {/* Column 2: Organisation */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm text-white font-bold tracking-wider uppercase border-l-2 border-blue-500 pl-2">
            {t('footer.colOrgTitle', 'ORGANISATION')}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('footer.linkAbout', "À propos d'Anizav LLC")}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('footer.linkServices', 'Nos prestations')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('footer.linkLegal', 'Affaires juridiques & Conformité')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('footer.linkCuratorial', 'Comité curatorial')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('footer.linkPress', 'Dossier de presse')}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Tournées & Artistes */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm text-white font-bold tracking-wider uppercase border-l-2 border-blue-500 pl-2">
            {t('footer.colToursTitle', 'TOURNÉES & ARTISTES')}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('concerts')}
                className="text-blue-300 font-semibold hover:underline flex items-center gap-1.5 text-left"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {t('footer.linkSchedule', 'Calendrier des concerts 2026')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('concerts')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('footer.linkTourAit', 'Tournée US Aït Menguellet')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('artists')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('footer.linkRoster', 'Roster officiel des artistes')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('footer.linkSpecs', 'Fiches techniques des salles')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('footer.link2027', 'Aperçu symphonique 2027')}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Rejoignez-nous */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm text-white font-bold tracking-wider uppercase border-l-2 border-blue-500 pl-2">
            {t('footer.colConnectTitle', 'REJOIGNEZ-NOUS')}
          </h4>

          {/* Social Links */}
          <div className="flex items-center gap-2.5 text-white/80">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/50 flex items-center justify-center transition-all duration-200 text-white/70 hover:text-[#388eed] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,102,194,0.25)] active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E4405F]/20 border border-white/10 hover:border-[#E4405F]/50 flex items-center justify-center transition-all duration-200 text-white/70 hover:text-[#f76587] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(228,64,95,0.25)] active:scale-95"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FF0000]/20 border border-white/10 hover:border-[#FF0000]/50 flex items-center justify-center transition-all duration-200 text-white/70 hover:text-[#ff4e4e] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,0,0,0.25)] active:scale-95"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/50 flex items-center justify-center transition-all duration-200 text-white/70 hover:text-[#4294ff] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(24,119,242,0.25)] active:scale-95"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              title="X / Twitter"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/40 flex items-center justify-center transition-all duration-200 text-white/70 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] active:scale-95"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Fall 2026 Ticket Box Office Active Card */}
          <div
            onClick={onOpenReservation}
            className="p-3.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 space-y-2 cursor-pointer transition-colors shadow-xs"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">
                {t('footer.boxOfficeStatus', 'BILLETTERIE AUTOMNE 2026 ACTIVE')}
              </span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed">
              {t('footer.boxOfficeText', 'Quotas réservés aux mécènes disponibles pour Carnegie Hall et Town Hall.')}
            </p>
          </div>

          <p className="text-white/50 text-xs leading-relaxed">
            {t('footer.alertText', "Inscrivez-vous pour recevoir les notifications prioritaires avant l'ouverture officielle de la billetterie.")}
          </p>
        </div>
      </div>

      {/* Sub-footer Copyright and Legal */}
      <div className="border-t border-white/10 py-6 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <div>{t('footer.copyright', '© 2026 Anizav World Art LLC. Tous droits réservés. Agence de gestion de divertissement accréditée.')}</div>
        <div className="flex items-center space-x-6 font-medium">
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-white transition-colors"
          >
            {t('footer.legalPrivacy', 'Politique de confidentialité')}
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-white transition-colors"
          >
            {t('footer.legalTerms', "Conditions d'utilisation")}
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-white transition-colors"
          >
            {t('footer.legalPress', 'Accréditations presse')}
          </button>
        </div>
      </div>
    </footer>
  );
};
