import React from 'react';
import { useI18n } from '../context/I18nContext';
import { X, Music, MapPin, Award, Calendar, CheckCircle, Mail } from 'lucide-react';

export interface ArtistData {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  badgeType?: 'crimson' | 'gold' | 'blue';
  tags: string[];
  region: string;
  country: string;
  genre: string;
  instruments: string[];
  bio: string;
  availability: string;
}

interface ArtistDetailModalProps {
  artist: ArtistData | null;
  onClose: () => void;
  onBook: (artistName: string) => void;
}

export const ArtistDetailModal: React.FC<ArtistDetailModalProps> = ({
  artist,
  onClose,
  onBook,
}) => {
  const { t, isFrench } = useI18n();

  if (!artist) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-300 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t('common.close', 'Fermer')}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Image with Gradient */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            {artist.badge && (
              <span className="inline-block bg-[#bb0112] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded shadow-sm mb-2">
                {artist.badge}
              </span>
            )}
            <h2 className="font-serif text-3xl font-bold leading-tight">{artist.name}</h2>
            <p className="text-xs text-slate-300 font-medium mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{artist.subtitle}</span>
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {artist.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Biography */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#795900]" />
              <span>{t('artists.modalDetail.biography', 'Biographie artistique & Tradition')}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {artist.bio}
            </p>
          </div>

          {/* Instruments & Repertoire Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
            <div className="bg-[#faf8ff] p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block flex items-center gap-1">
                <Music className="w-3.5 h-3.5 text-blue-600" />
                {t('artists.modalDetail.keyInstruments', 'Instruments maîtrisés')}
              </span>
              <p className="text-xs text-slate-800 font-medium">
                {artist.instruments.join(' • ')}
              </p>
            </div>

            <div className="bg-[#faf8ff] p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                {t('artists.modalDetail.tourPeriod', 'Disponibilité de tournée')}
              </span>
              <p className="text-xs text-slate-800 font-medium">
                {artist.availability}
              </p>
            </div>
          </div>

          {/* Institutional Compliance Notice */}
          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 flex items-start gap-2.5 text-xs text-emerald-900">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">
                {t('artists.modalDetail.techRiderStatus', 'Fiche technique P-1')} :
              </span>
              <span className="text-emerald-800">
                {t('artists.modalDetail.techRiderOk', "100% Conforme aux standards d'auditorium")} — Inclus logistique P-1, backline certifié, sonorisation de chambre et surtitres bilingues.
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-white transition-colors"
          >
            {t('common.close', 'Fermer')}
          </button>

          <button
            onClick={() => {
              onClose();
              onBook(artist.name);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t('artists.modalDetail.btnBookArtist', 'Demander une disponibilité pour cet artiste')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
