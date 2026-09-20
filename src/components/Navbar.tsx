import React from 'react';
import { NavTab } from '../types';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenCalendarModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'travel', label: 'Travel & Stay' },
    { id: 'registry', label: 'Registry' },
    { id: 'photos', label: 'Photos' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const handleTabClick = (tabId: NavTab) => {
    onSelectTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e6decb]/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-2.5 sm:py-3 relative">
          {/* Brand / Couple Monogram - Centered */}
          <button
            onClick={() => handleTabClick('home')}
            className="text-center group focus:outline-none flex flex-col items-center"
            id="brand-home-link"
          >
            <div className="font-formal-script text-2xl sm:text-4xl text-[#344d67] group-hover:text-[#4a6b8c] transition-colors leading-tight text-center">
              Noah and Abby
            </div>
            <div className="text-[9.5px] sm:text-[11.5px] uppercase tracking-[0.2em] text-[#6b829c] font-medium mt-0.5 sm:mt-1 text-center">
              August 28, 2027 <span className="hidden xs:inline">• Wychmere Beach Club</span>
            </div>
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 mt-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-[13px] tracking-[0.14em] uppercase font-medium transition-all duration-200 rounded-md focus:outline-none ${
                    isActive
                      ? 'text-[#25394e] font-semibold'
                      : 'text-[#5d738a] hover:text-[#25394e] hover:bg-[#ebe4d7]/40'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#4a6b8c] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
