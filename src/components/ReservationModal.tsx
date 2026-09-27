import React, { useState } from 'react';
import { useI18n } from '../context/I18nContext';
import { X, Lock, CheckCircle2, CreditCard } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  concertTitle?: string;
  concertVenue?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  concertTitle = 'Lounis Aït Menguellet en concert',
  concertVenue = 'The Town Hall, New York • Mer. 14 Oct 2026',
}) => {
  const { t } = useI18n();
  const [selectedTier, setSelectedTier] = useState<string>('tier1');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      alert(t('concerts.modal.checkoutRedirect', 'Connecting to host box office encrypted allotment gateway...'));
      setIsSubmitted(false);
      onClose();
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-300 w-full max-w-xl rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t('common.close', 'Fermer')}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 transition-colors p-1 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <span className="text-[#795900] text-xs uppercase tracking-wider font-bold">
            {t('concerts.modal.boxOfficeDirect', 'Billetterie Officielle • Choix de Siège')}
          </span>
          <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug">
            {concertTitle}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            {concertVenue}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Seating Tier Options */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              {t('concerts.modal.selectCategory', 'Sélectionnez votre catégorie de siège')}
            </label>

            {/* Tier 1 */}
            <label
              className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                selectedTier === 'tier1'
                  ? 'bg-blue-50/60 border-blue-600 shadow-xs'
                  : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="tier"
                  value="tier1"
                  checked={selectedTier === 'tier1'}
                  onChange={() => setSelectedTier('tier1')}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <span className="block text-xs font-bold text-slate-900">
                    {t('concerts.modal.tier1Name', 'Catégorie 1 : Orchestre Centre Acoustique Prime')}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {t('concerts.modal.tier1Desc', 'Ligne de vue directe et résonance acoustique optimale')}
                  </span>
                </div>
              </div>
              <span className="font-serif text-lg font-bold text-[#795900]">
                {t('concerts.modal.tier1Price', '145.00$')}
              </span>
            </label>

            {/* Tier 2 */}
            <label
              className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                selectedTier === 'tier2'
                  ? 'bg-blue-50/60 border-blue-600 shadow-xs'
                  : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="tier"
                  value="tier2"
                  checked={selectedTier === 'tier2'}
                  onChange={() => setSelectedTier('tier2')}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <span className="block text-xs font-bold text-slate-900">
                    {t('concerts.modal.tier2Name', 'Catégorie 2 : Corbeille & Balcon Panoramique')}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {t('concerts.modal.tier2Desc', 'Premiers rangs de balcon avec perspective architecturale')}
                  </span>
                </div>
              </div>
              <span className="font-serif text-lg font-bold text-slate-900">
                {t('concerts.modal.tier2Price', '95.00$')}
              </span>
            </label>

            {/* Tier 3 */}
            <label
              className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                selectedTier === 'tier3'
                  ? 'bg-blue-50/60 border-blue-600 shadow-xs'
                  : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="tier"
                  value="tier3"
                  checked={selectedTier === 'tier3'}
                  onChange={() => setSelectedTier('tier3')}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <span className="block text-xs font-bold text-slate-900">
                    {t('concerts.modal.tier3Name', "Loge Mécène & Pass Salon Privé d'Après-Concert")}
                  </span>
                  <span className="text-[11px] text-[#795900] font-medium">
                    {t('concerts.modal.tier3Desc', 'Loge privatisée + Coupe de champagne et rencontre avec les artistes')}
                  </span>
                </div>
              </div>
              <span className="font-serif text-lg font-bold text-[#795900]">
                {t('concerts.modal.tier3Price', '225.00$')}
              </span>
            </label>
          </div>

          {/* Patron Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              {t('concerts.modal.patronEmail', 'Adresse courriel du mécène')}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('concerts.modal.emailPlaceholder', 'mecene@fondation.org')}
              className="w-full bg-[#faf8ff] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-xs"
            />
          </div>

          {/* Security and Trust Badges */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#795900]" />
              {t('concerts.modal.encryptionBadge', 'Chiffrement direct billetterie 256-bit')}
            </span>
            <span className="flex items-center gap-1 text-slate-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {t('concerts.modal.noMarkup', 'Sans surcoût de revente')}
            </span>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <CreditCard className="w-4 h-4" />
              <span>
                {isSubmitted
                  ? t('common.loading', 'Chargement...')
                  : t('concerts.modal.btnCheckout', 'Procéder au paiement sécurisé')}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
