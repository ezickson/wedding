import { GuestRecord, WeddingEvent, HotelOption, FaqItem, RegistryItem, PhotoItem } from '../types';

export const COUPLE_INFO = {
  brideFirstName: 'Abby',
  brideFullName: 'Abigail Bergeron',
  groomFirstName: 'Noah',
  groomFullName: 'Noah Ezickson',
  combinedNames: 'Noah & Abby',
  formalCombinedNames: 'Noah Ezickson & Abigail Bergeron',
  weddingDate: 'Saturday, August 28, 2027',
  weddingDateISO: '2027-08-28T16:30:00',
  venueName: 'Wychmere Beach Club',
  roomName: 'Ocean Room',
  cityState: 'Harwich Port, Massachusetts',
  region: 'Cape Cod, MA',
  hashtag: '#AbbyAndNoahByTheSea',
};

export const MEAL_OPTIONS = [
  {
    id: 'halibut',
    name: 'Pan-Seared Chatham Dayboat Halibut',
    description: 'Sweet corn & lobster relish, lemon-herb emulsion, roasted native fingerling potatoes',
    dietary: 'Gluten-Free',
  },
  {
    id: 'filet',
    name: 'Prime Grilled Center-Cut Filet Mignon',
    description: 'Cabernet demi-glace, truffle pomme purée, charred broccolini & wild mushrooms',
    dietary: 'Gluten-Free',
  },
  {
    id: 'risotto',
    name: 'Wild Forest Mushroom & Sweet Pea Truffle Risotto',
    description: 'Crispy leeks, shaved Pecorino Romano, aged balsamic reduction',
    dietary: 'Vegetarian (Vegan upon request)',
  },
  {
    id: 'kids',
    name: "Children's Platter",
    description: 'Crispy chicken tenders, hand-cut fries, seasonal fresh fruit cup',
    dietary: 'Child under 12',
  },
];

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'welcome_drinks',
    title: 'Friday Welcome Party',
    subtitle: 'Kick off the wedding weekend by the water',
    day: 'Friday',
    date: 'August 27, 2027',
    time: '7:00 PM – 10:00 PM',
    venue: 'Pelham House Resort',
    room: 'Oceanfront Ballroom & Lawn',
    address: '14 Sea Street, Dennis Port, MA 02639',
    attire: 'Cocktail Attire',
    attireDescription: '',
    description: '',
    mapUrl: 'https://maps.google.com/?q=Pelham+House+Resort+14+Sea+Street+Dennis+Port+MA',
    note: '',
  },
  {
    id: 'wedding_reception',
    title: 'Ceremony & Reception',
    subtitle: 'Ceremony, Cocktails, Dinner & Dancing',
    day: 'Saturday',
    date: 'August 28, 2027',
    time: '3:30 PM until after dark',
    venue: 'Wychmere Beach Club',
    room: 'Beach, Patio & Ocean Room',
    address: '23 Snow Inn Road, Harwich Port, MA 02646',
    attire: 'Black Tie Optional',
    attireDescription: 'Tuxedos or dark formal suits; floor-length evening gowns or elevated cocktail attire.',
    description: 'Our ceremony begins at 3:30 PM on the beach of Wychmere next to Nantucket Sound. Cocktail hour follows at 4:30 PM on the patio area, with dinner and dancing beginning at 5:30 PM in the Ocean Room.',
    mapUrl: 'https://maps.google.com/?q=Wychmere+Beach+Club+23+Snow+Inn+Road+Harwich+Port+MA',
    note: 'Valet parking at Wychmere Beach Club',
  },
];

export const ADDITIONAL_EVENTS = [
  {
    id: 'farewell_breakfast',
    title: 'Sunday Farewell Breakfast',
    day: 'Sunday',
    date: 'August 29, 2027',
    time: '9:30 AM – 12:00 PM',
    venue: 'The Ezickson Household',
    address: '29 Wequasset Road, Harwich Port',
    attire: '',
    description: '',
  },
];

export interface RoomBlockItem {
  name: string;
  town: string;
  address: string;
  phone?: string;
  website: string;
  shuttlePickup: boolean;
  notes?: string;
}

export interface SuggestedAccommodation {
  name: string;
  type: string;
  town: string;
  address?: string;
  website: string;
  notes?: string;
}

export const ROOM_BLOCK_HOTELS: RoomBlockItem[] = [
  {
    name: 'The Uncommoner',
    town: 'West Yarmouth, MA',
    address: '497 Main Street, West Yarmouth, MA 02673',
    phone: '(508) 778-1500',
    website: 'https://theuncommonercapecod.com',
    shuttlePickup: true,
    notes: 'Saturday wedding shuttles will pick up and drop off here.',
  },
  {
    name: 'Freebird Lodge',
    town: 'West Yarmouth, MA',
    address: '170 Main Street, West Yarmouth, MA 02673',
    phone: '(508) 775-2692',
    website: 'https://freebirdcapecod.com',
    shuttlePickup: true,
    notes: 'Saturday wedding shuttles will pick up and drop off here.',
  },
  {
    name: 'Courtyard by Marriott',
    town: 'Hyannis, MA',
    address: '707 Iyannough Road, Hyannis, MA 02601',
    phone: '(508) 775-6600',
    website: 'https://www.marriott.com/en-us/hotels/hyacy-courtyard-cape-cod-hyannis/overview/',
    shuttlePickup: true,
    notes: 'Saturday wedding shuttles will pick up and drop off here.',
  },
];

export const SUGGESTED_ACCOMMODATIONS: SuggestedAccommodation[] = [
  {
    name: 'Airbnb & VRBO',
    type: 'Private Home & Cottage Rentals',
    town: 'Harwich Port, Dennis Port & Chatham',
    website: 'https://www.airbnb.com',
    notes: 'Great for groups and families looking for private cottage or home rentals on the Lower Cape.',
  },
  {
    name: 'Winstead Inn',
    type: 'Boutique Inn',
    town: 'Harwich Port, MA',
    address: '114 Parallel Street, Harwich Port, MA 02646',
    website: 'https://winsteadinn.com',
    notes: 'Classic boutique inn situated right in Harwich Port.',
  },
  {
    name: 'The Commodore Inn',
    type: 'Boutique Inn',
    town: 'West Harwich, MA',
    address: '30 Earle Road, West Harwich, MA 02671',
    website: 'https://commodoreinn.com',
    notes: 'Relaxed coastal stay just steps from Nantucket Sound beaches.',
  },
  {
    name: 'Pelham House Resort',
    type: 'Oceanfront Resort',
    town: 'Dennis Port, MA',
    address: '14 Sea Street, Dennis Port, MA 02639',
    website: 'https://pelhamhouseresort.com',
    notes: 'Oceanfront resort and setting for our Friday Night Welcome Party.',
  },
];

export const HOTEL_OPTIONS: HotelOption[] = [
  {
    name: 'The Uncommoner',
    category: 'Room Block',
    distance: 'West Yarmouth, MA',
    address: '497 Main Street, West Yarmouth, MA 02673',
    phone: '(508) 778-1500',
    website: 'https://theuncommonercapecod.com',
    description: 'Room block reserved. Saturday wedding shuttle provided.',
    shuttleProvided: true,
  },
  {
    name: 'Freebird Lodge',
    category: 'Room Block',
    distance: 'West Yarmouth, MA',
    address: '170 Main Street, West Yarmouth, MA 02673',
    phone: '(508) 775-2692',
    website: 'https://freebirdcapecod.com',
    description: 'Room block reserved. Saturday wedding shuttle provided.',
    shuttleProvided: true,
  },
  {
    name: 'Courtyard by Marriott',
    category: 'Room Block',
    distance: 'Hyannis, MA',
    address: '707 Iyannough Road, Hyannis, MA 02601',
    phone: '(508) 775-6600',
    website: 'https://www.marriott.com/en-us/hotels/hyacy-courtyard-cape-cod-hyannis/overview/',
    description: 'Room block reserved. Saturday wedding shuttle provided.',
    shuttleProvided: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Schedule & Attire',
    question: 'What is the wedding dress code for Saturday?',
    answer: 'The dress code for Saturday is Black Tie Optional. Tuxedos or dark suits; formal evening gowns or elegant cocktail dresses. Since the ceremony takes place on the beach next to Nantucket Sound, footwear suitable for sand/coastal walkways is recommended.',
  },
  {
    category: 'Schedule & Attire',
    question: 'What should I wear to Friday Welcome Party?',
    answer: 'Cocktail Attire! Jackets are not required. We will be celebrating in the oceanfront ballroom and on the lawn at Pelham House Resort.',
  },
  {
    category: 'Invitations & Meals',
    question: 'When will formal invitations be sent?',
    answer: 'Formal invitations with complete weekend event details and dinner selections will be mailed in Spring 2027.',
  },
  {
    category: 'Invitations & Meals',
    question: 'Can I bring a Plus One or Children?',
    answer: 'Due to venue capacity restrictions at Wychmere Beach Club, our celebrations are intimate. Please refer to your formal invitation envelope for the exact names included in your household. While we love your little ones, our Saturday evening celebration will be an adult-only affair with the exception of immediate family.',
  },
  {
    category: 'Travel & Lodging',
    question: 'Will transportation or shuttles be provided?',
    answer: 'Yes! Saturday wedding shuttles will pick up and drop off from The Uncommoner and the Freebird Lodge. We will also provide an Uber voucher code that guests can use to easily get their own rides to and from both Friday night and Saturday night events.',
  },
  {
    category: 'Travel & Lodging',
    question: 'Is there parking available at Wychmere Beach Club?',
    answer: 'Yes, complimentary valet parking is provided for all wedding guests at Wychmere Beach Club (23 Snow Inn Road).',
  },
  {
    category: 'General',
    question: 'What will the weather be like on Cape Cod in late August?',
    answer: 'Late August on Cape Cod is warm and beautiful. Average daytime temperatures are in the mid-to-upper 70s with refreshing ocean breezes. Evenings can cool down into the 60s by the water, so we recommend bringing a light wrap, blazer, or sweater for time spent outdoors by the sound.',
  },
];

export const REGISTRIES: RegistryItem[] = [
  {
    id: 'zola',
    name: 'Zola Wedding Registry',
    description: 'Our curated registry for our home, kitchenware, linens, and entertaining essentials.',
    logo: 'Zola',
    link: 'https://www.zola.com/registry/noahandabby2026',
    featured: true,
  },
  {
    id: 'crateandbarrel',
    name: 'Crate & Barrel',
    description: 'Cookware, dinnerware, and timeless furniture pieces we hope to cherish for decades.',
    logo: 'Crate & Barrel',
    link: 'https://www.crateandbarrel.com',
    featured: true,
  },
];

export const INITIAL_GUESTS: GuestRecord[] = [
  {
    id: 'guest_1',
    householdName: 'The Jenkins Party',
    lookupNames: ['sarah jenkins', 'sarah', 'jenkins', 'michael miller', 'michael'],
    email: 'sarah.jenkins@example.com',
    partyMembers: [
      {
        id: 'member_1_1',
        name: 'Sarah Jenkins',
        isPrimary: true,
        invitedEvents: ['welcome_drinks', 'wedding_reception'],
        attendance: {},
        mealChoice: 'halibut',
        dietaryNotes: '',
      },
      {
        id: 'member_1_2',
        name: 'Michael Miller',
        isPrimary: false,
        invitedEvents: ['welcome_drinks', 'wedding_reception'],
        attendance: {},
        mealChoice: 'filet',
        dietaryNotes: 'No shellfish',
      },
    ],
  },
  {
    id: 'guest_2',
    householdName: 'Emily Davis',
    lookupNames: ['emily davis', 'emily', 'davis'],
    email: 'emily.davis@example.com',
    partyMembers: [
      {
        id: 'member_2_1',
        name: 'Emily Davis',
        isPrimary: true,
        invitedEvents: ['wedding_reception'], // Saturday Only
        attendance: {},
        mealChoice: 'risotto',
        dietaryNotes: 'Vegetarian',
      },
    ],
  },
  {
    id: 'guest_3',
    householdName: 'Alexander & Rebecca Stone',
    lookupNames: ['alexander stone', 'alex stone', 'rebecca stone', 'stone'],
    email: 'alex.stone@example.com',
    partyMembers: [
      {
        id: 'member_3_1',
        name: 'Alexander Stone',
        isPrimary: true,
        invitedEvents: ['welcome_drinks', 'wedding_reception'],
        attendance: {},
        mealChoice: 'filet',
      },
      {
        id: 'member_3_2',
        name: 'Rebecca Stone',
        isPrimary: false,
        invitedEvents: ['welcome_drinks', 'wedding_reception'],
        attendance: {},
        mealChoice: 'halibut',
        dietaryNotes: 'Gluten sensitivity',
      },
    ],
  },
  {
    id: 'guest_4',
    householdName: 'Noah Ezickson & Abigail Bergeron',
    lookupNames: ['noah ezickson', 'noah', 'ezickson', 'abigail bergeron', 'abby bergeron', 'abby', 'abigail'],
    email: 'ezickson@gmail.com',
    partyMembers: [
      {
        id: 'member_4_1',
        name: 'Noah Ezickson',
        isPrimary: true,
        invitedEvents: ['welcome_drinks', 'wedding_reception'],
        attendance: { welcome_drinks: 'attending', wedding_reception: 'attending' },
        mealChoice: 'filet',
        dietaryNotes: '',
      },
      {
        id: 'member_4_2',
        name: 'Abigail Bergeron',
        isPrimary: false,
        invitedEvents: ['welcome_drinks', 'wedding_reception'],
        attendance: { welcome_drinks: 'attending', wedding_reception: 'attending' },
        mealChoice: 'halibut',
        dietaryNotes: '',
      },
    ],
  },
];

export const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'photo_beach_walk',
    src: '/images/noah_abby_engagement.jpg',
    alt: 'Noah & Abby seated together on the ocean rocks along the Cape Cod shoreline',
    caption: 'Our engagement on the Cape Cod rocks, Harwich Port',
    category: 'beach',
  },
  {
    id: 'photo_harbor_venue',
    src: '/src/assets/images/wychmere_harbor_venue_1789156683071.jpg',
    alt: 'Wychmere Beach Club seaside lawn with sailboats in Harwich Port harbor',
    caption: 'Wychmere Beach Club & Harwich Port Harbor view',
    category: 'venue',
  },
  {
    id: 'photo_ocean_room',
    src: '/src/assets/images/wychmere_ocean_room_1789156728973.jpg',
    alt: 'Wychmere Beach Club Ocean Room reception space with panoramic water views',
    caption: 'The Ocean Room set for our reception & celebration',
    category: 'venue',
  },
  {
    id: 'photo_engagement_sunset',
    src: '/src/assets/images/cape_cod_engagement_1789156739122.jpg',
    alt: 'Noah and Abby candid beach engagement smile at golden hour',
    caption: 'Golden hour moments along the Cape Cod shoreline',
    category: 'moments',
  },
];
