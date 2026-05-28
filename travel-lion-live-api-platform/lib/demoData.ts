import { SearchResult } from './types';

export const demoMembers = {
  essential: {
    username: 'essential',
    name: 'Essential Member',
    tier: 'Essential',
    points: 100
  },
  elite: {
    username: 'elite',
    name: 'Elite Member',
    tier: 'Elite',
    points: 500
  }
};

export const fallbackResults: SearchResult[] = [
  {
    id: 'hotel-club-cala-blanca',
    type: 'hotel',
    title: 'Club Cala Blanca Resort',
    description: '7 nights, resort stay, member rate preview. Final price blocked until concierge review.',
    provider: 'Expedia',
    tag: 'Member Rate Available'
  },
  {
    id: 'hotel-luxury-oceanfront',
    type: 'hotel',
    title: 'Luxury Oceanfront Resort',
    description: 'Luxury hotel preview with 4-5 star options and concierge quote confirmation.',
    provider: 'Expedia',
    tag: 'Price Blocked'
  },
  {
    id: 'villa-private-collection',
    type: 'villa',
    title: 'Private Villa Collection',
    description: 'Multi-bedroom villa or condo options for groups, families, and luxury stays.',
    provider: 'Expedia / Travel Lion Villas',
    tag: 'Quote Required'
  },
  {
    id: 'flight-air-request',
    type: 'flight',
    title: 'Air Travel Request',
    description: 'Concierge compares air options after departure airport and travel dates are submitted.',
    provider: 'Expedia Flights',
    tag: 'Quote Required'
  },
  {
    id: 'car-premium-rental',
    type: 'rental',
    title: 'Premium Rental Car',
    description: 'SUV, luxury sedan, convertible, and destination rental options.',
    provider: 'Expedia Cars',
    tag: 'Member Options'
  },
  {
    id: 'cruise-base',
    type: 'cruise',
    title: 'Cruise Vacation Search',
    description: 'CruiseBase powered preview for Caribbean, Mediterranean, Alaska, and more.',
    provider: 'CruiseBase',
    tag: 'Cruise Preview'
  },
  {
    id: 'golf-stay-play',
    type: 'golf',
    title: 'Golf Tee Time & Stay Package',
    description: 'Golf tee times, destination courses, and stay-and-play package preview.',
    provider: 'Supreme Golf',
    tag: 'Golf Available'
  },
  {
    id: 'jet-jettly',
    type: 'jet',
    title: 'Private Jet Request',
    description: 'Elite-only jet request powered by Jettly partner flow.',
    provider: 'Jettly',
    tag: 'Elite Only',
    gated: true
  },
  {
    id: 'yacht-concierge',
    type: 'yacht',
    title: 'Private Yacht Request',
    description: 'Elite-only yacht request. Concierge confirms destination, vessel, guests, and quote.',
    provider: 'Travel Lion Concierge',
    tag: 'Elite Only',
    gated: true
  }
];
