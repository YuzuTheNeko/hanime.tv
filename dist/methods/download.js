"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = void 0;
const PartialVideo_1 = require("../structures/PartialVideo");
const Video_1 = require("../structures/Video");
const prism_media_1 = require("prism-media");
const getVideoInfo_1 = require("./getVideoInfo");
const HanimeError_1 = require("../core/HanimeError");
const ErrorMessages_1 = require("../typings/enums/ErrorMessages");
/**
 * Returns a readable stream from a video using FFmpeg.
 * @param videoOrId The video / url or id to download.
 * @example
 * download(1315)
 *      .then(console.log)
 * @returns
 */
async function download(videoOrId) {
    const args = [
        "-i"
    ];
    if (videoOrId instanceof Video_1.Video) {
        const url = videoOrId.info.videos_manifest.servers.at(0)?.streams.at(-1)?.url;
        if (!url) {
            throw new HanimeError_1.HanimeError(ErrorMessages_1.ErrorMessages.NO_AVAILABLE_STREAM, videoOrId.video.id);
        }
        args.push(url);
    }
    else if (videoOrId instanceof PartialVideo_1.PartialVideo) {
        const video = await videoOrId.fetch();
        const url = video.info.videos_manifest.servers.at(0)?.streams.at(-1)?.url;
        if (!url) {
            throw new HanimeError_1.HanimeError(ErrorMessages_1.ErrorMessages.NO_AVAILABLE_STREAM, videoOrId.info.id);
        }
        args.push(url);
    }
    else {
        const video = await (0, getVideoInfo_1.getVideoInfo)(videoOrId);
        const url = video.info.videos_manifest.servers.at(0)?.streams.at(-1)?.url;
        if (!url) {
            throw new HanimeError_1.HanimeError(ErrorMessages_1.ErrorMessages.NO_AVAILABLE_STREAM, video.video.id);
        }
        args.push(url);
    }
    return new prism_media_1.FFmpeg({
        args: [
            ...args,
            '-analyzeduration', '0',
            '-loglevel', '0',
            '-f', 's16le',
            '-ar', '48000',
            '-ac', '2',
        ]
    });
}
exports.download = download;
//# sourceMappingURL=download.js.map