"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResult = void 0;
const PartialVideo_1 = require("./PartialVideo");
class SearchResult {
    data;
    constructor(data) {
        this.data = data;
    }
    get totalPages() {
        return this.data.totalPages;
    }
    get page() {
        return this.data.page;
    }
    get videos() {
        return this.data.videos.map(c => new PartialVideo_1.PartialVideo(c));
    }
    get videosPerPage() {
        return this.data.videosPerPage;
    }
    get totalVideos() {
        return this.data.totalVideos;
    }
}
exports.SearchResult = SearchResult;
//# sourceMappingURL=SearchResult.js.map