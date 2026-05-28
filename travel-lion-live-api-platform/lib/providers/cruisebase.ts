import { SearchRequest, SearchResult } from '../types';

export async function searchCruiseBase(req: SearchRequest): Promise<SearchResult[]> {
  if (!process.env.CRUISEBASE_API_KEY) {
    return [];
  }

  // TODO: Implement CruiseBase feed/API once partner credentials are provided.
  return [];
}
