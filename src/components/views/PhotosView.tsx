import React from 'react';
import { CoastalStripeBorder } from '../CoastalStripeBorder';
import { Camera } from 'lucide-react';

export const PhotosView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-6 py-6 sm:py-12 space-y-6 sm:space-y-10">
      {/* Header */}
      <div className="text-center space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#55728f] font-semibold">
          Memories by the Sea
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#24394d] font-normal">
          Photo Gallery
        </h1>
      </div>

      {/* Coming Soon Placeholder Card */}
      <div className="bg-white/90 border border-[#ded5be] rounded-2xl shadow-xs relative overflow-hidden flex flex-row items-stretch">
        {/* Left Watercolor Stripe Margin */}
        <div className="shrink-0 w-5 sm:w-8 md:w-10 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
          <CoastalStripeBorder width="w-full" className="h-full" />
        </div>

        <div className="flex-1 p-6 sm:p-12 text-center space-y-4 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-[#e6edf5] text-[#4a6b8c] flex items-center justify-center">
            <Camera className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <span className="inline-block text-[10px] uppercase tracking-[0.25em] font-semibold px-2.5 py-1 rounded-full bg-[#e8e0cc] text-[#3c546d] border border-[#d6cbb1]">
              Coming Soon
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-[#22374b]">
              Photos Coming Soon
            </h2>
            <p className="text-xs sm:text-sm text-[#576f84] leading-relaxed max-w-md mx-auto">
              We will be sharing our engagement photos and wedding celebration memories here. Please check back soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

