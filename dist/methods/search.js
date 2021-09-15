"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const axios_1 = __importDefault(require("axios"));
const SearchResult_1 = require("../structures/SearchResult");
const Constants_1 = require("../util/Constants");
const Util_1 = require("../util/Util");
const HanimeError_1 = require("../core/HanimeError");
const ErrorMessages_1 = require("../typings/enums/ErrorMessages");
/**
 * Makes a search on hanime.tv.
 * @param query The query or options for this search.
 * @example
 * search('itadaki')
 *      .then(r => r.videos)
 * @returns
 */
async function search(query) {
    const q = Util_1.Util.makeSearchQuery(typeof query === 'string' ? { search_text: query } : query);
    const request = await axios_1.default.post(Constants_1.Endpoints.SEARCH, q).then(d => d.data).catch(() => null);
    if (!request)
        throw new HanimeError_1.HanimeError(ErrorMessages_1.ErrorMessages.SEARCH_FAILED, q.search_text);
    const data = {
        page: request.page,
        totalPages: request.nbPages,
        totalVideos: request.nbHits,
        videosPerPage: request.hitsPerPage,
        videos: JSON.parse(request.hits)
    };
    return new SearchResult_1.SearchResult(data);
}
exports.search = search;
//# sourceMappingURL=search.js.map