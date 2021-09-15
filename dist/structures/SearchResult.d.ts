import { QuerySearchResult as SR } from "../typings/interfaces/QuerySearchResult";
import { PartialVideo } from "./PartialVideo";
export declare class SearchResult {
    private data;
    constructor(data: SR);
    get totalPages(): number;
    get page(): number;
    get videos(): PartialVideo[];
    get videosPerPage(): number;
    get totalVideos(): number;
}
//# sourceMappingURL=SearchResult.d.ts.map