import { SearchQueryOptions } from "../typings/interfaces/SearchQueryOptions";
import { IdentifierResolvable } from "../typings/types/IdentifierResolvable";
export declare class Util extends null {
    constructor();
    static extractIdFromURL<K extends string>(url: K): IdentifierResolvable;
    static makeVideoURLWithId(id: IdentifierResolvable): string;
    static makeSearchQuery(query: SearchQueryOptions): SearchQueryOptions;
}
//# sourceMappingURL=Util.d.ts.map