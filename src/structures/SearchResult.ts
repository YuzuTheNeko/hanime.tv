import { QuerySearchResult as SR } from "../typings/interfaces/QuerySearchResult";
import { If } from "../typings/types/If";
import { PartialVideo } from "./PartialVideo";

export class SearchResult {
    private data: SR

    constructor(data: SR) {
        this.data = data
    }

    get totalPages() {
        return this.data.totalPages
    }

    get page() {
        return this.data.page
    }

    get videos() {
        return this.data.videos.map(c => new PartialVideo(c))
    }

    get videosPerPage() {
        return this.data.videosPerPage
    }

    get totalVideos() {
        return this.data.totalVideos
    }
}