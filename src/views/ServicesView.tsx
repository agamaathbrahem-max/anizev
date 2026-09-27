import React from 'react';
import { useI18n } from '../context/I18nContext';
import { NavTab } from '../components/Header';
import {
  Check,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Send,
  FileText,
  Volume2,
  FileCheck,
  HeartHandshake,
  Megaphone,
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (tab: NavTab) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      {/* Sub-nav / Breadcrumb */}
      <div className="bg-[#FAF9F6] border border-[#E8E3DA] rounded-xl px-5 py-2.5 flex flex-wrap items-center justify-between text-xs text-slate-500 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-blue-600 uppercase tracking-wider">
            {t('services.eyebrow', 'RÉPERTOIRE DES SERVICES')}
          </span>
          <span>/</span>
          <span>Anizav World Art LLC</span>
          <span>/</span>
          <span className="text-slate-900 font-semibold">
            {t('services.architectureTag', 'Régie & Opérations de tournée en Amérique du Nord')}
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-semibold text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Infrastructure de tournée culturelle clé en main • 2026–2027</span>
        </div>
      </div>

      {/* SECTION 1: HERO OVERVIEW (8 / 4 Split) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: 8 Cols Core Narrative & Capabilities */}
        <div className="lg:col-span-8 flex flex-col justify-between pr-0 lg:pr-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-widest">
                {t('services.eyebrow', 'PRESTATIONS OPÉRATIONNELLES')}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t('services.architectureTag', 'ARCHITECTURE DU SPECTACLE VIVANT & SCÉNOGRAPHIE CLÉ EN MAIN')}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-[1.1] text-slate-900 mb-4">
              {t('services.title', 'Scénographie et production intégrale : Des consulats internationaux aux plus grands auditoriums américains')}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              {t('services.desc', "Anizav World Art LLC assure une exécution logistique et opérationnelle de bout en bout pour les maîtres acoustiques internationaux, les ensembles traditionnels et les icônes culturelles de la Méditerranée en tournée en Amérique du Nord. Nous éliminons les complexités administratives, protégeons l'authenticité et la pureté acoustique, et relions la diaspora et le public mélomane américain grâce à une rigueur institutionnelle et une production scénique d'exception.")}
            </p>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-5 mt-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 font-serif">
                {t('services.metric1Num', '4 Piliers')}
              </div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-slate-900">
                {t('services.metric1Title', 'EXÉCUTION CLÉ EN MAIN')}
              </div>
              <div className="text-[10px] text-slate-500">
                {t('services.metric1Sub', 'De la production à la supervision sur scène')}
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#bb0112] font-serif">
                {t('services.metric2Num', '100%')}
              </div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-slate-900">
                {t('services.metric2Title', 'VISAS P-1 OBTENUS')}
              </div>
              <div className="text-[10px] text-slate-500">
                {t('services.metric2Sub', 'Dossiers USCIS et conformité consulaire totale')}
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#795900] font-serif">
                {t('services.metric3Num', 'Acoustique')}
              </div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-slate-900">
                {t('services.metric3Title', 'INGÉNIERIE SONORE MAÎTRESSE')}
              </div>
              <div className="text-[10px] text-slate-500">
                {t('services.metric3Sub', 'Accordage précis mandole, oud & percussions traditionnelles')}
              </div>
            </div>
          </div>
        </div>

        {/* Right: 4 Cols Spotlight Card */}
        <div className="lg:col-span-4 bg-[#0B0F19] rounded-2xl overflow-hidden shadow-md flex flex-col relative group">
          <div className="relative h-64 lg:h-full min-h-[280px] overflow-hidden">
            <img
              alt="Console audio et balance acoustique"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XT7R-rFQBPwbP4x1aIUG-_pb2NuPIuVwubc2FOBUe7u3uagOdGMRgLFbxnqftNSf3hX6hYj5ly-r63JOc63CUVm_E3pAQtH-riJ2db7FfPbgkjEv5m0TC52XRsYkq0BvNMdplCmHPBY8AloMBj_mo71d5c2CMKxfmiyd9rXTdvwTypONgesGzcyGkedGoV8SNQUvb2IKN6WXQQ77nvk3823SH3Djbr0EVBmvuDZbSZBGdWEbhfW6W7pX0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                {t('services.spotlightBadge', 'EXCELLENCE DE PRODUCTION')}
              </span>
              <h3 className="font-serif text-xl font-bold leading-tight mt-1 text-white">
                {t('services.spotlightTitle', 'Ingénierie acoustique de classe mondiale & Régie de tournée')}
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                {t('services.spotlightDesc', 'Ingénieurs du son chevronnés dédiés spécifiquement à la délicatesse des instruments nord-africains, mandoles, bendirs et à la résonance acoustique des théâtres historiques.')}
              </p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-blue-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{t('services.spotlightConsole', 'Consoles Yamaha & Avid Digital • Captation audio multipiste en direct')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 CORE SERVICE MODULES */}
      <section>
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#ae0010] inline-block" />
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              {t('services.pillarsHeader', 'NOS PILIERS DE SERVICES FONDAMENTAUX & CAPACITÉS OPÉRATIONNELLES')}
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
            {t('services.pillarsSubtitle', 'Procédures opérationnelles standardisées • Protocole Anizav')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Service Card 1: Production */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  alt="Production de concerts"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XT7R-rFQBPwbP4x1aIUG-_pb2NuPIuVwubc2FOBUe7u3uagOdGMRgLFbxnqftNSf3hX6hYj5ly-r63JOc63CUVm_E3pAQtH-riJ2db7FfPbgkjEv5m0TC52XRsYkq0BvNMdplCmHPBY8AloMBj_mo71d5c2CMKxfmiyd9rXTdvwTypONgesGzcyGkedGoV8SNQUvb2IKN6WXQQ77nvk3823SH3Djbr0EVBmvuDZbSZBGdWEbhfW6W7pX0"
                />
                <span className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded shadow">
                  {t('services.s1Tag', '01. PRODUCTION')}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {t('services.s1Title', 'Organisation de concerts & Régie technique')}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t('services.s1Desc', "Scénographie complète, régie façade et retours, accordage acoustique de mandole d'art, line arrays, instruments de backline et captation live multipiste.")}
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-600 border-t border-slate-100 pt-3">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{t('services.s1Point1', 'Ingénierie acoustique sur mesure pour instruments traditionnels nord-africains')}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{t('services.s1Point2', 'Mixage et équilibre pour collaborations symphoniques')}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{t('services.s1Point3', 'Création lumière scénique et captation vidéo live')}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px]">
              <span className="text-slate-500">{t('services.s1FooterLabel', 'Standard scénique')}</span>
              <span className="font-bold text-blue-600">{t('services.s1FooterVal', 'Grands théâtres historiques')}</span>
            </div>
          </div>

          {/* Service Card 2: Legal & P-Visa */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  alt="Pétitions de visas P-1"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VYC0pd5mg6QZSj6j3L6DwRunEa_5ZxRp7YCpxe3sCfp1n0bwID7phj8dGg_w2HvSfMXD9ItljKkHN_ZwXy4i0oIr_AJ-aS21xQuPyf9p0ESq9zTxf0IhBWZvoVgnojo3EV6L9Z_OT4y2LwYjgGRqTuE2XJ1OrHDwkL9mLB6IJR50svHZUpoEntVitu2DHo_G0IUaIyzne7yUER3uWZOLkqmcQpBbPYLuIn5TbQ3uR2K1cHsfweWdL1Qw"
                />
                <span className="absolute top-2.5 left-2.5 bg-slate-900 text-white text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded shadow">
                  {t('services.s2Tag', '02. CONFORMITÉ')}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {t('services.s2Title', 'Pétitions de visas P-1 & Rigueur juridique')}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t('services.s2Desc', "Pétitions d'immigration clés en main pour artistes internationalement reconnus et personnel de soutien essentiel sous classifications USCIS P-1/P-3, rendez-vous consulaires et autorisations accélérées.")}
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-600 border-t border-slate-100 pt-3">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                    <span>{t('services.s2Point1', 'Constitution intégrale et dépôt des dossiers USCIS P-1/P-3')}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                    <span>{t('services.s2Point2', 'Préparation aux entretiens consulaires et démarches prioritaires')}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                    <span>{t('services.s2Point3', "Autorisations d'exécution et déclarations de droits ASCAP/BMI")}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px]">
              <span className="text-slate-500">{t('services.s2FooterLabel', 'Dossiers approuvés')}</span>
              <span className="font-bold text-emerald-700">{t('services.s2FooterVal', '100% Taux de réussite')}</span>
            </div>
          </div>

          {/* Service Card 3: Artist Care */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  alt="Régie de tournée d'artistes"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VEoWcb7-A8XfeijLu324c8jVrGmZlY3cogIqTgDK4pXokcKbu_fOyYo6wilBXql0MxFLvSqV6xDuOhdXn9HvZ2m4GsEdWyd-z_jr6-hT0ktPPyr36ljAGB3z3fx1pgTrAW5g48JJ-dRIemn0CNxPcwP97xJXUjD7gIBzqD9ndXZiFUFSxKb6a5jW6ryAqEUbrQ-vnNaQnrFrOYBZ4ByyTNO2-Tk6jyKgsJqCdpG5ueFyoyAPrdp4sCYfI"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#795900] text-white text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded shadow">
                  {t('services.s3Tag', '03. ACCOMPAGNEMENT')}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {t('services.s3Title', "Régie de tournée d'artistes & Hospitalité de prestige")}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t('services.s3Desc', 'Accompagnement digne et attentif de nos artistes avec régisseurs bilingues dédiés, liaisons privées entre les métropoles, hébergements de prestige et restauration culturelle raffinée.')}
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-600 border-t border-slate-100 pt-3">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#795900] shrink-0 mt-0.5" />
                    <span>{t('services.s3Point1', 'Liaisons bilingues dédiées (kabyle, français, arabe, anglais)')}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#795900] shrink-0 mt-0.5" />
                    <span>{t('services.s3Point2', "Fiches d'accueil respectueuses et restauration authentique")}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#795900] shrink-0 mt-0.5" />
                    <span>{t('services.s3Point3', 'Transports privés en vans de luxe Sprinter et transferts')}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px]">
              <span className="text-slate-500">{t('services.s3FooterLabel', 'Accompagnement')}</span>
              <span className="font-bold text-[#795900]">{t('services.s3FooterVal', 'Soin VIP & Dignité des artistes')}</span>
            </div>
          </div>

          {/* Service Card 4: Marketing */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  alt="Marketing événementiel"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Vod6CuxjOQPqrBPiBT5FzxxEvf42eEVRNVLjEt2_UDVwTz3IEZzepD4Xz6hiIvvhX6WxMWd0QkvkXkEW-_5_gftrJOPrPmHAPtUIUWU3xh3pNyR-suip-de8ODO0OkoVZaLJDXBzt7WmQ4w2A7X5BDs2_jCuGEhBS5djHobpcHi0Pb0cVYWUc1HFuu8QpDPez1R9n-jw8FGhxPfvuyiN8jWTYfpqJd2efwbkoDKHtvdUs0how1C36e9ik"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#ae0010] text-white text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded shadow">
                  {t('services.s4Tag', '04. MARKETING')}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {t('services.s4Title', 'Marketing événementiel & Mobilisation des publics')}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t('services.s4Desc', "Développement d'audience multicanal unissant les réseaux de la diaspora nord-américaine aux amateurs américains de musiques du monde à travers des campagnes numériques ciblées, la radio et des partenariats culturels.")}
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-600 border-t border-slate-100 pt-3">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#ae0010] shrink-0 mt-0.5" />
                    <span>{t('services.s4Point1', 'Mobilisation active des réseaux de la diaspora amazighe nord-américaine')}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#ae0010] shrink-0 mt-0.5" />
                    <span>{t('services.s4Point2', 'Affiches physiques bilingues, disques vinyles et livrets de programme')}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#ae0010] shrink-0 mt-0.5" />
                    <span>{t('services.s4Point3', 'Couverture radio publique (NPR) et relais dans la presse artistique')}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px]">
              <span className="text-slate-500">{t('services.s4FooterLabel', 'Portée des publics')}</span>
              <span className="font-bold text-[#ae0010]">{t('services.s4FooterVal', 'Transcontinentale (USA & Canada)')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OPERATIONAL WORKFLOW & VENUE COLLABORATION (7 / 5 Split) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 7 Cols Step-by-Step Production Lifecycle */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="w-2.5 h-2.5 bg-blue-600 inline-block" />
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              {t('services.lifecycleTitle', 'NOTRE PROCESSUS : LE CYCLE DE PRODUCTION EN 4 ÉTAPES')}
            </h2>
          </div>

          {/* Phase 1 */}
          <div className="bg-white border border-slate-200 p-4 rounded-2xl flex gap-4 items-start shadow-xs">
            <div className="shrink-0 w-12 h-12 bg-red-50 border border-red-200 rounded-xl flex flex-col items-center justify-center text-[#ae0010]">
              <span className="text-[9px] font-bold uppercase tracking-wider">PHASE</span>
              <span className="text-base font-extrabold leading-none font-serif">01</span>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900">
                  {t('services.phase1Title', 'Conception curatoriale & Alignement artistique')}
                </h4>
                <span className="text-[10px] bg-red-100 text-[#ae0010] font-bold px-2 py-0.5 rounded-full">
                  {t('services.phase1Time', 'Mois 1–3')}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {t('services.phase1Desc', 'Consultation artistique directe avec les chanteurs et compositeurs, sélection du répertoire, direction musicale et études de faisabilité acoustique pour les auditoriums retenus.')}
              </p>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white border border-slate-200 p-4 rounded-2xl flex gap-4 items-start shadow-xs">
            <div className="shrink-0 w-12 h-12 bg-blue-50 border border-blue-200 rounded-xl flex flex-col items-center justify-center text-blue-600">
              <span className="text-[9px] font-bold uppercase tracking-wider">PHASE</span>
              <span className="text-base font-extrabold leading-none font-serif">02</span>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900">
                  {t('services.phase2Title', 'Pétitions juridiques, Routage des salles & Billetterie')}
                </h4>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">
                  {t('services.phase2Time', 'Mois 4–6')}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {t('services.phase2Desc', "Dépôt des visas d'artiste USCIS P-1, lettres de consultation syndicale (AFM/AGMA), négociation des contrats de théâtre et déploiement de l'infrastructure de billetterie.")}
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-white border border-slate-200 p-4 rounded-2xl flex gap-4 items-start shadow-xs">
            <div className="shrink-0 w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex flex-col items-center justify-center text-[#795900]">
              <span className="text-[9px] font-bold uppercase tracking-wider">PHASE</span>
              <span className="text-base font-extrabold leading-none font-serif">03</span>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900">
                  {t('services.phase3Title', 'Campagne promotionnelle & Préparation technique')}
                </h4>
                <span className="text-[10px] bg-amber-100 text-[#795900] font-bold px-2 py-0.5 rounded-full">
                  {t('services.phase3Time', 'Mois 7–9')}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {t('services.phase3Desc', 'Campagnes numériques ciblées dans les métropoles clés (New York, Boston, Chicago, San Francisco, Montréal), validation des fiches techniques et approvisionnement du matériel de scène.')}
              </p>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="bg-white border border-slate-200 p-4 rounded-2xl flex gap-4 items-start shadow-xs">
            <div className="shrink-0 w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col items-center justify-center text-emerald-700">
              <span className="text-[9px] font-bold uppercase tracking-wider">PHASE</span>
              <span className="text-base font-extrabold leading-none font-serif">04</span>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900">
                  {t('services.phase4Title', "Régie de tournée, Balances live & Captation d'archives")}
                </h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  {t('services.phase4Time', 'Mois de tournée')}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {t('services.phase4Desc', "Régie de plateau sur place, accueil chaleureux en loge, balances acoustiques rigoureuses dans les théâtres, régie de façade, gestion du merchandising et mastering audio multipiste.")}
              </p>
            </div>
          </div>
        </div>

        {/* Right: 5 Cols Venue Partnerships & Compliance */}
        <div className="lg:col-span-5 space-y-4">
          <div className="border border-slate-200 rounded-3xl p-6 bg-white shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-red-50 text-[#ae0010] border border-red-200/60 px-2.5 py-1 rounded-md">
                {t('services.presentersBadge', 'POUR DIRECTEURS DE SALLES & FESTIVALS')}
              </span>
              <Building2 className="w-4 h-4 text-[#795900]" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900 leading-tight">
              {t('services.presentersTitle', 'Co-présentations clés en main & Résidences académiques')}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              {t('services.presentersDesc', "Nous nous associons à des universités prestigieuses, des festivals de musiques du monde et des centres des arts de la scène pour présenter des maîtres incontournables aux côtés de masterclasses, de conférences sur la poésie lyrique et d'ateliers d'échanges interculturels.")}
            </p>

            <div className="border-t border-slate-100 pt-3 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-700">
                <span className="font-medium">{t('services.riderLabel', 'Conformité fiches techniques')}</span>
                <span className="font-bold text-emerald-700">{t('services.riderVal', '100% Autonome')}</span>
              </div>
              <div className="flex items-center justify-between text-slate-700">
                <span className="font-medium">{t('services.insuranceLabel', 'Assurance responsabilité civile')}</span>
                <span className="font-bold text-slate-900">{t('services.insuranceVal', 'Couverture commerciale globale de 2M$')}</span>
              </div>
              <div className="flex items-center justify-between text-slate-700">
                <span className="font-medium">{t('services.bookletLabel', 'Livrets de traduction des textes')}</span>
                <span className="font-bold text-blue-600">{t('services.bookletVal', 'Tamazight • Français • Anglais')}</span>
              </div>
            </div>

            {/* Stage Photo Banner */}
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <img
                alt="Ensemble sur scène historique"
                className="w-full h-36 object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VJpX2tek8AnLEHVwD-KxnBUx2Cm33nE_8cvWnuJjp6FO6aqCbVXG-2uLLjAQxlcVbK8v5LiL6ojScUZG-Yzu3oFxBYC5rH6crmtWl_uENQifewq7cbIZpEitARLfEEu_2OXwtS9RI-qzdP6KQYWQt1wo5NcHGjHHFgKVfPLshtfV0sFPTDPG7NKiN1e4SCAPMFnpW0pUK9tsIHnmifYYm1uB0Jw-_EKNAvOxXc46u1fctR8WJ4j-a4pBI"
              />
            </div>
          </div>

          {/* Compliance Guarantee Card */}
          <div className="bg-[#0B0F19] text-white p-5 rounded-2xl flex items-start gap-3.5 shadow-sm border border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-400/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white tracking-wide uppercase">
                {t('services.integrityBadge', "Garantie d'intégrité institutionnelle")}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {t('services.integrityDesc', 'Entité immatriculée aux États-Unis opérant en stricte conformité fiscale (W-8BEN/W-9), avec normes éthiques strictes pour la rémunération des artistes internationaux.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION BANNER (Inquire / Book a Tour) */}
      <section className="bg-[#0B0F19] text-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-800 relative overflow-hidden">
        {/* Subtle decorative background logo on the right side */}
        <div
          className="absolute -right-10 sm:-right-4 md:right-6 lg:right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[#C99700]/10 rounded-full blur-3xl scale-125" />
          <img
            alt=""
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Y9c7o_Ri3Og8ZlSsq2wBKu0MtRLcM-ghE1-PRbMOJQtQRMbo07lVvraMGrK51psdGVQ9q2s2YjaL4gT-gV_dErtCGxWAKdV3_N5KQ-GlLP_iQi1rJ71II680Ts2VtI7KbyXPcVYVFFSU3V79Lbq_eljk8jFPicJ6C1rbyHgCgCywVnpOGx47Ui88FRkS1nTX33nJojCQKplqGOvLBpeDelOwnWBdJNeDprO0VStRbYOoUzjJOsZJL4_SqolO4FECow"
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain opacity-15 md:opacity-20 drop-shadow-[0_0_25px_rgba(201,151,0,0.18)]"
          />
        </div>

        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffdf9e]">
            {t('services.ctaPartner', 'COLLABORER AVEC ANIZAV WORLD ART LLC')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            {t('services.ctaTitle', 'Vous préparez une tournée nord-américaine, une participation à un festival ou une résidence symphonique ?')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {t('services.ctaDesc', "Que vous soyez un artiste international en tournée, un programmateur de théâtre américain ou le département culturel d'une université, Anizav World Art LLC met à votre disposition l'infrastructure idéale pour accueillir la musique du monde au plus haut niveau d'excellence.")}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t('services.btnInquire', 'DEMANDE DE PROGRAMMATION 2026/2027')}</span>
            </button>
            <a
              href="mailto:contact@anizav.com?subject=Dossier%20Capacités%20Techniques%20Anizav"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all inline-flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t('services.btnDownloadSpecs', 'TÉLÉCHARGER LE DOSSIER DE CAPACITÉS TECHNIQUES')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
