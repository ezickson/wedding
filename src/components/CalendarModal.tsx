import React from 'react';
import { X, Calendar, Download, ExternalLink, MapPin, Clock } from 'lucide-react';
import { COUPLE_INFO } from '../data/weddingData';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Noah & Abby Wedding Ceremony & Reception'
  )}&dates=20270828T203000Z/20270829T030000Z&details=${encodeURIComponent(
    'Wedding Celebration for Noah Ezickson & Abigail Bergeron at Wychmere Beach Club, Ocean Room, Harwich Port, MA.'
  )}&location=${encodeURIComponent(
    'Wychmere Beach Club, 23 Snow Inn Road, Harwich Port, MA 02646'
  )}`;

  // Generate .ics download
  const handleDownloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Noah & Abby Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:noah-abby-wedding-2027@wychmere',
      'SUMMARY:Noah & Abby Wedding (Wychmere Beach Club)',
      'DESCRIPTION:Wedding ceremony and reception for Noah Ezickson & Abigail Bergeron in the Ocean Room at Wychmere Beach Club, Harwich Port, MA.',
      'LOCATION:Wychmere Beach Club, 23 Snow Inn Road, Harwich Port, MA 02646',
      'DTSTART:20270828T163000',
      'DTEND:20270828T230000',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Noah-and-Abby-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#faf8f5] rounded-2xl shadow-2xl border border-[#ded4bd] overflow-hidden p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#6c8297] hover:text-[#25394d] hover:bg-[#eae3d2] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#e3ecf5] text-[#4a6b8c] flex items-center justify-center mx-auto mb-3">
            <Calendar className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#69819a] font-semibold">
            Save the Date
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#24384d] font-normal mt-1">
            Noah & Abby
          </h3>
          <p className="text-xs text-[#5f7489] mt-1">
            {COUPLE_INFO.weddingDate} • Wychmere Beach Club
          </p>
        </div>

        <div className="bg-[#f2ece0]/70 rounded-xl p-4 mb-6 space-y-2 text-xs text-[#3b5269]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#517091] shrink-0" />
            <span>Saturday, August 28, 2027 at 4:30 PM EDT</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#517091] shrink-0" />
            <span>Wychmere Beach Club, Harwich Port, Cape Cod</span>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#4a6b8c] hover:bg-[#3d5975] text-white text-xs uppercase tracking-[0.14em] font-medium transition-colors shadow-xs"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Add to Google Calendar</span>
          </a>

          <button
            onClick={handleDownloadIcs}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#f3ede1] text-[#2b4156] border border-[#d6ccb8] text-xs uppercase tracking-[0.14em] font-medium transition-colors shadow-xs"
          >
            <Download className="w-4 h-4 text-[#517091]" />
            <span>Download Apple / Outlook .iCal</span>
          </button>
        </div>

        <p className="text-[11px] text-center text-[#7b8f9f] mt-4">
          Formal invitations and personalized RSVP will be sent in Spring 2026.
        </p>
      </div>
    </div>
  );
};
