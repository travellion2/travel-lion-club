import { SearchRequest, SearchResult } from '../types';

export async function searchJettly(req: SearchRequest): Promise<SearchResult[]> {
  if (!process.env.JETTLY_API_KEY) {
    return [];
  }

  // TODO: Implement Jettly partner quote/search API.
  return [];
}
