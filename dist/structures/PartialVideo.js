"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialVideo = void 0;
const download_1 = require("../methods/download");
const getVideoInfo_1 = require("../methods/getVideoInfo");
const Util_1 = require("../util/Util");
class PartialVideo {
    data;
    constructor(data) {
        this.data = data;
    }
    get info() {
        return this.data;
    }
    get url() {
        return Util_1.Util.makeVideoURLWithId(this.info.id);
    }
    async fetch() {
        return (0, getVideoInfo_1.getVideoInfo)(this.url);
    }
    download() {
        return (0, download_1.download)(this);
    }
}
exports.PartialVideo = PartialVideo;
//# sourceMappingURL=PartialVideo.js.map