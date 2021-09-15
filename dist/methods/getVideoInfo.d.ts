import { Video } from "../structures/Video";
/**
 * Gets full info over a video with given id or url.
 * @param url The url or id of the video.
 * @example
 * getVideoInfo(1315)
 *      .then(v => v.video)
 * @returns
 */
export declare function getVideoInfo(url: string | number): Promise<Video>;
//# sourceMappingURL=getVideoInfo.d.ts.map