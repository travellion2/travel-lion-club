import { SearchRequest, SearchResult } from '../types';

export async function searchExpedia(req: SearchRequest): Promise<SearchResult[]> {
  const hasKeys = process.env.EXPEDIA_API_KEY && process.env.EXPEDIA_API_SECRET;

  if (!hasKeys) {
    return [];
  }

  // TODO: Replace with your Expedia Partner Solutions / Rapid API implementation.
  // Typical flow:
  // 1. Region/property search
  // 2. Availability search
  // 3. Rate details
  // 4. Booking/deep link or request-to-book queue
  //
  // Keep API keys server-side only. Never expose secret keys in browser code.

  return [];
}
