import { JSONStringified } from "../types/JSONStringified";

export interface RawSearchResult {
    page: number
    nbPages: number
    nbHits: number
    hitsPerPage: number
    hits: JSONStringified
}