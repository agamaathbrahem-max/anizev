import React from 'react';
import { useI18n } from '../context/I18nContext';
import { NavTab } from '../components/Header';
import {
  Globe,
  Radio,
  GraduationCap,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  MapPin,
  Calendar,
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: NavTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      {/* Breadcrumb & Registration Badge */}
      <div className="border border-slate-200 bg-white px-5 py-3 rounded-xl flex items-center justify-between text-xs text-slate-600 shadow-xs">
        <div className="flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition font-medium">
            {t('nav.home', 'Accueil')}
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">
            {t('about.eyebrow', 'À propos')}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-semibold text-emerald-800">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>US Registered Cultural Event Entity • Est. 2020</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#ae0010] uppercase block">
            {t('about.eyebrow', 'NOTRE ENGAGEMENT')}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
            {t('about.title', "Comment ça fonctionne : Porter l'art mondial sur les scènes américaines")}
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-normal">
            {t('about.desc', "Incorporée en 2020, Anizav World Art LLC s'est consacrée à une mission fondatrice : créer des opportunités pérennes pour les maîtres musiciens et pédagogues amazighs et méditerranéens. En alliant authenticité de préservation acoustique et rigueur de production internationale, nous offrons au public nord-américain un accès privilégié aux maîtres de la poésie et des rythmes du désert.")}
          </p>

          {/* Key Metrics Strip */}
          <div className="inline-flex flex-wrap items-center gap-6 sm:gap-10 py-4 px-6 bg-slate-50 border border-slate-200 rounded-2xl pt-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-blue-600">
                {t('about.stat1Num', '6+ Années')}
              </span>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                {t('about.stat1Label', 'Scènes Culturelles aux USA')}
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-300" />
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#ae0010]">
                {t('about.stat2Num', '24+ Villes')}
              </span>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                {t('about.stat2Label', 'Réseau de Tournées')}
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-300" />
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#795900]">
                {t('about.stat3Num', '100% Conforme')}
              </span>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                {t('about.stat3Label', 'Conformité Visas P-1')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN: Sticky Navigation */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
                {t('about.onThisPage', 'SUR CETTE PAGE')}
              </h3>
              <nav className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
                <a
                  href="#mission"
                  className="block p-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t('about.linkMission', 'Curatorial Mission & Philosophy')}
                </a>
                <a
                  href="#digital-media"
                  className="block p-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t('about.linkMedia', 'Production & Digital Media')}
                </a>
                <a
                  href="#programs"
                  className="block p-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t('about.linkEdu', 'Educational & School Programs')}
                </a>
                <a
                  href="#compliance"
                  className="block p-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t('about.linkCompliance', 'Artist Care & Visas (US P-1)')}
                </a>
                <a
                  href="#questions"
                  className="block p-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t('about.linkQuestions', 'Questions & Inquiries')}
                </a>
              </nav>
            </div>
          </aside>

          {/* RIGHT COLUMN: Content Sections */}
          <main className="lg:col-span-8 space-y-12">
            {/* SECTION 1: Curatorial Mission */}
            <section className="space-y-3 scroll-mt-28" id="mission">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t('about.s1Title', 'Mission Curatoriale & Authenticité Culturelle')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('about.s1Desc', 'Anizav World Art LLC repose sur une collaboration étroite avec les communautés de la diaspora, les musicologues et les mécènes engagés. Nous préservons et présentons le répertoire vivant de la Kabylie, du Sahara et du bassin méditerranéen avec une fidélité sans compromis, tout en assurant aux artistes une rémunération directe, transparente et équitable.')}
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors pt-1"
              >
                <span>{t('about.s1Link', 'En savoir plus sur notre vision curatoriale →')}</span>
              </button>
            </section>

            <hr className="border-slate-200" />

            {/* SECTION 2: Digital Media & Archival Broadcasts */}
            <section className="space-y-4 scroll-mt-28" id="digital-media">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t('about.s2Title', "Médias Numériques & Diffusions d'Archives")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('about.s2Desc', 'Nous enregistrons et diffusons ces traditions musicales authentiques auprès d’un public international grâce à des captations multi-pistes haute définition. Cela permet aux maîtres artistes d’élargir leur rayonnement culturel tout en initiant de nouvelles générations à la poésie amazighe.')}
              </p>

              {/* Social Media Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-semibold hover:shadow-xs transition"
                >
                  <span className="text-[#ae0010] font-bold">YouTube</span>
                  <span className="text-[10px] text-slate-400">@anizav</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-semibold hover:shadow-xs transition"
                >
                  <span className="text-pink-600 font-bold">Instagram</span>
                  <span className="text-[10px] text-slate-400">@anizavworldart</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-semibold hover:shadow-xs transition"
                >
                  <span className="text-blue-600 font-bold">Facebook</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-semibold hover:shadow-xs transition"
                >
                  <span className="text-[#0077b5] font-bold">LinkedIn</span>
                </a>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* SECTION 3: Educational & Cultural Programs */}
            <section className="space-y-4 scroll-mt-28" id="programs">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t('about.s3Title', 'Programmes Éducatifs & Culturels')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('about.s3Desc', "Anizav propose des ateliers conçus pour répondre aux besoins des universités, conservatoires et institutions d'enseignement. Nos programmes sont personnalisés selon vos cursus académiques et vos objectifs ethnomusicologiques.")}
              </p>

              {/* Side-by-Side Workshop Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      {t('about.card1Title', 'Résidences Acoustiques & Masterclasses')}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t('about.card1Desc', 'Sessions en direct avec des virtuoses (mandole, oud, bendir), planification flexible pour universités et centres d’art.')}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-blue-700 font-semibold pt-2 border-t border-slate-200">
                    <Globe className="w-3.5 h-3.5" />
                    <span>{t('about.card1Tag', 'Disponible à l’échelle nationale')}</span>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      {t('about.card2Title', 'Ateliers Présentiels en Tournée')}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t('about.card2Desc', 'Masterclasses interactives en présentiel avec les artistes en tournée pour une transmission vivante et un échange approfondi.')}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#ae0010] font-semibold pt-2 border-t border-slate-200">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t('about.card2Tag', 'Selon le calendrier de tournée')}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors pt-2"
              >
                <span>{t('about.s3Link', 'En savoir plus sur nos programmes pour éducateurs et institutions →')}</span>
              </button>
            </section>

            <hr className="border-slate-200" />

            {/* SECTION 4: Artist Care & Compliance */}
            <section className="space-y-4 scroll-mt-28" id="compliance">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t('about.s4Title', 'Soin des Artistes & Conformité Fédérale Visas P-1')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('about.s4Desc', "Anizav World Art LLC est une structure de production officielle bénéficiant d'une expertise reconnue en matière de visas d'artistes USCIS (P-1, P-3), licences d'État de spectacle et gestion des droits d'auteurs (ASCAP/BMI) garantissant le déroulement serein des tournées.")}
              </p>

              {/* Leadership Spotlight Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col sm:flex-row items-center">
                <div className="w-full sm:w-2/5 h-48 sm:h-auto self-stretch">
                  <img
                    alt="Cultural Leadership & Curators"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfNUTpqJsx-a5AdfTQAgdHMSwGs_n5bWVEd6A2XCTLbIL0IxVtsQq9yO7fmE75irwY066MVi-m-n6ZXOE67zlHDTH_mc1oRjY2YOiwsdik4FBO_w7EKs1k7iQ5VN5A7v3UVAvB4fHARIv_OInygjWMlYklKBx4x7oTyqEyqClXnSOmkmui9qMdssKZSIchXX-ar2V2aylDZeQTLnhxPuJ2cifrTqMo_Y22hIEPGjcf12LxtP4qG5dw"
                  />
                </div>
                <div className="p-6 sm:w-3/5 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ae0010]">
                    {t('about.s4Badge', 'CONSEIL ARTISTIQUE')}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    {t('about.s4CardTitle', 'Directeurs de Tournée & Ingénieurs du Son Dédiés')}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t('about.s4CardDesc', 'Gestion complète des résidences artistiques transatlantiques, de la logistique de théâtre et de l’ingénierie acoustique de précision.')}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors pt-2"
              >
                <span>{t('about.s4Link', 'Consulter notre charte de conformité et de production →')}</span>
              </button>
            </section>

            <hr className="border-slate-200" />

            {/* SECTION 5: Questions? */}
            <section className="space-y-4 pt-2 scroll-mt-28" id="questions">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t('about.s5Title', 'Questions ?')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('about.s5Desc', 'Que vous soyez programmateur de salle, directeur d’institution culturelle ou mélomane à la recherche de billets, notre équipe est à votre écoute.')}
              </p>
              <div className="pt-1">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 bg-[#ae0010] hover:bg-[#93000b] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-colors shadow-sm"
                >
                  <span>{t('about.s5Button', 'Contactez-nous →')}</span>
                </button>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
};
