"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getVideoInfo_1 = require("../methods/getVideoInfo");
(0, getVideoInfo_1.getVideoInfo)(1314)
    .then(d => {
    console.log(d.info.videos_manifest.servers[0].streams[0]);
});
//# sourceMappingURL=video.js.map