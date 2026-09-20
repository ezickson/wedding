import React from 'react';
import { CoastalStripeBorder } from '../CoastalStripeBorder';
import { Gift } from 'lucide-react';

export const RegistryView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-6 py-6 sm:py-12 space-y-6 sm:space-y-10">
      {/* Header */}
      <div className="text-center space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#55728f] font-semibold">
          Gift Registry
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#24394d] font-normal">
          Our Wedding Registry
        </h1>
      </div>

      {/* Registry TBD Card */}
      <div className="bg-white/90 border border-[#ded5be] rounded-2xl shadow-xs relative overflow-hidden flex flex-row items-stretch">
        {/* Left Watercolor Stripe Margin */}
        <div className="shrink-0 w-5 sm:w-8 md:w-10 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
          <CoastalStripeBorder width="w-full" className="h-full" />
        </div>

        <div className="flex-1 p-6 sm:p-12 text-center space-y-4 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-[#e6edf5] text-[#4a6b8c] flex items-center justify-center">
            <Gift className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-md">
            <div className="inline-block px-3 py-1 rounded-md bg-[#f0ebd9] border border-[#ded5be] text-xs font-semibold uppercase tracking-widest text-[#3b546e]">
              TBD
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#23384c]">
              Registry Details Coming Soon
            </h2>
            <p className="text-xs sm:text-sm text-[#576f84] leading-relaxed">
              We are currently in the process of putting together our registry. Please check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
