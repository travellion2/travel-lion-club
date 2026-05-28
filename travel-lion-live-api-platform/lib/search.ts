import { fallbackResults } from './demoData';
import { SearchRequest, SearchResult } from './types';
import { searchExpedia } from './providers/expedia';
import { searchCruiseBase } from './providers/cruisebase';
import { searchGolf } from './providers/golf';
import { searchJettly } from './providers/jettly';

export async function searchTravel(req: SearchRequest): Promise<SearchResult[]> {
  const providerResults = await Promise.all([
    searchExpedia(req),
    searchCruiseBase(req),
    searchGolf(req),
    searchJettly(req)
  ]);

  const liveResults = providerResults.flat();

  const fallback = fallbackResults
    .filter((item) => req.category === 'all' || item.type === req.category)
    .map((item) => ({
      ...item,
      description: `${item.description} Destination: ${req.destination}. Dates: ${req.dates}. Travelers: ${req.travelers}.`
    }));

  const results = liveResults.length ? liveResults : fallback;

  return results.map((result) => ({
    ...result,
    gated: (result.type === 'jet' || result.type === 'yacht') && req.memberTier !== 'Elite'
  }));
}
