import React, { useState, useMemo } from 'react';
import { useI18n } from '../context/I18nContext';
import { NavTab } from '../components/Header';
import {
  Calendar as CalendarIcon,
  Info,
  Radio,
  Theater,
  AudioLines,
  Sparkles,
  Search,
  Mail,
  CheckCircle,
} from 'lucide-react';

interface ConcertsViewProps {
  searchQuery: string;
  onNavigate: (tab: NavTab) => void;
  onOpenReservationModalWithDetails: (title: string, venue: string) => void;
}

export const ConcertsView: React.FC<ConcertsViewProps> = ({
  searchQuery,
  onNavigate,
  onOpenReservationModalWithDetails,
}) => {
  const { t } = useI18n();

  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedDay, setSelectedDay] = useState<number>(16);
  const [filterType, setFilterType] = useState<string>('all');

  const months = [
    { key: 'all', label: t('common.all', 'Tous') },
    { key: 'sept', label: t('concerts.months.sept', 'SEPTEMBRE') },
    { key: 'oct', label: t('concerts.months.oct', 'OCTOBRE') },
    { key: 'nov', label: t('concerts.months.nov', 'NOVEMBRE') },
    { key: 'dec', label: t('concerts.months.dec', 'DÉCEMBRE') },
    { key: 'jan', label: t('concerts.months.jan', 'JANVIER') },
    { key: 'feb', label: t('concerts.months.feb', 'FÉVRIER') },
    { key: 'mar', label: t('concerts.months.mar', 'MARS') },
    { key: 'apr', label: t('concerts.months.apr', 'AVRIL') },
    { key: 'may', label: t('concerts.months.may', 'MAI') },
    { key: 'jun', label: t('concerts.months.jun', 'JUIN') },
    { key: 'jul', label: t('concerts.months.jul', 'JUILLET') },
    { key: 'aug', label: t('concerts.months.aug', 'AOÛT') },
  ];

  const days = [
    { num: 16, dayKey: 'wed', label: t('concerts.days.wed', 'MER') },
    { num: 17, dayKey: 'thu', label: t('concerts.days.thu', 'JEU') },
    { num: 18, dayKey: 'fri', label: t('concerts.days.fri', 'VEN') },
    { num: 19, dayKey: 'sat', label: t('concerts.days.sat', 'SAM') },
    { num: 20, dayKey: 'sun', label: t('concerts.days.sun', 'DIM') },
    { num: 21, dayKey: 'mon', label: t('concerts.days.mon', 'LUN') },
    { num: 22, dayKey: 'tue', label: t('concerts.days.tue', 'MAR') },
    { num: 23, dayKey: 'wed', label: t('concerts.days.wed', 'MER') },
  ];

  const concertEvents = useMemo(
    () => [
      {
        id: 'c1',
        title: t('concerts.event1Title', 'Lounis Aït Menguellet en concert'),
        type: t('concerts.event1Type', 'RETRANSMISSION & EN SALLE'),
        typeIcon: Radio,
        month: 'OCT',
        monthKey: 'oct',
        day: '14',
        status: t('concerts.badgePresale', 'Prévente active'),
        statusColor: 'text-blue-600 bg-blue-50 border-blue-200',
        venue: t('concerts.event1Meta', 'Mer. 19h00 • The Town Hall, New York'),
        image:
          'https://lh3.googleusercontent.com/aida/AEtjO1XRLTf-EA897DrFrxcu3uhQYionDSG4Cwjw8kU_pBvc9pNstoUi1WmmVoKvou4fW0J1-Ax4uOTCDMQZPlr_6X2YAaXcjNeWZc9X4LT0O8P6wxn0eg8-lTRenW_cnnSphgTyS_niHDDYfJj1bHAo09PNb74a3_HMPSWI0hlGrBnZhAWBf5ZyTUfFUfuknPxtoQ9CHSiWzdfxqWf3P5DdkR3Xy0sPjmNhU8fs5hj08hiV3Eds8jaSwutjeeM',
        isBookable: true,
      },
      {
        id: 'c2',
        title: t('concerts.event2Title', 'Lounis Aït Menguellet & Quatuor à cordes'),
        type: t('concerts.event2Type', 'CONCERT EN SALLE'),
        typeIcon: Theater,
        month: 'OCT',
        monthKey: 'oct',
        day: '18',
        status: t('concerts.badgeVip', 'Réservé VIP'),
        statusColor: 'text-[#795900] bg-amber-50 border-amber-200',
        venue: t('concerts.event2Meta', 'Dim. 18h30 • Symphony Hall, Boston'),
        image:
          'https://lh3.googleusercontent.com/aida/AEtjO1U3Mwuj22hKEKOyfaCGHgpvAFuMymKQutbbCLboZUc95gXE8cVAVxwvJdVkU3dpONJmxfOYKURew7gIWtApfC3CIPRpgq9Z3Vx1x2jG7JGMlcdYihfAp29TMY0PFXZwZemrB3ngzy8m04_HdqWTHMc9B6bwQjPt5XTszusp-x4BFjXnarcaRdfd3zCCuVn546sXqRgh6NEl5fNksH4Ufru3LAg_H9I1ErMaWOy9_6l6I7sT_2t8YEmhDg',
        isBookable: true,
      },
      {
        id: 'c3',
        title: t('concerts.event3Title', 'Poésie berbère & Maîtres du mandole'),
        type: t('concerts.event3Type', 'CYCLE ACOUSTIQUE DES MAÎTRES'),
        typeIcon: AudioLines,
        month: 'OCT',
        monthKey: 'oct',
        day: '24',
        status: t('concerts.badgePresale', 'Prévente active'),
        statusColor: 'text-blue-600 bg-blue-50 border-blue-200',
        venue: t('concerts.event3Meta', 'Sam. 19h15 • Chicago Symphony Center'),
        image:
          'https://lh3.googleusercontent.com/aida/AEtjO1WEskXdEZb2k4a2mT5TW-_PPDzneyx3Rh_F4HMktZgWMQ6SI6jYFYZwhNVygxYv7dGehmkkcsIaDSfhBAK1HWlLTdjqd37E9OiIvFS7u7EngUz10QhGCKFySji2pw6s_FIWFVimN0ZAgd93om0fXOB5Qe-qyYBjWoCeGHQ1ucJVfypmoafxwNETWatk57XkkiHZCNZqXoOKTJuhWCLaIMnivHCc7tZKtBhOXCW-gnFSHxhovgkAejB6ixE',
        isBookable: true,
      },
      {
        id: 'c4',
        title: t('concerts.event4Title', "Gala du patrimoine culturel berbère d'Amérique du Nord"),
        type: t('concerts.event4Type', 'GALA & CONCERT DE BIENFAISANCE'),
        typeIcon: Sparkles,
        month: 'NOV',
        monthKey: 'nov',
        day: '02',
        status: t('concerts.badgeOnSaleAug', 'En vente le 1er août'),
        statusColor: 'text-slate-600 bg-slate-100 border-slate-300',
        venue: t('concerts.event4Meta', 'Lun. 18h45 • Warner Theatre, Washington, D.C.'),
        image:
          'https://lh3.googleusercontent.com/aida/AEtjO1VHlsMsRkref3BlZ90pA0fuh5usMunk2pgFVH4rFtNEu42IAbKwFCpUliX3rpOgVNhCq3YR7bnAs8KFyRIoXIue5YJFD_IoznDtFzNCmvpWIf6KXO60y8kndXs78OudZ8Ix4w1AVKHYWAUscCpQG2jZMnx5gDHoOPg4kMFCouu5Pcv78SbrLuHWyUVlHMpYtGX8hKzEFfn52wHh8_keAWMsAQHvtlkQanZMuwerzTrkyZWxasevM_0Rhj8',
        isBookable: false,
      },
    ],
    [t]
  );

  const filteredEvents = useMemo(() => {
    return concertEvents.filter((event) => {
      const matchesSearch =
        searchQuery === '' ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.type.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMonth = selectedMonth === 'all' || event.monthKey === selectedMonth;

      return matchesSearch && matchesMonth;
    });
  }, [concertEvents, searchQuery, selectedMonth]);

  const handleNotifyMe = (venue: string) => {
    const email = window.prompt(`${t('concerts.notifyPrompt', "Entrez votre courriel pour l'alerte d'ouverture pour")} ${venue} :`);
    if (email) {
      alert(t('concerts.notifySuccess', "Votre courriel a été inscrit pour l'alerte prioritaire."));
    }
  };

  return (
    <div className="space-y-8 pt-2">
      {/* Category Eyebrow & Editorial Title */}
      <div className="space-y-3 pt-2">
        <div className="text-[#ae0010] text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
          <CalendarIcon className="w-4 h-4 text-[#ae0010]" />
          <span>{t('concerts.eyebrow', 'CALENDRIER & SPECTACLES')}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-900 font-semibold tracking-tight leading-tight">
          {t('concerts.title', 'Calendrier des concerts et retransmissions en direct')}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {t('concerts.desc', "Écoutez les artistes et ensembles acoustiques d'Anizav World Art en direct, en ligne et dans les plus grandes salles historiques.")}
        </p>
      </div>

      {/* Notice Banner (Golden / Amber Notice) */}
      <div className="bg-[#ffdf9e]/30 border border-[#c99700]/30 text-slate-900 rounded-2xl p-4 sm:p-5 flex items-start sm:items-center gap-3 text-xs sm:text-sm shadow-xs">
        <Info className="w-5 h-5 text-[#795900] shrink-0 mt-0.5 sm:mt-0" />
        <span className="leading-relaxed">
          <strong className="font-bold text-[#795900]">
            {t('concerts.noticeTitle', 'Saison Automne 2026 — Billetterie ouverte :')}
          </strong>{' '}
          {t('concerts.noticeText', 'Des quotas prioritaires sont désormais disponibles pour Carnegie Hall, Symphony Hall et la Place des Arts. Retransmissions en direct et masterclasses annoncées prochainement.')}
        </span>
      </div>

      {/* Month Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {months.map((m) => {
          const isSelected = selectedMonth === m.key;
          return (
            <button
              key={m.key}
              onClick={() => setSelectedMonth(m.key)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                isSelected
                  ? 'bg-[#ae0010] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Date Picker Day Strip */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200/80">
        {days.map((d) => {
          const isSelected = selectedDay === d.num;
          return (
            <button
              key={d.num}
              onClick={() => setSelectedDay(d.num)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl min-w-[72px] transition-all shadow-xs ${
                isSelected
                  ? 'border border-[#795900]/50 bg-[#ffdf9e]/30 text-slate-900 ring-2 ring-[#795900]/30'
                  : 'border border-slate-200 hover:border-slate-300 bg-white text-slate-700'
              }`}
            >
              <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-[#795900]' : 'text-slate-400'}`}>
                {d.label}
              </span>
              <span className="text-xl font-serif font-bold text-slate-900 mt-0.5">
                {d.num}
              </span>
            </button>
          );
        })}
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
        {filteredEvents.map((event) => {
          const TypeIcon = event.typeIcon;
          return (
            <div
              key={event.id}
              className="group flex flex-col space-y-4 bg-white border border-slate-200 rounded-3xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300"
            >
              {/* Event Image Box */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-xs">
                <img
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={event.image}
                />
                {/* Floating Date Badge (Top Left) */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg px-3.5 py-2 text-center border border-slate-200/70 min-w-[56px]">
                  <span className="block text-[11px] font-bold text-[#ae0010] uppercase leading-tight font-sans">
                    {event.month}
                  </span>
                  <span className="block text-2xl font-serif font-bold text-slate-900 leading-none mt-0.5">
                    {event.day}
                  </span>
                </div>

                {/* Floating Status Pill (Top Right) */}
                <div
                  className={`absolute top-4 right-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border ${event.statusColor}`}
                >
                  {event.status}
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-2 px-1">
                <div className="flex items-center gap-1.5 text-[#795900] text-xs font-bold uppercase tracking-wider">
                  <TypeIcon className="w-4 h-4 text-[#795900]" />
                  <span>{event.type}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-slate-900 group-hover:text-blue-600 transition-colors font-bold leading-snug">
                  {event.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0" />
                    <span>{event.venue}</span>
                  </div>

                  {event.isBookable ? (
                    <button
                      onClick={() => onOpenReservationModalWithDetails(event.title, event.venue)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs self-start sm:self-auto shrink-0"
                    >
                      {t('common.btnReserve', 'RÉSERVER')}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNotifyMe(event.venue)}
                      className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs self-start sm:self-auto shrink-0"
                    >
                      {t('common.btnNotify', "M'INFORMER")}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 text-sm">
            Aucun concert ne correspond à vos critères de recherche.
          </p>
        </div>
      )}

      {/* Institutional Presenter Booking Banner */}
      <div className="bg-[#f2f3ff] border border-blue-200/60 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xs">
        <div className="space-y-2 max-w-2xl">
          <span className="text-[#795900] text-xs uppercase tracking-widest font-bold block">
            {t('concerts.presenterEyebrow', 'SERVICES AUX PROGRAMMATEURS & INSTITUTIONS')}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-slate-900 font-bold">
            {t('concerts.presenterTitle', 'Accueillez les artistes Anizav dans votre saison ou festival')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t('concerts.presenterDesc', 'Nous assurons la programmation de masterclasses, arrangements orchestraux et ensembles acoustiques disposant de visas P-1 certifiés.')}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>{t('common.btnContactCuration', 'CONTACTER LA CURATION')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
