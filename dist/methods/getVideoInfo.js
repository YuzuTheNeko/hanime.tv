"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoInfo = void 0;
const axios_1 = __importDefault(require("axios"));
const HanimeError_1 = require("../core/HanimeError");
const Video_1 = require("../structures/Video");
const ErrorMessages_1 = require("../typings/enums/ErrorMessages");
const Util_1 = require("../util/Util");
/**
 * Gets full info over a video with given id or url.
 * @param url The url or id of the video.
 * @example
 * getVideoInfo(1315)
 *      .then(v => v.video)
 * @returns
 */
async function getVideoInfo(url) {
    const id = typeof url === 'number' ? url : Util_1.Util.extractIdFromURL(url);
    const request = await axios_1.default.get(Util_1.Util.makeVideoURLWithId(id)).then(c => c.data).catch(() => null);
    if (!request)
        throw new HanimeError_1.HanimeError(ErrorMessages_1.ErrorMessages.VIDEO_NOT_FOUND, url);
    return new Video_1.Video(request);
}
exports.getVideoInfo = getVideoInfo;
//# sourceMappingURL=getVideoInfo.js.map