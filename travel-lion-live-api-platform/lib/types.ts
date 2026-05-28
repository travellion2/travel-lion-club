export type MemberTier = 'Essential' | 'Elite';

export type SearchCategory =
  | 'all'
  | 'hotel'
  | 'villa'
  | 'flight'
  | 'rental'
  | 'cruise'
  | 'golf'
  | 'jet'
  | 'yacht';

export type SearchRequest = {
  destination: string;
  dates: string;
  travelers: number;
  category: SearchCategory;
  memberTier: MemberTier;
};

export type SearchResult = {
  id: string;
  type: SearchCategory;
  title: string;
  description: string;
  provider: string;
  tag: string;
  gated?: boolean;
};
