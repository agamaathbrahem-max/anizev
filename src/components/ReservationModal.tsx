import React, { useState } from 'react';
import { useI18n } from '../context/I18nContext';
import { X, Lock, CheckCircle2, ExternalLink } from 'lucide-react';

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
        {/* Ticketing Redirection Content */}
      <div className="space-y-5">
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            {t('concerts.modal.externalNoticeTitle', 'Réservation et Paiement')}
          </span>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t(
              'concerts.modal.externalNoticeDesc',
              'L’achat de vos billets et la sélection de vos places s’effectuent directement sur le système de billetterie sécurisé de la salle.'
            )}
          </p>
        </div>

        {/* Security and Trust Badges */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#795900]" />
            {t('concerts.modal.officialTicketOffice', 'Billetterie partenaire officielle')}
          </span>
          <span className="flex items-center gap-1 text-slate-600 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            {t('concerts.modal.noMarkup', 'Sans surcoût de revente')}
          </span>
        </div>

        {/* Redirect Button Link */}
        <div className="pt-2">
          <a
            href={'ticketUrl'} // Remplacez par votre variable/prop d'URL de billetterie (ex: event.ticketUrl)
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>
              {t('concerts.modal.btnGoToVenue', 'Accéder à la billetterie de la salle')}
            </span>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};
