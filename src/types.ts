export type NavTab = 'home' | 'schedule' | 'travel' | 'registry' | 'photos' | 'faqs';

export type EventId = 'welcome_drinks' | 'wedding_reception';

export interface WeddingEvent {
  id: EventId;
  title: string;
  subtitle: string;
  day: string;
  date: string;
  time: string;
  venue: string;
  room?: string;
  address: string;
  attire: string;
  attireDescription: string;
  description: string;
  mapUrl: string;
  note?: string;
}

export interface GuestPartyMember {
  id: string;
  name: string;
  isPrimary?: boolean;
  invitedEvents: EventId[];
  attendance: {
    welcome_drinks?: 'attending' | 'declined';
    wedding_reception?: 'attending' | 'declined';
  };
  mealChoice?: string;
  dietaryNotes?: string;
}

export interface GuestRecord {
  id: string;
  lookupNames: string[]; // lowercase names for searching
  householdName: string;
  email?: string;
  phone?: string;
  partyMembers: GuestPartyMember[];
  songRequest?: string;
  personalNote?: string;
  submittedAt?: string;
}

export interface HotelOption {
  name: string;
  category: 'Room Block' | 'Boutique Inn' | 'Resort' | 'Alternative';
  distance: string;
  address: string;
  phone: string;
  website: string;
  bookingCode?: string;
  cutoffDate?: string;
  description: string;
  rateInfo?: string;
  shuttleProvided: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Schedule & Attire' | 'Travel & Lodging' | 'Invitations & Meals';
}

export interface RegistryItem {
  id: string;
  name: string;
  description: string;
  logo: string;
  link: string;
  featured?: boolean;
}

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'beach' | 'harbor' | 'venue' | 'moments';
}
