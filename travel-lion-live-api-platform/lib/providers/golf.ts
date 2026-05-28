import { SearchRequest, SearchResult } from '../types';

export async function searchGolf(req: SearchRequest): Promise<SearchResult[]> {
  if (!process.env.SUPREME_GOLF_API_KEY) {
    return [];
  }

  // TODO: Implement Supreme Golf partner/API search.
  return [];
}
