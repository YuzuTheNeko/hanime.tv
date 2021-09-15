"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HanimeManager = void 0;
const __1 = require("..");
const download_1 = require("../methods/download");
const getVideoInfo_1 = require("../methods/getVideoInfo");
class HanimeManager {
    videos = new Map();
    constructor() { }
    get download() {
        return download_1.download;
    }
    get getVideoInfo() {
        return getVideoInfo_1.getVideoInfo;
    }
    get search() {
        return __1.search;
    }
}
exports.HanimeManager = HanimeManager;
//# sourceMappingURL=HanimeManager.js.map