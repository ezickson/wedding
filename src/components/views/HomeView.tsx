import React, { useState, useEffect } from 'react';
import { NavTab } from '../../types';
import { StripedBassIcon } from '../StripedBassIcon';
import { CoastalStripeBorder } from '../CoastalStripeBorder';

interface HomeViewProps {
  onNavigate?: (tab: NavTab) => void;
  onOpenCalendarModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenCalendarModal,
}) => {
  // Countdown calculation to August 28, 2027
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2027-08-28T16:30:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 sm:space-y-12 pb-0">
      {/* ========================================================================= */}
      {/* HERO / SAVE THE DATE SECTION - Replicating stationery card */}
      {/* ========================================================================= */}
      <section className="relative pt-3 sm:pt-10 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative bg-[#faf7f2] border border-[#dcd3be] rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-row items-stretch">
            {/* Left Watercolor Stripe Margin */}
            <div className="shrink-0 w-8 sm:w-16 md:w-20 lg:w-24 border-r border-[#ded4bd] relative overflow-hidden bg-[#faf8f4] flex items-stretch">
              <CoastalStripeBorder width="w-full" className="h-full" />
            </div>

            {/* Main Stationery Content */}
            <div className="flex-1 p-4 sm:p-10 md:p-12 text-center flex flex-col items-center">
              {/* Couple Beach Photo matching Save the Date card */}
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-16/10 sm:aspect-4/3 rounded-lg overflow-hidden shadow-md border-2 border-white/80 mb-4 sm:mb-6 bg-[#e8ded0]">
                <img
                  src="/images/noah_abby_engagement.jpg"
                  alt="Noah & Abby engagement photo"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg pointer-events-none" />
              </div>

              {/* SAVE THE DATE Heading */}
              <div className="text-[11px] sm:text-sm uppercase tracking-[0.35em] text-[#415b76] font-semibold mb-1 sm:mb-2">
                SAVE THE DATE
              </div>

              {/* Noah & Abby Script Typography */}
              <h1 className="font-formal-script text-4xl sm:text-6xl md:text-7xl text-[#314a66] my-1 leading-tight">
                Noah and Abby
              </h1>

              {/* Striped Bass Vintage Emblem */}
              <div className="my-1.5 sm:my-2 flex flex-col items-center">
                <StripedBassIcon className="w-24 sm:w-36 transition-transform hover:scale-105" />
                <div className="h-[1px] w-12 sm:w-16 bg-[#c3b69e] my-1.5 sm:my-2" />
              </div>

              {/* WEDDING DATE - Direct on card, no pill container */}
              <div className="font-serif text-xl sm:text-3xl text-[#1e344a] font-semibold tracking-wide my-1">
                August 28, 2027
              </div>

              {/* Venue & Location on Card */}
              <div className="space-y-0.5 text-[#2d4157] mt-1.5 sm:mt-2">
                <div className="text-xs sm:text-base uppercase tracking-[0.24em] font-medium">
                  WYCHMERE BEACH CLUB
                </div>
                <div className="text-[10px] sm:text-sm uppercase tracking-[0.22em] text-[#455c74] font-medium">
                  HARWICH PORT, MASSACHUSETTS
                </div>
              </div>

              {/* Formal invitation note */}
              <div className="mt-4 pt-3 border-t border-[#ded5c1] text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#71869b] italic">
                FORMAL INVITATION TO FOLLOW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COUNTDOWN SECTION - Full-width band flush against footer                 */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#ede6d7] border-t border-[#ded4bd]">
        <div className="max-w-xl mx-auto px-4 py-3.5 sm:py-4">
          <div className="grid grid-cols-4 divide-x divide-[#ded4bd] text-center">
            <div className="px-1 sm:px-2">
              <div className="font-serif text-lg sm:text-2xl text-[#1e344a] font-semibold leading-none">
                {timeLeft.days}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#55708a] font-medium mt-1">
                Days
              </div>
            </div>
            <div className="px-1 sm:px-2">
              <div className="font-serif text-lg sm:text-2xl text-[#1e344a] font-semibold leading-none">
                {timeLeft.hours}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#55708a] font-medium mt-1">
                Hours
              </div>
            </div>
            <div className="px-1 sm:px-2">
              <div className="font-serif text-lg sm:text-2xl text-[#1e344a] font-semibold leading-none">
                {timeLeft.minutes}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#55708a] font-medium mt-1">
                Minutes
              </div>
            </div>
            <div className="px-1 sm:px-2">
              <div className="font-serif text-lg sm:text-2xl text-[#1e344a] font-semibold leading-none">
                {timeLeft.seconds}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#55708a] font-medium mt-1">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
