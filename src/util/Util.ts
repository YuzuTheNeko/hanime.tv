import { SearchQueryOptions } from "../typings/interfaces/SearchQueryOptions";
import { IdentifierResolvable } from "../typings/types/IdentifierResolvable";
import { Endpoints } from "./Constants";

export class Util extends null {
    constructor() {}

    static extractIdFromURL<K extends string>(url: K): IdentifierResolvable {
        return url.startsWith("http") && url.includes("id=") ? url.split("id=")[1].split("&")[0] : url 
    }

    static makeVideoURLWithId(id: IdentifierResolvable): string {
        id = Util.extractIdFromURL(id.toString())

        return Endpoints.VIDEO + id
    }

    static makeSearchQuery(query: SearchQueryOptions): SearchQueryOptions {
        if (!query.tags) {
            query.tags = []
        }

        if (!query.blacklist) {
            query.blacklist = []
        }

        if (!query.brands) {
            query.brands = []
        }

        if (!query.order_by) {
            query.order_by = 'created_at_unix'
        }

        if (!query.tags) {
            query.tags = []
        }

        if (!query.tags_mode) {
            query.tags_mode = 'AND'
        }

        if (!query.page) {
            query.page = 0
        }
        
        if (!query.ordering) {
            query.ordering = 'DESC'
        }

        return query
    }
}