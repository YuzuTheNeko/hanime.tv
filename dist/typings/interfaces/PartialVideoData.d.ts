import { If } from "../types/If";
export interface PartialVideoData<K extends boolean = false> {
    id: number;
    name: string;
    titles: string[];
    slug: string;
    description: string;
    views: number;
    interests: number;
    poster_url: string;
    cover_url: string;
    brand: string;
    brand_id: number;
    duration_in_ms: number;
    is_censored: boolean;
    is_banned_in?: string;
    is_hard_subtitled?: string;
    rating: unknown;
    likes: number;
    dislikes: number;
    downloads: number;
    monthly_rank: number;
    tags: If<K, unknown[], string[]>;
    created_at: number;
    released_at: number;
    created_at_unix?: number;
    released_at_unix?: number;
}
//# sourceMappingURL=PartialVideoData.d.ts.map