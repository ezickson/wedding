import React from 'react';
import { ROOM_BLOCK_HOTELS, SUGGESTED_ACCOMMODATIONS } from '../../data/weddingData';
import { CoastalStripeBorder } from '../CoastalStripeBorder';
import {
  Plane,
  Bus,
  MapPin,
  ExternalLink,
  Phone,
} from 'lucide-react';

export const TravelView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-serif text-3xl sm:text-5xl text-[#24394d] font-normal">
          Travel & Accommodations
        </h1>
      </div>

      {/* ========================================================================= */}
      {/* 1. AIRPORTS SECTION */}
      {/* ========================================================================= */}
      <section className="space-y-4 sm:space-y-6">
        <div className="border-b border-[#ded5be] pb-2 sm:pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#24394c]">
            Airports
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
          {/* Boston Logan International */}
          <div className="bg-white/90 border border-[#ded5be] rounded-2xl shadow-2xs hover:shadow-xs transition-shadow relative overflow-hidden flex flex-row items-stretch">
            {/* Left Watercolor Stripe Margin */}
            <div className="shrink-0 w-4 sm:w-6 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
              <CoastalStripeBorder width="w-full" className="h-full" />
            </div>

            <div className="flex-1 p-4 sm:p-6 space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#e4edf7] text-[#4a6b8c] flex items-center justify-center shrink-0">
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#22374b]">
                    Boston Logan International
                  </h3>
                  <div className="text-[11px] sm:text-xs text-[#637d95]">
                    ~90min drive to Harwich
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#4b6176] leading-relaxed pt-1">
                <p className="mb-2">
                  Scheduled Buses run every hour from Logan to Barnstable (~5min from our room blocks, ~20min from Harwich):
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.p-b.com/bus-routes/hyannis-to-logan-bus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#f5efe3] border border-[#ded5be] hover:border-[#cfbe9e] text-[11px] sm:text-xs font-medium text-[#2d455e] hover:text-[#182d42] transition-colors shadow-2xs group"
                  >
                    <Bus className="w-3.5 h-3.5 text-[#4a6b8c] group-hover:scale-105 transition-transform" />
                    <span>Plymouth & Brockton</span>
                    <ExternalLink className="w-3 h-3 text-[#7e95ab] ml-0.5" />
                  </a>
                  <a
                    href="https://peterpanbus.com/routes/logan-to-hyannis-bus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#f5efe3] border border-[#ded5be] hover:border-[#cfbe9e] text-[11px] sm:text-xs font-medium text-[#2d455e] hover:text-[#182d42] transition-colors shadow-2xs group"
                  >
                    <Bus className="w-3.5 h-3.5 text-[#4a6b8c] group-hover:scale-105 transition-transform" />
                    <span>Peter Pan Bus Lines</span>
                    <ExternalLink className="w-3 h-3 text-[#7e95ab] ml-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Cape Cod Gateway Airport (HYA) */}
          <div className="bg-white/90 border border-[#ded5be] rounded-2xl shadow-2xs hover:shadow-xs transition-shadow relative overflow-hidden flex flex-row items-stretch">
            {/* Left Watercolor Stripe Margin */}
            <div className="shrink-0 w-4 sm:w-6 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
              <CoastalStripeBorder width="w-full" className="h-full" />
            </div>

            <div className="flex-1 p-4 sm:p-6 space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#e4edf7] text-[#4a6b8c] flex items-center justify-center shrink-0">
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#22374b]">
                    Cape Cod Gateway Airport (HYA)
                  </h3>
                  <div className="text-[11px] sm:text-xs text-[#637d95]">
                    ~20min drive to Harwich
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#4b6176] leading-relaxed pt-1">
                Located directly in Hyannis, just minutes from all room block hotels and a quick 20-minute ride to our wedding venue in Harwich.
              </p>
            </div>
          </div>
        </div>

        {/* Friday Traffic Note */}
        <p className="text-xs sm:text-sm text-[#667c91] italic">
          Note: Traffic driving onto Cape Cod can get heavy on Friday afternoons—we recommend planning your arrival accordingly!
        </p>
      </section>

      {/* ========================================================================= */}
      {/* 2. ROOM BLOCKS */}
      {/* ========================================================================= */}
      <section className="space-y-4 sm:space-y-6">
        <div className="border-b border-[#ded5be] pb-2 sm:pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#24394c]">
            Hotel Room Blocks
          </h2>
          <p className="text-xs sm:text-sm text-[#5d7388] mt-1">
            We have room blocks at the below hotels, and will be providing shuttles from The Uncommoner and The Freebird for Saturday's event.
          </p>
        </div>

        {/* Room Block Cards - Clean & Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          {ROOM_BLOCK_HOTELS.map((hotel) => (
            <div
              key={hotel.name}
              className="bg-white/90 border border-[#ded5be] rounded-2xl shadow-2xs hover:shadow-xs transition-shadow relative overflow-hidden flex flex-row items-stretch"
            >
              {/* Left Watercolor Stripe Margin */}
              <div className="shrink-0 w-4 sm:w-5 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
                <CoastalStripeBorder width="w-full" className="h-full" />
              </div>

              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#4a6b8c] uppercase tracking-wider">
                    Room Block
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#23384c] font-normal">
                    {hotel.name}
                  </h3>
                  <div className="text-xs text-[#60778c] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#4a6b8c] shrink-0" />
                    <span>{hotel.address}</span>
                  </div>
                  {hotel.notes && (
                    <p className="text-xs text-[#526a80] leading-relaxed pt-0.5 sm:pt-1">
                      {hotel.notes}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-[#eee5d4] flex items-center justify-between gap-2">
                  {hotel.phone && (
                    <a
                      href={`tel:${hotel.phone.replace(/[^0-9]/g, '')}`}
                      className="text-xs text-[#526b83] hover:text-[#203649] flex items-center gap-1 font-medium transition-colors"
                    >
                      <Phone className="w-3 h-3 text-[#4a6b8c]" />
                      <span>{hotel.phone}</span>
                    </a>
                  )}
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#4a6b8c] hover:bg-[#3b5874] text-white text-xs font-medium transition-colors ml-auto shadow-2xs"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OTHER SUGGESTED ACCOMMODATIONS */}
      {/* ========================================================================= */}
      <section className="space-y-4 sm:space-y-6">
        <div className="border-b border-[#ded5be] pb-2 sm:pb-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#24394c]">
              Other Suggested Accommodations
            </h2>
            <span className="sm:hidden text-[11px] text-[#5b738c] font-medium flex items-center gap-1">
              <span>Swipe cards</span>
              <span>→</span>
            </span>
          </div>
          <p className="text-xs text-[#5d758c] mt-0.5 sm:mt-1">
            Additional options including vacation home rentals and boutique hotels in the Harwich Port area.
          </p>
        </div>

        {/* Mobile Swipeable Track / Desktop Multi-Column Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-3 sm:pb-0 scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible -mx-3 px-3 sm:mx-0 sm:px-0">
          {SUGGESTED_ACCOMMODATIONS.map((place) => (
            <div
              key={place.name}
              className="snap-center shrink-0 w-[270px] sm:w-auto bg-white/90 border border-[#ded5be] rounded-xl shadow-2xs relative overflow-hidden flex flex-row items-stretch"
            >
              {/* Left Watercolor Stripe Margin */}
              <div className="shrink-0 w-3 sm:w-4 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
                <CoastalStripeBorder width="w-full" className="h-full" />
              </div>

              <div className="flex-1 p-3.5 sm:p-4 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="text-[10px] font-semibold text-[#547391] uppercase tracking-wider">
                    {place.type}
                  </div>
                  <h3 className="font-serif text-lg text-[#23384c]">
                    {place.name}
                  </h3>
                  <div className="text-xs text-[#637d94]">
                    {place.town}
                  </div>
                  {place.highlight && (
                    <div className="inline-flex items-center gap-1 text-[10px] font-medium text-[#2d4d6b] bg-[#e4eef6] border border-[#c6daec] px-2 py-0.5 rounded-md mt-1">
                      <MapPin className="w-2.5 h-2.5 text-[#4a6b8c] shrink-0" />
                      <span>{place.highlight}</span>
                    </div>
                  )}
                  {place.notes && (
                    <p className="text-xs text-[#50687d] leading-relaxed pt-1">
                      {place.notes}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-[#eee5d4]">
                  <a
                    href={place.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#4a6b8c] hover:text-[#2d4964] font-medium transition-colors"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
