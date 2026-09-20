import React from 'react';
import { NavTab } from '../types';
import {
  Home,
  Calendar,
  Compass,
  Gift,
  HelpCircle,
} from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const tabs: { id: NavTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'travel', label: 'Travel', icon: Compass },
    { id: 'registry', label: 'Registry', icon: Gift },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
  ];

  const handleSelect = (tab: NavTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#faf8f5]/98 backdrop-blur-md border-t border-[#ded4be] shadow-[0_-3px_12px_rgba(0,0,0,0.06)] sm:hidden flex items-stretch divide-x divide-[#ded4be]/70 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const IconComponent = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            id={`mobile-bottom-tab-${tab.id}`}
            className={`flex-1 flex flex-col items-center justify-center py-2.5 px-0.5 relative transition-all duration-150 min-w-0 ${
              isActive
                ? 'bg-[#ede5d4] text-[#1c3348] font-bold'
                : 'text-[#627a90] hover:text-[#25394d] hover:bg-[#f4eee2] active:bg-[#ede5d4] font-medium'
            }`}
            aria-label={`${tab.label} page`}
            aria-current={isActive ? 'page' : undefined}
          >
            {/* Top active border line indicator across the full tab width */}
            {isActive && (
              <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#365472]" />
            )}
            <IconComponent
              className={`w-4 h-4 mb-1 transition-colors shrink-0 ${
                isActive ? 'text-[#365472]' : 'text-[#758b9f]'
              }`}
            />
            <span className="text-[10px] uppercase tracking-wider leading-none text-center whitespace-nowrap">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
