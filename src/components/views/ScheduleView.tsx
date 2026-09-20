import React from 'react';
import { NavTab } from '../../types';
import { WEDDING_EVENTS, ADDITIONAL_EVENTS } from '../../data/weddingData';
import { CoastalStripeBorder } from '../CoastalStripeBorder';
import {
  Clock,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface ScheduleViewProps {
  onOpenCalendarModal: () => void;
  onNavigate?: (tab: NavTab) => void;
}

export const ScheduleView: React.FC<ScheduleViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#55728f] font-semibold">
          Weekend Itinerary
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#24394d] font-normal">
          Schedule of Events
        </h1>
      </div>

      {/* Main Events Timeline */}
      <div className="space-y-6 sm:space-y-8">
        {/* Friday Events */}
        <div className="space-y-3.5 sm:space-y-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-[1px] sm:h-[2px] flex-1 bg-[#ded4bf]" />
            <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-[#44607d] bg-[#f0e8d8] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#d8cdb6]">
              Friday, August 27, 2027
            </h2>
            <div className="h-[1px] sm:h-[2px] flex-1 bg-[#ded4bf]" />
          </div>

          {WEDDING_EVENTS.filter((e) => e.id === 'welcome_drinks').map((event) => (
            <div
              key={event.id}
              className="bg-white/90 border border-[#ded5c1] rounded-2xl shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-row items-stretch"
            >
              {/* Left Watercolor Stripe Margin */}
              <div className="shrink-0 w-6 sm:w-10 md:w-12 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
                <CoastalStripeBorder width="w-full" className="h-full" />
              </div>

              <div className="flex-1 p-4 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2 flex-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4a6b8c] uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{event.time}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-3xl text-[#243a4e] font-normal">
                    {event.title}
                  </h3>
                  <div className="text-xs uppercase tracking-widest text-[#5e7790] font-medium">
                    {event.venue} {event.room && `• ${event.room}`}
                  </div>

                  {event.description && (
                    <p className="text-xs sm:text-sm text-[#4c637a] leading-relaxed pt-0.5">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end gap-2 text-xs pt-1 sm:pt-0">
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f0ebd9] hover:bg-[#e4dcbf] text-[#334c64] font-medium transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#4a6b8c]" />
                    <span>View on Map</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                  {event.note && (
                    <span className="text-[11px] text-[#71879c] italic">{event.note}</span>
                  )}
                </div>
              </div>

              {/* Attire */}
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#eee5d3] text-xs text-[#597188] flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#334d69]">
                  Attire: {event.attire}
                </span>
                {event.attireDescription && (
                  <>
                    <span className="text-[#a5b6c6] hidden sm:inline">•</span>
                    <span className="text-[#657d92] text-xs leading-relaxed">{event.attireDescription}</span>
                  </>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Saturday Events */}
        <div className="space-y-3.5 sm:space-y-4 pt-2 sm:pt-4">
          {/* Centered Saturday Header */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-[1px] sm:h-[2px] flex-1 bg-[#ded4bf]" />
            <div className="bg-[#f0e8d8] px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl border border-[#d8cdb6] text-center shadow-2xs">
              <h2 className="text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] font-bold text-[#44607d] whitespace-nowrap">
                Saturday, August 28, 2027
              </h2>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#647f9b] font-medium mt-0.5">
                The Wedding Day
              </div>
            </div>
            <div className="h-[1px] sm:h-[2px] flex-1 bg-[#ded4bf]" />
          </div>

          {/* Main Ceremony & Reception - Regal Styling */}
          {WEDDING_EVENTS.filter((e) => e.id === 'wedding_reception').map((event) => (
            <div
              key={event.id}
              className="bg-white border-2 border-[#334d69] rounded-2xl shadow-sm relative overflow-hidden flex flex-row items-stretch"
            >
              {/* Left Watercolor Stripe Margin */}
              <div className="shrink-0 w-6 sm:w-10 md:w-12 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
                <CoastalStripeBorder width="w-full" className="h-full" />
              </div>

              <div className="flex-1 p-4 sm:p-10">
                {/* Regal Top Badge */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#e5dcc9] pb-3 sm:pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4a6b8c] uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>3:30 PM until after dark</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#1e344a] font-normal mt-0.5 sm:mt-1 tracking-tight">
                    {event.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#597592] font-medium mt-0.5 sm:mt-1">
                    Wychmere Beach Club • Harwich Port, MA
                  </div>
                </div>

                <div className="shrink-0 pt-1">
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4eee2] hover:bg-[#e9dec9] text-[#2d455d] text-xs uppercase tracking-wider font-semibold transition-colors border border-[#d8ceb8]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#4a6b8c]" />
                    <span>Wychmere Map</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Order of the Celebration */}
              <div className="py-3 sm:py-4 border-b border-[#e5dcc9]">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#637d96] font-semibold text-center mb-2.5 sm:mb-3">
                  Order of the Celebration
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-center">
                  {/* Step 1: Ceremony */}
                  <div className="flex sm:flex-col items-baseline sm:items-center justify-between sm:justify-center gap-1">
                    <span className="font-serif text-base sm:text-xl text-[#1e344a] font-normal">
                      The Ceremony
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#55708c]">
                      3:30 PM
                    </span>
                  </div>

                  {/* Step 2: Cocktail Hour */}
                  <div className="flex sm:flex-col items-baseline sm:items-center justify-between sm:justify-center gap-1">
                    <span className="font-serif text-base sm:text-xl text-[#1e344a] font-normal">
                      Cocktail Hour
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#55708c]">
                      4:30 PM
                    </span>
                  </div>

                  {/* Step 3: Dinner & Dancing */}
                  <div className="flex sm:flex-col items-baseline sm:items-center justify-between sm:justify-center gap-1">
                    <span className="font-serif text-base sm:text-xl text-[#1e344a] font-normal">
                      Dinner & Dancing
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#55708c]">
                      5:30 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Attire */}
              <div className="pt-3 sm:pt-4 text-xs text-[#526a80]">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#334d69]">
                    Attire: Black Tie Optional
                  </span>
                  <span className="text-[#a5b6c6] hidden sm:inline">•</span>
                  <span className="text-[#597086] text-xs leading-relaxed">
                    Tuxedos or dark formal suits; floor-length evening gowns or elevated cocktail attire.
                  </span>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sunday Events */}
        <div className="space-y-3.5 sm:space-y-4 pt-2 sm:pt-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-[1px] sm:h-[2px] flex-1 bg-[#ded4bf]" />
            <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-[#44607d] bg-[#f0e8d8] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#d8cdb6]">
              Sunday, August 29, 2027
            </h2>
            <div className="h-[1px] sm:h-[2px] flex-1 bg-[#ded4bf]" />
          </div>

          {ADDITIONAL_EVENTS.filter((e) => e.id === 'farewell_breakfast').map((event) => (
            <div
              key={event.id}
              className="bg-white/90 border border-[#ded5c1] rounded-2xl shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-row items-stretch"
            >
              {/* Left Watercolor Stripe Margin */}
              <div className="shrink-0 w-6 sm:w-10 md:w-12 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
                <CoastalStripeBorder width="w-full" className="h-full" />
              </div>

              <div className="flex-1 p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2 flex-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4a6b8c] uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{event.time}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-3xl text-[#243a4e] font-normal">
                    {event.title}
                  </h3>
                  <div className="text-xs uppercase tracking-widest text-[#5e7790] font-medium">
                    {event.venue} • {event.address}
                  </div>
                  {event.description && (
                    <p className="text-xs sm:text-sm text-[#4e657c] pt-0.5 leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="shrink-0 flex flex-row sm:flex-col items-center sm:items-end gap-2 pt-1 sm:pt-0">
                  <a
                    href="https://maps.google.com/?q=29+Wequasset+Road+Harwich+Port+MA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f0ebd9] hover:bg-[#e4dcbf] text-[#334c64] text-xs font-medium transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#4a6b8c]" />
                    <span>Map to House</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
