import axios from "axios";
import { SearchResult } from "../structures/SearchResult";
import { RawSearchResult } from "../typings/interfaces/RawSearchResult";
import { SearchQueryOptions } from "../typings/interfaces/SearchQueryOptions";
import { QuerySearchResult as SR } from "../typings/interfaces/QuerySearchResult";
import { Endpoints } from "../util/Constants";
import { Util } from "../util/Util";
import { HanimeError } from "../core/HanimeError";
import { ErrorMessages } from "../typings/enums/ErrorMessages";

/**
 * Makes a search on hanime.tv.
 * @param query The query or options for this search.
 * @example
 * search('itadaki')
 *      .then(r => r.videos)
 * @returns 
 */
export async function search(query: string | SearchQueryOptions): Promise<SearchResult> {
    const q = Util.makeSearchQuery(typeof query === 'string' ? { search_text: query } : query)

    const request = await axios.post<RawSearchResult>(Endpoints.SEARCH, q).then(d => d.data).catch(() => null)

    if (!request) throw new HanimeError(ErrorMessages.SEARCH_FAILED, q.search_text)
    
    const data: SR = {
        page: request.page,
        totalPages: request.nbPages,
        totalVideos: request.nbHits,
        videosPerPage: request.hitsPerPage,
        videos: JSON.parse(request.hits)
    } 

    return new SearchResult(data)
}