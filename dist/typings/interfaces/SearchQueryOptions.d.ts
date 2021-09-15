import { Tags } from "../types/Tags";
export interface SearchQueryOptions {
    blacklist?: Array<unknown>;
    brands?: Array<unknown>;
    order_by?: "created_at_unix";
    ordering?: "ASC" | "DESC";
    page?: number;
    search_text: string;
    tags?: Array<Tags>;
    tags_mode?: 'AND' | 'OR';
}
//# sourceMappingURL=SearchQueryOptions.d.ts.map