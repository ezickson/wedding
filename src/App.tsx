import React, { useState } from 'react';
import { NavTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CalendarModal } from './components/CalendarModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HomeView } from './components/views/HomeView';
import { ScheduleView } from './components/views/ScheduleView';
import { TravelView } from './components/views/TravelView';
import { PhotosView } from './components/views/PhotosView';
import { FaqsView } from './components/views/FaqsView';
import { RegistryView } from './components/views/RegistryView';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  const navigateToTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2c3e50]">
      {/* Main Top Navbar & Mobile Drawer */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={navigateToTab}
        onOpenCalendarModal={() => setCalendarModalOpen(true)}
      />

      {/* Dynamic Tab View Container */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={navigateToTab}
            onOpenCalendarModal={() => setCalendarModalOpen(true)}
          />
        )}
        {activeTab === 'schedule' && (
          <ScheduleView
            onOpenCalendarModal={() => setCalendarModalOpen(true)}
            onNavigate={navigateToTab}
          />
        )}
        {activeTab === 'travel' && <TravelView />}
        {activeTab === 'registry' && <RegistryView />}
        {activeTab === 'photos' && <PhotosView />}
        {activeTab === 'faqs' && <FaqsView />}
      </main>

      {/* Footer */}
      <Footer
        activeTab={activeTab}
        onSelectTab={navigateToTab}
        onOpenCalendarModal={() => setCalendarModalOpen(true)}
      />

      {/* Mobile Bottom Navigation Bar (Home, Schedule, Travel, Registry, Photos, FAQs) */}
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={navigateToTab}
      />

      {/* Calendar Add Modal */}
      <CalendarModal
        isOpen={calendarModalOpen}
        onClose={() => setCalendarModalOpen(false)}
      />
    </div>
  );
}
