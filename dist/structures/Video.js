"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const download_1 = require("../methods/download");
const Util_1 = require("../util/Util");
class Video {
    data;
    constructor(data) {
        this.data = data;
    }
    get url() {
        return Util_1.Util.makeVideoURLWithId(this.data.hentai_video.id);
    }
    get video() {
        return this.data.hentai_video;
    }
    get tags() {
        return this.data.hentai_tags;
    }
    get info() {
        return this.data;
    }
    download() {
        return (0, download_1.download)(this);
    }
}
exports.Video = Video;
//# sourceMappingURL=Video.js.map