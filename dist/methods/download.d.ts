import { PartialVideo } from "../structures/PartialVideo";
import { Video } from "../structures/Video";
import { IdentifierResolvable } from "../typings/types/IdentifierResolvable";
import { FFmpeg } from "prism-media";
/**
 * Returns a readable stream from a video using FFmpeg.
 * @param videoOrId The video / url or id to download.
 * @example
 * download(1315)
 *      .then(console.log)
 * @returns
 */
export declare function download(videoOrId: IdentifierResolvable | PartialVideo | Video): Promise<FFmpeg>;
//# sourceMappingURL=download.d.ts.map