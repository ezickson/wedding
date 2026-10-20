import { GuestRecord, WeddingEvent, HotelOption, FaqItem, RegistryItem, PhotoItem, ExploreItem } from '../types';

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
    attire: 'Coastal Casual',
    attireDescription: 'Men: Think khakis/linen pants & a button down. Women: Think cocktail dresses or matching set.',
    attireMen: 'Think khakis/linen pants & a button down',
    attireWomen: 'Think cocktail dresses or matching set',
    description: '',
    mapUrl: 'https://maps.google.com/?q=Pelham+House+Resort+14+Sea+Street+Dennis+Port+MA',
    note: '',
    transportationNote: {
      title: 'Important Note about Transportation',
      description: 'Due to parking restraints at the Pelham House, all guests are required to Uber/Lyft/Taxi to/from the venue from your hotel. Your ride is on us! We will provide promo codes for you to use closer to the wedding day.',
    },
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
    attireDescription: 'Men: Tuxedos or dark formal suits. Women: Floor length dress.',
    attireMen: 'Tuxedos or dark formal suits',
    attireWomen: 'Floor length dress',
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
    mapUrl: 'https://www.google.com/maps/place/29+Wequasset+Rd,+Harwich+Port,+MA+02646/@41.6663405,-70.0952082,659m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89fb3e60c82246cf:0x49cd45510c1eb434!8m2!3d41.6663405!4d-70.0926333!16s%2Fg%2F11c1yzkn2s?entry=ttu&g_ep=EgoyMDI2MTAxOC4wIKXMDSoASAFQAw%3D%3D',
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
  rateInfo?: string;
  notes?: string;
}

export interface SuggestedAccommodation {
  name: string;
  type: string;
  town: string;
  address?: string;
  website: string;
  notes?: string;
  highlight?: string;
}

export const ROOM_BLOCK_HOTELS: RoomBlockItem[] = [
  {
    name: 'The Uncommoner',
    town: 'West Yarmouth, MA',
    address: '497 Main Street, West Yarmouth, MA 02673',
    phone: '(508) 778-1500',
    website: 'https://www.uncommonerhotel.com/',
    shuttlePickup: true,
    rateInfo: '$340/night',
    notes: 'Saturday wedding shuttles will pick up and drop off here.',
  },
  {
    name: 'Freebird Lodge',
    town: 'West Yarmouth, MA',
    address: '170 Main Street, West Yarmouth, MA 02673',
    phone: '(508) 775-2692',
    website: 'https://www.freebirdmotorlodge.com/',
    shuttlePickup: true,
    rateInfo: '$240/night',
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
    name: 'The Kingfisher Harwich Port',
    type: 'Boutique Coastal Hotel',
    town: 'Harwich Port, MA',
    address: '1 Braddock Street, Harwich Port, MA 02646',
    website: 'https://kingfisherharwichport.com',
    highlight: 'Just down the road from our venue!',
    notes: 'A relaxed, stylish coastal boutique hotel in Harwich Port, just minutes from Nantucket Sound beaches.',
  },
  {
    name: 'Winstead Beach Resort',
    type: 'Beachfront Resort & Inn',
    town: 'Harwich Port, MA',
    address: '4 Kimball Way, Harwich Port, MA 02646',
    website: 'https://winsteadinn.com/beach-resort/',
    highlight: 'Just down the road from our venue!',
    notes: 'Classic Cape Cod oceanfront retreat featuring private beach access in Harwich Port.',
  },
  {
    name: 'Inn on the Beach',
    type: 'Oceanfront Beachside Inn',
    town: 'Harwich Port, MA',
    address: '286 Bank Street, Harwich Port, MA 02646',
    website: 'https://www.innonthebeachcapecod.com/?utm_source=googlemaps?utm_source=google&utm_medium=organic&utm_campaign=gbp-listing',
    highlight: 'Just down the road from our venue!',
    notes: 'A picturesque oceanfront inn set directly on the sands of Bank Street Beach overlooking Nantucket Sound.',
  },
  {
    name: 'Handkerchief Shoals Inn',
    type: 'Classic Coastal Motel & Inn',
    town: 'Harwich Port, MA',
    address: '888 Main Street, Harwich Port, MA 02646',
    website: 'https://www.shoalscapecodinn.com/?utm_source=googlemaps',
    notes: 'A charming, newly refreshed Cape Cod motel located conveniently in Harwich Port near local beaches and village shops.',
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
    website: 'https://www.uncommonerhotel.com/',
    rateInfo: '$340/night',
    description: 'Room block reserved. Saturday wedding shuttle provided.',
    shuttleProvided: true,
  },
  {
    name: 'Freebird Lodge',
    category: 'Room Block',
    distance: 'West Yarmouth, MA',
    address: '170 Main Street, West Yarmouth, MA 02673',
    phone: '(508) 775-2692',
    website: 'https://www.freebirdmotorlodge.com/',
    rateInfo: '$240/night',
    description: 'Room block reserved. Saturday wedding shuttle provided.',
    shuttleProvided: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Schedule & Attire',
    question: 'What is the wedding dress code for Saturday?',
    answer: 'The dress code for Saturday is Black Tie Optional. Tuxedos or dark suits; formal gowns or long dresses. Since the ceremony takes place on the beach next to Nantucket Sound, footwear suitable for sand/coastal walkways is recommended.',
  },
  {
    category: 'Schedule & Attire',
    question: 'What should I wear to Friday Welcome Party?',
    answer: 'Coastal Cocktail Attire! Jackets are not required. Think slacks and a button-up, linen, matching set, etc. We will be celebrating in the oceanfront ballroom and on the lawn at Pelham House Resort.',
  },
  {
    category: 'Travel & Lodging',
    question: 'Will transportation or shuttles be provided?',
    answer: 'Friday night welcome party: please DO NOT drive on Friday night as there is NO parking at the venue! We will provide Uber/Lyft promo codes to take you to the welcome party and back to your hotel/Airbnb.\n\nSaturday night: shuttles will be provided to/from the Freebird Lodge and the Uncommoner Hotels.',
  },
  {
    category: 'Travel & Lodging',
    question: 'Is there parking available at the Pelham House Resort for the Friday Welcome Party?',
    answer: 'NO!\n\nThere is no parking available for guests, so please Uber/Lyft/Taxi. Your ride will be on us – we will provide an Uber discount code! Refer back to the “Schedule” tab closer to the wedding day.',
  },
  {
    category: 'Travel & Lodging',
    question: 'Is there parking available at Wychmere Beach Club?',
    answer: 'Yes, complimentary valet parking is provided for all wedding guests at Wychmere Beach Club (23 Snow Inn Road).',
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

export const THINGS_TO_DO_ACTIVITIES: ExploreItem[] = [
  {
    id: 'beach',
    category: 'activity',
    tag: 'Beaches & Dunes',
    title: 'Hang at the Beach!',
    description: 'The south side of Cape Cod along Nantucket Sound has quaint, small tucked away beaches with grassy dunes. These include Lighthouse Beach in Chatham, Seagull Beach in Yarmouth, Bank Street Beach or Pleasant Road Beach in Harwich Port.',
    subDescription: 'The northern-facing side of Cape Cod along the Cape Cod Bay has dramatic tides and more expansive beaches including Mayflower Beach and Corporation Beach in Dennis, Skaket Beach in Orleans, or Breakwater Beach and Crosby Beach in Brewster.',
    location: 'All over the Cape!',
  },
  {
    id: 'rail_trail',
    category: 'activity',
    tag: 'Outdoors & Biking',
    title: 'Cape Cod Rail Trail Bike Rentals',
    description: 'Rent bikes and ride on the historic Cape Cod Rail Trail, a paved 25-mile scenic trail following the former railroad corridor through pine forests, salt marshes, and cranberry bogs.',
    link: 'https://www.railtrailbikeshop.com/',
    linkText: 'Rail Trail Bike Shop',
    location: 'Brewster',
  },
  {
    id: 'swan_river_kayak',
    category: 'activity',
    tag: 'On the Water',
    title: 'Rent Kayaks at Swan River',
    description: 'Rent kayaks or paddleboards at Swan River and paddle your way down the peaceful estuary directly out to Nantucket Sound.',
    link: 'https://www.capecodwaterways.com/',
    linkText: 'Cape Cod Waterways',
    location: 'Dennis Port, MA',
  },
  {
    id: 'pickleball',
    category: 'activity',
    tag: 'Court Sports',
    title: 'Play Pickleball at Brooks Park',
    description: 'Play pickleball at the public community courts in Harwich. Bring your own equipment (BYOP — bring your own paddles!).',
    link: 'https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiQ88PKyMeXAxUAAAAAHQAAAAAQBA..i&mstk=AUtExfCU4neJT9gZ2YvAqMCctb8KLS1bstneVxv9L63Trp_dbYc2FZOk_zElTRRLY_L6VmBeDJWUQ9Jt_aCOdnRccf6WLy2OkAAFThRZcfuW6-IE4wqWKOZFZrtLStE9-Qho6gqRhCxvqK9XcPBQ-MEVXvWdWBqrOXAnIQjKquPMuXkvciucUloHhF1tjrNa8yau-N1Z7Ui-qm6UG9eVT6dCF-XCog&hl=en&pvq=CgsvZy8xdnh2ang2a4ABAZABAQ&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&ftid=0x89fb3fcbd97aff49:0x288d11b15825858a',
    linkText: 'Brooks Park on Google Maps',
    location: 'Harwich, MA',
    note: 'BYOP — Bring your own equipment',
  },
  {
    id: 'seal_watching',
    category: 'activity',
    tag: 'Wildlife & Harbor Cruise',
    title: 'Seal Watching around Monomoy Island',
    description: 'Take a scenic boat cruise around Monomoy Island to observe thousands of gray and harbor seals in their natural habitat.',
    link: 'https://monomoysealcruise.com/',
    linkText: 'Monomoy Seal Cruise',
    location: 'Harwich Port, MA',
  },
  {
    id: 'chatham_stroll',
    category: 'activity',
    tag: 'Shopping & Sightseeing',
    title: 'Stroll Around Chatham',
    description: 'Tons of small shops, great food, and delicious ice cream along Main Street! Venture out to the Chatham Fish Pier to watch the dayboat fishing fleet and take in the view from the Lighthouse Beach overlook.',
    location: 'Chatham, MA',
    note: 'Don\'t miss the Chatham Fish Pier & Lighthouse overlook',
  },
];

export const THINGS_TO_DO_DINING: ExploreItem[] = [
  {
    id: 'brax_landing',
    category: 'dining',
    tag: 'Harborfront Seafood',
    title: 'Brax Landing Restaurant',
    description: 'Iconic harborfront dining overlooking Saquatucket Harbor in Harwich Port. Famous for clam chowder, native lobster rolls, and drinks on the outdoor deck.',
    link: 'https://braxlanding.com/',
    linkText: 'Visit Brax Landing',
    location: 'Harwich Port, MA',
  },
  {
    id: 'perks',
    category: 'dining',
    tag: 'Coffee & Beer Garden',
    title: 'Perks Coffee Shop & Beer Garden',
    description: 'Beloved local Harwich Port gathering spot serving specialty espresso, cold brews, and breakfast sandwiches by day, plus an outdoor beer garden with live music by night.',
    link: 'https://perkscapecod.com/',
    linkText: 'Visit Perks',
    location: 'Harwich Port, MA',
  },
  {
    id: 'dockside_cafe',
    category: 'dining',
    tag: 'Harborside Cafe & Seafood',
    title: 'Dockside Cafe',
    description: 'Casual, seaside cafe right in Harwich Port serving breakfast sandwiches, fresh native lobster rolls, clam chowder, and refreshing drinks.',
    link: 'https://docksidecapecod.com/',
    linkText: 'Visit Dockside Cafe',
    location: 'Harwich Port, MA',
  },
  {
    id: 'sundae_school',
    category: 'dining',
    tag: 'Cape Cod Ice Cream',
    title: 'Sundae School Ice Cream',
    description: 'Legendary handmade Cape Cod ice cream crafted on-premises with fresh ingredients, real whipped cream, and homemade hot fudge in an antique retro parlor.',
    link: 'https://sundaeschool.com/',
    linkText: 'Visit Sundae School',
    location: 'Dennis Port & Harwich Port, MA',
  },
  {
    id: 'chatham_bars_inn',
    category: 'dining',
    tag: 'Oceanfront Dining',
    title: 'The Beach House at Chatham Bars Inn',
    description: 'Spectacular oceanfront dining right on the sands overlooking Chatham Harbor. Enjoy clam bakes, fresh oysters, and craft cocktails with sweeping water views.',
    link: 'https://www.chathambarsinn.com/dining/',
    linkText: 'Visit Chatham Bars Inn',
    location: 'Chatham, MA',
  },
  {
    id: 'cape_sea_grille',
    category: 'dining',
    tag: 'Fine Coastal Dining',
    title: 'The Cape Sea Grille',
    description: 'Fine coastal cuisine tucked inside a historic 19th-century sea captain\'s house in Harwich Port, just steps from the beach.',
    link: 'https://capeseagrille.com/',
    linkText: 'Visit Cape Sea Grille',
    location: 'Harwich Port, MA',
  },
  {
    id: 'hangar_b',
    category: 'dining',
    tag: 'Breakfast & Brunch',
    title: 'Hangar B Eatery',
    description: 'Iconic Cape Cod brunch spot located at Chatham Municipal Airport. Celebrated for lemon ricotta pancakes, housemade sourdough, Huevos Rancheros, and red flannel hash.',
    link: 'https://www.hangarbcapecod.com/',
    linkText: 'Visit Hangar B',
    location: 'Chatham, MA',
  },
];
