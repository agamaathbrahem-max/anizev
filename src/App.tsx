/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { I18nProvider, useI18n } from './context/I18nContext';
import { Header, NavTab } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ConcertsView } from './views/ConcertsView';
import { ArtistsView } from './views/ArtistsView';
import { ContactView } from './views/ContactView';
import { ReservationModal } from './components/ReservationModal';
import { ArtistDetailModal, ArtistData } from './components/ArtistDetailModal';

const AppContent: React.FC = () => {
  const { t, locale } = useI18n();

  // Tab State
  const [activeTab, setActiveTabState] = useState<NavTab>(() => {
    try {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'concerts', 'artists', 'contact'].includes(hash)) {
        return hash as NavTab;
      }
    } catch {
      // fallback
    }
    return 'home';
  });

  const setActiveTab = (tab: NavTab) => {
    setActiveTabState(tab);
    try {
      window.location.hash = tab;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // ignore
    }
  };

  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Reservation Modal State
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [reservationDetails, setReservationDetails] = useState<{
    title: string;
    venue: string;
  }>({
    title: 'Lounis Aït Menguellet en concert',
    venue: 'The Town Hall, New York • Mer. 14 Oct 2026',
  });

  // Artist Detail Modal State
  const [selectedArtist, setSelectedArtist] = useState<ArtistData | null>(null);
  const [prefilledArtistForContact, setPrefilledArtistForContact] = useState<string | undefined>(undefined);

  // Sync hash changes from browser history navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'concerts', 'artists', 'contact'].includes(hash)) {
        setActiveTabState(hash as NavTab);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openReservationModalWithDetails = (title: string, venue: string) => {
    setReservationDetails({ title, venue });
    setReservationModalOpen(true);
  };

  const handleBookArtistFromModal = (artistName: string) => {
    setPrefilledArtistForContact(artistName);
    setActiveTab('contact');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#faf8ff] text-[#161b29]">
      {/* Sticky Header with Navigation and Language Dropdown */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenReservationModal={() => setReservationModalOpen(true)}
      />

      {/* Main View Shell */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={setActiveTab}
            onOpenReservation={() => setReservationModalOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutView onNavigate={setActiveTab} />
        )}

        {activeTab === 'services' && (
          <ServicesView onNavigate={setActiveTab} />
        )}

        {activeTab === 'concerts' && (
          <ConcertsView
            searchQuery={searchQuery}
            onNavigate={setActiveTab}
            onOpenReservationModalWithDetails={openReservationModalWithDetails}
          />
        )}

        {activeTab === 'artists' && (
          <ArtistsView
            searchQuery={searchQuery}
            onNavigate={setActiveTab}
            onSelectArtist={(artist) => setSelectedArtist(artist)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView
            onNavigate={setActiveTab}
            prefilledArtist={prefilledArtistForContact}
          />
        )}
      </main>

      {/* Standardized Institutional 4-Column Footer */}
      <Footer
        onNavigate={setActiveTab}
        onOpenReservation={() => setReservationModalOpen(true)}
      />

      {/* Interactive Reservation Box Office Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        concertTitle={reservationDetails.title}
        concertVenue={reservationDetails.venue}
      />

      {/* Artist Details & Repertoire Modal */}
      <ArtistDetailModal
        artist={selectedArtist}
        onClose={() => setSelectedArtist(null)}
        onBook={handleBookArtistFromModal}
      />
    </div>
  );
};

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
