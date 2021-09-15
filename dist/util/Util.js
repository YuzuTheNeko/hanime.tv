"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const Constants_1 = require("./Constants");
class Util extends null {
    constructor() { }
    static extractIdFromURL(url) {
        return url.startsWith("http") && url.includes("id=") ? url.split("id=")[1].split("&")[0] : url;
    }
    static makeVideoURLWithId(id) {
        id = Util.extractIdFromURL(id.toString());
        return Constants_1.Endpoints.VIDEO + id;
    }
    static makeSearchQuery(query) {
        if (!query.tags) {
            query.tags = [];
        }
        if (!query.blacklist) {
            query.blacklist = [];
        }
        if (!query.brands) {
            query.brands = [];
        }
        if (!query.order_by) {
            query.order_by = 'created_at_unix';
        }
        if (!query.tags) {
            query.tags = [];
        }
        if (!query.tags_mode) {
            query.tags_mode = 'AND';
        }
        if (!query.page) {
            query.page = 0;
        }
        if (!query.ordering) {
            query.ordering = 'DESC';
        }
        return query;
    }
}
exports.Util = Util;
//# sourceMappingURL=Util.js.map