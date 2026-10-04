import React, { useState } from 'react';
import { useI18n } from '../context/I18nContext';
import { NavTab } from '../components/Header';
import {
  MapPin,
  Mail,
  Phone,
  AlertTriangle,
  ShieldCheck,
  Building,
  Navigation,
  Copy,
  Check,
  Send,
  Lock,
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (tab: NavTab) => void;
  prefilledArtist?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, prefilledArtist }) => {
  const { t } = useI18n();

  const [activeOffice, setActiveOffice] = useState<'nyc' | 'dc'>('nyc');
  const [copied, setCopied] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [inquiryType, setInquiryType] = useState('tour');
  const [message, setMessage] = useState(
    prefilledArtist ? `Demande de disponibilité pour l'artiste : ${prefilledArtist}` : ''
  );
  const [isSent, setIsSent] = useState(false);

  const officeData = {
    nyc: {
      name: 'Centre exécutif et des opérations de New York',
      sub: "Pôle curatorial principal, programmation des tournées et management d'artistes.",
      addressText: '575 5th Avenue, 14th Floor, New York, NY 10017',
      addressHtml: '575 5th Avenue, 14th Floor<br />New York, NY 10017',
      phone: '+1 (212) 555-0194',
      email: 'contact@anizav.com',
      coords: '40.7562° N, 73.9798° O',
      overlayTitle: 'Coordonnées Siège New York',
      transit: 'Lignes de métro B, D, F, M à 47–50 Sts-Rockefeller Ctr ; 4, 5, 6, 7, S à Grand Central Terminal. Proximité immédiate Lincoln Center, Town Hall & Carnegie Hall.',
      protocol: "Pièce d'identité officielle obligatoire à l'accueil. Rendez-vous curatorial préalable requis.",
      mapSrc: 'https://maps.google.com/maps?q=575+5th+Ave,+New+York,+NY+10017&t=m&z=15&output=embed&iwloc=near',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=575+5th+Ave,+New+York,+NY+10017',
    },
    dc: {
      name: 'Bureau de liaison diplomatique et juridique de Washington, D.C.',
      sub: 'Liaison USCIS, visas internationaux P-1 et coordination des délégations culturelles.',
      addressText: '1200 Pennsylvania Ave NW, Suite 700, Washington, DC 20004',
      addressHtml: '1200 Pennsylvania Ave NW, Suite 700<br />Washington, DC 20004',
      phone: '+1 (202) 555-0182',
      email: 'legal@anizavworldart.com',
      coords: '38.8951° N, 77.0284° O',
      overlayTitle: 'Coordonnées Bureau Washington D.C.',
      transit: 'Métro Federal Triangle (lignes bleue, orange, argent, attenant) ; Metro Center (ligne rouge, 2 blocs). Proximité Kennedy Center et National Mall.',
      protocol: 'Contrôle de sécurité fédéral renforcé à l’entrée du bâtiment. Réservé aux délégations enregistrées et audiences juridiques.',
      mapSrc: 'https://maps.google.com/maps?q=1200+Pennsylvania+Avenue+NW,+Washington,+DC+20004&t=m&z=15&output=embed&iwloc=near',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=1200+Pennsylvania+Avenue+NW,+Washington,+DC+20004',
    },
  };

  const currentOffice = officeData[activeOffice];

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentOffice.addressText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      alert(t('contact.formSuccess', 'Votre demande a été transmise à notre bureau curatorial. Nous vous répondrons sous 24h ouvrées.'));
      setFullName('');
      setEmail('');
      setOrganization('');
      setMessage('');
      setIsSent(false);
    }, 500);
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="bg-white border border-slate-200 rounded-xl px-5 py-2.5 flex items-center gap-2 text-xs text-slate-500 shadow-xs">
        <span>{t('contact.breadcrumbDirectory', 'Répertoire institutionnel')}</span>
        <span>/</span>
        <span>Anizav World Art LLC</span>
        <span>/</span>
        <span className="text-blue-600 font-semibold">{t('contact.breadcrumbContact', 'Contact & Demandes institutionnelles')}</span>
      </div>

      {/* Hero Header */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="max-w-4xl space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#795900] font-bold block">
            {t('contact.eyebrow', 'GESTION DU SPECTACLE VIVANT & DIPLOMATIE CULTURELLE')}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
            {t('contact.title', 'Entrez en relation avec le premier programmateur amazigh et musiques du monde en Amérique du Nord')}
          </h1>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
            {t('contact.desc', "Qu'il s'agisse d'organiser une tournée historique, de réserver des masterclasses curatoriales, de traiter des dossiers de visas d'artistes P-1 ou d'accréditations presse, notre équipe curatoriale et de production est à votre entière disposition.")}
          </p>
        </div>
      </section>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN (5 Cols): HQ & Direct Contacts */}
        <div className="lg:col-span-5 space-y-6">
          {/* Headquarters Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                {t('contact.hqBadge', 'SIÈGE INSTITUTIONNEL')}
              </span>
              <span className="inline-flex items-center text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full font-bold border border-emerald-200">
                {t('contact.hqOfficial', 'Représentation officielle')}
              </span>
            </div>

            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Anizav World Art LLC
            </h2>

            <div className="space-y-3.5 text-xs text-slate-700">
              {/* Operations */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">
                    {t('contact.hqOperations', 'Opérations bicoastales :')}
                  </strong>
                  <span>{t('contact.hqOperationsText', 'New York, NY & Washington, D.C.')}</span>
                  <span className="text-slate-400 block text-[11px] mt-0.5">
                    {t('contact.hqOperationsCoverage', 'Couverture Lincoln Center, Kennedy Center et circuits des théâtres continentaux.')}
                  </span>
                </div>
              </div>

              {/* Correspondence */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">
                    {t('contact.hqCorrespondence', 'Correspondance officielle :')}
                  </strong>
                  <div className="flex flex-wrap gap-1">
                    <a className="text-blue-600 hover:underline font-medium" href="mailto:contact@anizav.com">
                      contact@anizav.com
                    </a>
                    <span className="text-slate-400">/</span>
                    <a className="text-blue-600 hover:underline font-medium" href="mailto:booking@anizavworldart.com">
                      booking@anizavworldart.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Line */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">
                    {t('contact.hqDirectLine', 'Ligne directe de la curation :')}
                  </strong>
                  <span>+1 (212) 555-0194</span>
                  <span className="text-slate-400 block text-[11px]">
                    {t('contact.hqHours', '(Lun–Ven, 9h00 – 18h00 EST)')}
                  </span>
                </div>
              </div>

              {/* Emergency Hotline */}
              <div className="flex items-start gap-3 bg-amber-50/80 p-3 rounded-xl border border-amber-200/70">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold text-[11px]">
                    {t('contact.hqEmergency', "Ligne d'urgence production :")}
                  </strong>
                  <span className="text-slate-700 text-[11px] leading-relaxed">
                    {t('contact.hqEmergencyText', 'Assistance technique 24h/24 et 7j/7 pour directeurs techniques et régisseurs généraux de tournées.')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Department Direct Contacts */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-2">
              {t('contact.polesTitle', 'PÔLES & CONTACTS DIRECTS')}
            </h3>

            <div className="space-y-3">
              <div className="border-l-2 border-blue-600 pl-3 py-1">
                <span className="text-[10px] text-blue-600 font-bold block uppercase">
                  {t('contact.pole1Tag', '01. PROGRAMMATION ARTISTIQUE & CURATION')}
                </span>
                <p className="text-xs text-slate-800 font-medium">
                  {t('contact.pole1Name', 'Dr. Yacine Rahmani & Comité de programmation')}
                </p>
                <a className="text-xs text-slate-500 hover:text-blue-600" href="mailto:programming@anizavworldart.com">
                  programming@anizavworldart.com
                </a>
              </div>

              <div className="border-l-2 border-[#795900] pl-3 py-1">
                <span className="text-[10px] text-[#795900] font-bold block uppercase">
                  {t('contact.pole2Tag', '02. PÉTITIONS VISAS US P-1/O-1 & CONFORMITÉ LÉGALE')}
                </span>
                <p className="text-xs text-slate-800 font-medium">
                  {t('contact.pole2Name', 'Sarah J. Thompson, Conseil juridique & Liaison USCIS')}
                </p>
                <a className="text-xs text-slate-500 hover:text-[#795900]" href="mailto:legal@anizavworldart.com">
                  legal@anizavworldart.com
                </a>
              </div>

              <div className="border-l-2 border-[#ae0010] pl-3 py-1">
                <span className="text-[10px] text-[#ae0010] font-bold block uppercase">
                  {t('contact.pole3Tag', '03. ACCRÉDITATIONS PRESSE, MÉDIAS & ARCHIVES')}
                </span>
                <p className="text-xs text-slate-800 font-medium">
                  {t('contact.pole3Name', 'Bureau éditorial & presse')}
                </p>
                <a className="text-xs text-slate-500 hover:text-[#ae0010]" href="mailto:press@anizavworldart.com">
                  press@anizavworldart.com
                </a>
              </div>
            </div>
          </div>

          {/* Institutional Guarantee Badge */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="relative h-36 overflow-hidden bg-slate-900">
              <img
                alt="USCIS P-1 Visa Petitions and Legal Contracts Desk"
                className="w-full h-full object-cover object-center opacity-90"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XbWAaYRKqXkbxYZRh5O7Jfvgx2gA6PusNN29a-dd9IU5LshwSdKSlxGLaQlWsdHdOCxa-PuP9JIk0YZDAFiCj4wnf5Pw5QiHCav_2qx0fAy9eH_O9IQbaI5FLwwyw6IL2IaJa1qyQHroTwgVx9FaoTNFzCKUGpNSgQjf8TZf4oWTXj1RSfD3CgRj2qjNNv-YbgL-wUFQvxWVMbB8RZUfbolTlYU8wKKrZGOhcpraTOSH6aE3cH8i8iSQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 text-white">
                <span className="text-[10px] font-semibold bg-blue-600 text-white px-2 py-0.5 rounded uppercase tracking-wider">
                  {t('contact.uscisBadge', 'DOSSIER JURIDIQUE USCIS')}
                </span>
                <p className="text-xs font-medium text-slate-200 mt-1">
                  {t('contact.uscisSub', 'Pôle conformité légale & Droit du divertissement')}
                </p>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-[#795900]" />
                <span>{t('contact.integrityTitle', "Garantie d'intégrité institutionnelle")}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('contact.integrityText', 'Conformité intégrale USCIS & IRS W-8BEN/W-9, accords SAG-AFTRA/AFM et opérations de production assurées dans les 50 États.')}
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>{t('contact.avgResponseLabel', 'Délai moyen de réponse')}</span>
                <span className="font-bold text-slate-800">{t('contact.avgResponseVal', 'Sous 24 heures ouvrées')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (7 Cols): Interactive Maps & Booking Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Maps Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs uppercase tracking-wider font-bold text-blue-600">
                {t('contact.mapsEyebrow', 'RÉPERTOIRE CURATORIAL INTERACTIF')}
              </span>
              <span className="inline-flex items-center text-[10px] bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1" />
                {t('contact.mapsActiveStatus', 'LES DEUX BUREAUX EN ACTIVITÉ')}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {t('contact.mapsTitle', 'Sièges bicoastaux & Cartes régionales')}
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {t('contact.mapsDesc', 'Découvrez nos bureaux de représentation, infrastructures administratives et liaisons diplomatiques. Sélectionnez une implantation pour consulter les coordonnées et accès visiteurs.')}
            </p>

            {/* Office Switcher Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveOffice('nyc')}
                className={`flex items-center justify-between p-3 rounded-lg text-left transition-all ${
                  activeOffice === 'nyc'
                    ? 'bg-white text-slate-900 border border-slate-300 shadow-xs'
                    : 'bg-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wide">
                      {t('contact.tabNyc', 'NEW YORK EXÉCUTIF')}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {t('contact.tabNycSub', '575 5th Ave (47th St & 5th)')}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-blue-700 px-2 py-0.5 bg-blue-50 rounded-full border border-blue-200">
                  {t('contact.tabActive', 'ACTIF')}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveOffice('dc')}
                className={`flex items-center justify-between p-3 rounded-lg text-left transition-all ${
                  activeOffice === 'dc'
                    ? 'bg-white text-slate-900 border border-slate-300 shadow-xs'
                    : 'bg-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wide">
                      {t('contact.tabDc', 'WASHINGTON, D.C.')}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {t('contact.tabDcSub', '1200 Pennsylvania Ave NW')}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-600 px-2 py-0.5 bg-slate-200/70 rounded-full">
                  {t('contact.tabLiaison', 'LIAISON')}
                </span>
              </button>
            </div>

            {/* Map Frame Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 bg-slate-100 shadow-inner h-[360px] sm:h-[400px]">
              <iframe
                title={currentOffice.name}
                src={currentOffice.mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 block"
              />

              {/* Map Floating Coordinates Overlay */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-300 shadow-sm text-xs max-w-[240px]">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-900 mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{currentOffice.overlayTitle}</span>
                </div>
                <p className="text-[10px] text-slate-500 font-mono">
                  {currentOffice.coords}
                </p>
              </div>

              {/* Map Floating Action Buttons */}
              <div className="absolute bottom-3 right-3 flex items-center space-x-2 bg-white/95 backdrop-blur-sm p-1.5 rounded-xl border border-slate-300 shadow-sm text-xs">
                <a
                  href={currentOffice.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t('contact.btnDirections', "Obtenir l'itinéraire")}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 border border-slate-200 transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t('contact.btnCopied', 'Copié !') : t('contact.btnCopyAddress', "Copier l'adresse")}</span>
                </button>
              </div>
            </div>

            {/* Office Details Card */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 border-b border-slate-200 gap-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{currentOffice.name}</h3>
                  <p className="text-xs text-slate-500">{currentOffice.sub}</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                  Lun–Ven, 9h00 – 18h00 EST
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Adresse pour courriers &amp; livraisons :</strong>
                      <p className="text-slate-700 font-medium" dangerouslySetInnerHTML={{ __html: currentOffice.addressHtml }} />
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Ligne directe :</strong>
                      <p className="text-slate-700">{currentOffice.phone}</p>
                      <p className="text-slate-500">Courriel : <a className="text-blue-600 hover:underline" href={`mailto:${currentOffice.email}`}>{currentOffice.email}</a></p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-4">
                  <div>
                    <strong className="text-slate-900 block font-semibold">Transports &amp; Proximité :</strong>
                    <p className="text-slate-600 mt-0.5">{currentOffice.transit}</p>
                  </div>
                  <div className="pt-1">
                    <strong className="text-slate-900 block font-semibold">Protocole de sécurité du bâtiment :</strong>
                    <p className="text-slate-600 mt-0.5">{currentOffice.protocol}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Box */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-slate-700">
              <AlertTriangle className="w-4 h-4 text-[#795900] shrink-0 mt-0.5" />
              <p>
                <strong className="font-bold text-slate-900">{t('contact.advisoryTitle', 'Avis diplomatique & production :')}</strong>{' '}
                {t('contact.advisoryText', 'Visites en personne, repérages techniques et visionnages de masterclasses s’effectuent exclusivement sur rendez-vous confirmé avec notre bureau curatorial ou juridique.')}
              </p>
            </div>
          </div>

          {/* Institutional Contact Form 
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {t('contact.formTitle', 'Transmettre une demande officielle à la curation')}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {t('contact.formSubtitle', 'Remplissez ce formulaire pour planifier une programmation ou une consultation.')}
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t('contact.fieldName', 'Nom et prénom')}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Dr. Jean Tremblay"
                    className="w-full bg-[#faf8ff] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t('contact.fieldEmail', 'Adresse courriel professionnelle')}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="direction@conservatoire.edu"
                    className="w-full bg-[#faf8ff] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t('contact.fieldOrg', 'Institution / Festival / Salle')}
                  </label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Symphony Center / Lincoln Center"
                    className="w-full bg-[#faf8ff] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t('contact.fieldType', 'Type de requête')}
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#faf8ff] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 cursor-pointer"
                  >
                    <option value="tour">{t('contact.typeOptionTour', 'Programmation de tournée')}</option>
                    <option value="residency">{t('contact.typeOptionResidency', 'Résidence académique & Masterclass')}</option>
                    <option value="press">{t('contact.typeOptionPress', 'Accréditation presse & Médias')}</option>
                    <option value="general">{t('contact.typeOptionGeneral', 'Demande institutionnelle générale')}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  {t('contact.fieldMsg', 'Détails de votre projet / Calendrier envisagé')}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Précisez les dates souhaitées, la jauge de la salle et la formule artistique..."
                  className="w-full bg-[#faf8ff] border border-slate-300 rounded-xl p-3.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-[#795900]" />
                  <span>Dossier transmis sous protocole de confidentialité</span>
                </div>

                <button
                  type="submit"
                  disabled={isSent}
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSent ? t('common.loading', 'Chargement...') : t('contact.formSubmit', 'Envoyer la demande officielle')}</span>
                </button>
              </div>
            </form>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};
