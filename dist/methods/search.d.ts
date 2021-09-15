import { SearchResult } from "../structures/SearchResult";
import { SearchQueryOptions } from "../typings/interfaces/SearchQueryOptions";
/**
 * Makes a search on hanime.tv.
 * @param query The query or options for this search.
 * @example
 * search('itadaki')
 *      .then(r => r.videos)
 * @returns
 */
export declare function search(query: string | SearchQueryOptions): Promise<SearchResult>;
//# sourceMappingURL=search.d.ts.map