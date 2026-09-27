import React, { useState, useMemo } from 'react';
import { useI18n } from '../context/I18nContext';
import { NavTab } from '../components/Header';
import { ArtistData } from '../components/ArtistDetailModal';
import { Search, ChevronDown, Download, Mail, ArrowUpRight } from 'lucide-react';

interface ArtistsViewProps {
  searchQuery: string;
  onNavigate: (tab: NavTab) => void;
  onSelectArtist: (artist: ArtistData) => void;
}

export const ArtistsView: React.FC<ArtistsViewProps> = ({
  searchQuery,
  onNavigate,
  onSelectArtist,
}) => {
  const { t } = useI18n();

  const [localSearch, setLocalSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedInstrument, setSelectedInstrument] = useState('all');
  const [selectedAxe, setSelectedAxe] = useState('all');
  const [visibleCount, setVisibleCount] = useState(12);

  const allArtists: ArtistData[] = useMemo(
    () => [
      {
        id: 'a1',
        name: 'Lounis Aït Menguellet',
        subtitle: 'Algérie • Patrimoine vivant kabyle',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDBnBoCLAGoymM1migeG6bmgOpJSEcb4dRsIrmFEBz0aFsncB1hiVnaVmN9zVQaIbM3lb6tlekt-sfPWXTnjBS8b94d6TaQ33m_1zVGNJ9tPu-zgTaOgRkAsH6DoitNSFRjVdw5BwNVErKtck1zRGW4TanPbDp0aisKLNaAF9qPkf3dp1WKeZhtM3NjxQpsPFVf9yObP_xT7L7SqWTkgdGuYpfCK1q-hfocLltLHQ-nygj5R4eqf6BmtrBjIaTJpNmbGgI5KKQA0eU5rg',
        badge: t('artists.badgeHeadline', "TÊTE D'AFFICHE TOURNÉE 2026"),
        badgeType: 'crimson',
        tags: ['Mandole acoustique', 'Poésie', 'Débuts au Carnegie Hall'],
        region: 'Afrique du Nord',
        country: 'Algérie',
        genre: 'Kabyle / Traditionnel',
        instruments: ['Mandole', 'Chant', 'Bendir'],
        bio: "Légende vivante de la poésie kabyle et maître incontesté du mandole acoustique, Lounis Aït Menguellet célèbre plus de 55 ans de carrière. Sa prose philosophique, ciselée et universelle, a marqué des générations entières à travers la Méditerranée et le monde.",
        availability: 'Automne 2026 • Tournée Amérique du Nord (New York, Boston, Chicago, Washington D.C.)',
      },
      {
        id: 'a2',
        name: 'Ali Amran',
        subtitle: 'Algérie • Kabyle / Rock & Fusion',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDjevZhzGRIE5J2mJ9GVplVBhYl6cM8fsmcj7LOI2NugCamn3O3Kbpg2OH_taQMTzMFHKKnYZj-VkHBtwUQs7_VZDKHnRIsF6saUMXGp1cWtz2hWUuM15HDV45E-cUhB0C6qFrLRrN7TLEJKbiO2djIoOUPPJ4aUrhMh-YzjfDSD-Cs6XMvDRvE4Z9TmZNPnD3WLCKblhlRZ1kEDGsLt7MlWSyaV95bGsDBZGLn9EBexdo1s0oRiKuPE_SBCYKDruB2MiZI3m8pnUsfJw',
        badge: t('artists.badgeOrchestra', 'ORCHESTRE'),
        badgeType: 'gold',
        tags: ['Mandole', 'Bendour', 'Cordes', 'Oud'],
        region: 'Afrique du Nord',
        country: 'Algérie',
        genre: 'Rock / Folk Fusion',
        instruments: ['Guitare', 'Mandole', 'Voix'],
        bio: "Auteur-compositeur-interprète incontournable, Ali Amran fusionne avec une virtuosité rare les complaintes ancestrales kabyles et les harmonies folk-rock américaines et celtiques.",
        availability: 'Saison 2026/2027 • Formats acoustiques et quatuor électrique',
      },
      {
        id: 'a3',
        name: 'Takfarinas & Folk Modernists',
        subtitle: 'Algérie • Kabyle / Rythmes Yal',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD_akvRJY7-6YNrr0TdqSJEWZTCKTO2_zlSUVp8ZkQ3NWeBn1M2u_yaO5tvtDBvgBEIhclK9JR1KCfSTdErPoXpnUkxha54m-bu_Yri1_5CcQ-GYRCpK7khjJyrDx7U7Lgqp8zoNbnj1yeuxiK7hyb2ShqhmRV2pmyWT-zYeiawk55cXcfrybiagnjn7HknauvMQORyCVh9Iy5zGQDKn2oco--1jBWVqnJbWzWz5p6HRI0FE1cTYVtuczpQ5uvmlPQ8BhJk37v-uDsbWA',
        tags: ['Mandole Yal', 'Voix', 'Percussions'],
        region: 'Afrique du Nord',
        country: 'Algérie',
        genre: 'Yal Moderniste',
        instruments: ['Mandole électro-acoustique', 'Voix', 'Derbouka'],
        bio: "Créateur du style 'Yal', Takfarinas a révolutionné le mandole avec son instrument à double manche et ses rythmes entraînants qui exaltent l'énergie de la culture berbère.",
        availability: 'Printemps 2027 • Grandes salles et festivals de plein air',
      },
      {
        id: 'a4',
        name: 'Idir Tribute & Archival Ensemble',
        subtitle: 'Algérie / Diaspora • Répertoire patrimonial',
        image:
          'https://lh3.googleusercontent.com/aida/AEtjO1XaupOZK94FX5NERtdGeqvHxlseeNyQB8jX9kZceb0CVITCxNXmR7ft5BOmSnvoqvFXsq_MliFpKL92_5u8RvpmtHfXVKyKcvgypMcPNIfohOu401wg7VmkLG8NE427QkOPjPhfwpd7DEQVHtCRIfTjEy5P8lCtJFqkFviTxJc2TW4J58OTtYuzKrKPpneQTnRdHIrl-bz7BRrV79GGRoAXtLAzFeSZCVzLlQJRNPEIVRfhRGfN6pnwAnE',
        tags: ['Guitare acoustique', 'Flûte', 'Chant'],
        region: 'Diaspora',
        country: 'Algérie',
        genre: 'Patrimoine / Folk',
        instruments: ['Guitare', 'Flûte pastorale', 'Choeurs'],
        bio: "Ensemble officiel réunissant les musiciens historiques ayant accompagné le maestro Idir ('A Vava Inouva'), célébrant la mémoire et la transmission universelle du conte méditerranéen.",
        availability: 'Résidences universitaires et programmations patrimoniales 2026/2027',
      },
      {
        id: 'a5',
        name: 'Allaoua Mohamed',
        subtitle: 'Massif du Djurdjura, Algérie • Chants de fête',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBpoin4uI5xQvVTPNZp3qMT9x_ggylxWh510zEefEwjdTnZquE1aDklKXCAuR5E0qLAJqPmsDFdati39oPnLUOgpfAfZwfRqfGtfMn0x06ZHm1CdhlLHgQ_LyZjknbsJYfDsoew2yFYAHys6eTlPj7g17od--N6k-Ga9lPzcE7ihDLMD_meGSZQdBcZVRYQv0mNdGt_AaUPHslFTWLYWkWWLXB2FO9pchhd-Y121DHF48xPyjL6_G6FON--CHLSyniFqtxQZjwCHiDNPA',
        tags: ['Chant traditionnel', 'Bendour', 'Gasba'],
        region: 'Afrique du Nord',
        country: 'Algérie',
        genre: 'Chanson festive',
        instruments: ['Voix', 'Percussions', 'Gasba'],
        bio: "Figure adulée des jeunes générations de la diaspora, Mohamed Allaoua embrase les salles avec une cadence dansante, des textes pleins de verve et une authenticité vocale intacte.",
        availability: 'Automne 2026 • Salles de grande capacité (New York, Chicago, Montréal)',
      },
      {
        id: 'a6',
        name: 'Samir Sadaoui',
        subtitle: 'Algérie • Kabyle / Fête & Griot',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDekvq9LcxxEMr9OwrhjQ0WgMNTUz8mc6iiFp7DXJ-vOQGwGk4hGGIxu-KbE3UNYsoCQRMFA2ByF_2C_gzm1gIV1dsevFYfCMKTbtCVmFvq9uAnuDWA5dxVRNtF3TEw86IW0A71EHbFdBdDqmufqZO36Yo0IGW1GVoxR3WmK_BuQ6BztZGU0RkI-tQ3hCjrK9K5QvAnZ7GcCT6IuW0-AQHFGduyxtQZzPOFTdOGcUry2Wj4jcH3PV1XYsdN2p2Dm7w0-uYf6I2A081LTQ',
        tags: ['Kora', 'Cordes acoustiques', 'Griot'],
        region: 'Afrique du Nord',
        country: 'Algérie',
        genre: 'Folk traditionnel',
        instruments: ['Mandole', 'Chant', 'Bendir'],
        bio: "Fidèle gardien de la tradition kabyle populaire, Samir Sadaoui perpétue l'héritage festif avec générosité et poésie.",
        availability: 'Janvier 2026 & Saison 2026/2027 • Tournée USA Est',
      },
      {
        id: 'a7',
        name: 'Kedim',
        subtitle: 'Algérie • Kabyle / Fête',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCivoPlhqkTkIaOKBFL-zWrgSa47j13sGrA-O9nQAOKg_rUH2NjSoydKtBWAIR4kyLcfgflSrOOxJye1y--Eb2nZXkqhhnhjVRU4fwiLFM0Oz-bimkGAobHJd-0OP0-IGG7TzUmkD4z6PCMAMhXJtcz6-6QY_KfBo_PITz0uTki2oXZciqy9ZyGj1OASUsfuCpmhvLCHaDjCnJEkb_SEaKOCU7AsxISqH71SuZbly7vXdZCNPkPfY6K3O6LhY7Jmumlq3JXthOTs_dBnA',
        tags: ['Oud', 'Violon', 'Qanoun'],
        region: 'Afrique du Nord',
        country: 'Algérie',
        genre: 'Acoustique / Chaâbi',
        instruments: ['Mandole', 'Violon oriental'],
        bio: "Virtuose des cordes et arrangeur accompli, Kedim offre un pont subtil entre la tradition de fête kabyle et l'élégance mélodique andalouse.",
        availability: 'Novembre 2026 • USA Tour',
      },
      {
        id: 'a8',
        name: 'Menad Harket',
        subtitle: 'Algérie • Kabyle / Fête & Chambre',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBvTj_fH-0q4bFN10bnoZzr4vMp7wELnLI-duKQ8ekTDtHcLhRit24SZToPgbMOpmxwBZBMJDCwFJvYz0bO6iepiVrjChcWxpS-JQ77Q5C4nddqDFnn-S2U5nS6XeWZpLbrt6t9QQPXH0tgz__KdyVT7lcBv58ytp-BtU-3nit7zEqIf-fVtu0M4U--ojLZoKneIBcSgCwiZfLryNdaULOLel70XikPjUsCZ-Lj8N-dLlOeTSf-Bs7PFLAqTWFbo-J1FQX_pbZA-4jKwQ',
        tags: ['Kora', 'Violoncelle', 'Folk de chambre'],
        region: 'Afrique du Nord',
        country: 'Algérie',
        genre: 'Chambre / Folk',
        instruments: ['Chant', 'Mandole', 'Percussions'],
        bio: "Voix limpide et présence scénique authentique, Menad Harket transporte son auditoire dans l'intimité poétique des montagnes du Djurdjura.",
        availability: 'Saison 2026/2027 • Tournées nord-américaines',
      },
      {
        id: 'a9',
        name: 'Djamel Allam Archival Project',
        subtitle: 'Algérie • Archives musicales',
        image:
          'https://lh3.googleusercontent.com/aida/AEtjO1U3Mwuj22hKEKOyfaCGHgpvAFuMymKQutbbCLboZUc95gXE8cVAVxwvJdVkU3dpONJmxfOYKURew7gIWtApfC3CIPRpgq9Z3Vx1x2jG7JGMlcdYihfAp29TMY0PFXZwZemrB3ngzy8m04_HdqWTHMc9B6bwQjPt5XTszusp-x4BFjXnarcaRdfd3zCCuVn546sXqRgh6NEl5fNksH4Ufru3LAg_H9I1ErMaWOy9_6l6I7sT_2t8YEmhDg',
        tags: ['Folk acoustique', 'Mandole', 'Chant'],
        region: 'Afrique du Nord',
        country: 'Algérie',
        genre: 'Archives / World Folk',
        instruments: ['Mandole', 'Guitare', 'Flûtes'],
        bio: "Révérence officielle au pionnier qui introduisit la musique algérienne sur les scènes occidentales dans les années 70, soutenu par des masterclasses et projections documentaires.",
        availability: 'Projets spéciaux & rétrospectives 2026/2027',
      },
      {
        id: 'a10',
        name: 'Naseer Shamma Ensemble',
        subtitle: "Irak / Égypte • Maîtrise de l'Oud",
        image:
          'https://lh3.googleusercontent.com/aida/AEtjO1XRLTf-EA897DrFrxcu3uhQYionDSG4Cwjw8kU_pBvc9pNstoUi1WmmVoKvou4fW0J1-Ax4uOTCDMQZPlr_6X2YAaXcjNeWZc9X4LT0O8P6wxn0eg8-lTRenW_cnnSphgTyS_niHDDYfJj1bHAo09PNb74a3_HMPSWI0hlGrBnZhAWBf5ZyTUfFUfuknPxtoQ9CHSiWzdfxqWf3P5DdkR3Xy0sPjmNhU8fs5hj08hiV3Eds8jaSwutjeeM',
        tags: ['Oud', 'Musique de chambre', 'Composition'],
        region: 'Moyen-Orient',
        country: 'Irak / Égypte',
        genre: 'Maqâm / Classique arabe',
        instruments: ['Oud', 'Violoncelle', 'Ney', 'Riq'],
        bio: "Virtuose mondial de l'oud à huit cordes et Artiste de l'UNESCO pour la paix, Naseer Shamma transcende les traditions séculaires du Maqâm vers un dialogue symphonique universel.",
        availability: 'Résidences de conservatoires et auditoriums symphoniques',
      },
      {
        id: 'a11',
        name: 'Fanfare Ciocărlia',
        subtitle: 'Roumanie • Fanfare balkanique',
        image:
          'https://lh3.googleusercontent.com/aida/AEtjO1XaupOZK94FX5NERtdGeqvHxlseeNyQB8jX9kZceb0CVITCxNXmR7ft5BOmSnvoqvFXsq_MliFpKL92_5u8RvpmtHfXVKyKcvgypMcPNIfohOu401wg7VmkLG8NE427QkOPjPhfwpd7DEQVHtCRIfTjEy5P8lCtJFqkFviTxJc2TW4J58OTtYuzKrKPpneQTnRdHIrl-bz7BRrV79GGRoAXtLAzFeSZCVzLlQJRNPEIVRfhRGfN6pnwAnE',
        tags: ['Cuivres', 'Trompette', 'Percussions'],
        region: 'Europe de l’Est',
        country: 'Roumanie',
        genre: 'Balkan Brass',
        instruments: ['Trompettes', 'Trombones', 'Tubas', 'Tapan'],
        bio: "L'ouragan sonore le plus rapide et virtuose des Balkans. Leurs tempos ultra-rapides et leurs cuivres rugissants ont conquis Carnegie Hall et les scènes mondiales.",
        availability: 'Tournées festivals et salles majeures',
      },
      {
        id: 'a12',
        name: 'Dhafer Youssef Quartet',
        subtitle: 'Tunisie / France • Jazz mystique',
        image:
          'https://lh3.googleusercontent.com/aida/AEtjO1UrMd6022J6RXRLLFgXZ8VQQUEEeTk42y-QfCiSZviYYOlqZt3SLV7-Sd2fEcY4OwaZrcj_5rz5vr2ZH06b_Spd5TkpUvZU4WbpIHmW5YEJyCyxqhHm5CI67TsG1ojsleR9knqMej-O4r81sOS3z9I8gHWFxrwAQQaVJu_CaueTuSTUDfbaSAilznKIW3tptb-w66Yno74x8WFhpqihojautduFVXHQb3oJ33DzWy4snsjDi5CXGmsTN0k',
        tags: ['Oud', 'Improvisation vocale', 'Contrebasse acoustique'],
        region: 'Méditerranée',
        country: 'Tunisie / France',
        genre: 'Jazz Soufi / Mystique',
        instruments: ['Oud', 'Chant de gorge', 'Piano', 'Contrebasse'],
        bio: "Maître de l'oud et vocaliste d'une étendue vertigineuse, Dhafer Youssef crée une passerelle envoûtante entre la tradition soufie mystique et le jazz contemporain le plus audacieux.",
        availability: 'Automne 2026 / Hiver 2027 • Grands auditoriums acoustiques',
      },
    ],
    [t]
  );

  const filteredArtists = useMemo(() => {
    const q = (searchQuery || localSearch).toLowerCase().trim();

    return allArtists.filter((artist) => {
      const matchSearch =
        q === '' ||
        artist.name.toLowerCase().includes(q) ||
        artist.subtitle.toLowerCase().includes(q) ||
        artist.tags.some((t) => t.toLowerCase().includes(q)) ||
        artist.instruments.some((i) => i.toLowerCase().includes(q)) ||
        artist.genre.toLowerCase().includes(q) ||
        artist.country.toLowerCase().includes(q);

      const matchRegion = selectedRegion === 'all' || artist.region === selectedRegion;
      const matchCountry = selectedCountry === 'all' || artist.country.includes(selectedCountry);
      const matchGenre = selectedGenre === 'all' || artist.genre.includes(selectedGenre);
      const matchInstrument =
        selectedInstrument === 'all' ||
        artist.instruments.some((inst) => inst.toLowerCase().includes(selectedInstrument.toLowerCase()));

      return matchSearch && matchRegion && matchCountry && matchGenre && matchInstrument;
    });
  }, [allArtists, searchQuery, localSearch, selectedRegion, selectedCountry, selectedGenre, selectedInstrument]);

  return (
    <div className="space-y-8">
      {/* Editorial Header Section */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 scrim-radial shadow-xs">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-widest text-[#bb0112] uppercase bg-[#ffdad6]/60 border border-[#bb0112]/20 px-3 py-1 rounded-md">
              {t('artists.eyebrow', 'RÉSEAU CURATORIAL & ARTISTES')}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1]">
            {t('artists.title', 'Réseau mondial des artistes')}
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            {t('artists.desc', "Un réseau international de musiciens, vocalistes et passeurs de mémoire convaincus que la création musicale, la préservation des patrimoines et l'émotion partagée constituent de puissants leviers de diplomatie culturelle et d'excellence artistique.")}
          </p>

          {/* Search Box */}
          <div className="relative w-full max-w-xl pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-5" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder={t('artists.searchPlaceholder', 'Rechercher par nom, pays, instrument, tradition...')}
              className="w-full bg-[#faf8ff] border border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm rounded-full py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-inner"
            />
          </div>

          {/* Filter Pills Dropdowns */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              aria-label={t('artists.filterRegion', 'Région')}
              className="bg-white border border-slate-200 rounded-full text-xs py-1.5 px-3.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xs cursor-pointer"
            >
              <option value="all">{t('artists.filterRegion', 'Région')} ({t('artists.allFilter', 'Tous')})</option>
              <option value="Afrique du Nord">Afrique du Nord</option>
              <option value="Moyen-Orient">Moyen-Orient</option>
              <option value="Europe de l’Est">Europe de l’Est</option>
              <option value="Méditerranée">Méditerranée</option>
              <option value="Diaspora">Diaspora</option>
            </select>

            {/* Country Filter */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              aria-label={t('artists.filterCountry', 'Pays')}
              className="bg-white border border-slate-200 rounded-full text-xs py-1.5 px-3.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xs cursor-pointer"
            >
              <option value="all">{t('artists.filterCountry', 'Pays')} ({t('artists.allFilter', 'Tous')})</option>
              <option value="Algérie">Algérie</option>
              <option value="Roumanie">Roumanie</option>
              <option value="Irak">Irak</option>
              <option value="Tunisie">Tunisie</option>
            </select>

            {/* Instrument Filter */}
            <select
              value={selectedInstrument}
              onChange={(e) => setSelectedInstrument(e.target.value)}
              aria-label={t('artists.filterInstrument', 'Instrument')}
              className="bg-white border border-slate-200 rounded-full text-xs py-1.5 px-3.5 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xs cursor-pointer"
            >
              <option value="all">{t('artists.filterInstrument', 'Instrument')} ({t('artists.allFilter', 'Tous')})</option>
              <option value="Mandole">Mandole</option>
              <option value="Oud">Oud</option>
              <option value="Bendir">Bendir</option>
              <option value="Cuivres">Cuivres / Trompette</option>
              <option value="Voix">Chant / Voix</option>
            </select>
          </div>

          <div className="text-xs text-slate-500 font-medium tracking-wide pt-1">
            {t('artists.showingPrefix', 'Affichage de')}{' '}
            <span className="text-slate-900 font-bold">{filteredArtists.length}</span>{' '}
            {t('artists.showingSuffix', 'maîtres artistes et ensembles musicaux')}
          </div>
        </div>
      </section>

      {/* 4-Column Grid of Artist Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredArtists.slice(0, visibleCount).map((artist) => (
          <article
            key={artist.id}
            onClick={() => onSelectArtist(artist)}
            className="group bg-white border border-slate-200 hover:border-blue-500/60 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Square Aspect Image */}
            <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {artist.badge && (
                <div className="absolute top-2.5 right-2.5">
                  <span
                    className={`text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow ${
                      artist.badgeType === 'gold' ? 'bg-[#795900]' : 'bg-[#bb0112]'
                    }`}
                  >
                    {artist.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {artist.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5 mb-3">
                  {artist.subtitle}
                </p>
              </div>

              {/* Tags and CTA */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {artist.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] bg-[#f2f3ff] border border-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end text-[11px] text-blue-600 font-semibold group-hover:underline pt-1">
                  <span>{t('common.viewMore', 'En savoir plus')}</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Load More Button */}
      {visibleCount < filteredArtists.length && (
        <div className="text-center pt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-300 hover:border-blue-600 transition-all shadow-xs hover:shadow-md"
          >
            <span>
              {t('artists.loadMore', "CHARGER PLUS D'ARTISTES")} ({filteredArtists.length - visibleCount} restants)
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Institutional Booking CTA Banner */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-3">
            <span className="text-[#795900] text-xs font-bold uppercase tracking-widest block">
              {t('artists.institutionalEyebrow', 'PROGRAMMATION INSTITUTIONNELLE & TOURNÉES')}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {t('artists.institutionalTitle', 'Présentez ou programmez un maître artiste Anizav pour votre saison')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t('artists.institutionalDesc', "Anizav World Art LLC orchestre des tournées prestigieuses dans les grandes salles, résidences universitaires et programmations symphoniques à travers les États-Unis et le Canada. Demandez nos dossiers curatoriaux et plannings de disponibilité.")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 text-xs pt-2">
              <div className="bg-[#faf8ff] p-3 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  {t('artists.deskRequests', 'Bureau des demandes')}
                </span>
                <a className="text-blue-600 font-semibold hover:underline" href="mailto:contact@anizav.com">
                  contact@anizav.com
                </a>
              </div>
              <div className="bg-[#faf8ff] p-3 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  {t('artists.repCuratorial', 'Représentation curatoriale')}
                </span>
                <span className="text-slate-900 font-medium">New York • Washington D.C.</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full text-center py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{t('artists.btnSendRequest', 'ENVOYER UNE DEMANDE DE PROGRAMMATION')}</span>
            </button>
            <a
              href="mailto:contact@anizav.com?subject=Demande%20Catalogue%20Roster%202026/2027"
              className="w-full text-center py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs rounded-xl uppercase tracking-wider transition-colors border border-slate-300 shadow-xs flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{t('artists.btnDownloadRoster', 'TÉLÉCHARGER LE GUIDE DU ROSTER 2026/2027')}</span>
            </a>
            <p className="text-[11px] text-slate-500 text-center mt-1">
              {t('artists.servicesDisclaimer', 'Services officiels pour visas P-1, fiches techniques et partenariats non lucratifs.')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
