import React, { useState } from 'react';
import { GuestRecord, GuestPartyMember, EventId } from '../../types';
import { INITIAL_GUESTS, MEAL_OPTIONS, WEDDING_EVENTS, COUPLE_INFO } from '../../data/weddingData';
import confetti from 'canvas-confetti';
import {
  Search,
  CheckCircle2,
  XCircle,
  Utensils,
  Music,
  Heart,
  Calendar,
  Clock,
  Sparkles,
  Users,
  ShieldAlert,
  ArrowRight,
  RotateCcw,
  Check,
  AlertCircle,
  Eye,
  Lock,
  Car,
  Plane,
  MapPin,
  Bus,
  Compass,
} from 'lucide-react';

interface RsvpViewProps {
  rsvpPublished: boolean;
  onToggleFeatureFlag: () => void;
}

export const RsvpView: React.FC<RsvpViewProps> = ({ rsvpPublished, onToggleFeatureFlag }) => {
  // Guest list state stored in component/local state
  const [guests, setGuests] = useState<GuestRecord[]>(() => {
    const saved = localStorage.getItem('noah_abby_guests');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_GUESTS;
      }
    }
    return INITIAL_GUESTS;
  });

  const [previewModeOverride, setPreviewModeOverride] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [searchError, setSearchError] = useState('');
  const [matchedGuest, setMatchedGuest] = useState<GuestRecord | null>(null);

  // Active RSVP form state
  const [partyAttendance, setPartyAttendance] = useState<{
    [memberId: string]: {
      welcome_drinks?: 'attending' | 'declined';
      wedding_reception?: 'attending' | 'declined';
      mealChoice?: string;
      dietaryNotes?: string;
    };
  }>({});

  const [songRequest, setSongRequest] = useState('');
  const [personalNote, setPersonalNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAdminList, setShowAdminList] = useState(false);

  // If feature flag is off and not previewing, show the "Coming Soon / Draft" state
  const isRsvpAccessible = rsvpPublished || previewModeOverride;

  // Search handler
  const handleSearch = (nameToSearch?: string) => {
    const query = (nameToSearch || searchName).trim().toLowerCase();
    if (!query) {
      setSearchError('Please enter your first and last name as written on your invitation.');
      return;
    }

    setSearchError('');
    const found = guests.find((g) =>
      g.lookupNames.some((alias) => alias.includes(query) || query.includes(alias))
    );

    if (found) {
      setMatchedGuest(found);
      // Initialize form state from found guest
      const initialAttendance: typeof partyAttendance = {};
      found.partyMembers.forEach((m) => {
        initialAttendance[m.id] = {
          welcome_drinks: m.attendance.welcome_drinks || 'attending',
          wedding_reception: m.attendance.wedding_reception || 'attending',
          mealChoice: m.mealChoice || 'halibut',
          dietaryNotes: m.dietaryNotes || '',
        };
      });
      setPartyAttendance(initialAttendance);
      setSongRequest(found.songRequest || '');
      setPersonalNote(found.personalNote || '');
      setIsSubmitted(false);
    } else {
      // Allow dynamic creation for unlisted guests if they are testing
      const newGuest: GuestRecord = {
        id: `guest_${Date.now()}`,
        householdName: searchName.trim(),
        lookupNames: [query],
        partyMembers: [
          {
            id: `member_${Date.now()}`,
            name: searchName.trim(),
            isPrimary: true,
            invitedEvents: ['welcome_drinks', 'wedding_reception'],
            attendance: { welcome_drinks: 'attending', wedding_reception: 'attending' },
            mealChoice: 'halibut',
            dietaryNotes: '',
          },
        ],
      };
      setMatchedGuest(newGuest);
      setPartyAttendance({
        [newGuest.partyMembers[0].id]: {
          welcome_drinks: 'attending',
          wedding_reception: 'attending',
          mealChoice: 'halibut',
          dietaryNotes: '',
        },
      });
      setIsSubmitted(false);
    }
  };

  const handleAttendanceChange = (
    memberId: string,
    event: EventId,
    status: 'attending' | 'declined'
  ) => {
    setPartyAttendance((prev) => ({
      ...prev,
      [memberId]: {
        ...prev[memberId],
        [event]: status,
      },
    }));
  };

  const handleMealChange = (memberId: string, mealId: string) => {
    setPartyAttendance((prev) => ({
      ...prev,
      [memberId]: {
        ...prev[memberId],
        mealChoice: mealId,
      },
    }));
  };

  const handleDietaryChange = (memberId: string, notes: string) => {
    setPartyAttendance((prev) => ({
      ...prev,
      [memberId]: {
        ...prev[memberId],
        dietaryNotes: notes,
      },
    }));
  };

  const handleSubmitRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!matchedGuest) return;

    // Update guest in state and localStorage
    const updatedMembers = matchedGuest.partyMembers.map((m) => ({
      ...m,
      attendance: {
        welcome_drinks: partyAttendance[m.id]?.welcome_drinks,
        wedding_reception: partyAttendance[m.id]?.wedding_reception,
      },
      mealChoice: partyAttendance[m.id]?.mealChoice,
      dietaryNotes: partyAttendance[m.id]?.dietaryNotes,
    }));

    const updatedGuest: GuestRecord = {
      ...matchedGuest,
      partyMembers: updatedMembers,
      songRequest,
      personalNote,
      submittedAt: new Date().toISOString(),
    };

    const newGuestsList = guests.map((g) => (g.id === updatedGuest.id ? updatedGuest : g));
    if (!newGuestsList.some((g) => g.id === updatedGuest.id)) {
      newGuestsList.push(updatedGuest);
    }

    setGuests(newGuestsList);
    localStorage.setItem('noah_abby_guests', JSON.stringify(newGuestsList));
    setIsSubmitted(true);

    // Fire joyful celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4a6b8c', '#8faecb', '#dfd4c2', '#ffffff'],
    });
  };

  // Tallies for admin view
  const totalGuestsCount = guests.reduce((acc, g) => acc + g.partyMembers.length, 0);
  const fridayAttendingCount = guests.reduce(
    (acc, g) =>
      acc +
      g.partyMembers.filter((m) => m.attendance.welcome_drinks === 'attending').length,
    0
  );
  const saturdayAttendingCount = guests.reduce(
    (acc, g) =>
      acc +
      g.partyMembers.filter((m) => m.attendance.wedding_reception === 'attending').length,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-12 space-y-6 sm:space-y-10">
      {/* Feature Flag Notice Bar for testing */}
      <div className="bg-[#f0ebe0] border border-[#dad0bb] rounded-xl p-3 sm:p-4 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#394f66]">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-[#517294] shrink-0" />
          <span>
            <strong>Feature Flag Status:</strong>{' '}
            {rsvpPublished ? (
              <span className="text-emerald-800 font-bold">PUBLISHED (Live)</span>
            ) : (
              <span className="text-amber-800 font-bold">DRAFT / HIDDEN (First Version)</span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!rsvpPublished && (
            <button
              onClick={() => setPreviewModeOverride(!previewModeOverride)}
              className="px-3 py-1 rounded-full bg-white border border-[#cfc4ad] text-[#2c4156] font-medium hover:bg-[#faf7f2] transition-colors"
            >
              {previewModeOverride ? 'Exit Preview Mode' : 'Preview Live RSVP Experience'}
            </button>
          )}

          <button
            onClick={onToggleFeatureFlag}
            className="px-3 py-1 rounded-full bg-[#4a6b8c] text-white font-medium hover:bg-[#3b5874] transition-colors"
          >
            {rsvpPublished ? 'Hide Tab (Set Draft)' : 'Publish Tab to Public'}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SCENARIO A: FEATURE FLAG IS OFF (FIRST VERSION / DRAFT)                   */}
      {/* ========================================================================= */}
      {!isRsvpAccessible ? (
        <div className="bg-white/90 border border-[#ded5be] rounded-2xl p-5 sm:p-14 text-center max-w-2xl mx-auto shadow-sm space-y-4 sm:space-y-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#eef4f9] text-[#4a6b8c] flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5b7897] font-semibold">
              Save the Date First
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl text-[#24394e] font-normal mt-1">
              Online RSVP Opening Soon
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-[#4c637a] leading-relaxed max-w-md mx-auto">
            We are currently sending out our Save the Dates! Formal invitations with your personalized schedule and meal choices will be mailed in Spring 2027.
          </p>

          <div className="bg-[#faf7f2] rounded-xl p-3.5 sm:p-4 border border-[#eee4d2] text-xs text-[#526b83] space-y-1.5 max-w-md mx-auto text-left">
            <div className="font-semibold text-[#253b51] text-center mb-1">Helpful Travel & Timing Tips:</div>
            <p>• <strong>Cape Cod Traffic:</strong> If driving down Friday, cross the Bourne or Sagamore bridges before 2:00 PM or after 7:00 PM.</p>
            <p>• <strong>Accommodations:</strong> Check out our room blocks at The Uncommoner, Freebird Lodge, and Courtyard Marriott.</p>
            <p>• <strong>Schedule:</strong> See below for complete weekend event timing and locations.</p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setPreviewModeOverride(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#517294] hover:bg-[#405d7b] text-white text-xs uppercase tracking-wider font-semibold shadow-xs"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Noah & Abby Preview: Test Personalized RSVP</span>
            </button>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* SCENARIO B: FEATURE FLAG IS ON / ACTIVE PERSONALIZED RSVP               */
        /* ========================================================================= */
        <div className="space-y-6 sm:space-y-10">
          {/* Header */}
          <div className="text-center space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#55728f] font-semibold">
              Personalized Response
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#24394d] font-normal">
              RSVP by July 20, 2027
            </h1>
            <p className="text-xs sm:text-sm text-[#5d7388] max-w-xl mx-auto leading-relaxed">
              Please enter your name below as it appears on your formal invitation. Your personalized response will automatically adjust for your invited events and meal selections.
            </p>
          </div>

          {/* Step 1: Guest Search Lookup Card */}
          {!matchedGuest && (
            <div className="bg-white/95 border border-[#ded5be] rounded-2xl p-4 sm:p-10 shadow-xs max-w-xl mx-auto space-y-4 sm:space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="font-serif text-2xl text-[#253c53]">Find Your Invitation</h2>
                <p className="text-xs text-[#5a738c]">
                  Enter your first and last name to access your party's RSVP.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="space-y-4"
              >
                <div className="relative">
                  <Search className="w-4 h-4 text-[#6e8ca8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={searchName}
                    onChange={(e) => {
                      setSearchName(e.target.value);
                      setSearchError('');
                    }}
                    placeholder="e.g. Sarah Jenkins or Michael Miller"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#ded4bd] text-sm text-[#24394e] placeholder-[#8ea6be] focus:outline-none focus:ring-2 focus:ring-[#4a6b8c]"
                  />
                </div>

                {searchError && (
                  <p className="text-xs text-rose-600 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{searchError}</span>
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#4a6b8c] hover:bg-[#3d5975] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-colors shadow-xs"
                >
                  Find My Invitation
                </button>
              </form>

              {/* Sample Quick-Test Pills for the Couple / Reviewer */}
              <div className="pt-4 border-t border-[#eee5d3] space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-[#6b8297] font-semibold text-center">
                  Quick Demo Lookups:
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => {
                      setSearchName('Sarah Jenkins');
                      handleSearch('Sarah Jenkins');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#eef4f9] hover:bg-[#dbe7f2] text-xs text-[#385573] border border-[#c6d9ea]"
                  >
                    Sarah & Michael (Friday + Saturday)
                  </button>
                  <button
                    onClick={() => {
                      setSearchName('Emily Davis');
                      handleSearch('Emily Davis');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#eef4f9] hover:bg-[#dbe7f2] text-xs text-[#385573] border border-[#c6d9ea]"
                  >
                    Emily Davis (Saturday Only)
                  </button>
                  <button
                    onClick={() => {
                      setSearchName('Noah Ezickson');
                      handleSearch('Noah Ezickson');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#eef4f9] hover:bg-[#dbe7f2] text-xs text-[#385573] border border-[#c6d9ea]"
                  >
                    Noah & Abby
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personalized RSVP Form */}
          {matchedGuest && !isSubmitted && (
            <form onSubmit={handleSubmitRsvp} className="space-y-8 max-w-2xl mx-auto">
              {/* Header for matched party */}
              <div className="bg-[#f4efe3] border border-[#ded5c0] rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#55718e] font-semibold">
                    Invitation Found
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#22394e]">
                    {matchedGuest.householdName}
                  </h2>
                  <p className="text-xs text-[#526b83]">
                    Party of {matchedGuest.partyMembers.length}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setMatchedGuest(null)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#cfc4ad] text-xs text-[#3b536b] hover:bg-[#fbf9f4] transition-colors"
                >
                  Change Name
                </button>
              </div>

              {/* Members Attendance & Events Loop */}
              {matchedGuest.partyMembers.map((member, index) => {
                const memberState = partyAttendance[member.id] || {};
                const isFridayInvited = member.invitedEvents.includes('welcome_drinks');
                const isSaturdayInvited = member.invitedEvents.includes('wedding_reception');

                return (
                  <div
                    key={member.id}
                    className="bg-white/95 border border-[#ded5be] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6"
                  >
                    <div className="border-b border-[#eee5d3] pb-4 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#6a849d] font-semibold">
                          Guest {index + 1} of {matchedGuest.partyMembers.length}
                        </span>
                        <h3 className="font-serif text-2xl text-[#23384c] font-medium">
                          {member.name}
                        </h3>
                      </div>
                    </div>

                    {/* 1. Friday Welcome Drinks (Only if invited!) */}
                    {isFridayInvited && (
                      <div className="bg-[#faf7f2] p-4 rounded-xl border border-[#ece3d1] space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <div className="text-xs font-semibold text-[#4a6b8c] uppercase tracking-wider">
                              Friday, August 27, 2027 • 7:00 PM
                            </div>
                            <div className="font-serif text-lg text-[#253a4e]">
                              Friday Welcome Party
                            </div>
                            <div className="text-xs text-[#637d94]">
                              Pelham House Resort • Dennis Port
                            </div>
                          </div>

                          {/* Attendance Radio Buttons */}
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                handleAttendanceChange(member.id, 'welcome_drinks', 'attending')
                              }
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                memberState.welcome_drinks === 'attending'
                                  ? 'bg-emerald-700 text-white shadow-xs'
                                  : 'bg-white border border-[#d6cbba] text-[#4d667e]'
                              }`}
                            >
                              Joyfully Accepts
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                handleAttendanceChange(member.id, 'welcome_drinks', 'declined')
                              }
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                memberState.welcome_drinks === 'declined'
                                  ? 'bg-[#697f96] text-white'
                                  : 'bg-white border border-[#d6cbba] text-[#4d667e]'
                              }`}
                            >
                              Declines
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 2. Saturday Wedding Ceremony & Reception */}
                    {isSaturdayInvited && (
                      <div className="bg-[#faf7f2] p-4 rounded-xl border border-[#ece3d1] space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <div className="text-xs font-semibold text-[#4a6b8c] uppercase tracking-wider">
                              Saturday, August 28, 2027 • 3:30 PM
                            </div>
                            <div className="font-serif text-lg text-[#253a4e]">
                              The Wedding Ceremony & Reception
                            </div>
                            <div className="text-xs text-[#637d94]">
                              Wychmere Beach Club • Beach, Patio & Ocean Room
                            </div>
                          </div>

                          {/* Attendance Radio Buttons */}
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                handleAttendanceChange(member.id, 'wedding_reception', 'attending')
                              }
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                memberState.wedding_reception === 'attending'
                                  ? 'bg-emerald-700 text-white shadow-xs'
                                  : 'bg-white border border-[#d6cbba] text-[#4d667e]'
                              }`}
                            >
                              Joyfully Accepts
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                handleAttendanceChange(member.id, 'wedding_reception', 'declined')
                              }
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                memberState.wedding_reception === 'declined'
                                  ? 'bg-[#697f96] text-white'
                                  : 'bg-white border border-[#d6cbba] text-[#4d667e]'
                              }`}
                            >
                              Declines
                            </button>
                          </div>
                        </div>

                        {/* Meal Selection (If Attending Saturday) */}
                        {memberState.wedding_reception === 'attending' && (
                          <div className="pt-3 border-t border-[#eee5d3] space-y-3">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#304861]">
                              <Utensils className="w-3.5 h-3.5 text-[#4a6b8c]" />
                              <span>Select Dinner Entrée for {member.name}:</span>
                            </div>

                            <div className="grid grid-cols-1 gap-2.5">
                              {MEAL_OPTIONS.map((meal) => {
                                const isSelected = memberState.mealChoice === meal.id;
                                return (
                                  <label
                                    key={meal.id}
                                    onClick={() => handleMealChange(member.id, meal.id)}
                                    className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                                      isSelected
                                        ? 'bg-white border-[#4a6b8c] ring-1 ring-[#4a6b8c] shadow-xs'
                                        : 'bg-white/70 border-[#ded4bd] hover:bg-white'
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name={`meal_${member.id}`}
                                      checked={isSelected}
                                      onChange={() => handleMealChange(member.id, meal.id)}
                                      className="mt-1 text-[#4a6b8c] focus:ring-[#4a6b8c]"
                                    />
                                    <div className="flex-1 text-xs">
                                      <div className="flex items-center justify-between">
                                        <span className="font-semibold text-[#253c52]">
                                          {meal.name}
                                        </span>
                                        <span className="text-[10px] text-[#6d869e] bg-[#edf4fb] px-2 py-0.5 rounded">
                                          {meal.dietary}
                                        </span>
                                      </div>
                                      <p className="text-[#556e86] mt-0.5 leading-relaxed">
                                        {meal.description}
                                      </p>
                                    </div>
                                  </label>
                                );
                              })}
                            </div>

                            {/* Dietary notes input */}
                            <div className="pt-2">
                              <label className="block text-xs font-medium text-[#465d75] mb-1">
                                Dietary Restrictions / Food Allergies for {member.name}:
                              </label>
                              <input
                                type="text"
                                value={memberState.dietaryNotes || ''}
                                onChange={(e) => handleDietaryChange(member.id, e.target.value)}
                                placeholder="e.g. Gluten-free, shellfish allergy, nut allergy..."
                                className="w-full px-3 py-2 rounded-lg bg-white border border-[#ded5bd] text-xs text-[#2b4156] placeholder-[#8ea6be] focus:outline-none focus:ring-1 focus:ring-[#4a6b8c]"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Celebration Notes & Song Request */}
              <div className="bg-white/95 border border-[#ded5be] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
                <h3 className="font-serif text-xl text-[#23384c]">A Little Something Extra</h3>

                <div>
                  <label className="block text-xs font-medium text-[#445b73] mb-1 flex items-center gap-1.5">
                    <Music className="w-3.5 h-3.5 text-[#4a6b8c]" />
                    <span>A song that will guarantee you on the dance floor:</span>
                  </label>
                  <input
                    type="text"
                    value={songRequest}
                    onChange={(e) => setSongRequest(e.target.value)}
                    placeholder="e.g. September by Earth, Wind & Fire"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#ded5bd] text-xs text-[#2b4156] placeholder-[#8ea6be] focus:outline-none focus:ring-1 focus:ring-[#4a6b8c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#445b73] mb-1 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#4a6b8c]" />
                    <span>A note of love or well wishes for Abby & Noah:</span>
                  </label>
                  <textarea
                    rows={2}
                    value={personalNote}
                    onChange={(e) => setPersonalNote(e.target.value)}
                    placeholder="Can't wait to celebrate with you both on Cape Cod!"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#ded5bd] text-xs text-[#2b4156] placeholder-[#8ea6be] focus:outline-none focus:ring-1 focus:ring-[#4a6b8c]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#4a6b8c] hover:bg-[#3b5773] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Submit RSVP Response</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Step 3: Success Confirmation Screen */}
          {matchedGuest && isSubmitted && (
            <div className="bg-white/95 border border-[#c7dacb] rounded-2xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-sm space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-800 font-semibold">
                  Response Received
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#22394f] font-normal mt-1">
                  Thank You, {matchedGuest.householdName}!
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#4e667e] leading-relaxed max-w-md mx-auto">
                We have saved your RSVP details. We can't wait to celebrate together by the sea at Wychmere Beach Club!
              </p>

              {/* Summary breakdown */}
              <div className="bg-[#faf7f2] rounded-xl p-4 border border-[#eee4d2] text-left text-xs space-y-2.5">
                <div className="font-semibold text-[#24394d] border-b border-[#ebdcc7] pb-1.5">
                  Summary of your responses:
                </div>
                {matchedGuest.partyMembers.map((m) => {
                  const state = partyAttendance[m.id] || {};
                  const mealObj = MEAL_OPTIONS.find((o) => o.id === state.mealChoice);
                  return (
                    <div key={m.id} className="text-[#41576d] space-y-0.5">
                      <div className="font-medium text-[#1c2e40]">{m.name}:</div>
                      {m.invitedEvents.includes('welcome_drinks') && (
                        <div>
                          • Friday Welcome Drinks:{' '}
                          <strong className="capitalize text-[#233b52]">
                            {state.welcome_drinks || 'Attending'}
                          </strong>
                        </div>
                      )}
                      <div>
                        • Saturday Reception:{' '}
                        <strong className="capitalize text-[#233b52]">
                          {state.wedding_reception || 'Attending'}
                        </strong>
                      </div>
                      {state.wedding_reception === 'attending' && mealObj && (
                        <div>
                          • Meal Choice: <strong>{mealObj.name}</strong>
                          {state.dietaryNotes && ` (Notes: ${state.dietaryNotes})`}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-[#cfc4ad] text-xs text-[#3b536b] hover:bg-[#faf7f2] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Update Responses</span>
                </button>
                <button
                  onClick={() => {
                    setMatchedGuest(null);
                    setSearchName('');
                    setIsSubmitted(false);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#4a6b8c] text-white text-xs uppercase tracking-wider font-semibold"
                >
                  <span>RSVP for Another Guest</span>
                </button>
              </div>
            </div>
          )}

          {/* Couples Planner Admin Guest List View */}
          <div className="pt-8 border-t border-[#ded5c0]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl text-[#24394d]">
                  Noah & Abby's Guest List Summary
                </h3>
                <p className="text-xs text-[#5d7388]">
                  Quick tallies of event attendance and dinner entrées.
                </p>
              </div>
              <button
                onClick={() => setShowAdminList(!showAdminList)}
                className="px-3.5 py-1.5 rounded-lg bg-[#f0ebe0] border border-[#d6cbba] text-xs font-semibold text-[#3a526b] hover:bg-[#e4dcce] transition-colors flex items-center gap-1.5"
              >
                <Users className="w-3.5 h-3.5" />
                <span>{showAdminList ? 'Hide Guest List' : 'View Guest Table & Tallies'}</span>
              </button>
            </div>

            {showAdminList && (
              <div className="mt-4 space-y-4 animate-fadeIn">
                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-[#ded5c0] text-center">
                    <div className="text-[10px] uppercase text-[#698199] font-semibold">
                      Total On List
                    </div>
                    <div className="font-serif text-2xl text-[#24394e] font-bold">
                      {totalGuestsCount}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#ded5c0] text-center">
                    <div className="text-[10px] uppercase text-[#698199] font-semibold">
                      Friday Drinks
                    </div>
                    <div className="font-serif text-2xl text-[#24394e] font-bold">
                      {fridayAttendingCount}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#ded5c0] text-center">
                    <div className="text-[10px] uppercase text-[#698199] font-semibold">
                      Saturday Wedding
                    </div>
                    <div className="font-serif text-2xl text-[#24394e] font-bold">
                      {saturdayAttendingCount}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#ded5c0] text-center">
                    <div className="text-[10px] uppercase text-[#698199] font-semibold">
                      Meal Choices In
                    </div>
                    <div className="font-serif text-2xl text-[#24394e] font-bold">
                      {
                        guests.reduce(
                          (acc, g) =>
                            acc + g.partyMembers.filter((m) => m.mealChoice).length,
                          0
                        )
                      }
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl border border-[#ded5c0] overflow-x-auto">
                  <table className="w-full text-left text-xs text-[#395066]">
                    <thead className="bg-[#faf7f2] border-b border-[#ded5c0] text-[10px] uppercase tracking-wider text-[#637d97]">
                      <tr>
                        <th className="p-3">Guest Name</th>
                        <th className="p-3">Invited Events</th>
                        <th className="p-3">Friday Drinks</th>
                        <th className="p-3">Saturday Reception</th>
                        <th className="p-3">Entrée Selection</th>
                        <th className="p-3">Dietary Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eee5d3]">
                      {guests.flatMap((g) =>
                        g.partyMembers.map((m) => (
                          <tr key={m.id} className="hover:bg-[#faf8f4]">
                            <td className="p-3 font-semibold text-[#203447]">{m.name}</td>
                            <td className="p-3">
                              {m.invitedEvents.includes('welcome_drinks')
                                ? 'Friday & Saturday'
                                : 'Saturday Only'}
                            </td>
                            <td className="p-3">
                              {m.attendance.welcome_drinks === 'attending' ? (
                                <span className="text-emerald-700 font-medium">Attending</span>
                              ) : m.attendance.welcome_drinks === 'declined' ? (
                                <span className="text-rose-700 font-medium">Declined</span>
                              ) : (
                                <span className="text-[#889fb3] italic">Pending</span>
                              )}
                            </td>
                            <td className="p-3">
                              {m.attendance.wedding_reception === 'attending' ? (
                                <span className="text-emerald-700 font-medium">Attending</span>
                              ) : m.attendance.wedding_reception === 'declined' ? (
                                <span className="text-rose-700 font-medium">Declined</span>
                              ) : (
                                <span className="text-[#889fb3] italic">Pending</span>
                              )}
                            </td>
                            <td className="p-3">
                              {MEAL_OPTIONS.find((meal) => meal.id === m.mealChoice)?.name || (
                                <span className="text-[#889fb3] italic">Not selected</span>
                              )}
                            </td>
                            <td className="p-3 text-[#647c94]">{m.dietaryNotes || 'None'}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* ========================================================================= */}
      {/* CAPE COD TRAFFIC, AIRPORTS, RENTAL CARS & TIMING GUIDE                    */}
      {/* ========================================================================= */}
      <section className="bg-white/90 border border-[#ded5be] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="border-b border-[#e9dfcc] pb-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4a6b8c]">
            Guest Travel & Weekend Logistics
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#23384c] mt-0.5">
            Cape Cod Traffic, Transit & Event Timing
          </h2>
          <p className="text-xs sm:text-sm text-[#5a7187] mt-1 leading-relaxed">
            Essential tips for planning your arrival, navigating the bridges, rental cars, and a quick reference for weekend locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traffic & Bridge Timing */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#f0e7d5] text-[#334d69] flex items-center justify-center shrink-0 mt-0.5">
                <Car className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-[#1e344a] font-medium">
                  Cape Cod Traffic & Bridges
                </h3>
                <p className="text-xs text-[#4b637a] leading-relaxed">
                  All road traffic to Cape Cod crosses either the <strong>Bourne Bridge</strong> or the <strong>Sagamore Bridge</strong>. On summer Fridays, traffic typically builds heavily between 2:30 PM and 7:00 PM. We strongly recommend planning your drive to cross the canal <strong>before 2:00 PM</strong> or <strong>after 7:00 PM</strong> for a smooth journey.
                </p>
              </div>
            </div>

            {/* Airports & Rental Cars */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#f0e7d5] text-[#334d69] flex items-center justify-center shrink-0 mt-0.5">
                <Plane className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-[#1e344a] font-medium">
                  Airports & Rental Cars
                </h3>
                <p className="text-xs text-[#4b637a] leading-relaxed">
                  <strong>Boston Logan (BOS):</strong> Rental car centers are available directly via airport shuttle. Alternatively, hourly coach buses (Plymouth & Brockton, Peter Pan) run directly from Logan terminals to Barnstable and Hyannis (~5-10 min Uber to hotels).
                </p>
                <p className="text-xs text-[#4b637a] leading-relaxed pt-1">
                  <strong>Cape Cod Gateway Airport (HYA):</strong> Located right in Hyannis, only 10 minutes from our room block hotels with rental cars and taxis readily available.
                </p>
              </div>
            </div>
          </div>

          {/* Weekend Timing & Locations Quick Reference */}
          <div className="bg-[#faf7f2] border border-[#ded5c0] rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#334d69]">
              <Clock className="w-4 h-4 text-[#4a6b8c]" />
              <span>Weekend Schedule & Locations</span>
            </div>

            <div className="space-y-3 divide-y divide-[#ece3d1] text-xs">
              {/* Friday */}
              <div className="pt-2 first:pt-0 space-y-0.5">
                <div className="flex items-center justify-between font-semibold text-[#1e344a]">
                  <span>Friday Welcome Party</span>
                  <span className="text-[#4a6b8c]">7:00 PM – 10:00 PM</span>
                </div>
                <div className="text-[#597187]">Pelham House Resort • Oceanfront Ballroom & Lawn</div>
                <div className="text-[11px] text-[#71879c]">14 Sea Street, Dennisport • Cocktail Attire (Jackets not required)</div>
              </div>

              {/* Saturday */}
              <div className="pt-3 space-y-0.5">
                <div className="flex items-center justify-between font-semibold text-[#1e344a]">
                  <span>Saturday Wedding & Reception</span>
                  <span className="text-[#4a6b8c]">3:30 PM Until After Dark</span>
                </div>
                <div className="text-[#597187]">Wychmere Beach Club • 23 Snow Inn Road, Harwich Port</div>
                <div className="text-[11px] text-[#71879c] leading-relaxed">
                  3:30 PM Beach Ceremony • 4:30 PM Patio Cocktails • 5:30 PM Ocean Room Dinner & Dancing.
                  <br />
                  Black Tie Optional • Valet parking on-site • Shuttles from The Uncommoner & Freebird Lodge.
                </div>
              </div>

              {/* Sunday */}
              <div className="pt-3 space-y-0.5">
                <div className="flex items-center justify-between font-semibold text-[#1e344a]">
                  <span>Sunday Farewell Breakfast</span>
                  <span className="text-[#4a6b8c]">9:30 AM – 12:00 PM</span>
                </div>
                <div className="text-[#597187]">Noah & Abby's House • 29 Wychmere Road, Harwich Port</div>
                <div className="text-[11px] text-[#71879c]">Casual travel attire • Coffee, pastries, and hugs before traveling</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
