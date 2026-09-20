import React from 'react';
import { NavTab } from '../types';
import { StripedBassIcon } from './StripedBassIcon';
import { COUPLE_INFO } from '../data/weddingData';

interface FooterProps {
  activeTab?: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenCalendarModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
}) => {
  return (
    <footer className="bg-[#f2ece0] border-t border-[#ded4bd] pt-5 sm:pt-8 pb-24 sm:pb-12 text-[#354c64] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        {/* Emblem & Script Names */}
        <div className="flex flex-col items-center space-y-2">
          <StripedBassIcon className="w-24 sm:w-28 transition-transform hover:scale-105" />
          <div className="font-formal-script text-4xl sm:text-5xl text-[#283e54] pt-1">
            Noah & Abby
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-[#5c748c] font-medium">
            {COUPLE_INFO.weddingDate} • {COUPLE_INFO.venueName}
          </div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#71889e]">
            {COUPLE_INFO.cityState}
          </div>
        </div>

        {/* Photo Gallery text link (not a pill button) */}
        <div className="pt-1 sm:pt-2">
          <button
            onClick={() => {
              onSelectTab('photos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="footer-photo-gallery-link"
            className="text-xs uppercase tracking-[0.16em] font-medium text-[#4f6780] hover:text-[#203447] underline underline-offset-4 transition-colors"
          >
            Photo Gallery
          </button>
        </div>

        {/* Contact info replacing previous footer bottom text */}
        <div className="pt-4 sm:pt-6 border-t border-[#ded5be] text-xs sm:text-sm text-[#71879c]">
          For questions or concerns please contact{' '}
          <a
            href="mailto:ezickson@gmail.com"
            className="underline underline-offset-2 hover:text-[#24394d] text-[#4f6780] transition-colors"
          >
            ezickson@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
