import { search } from "..";
import { download } from "../methods/download";
import { getVideoInfo } from "../methods/getVideoInfo";
import { PartialVideo } from "../structures/PartialVideo";
import { Video } from "../structures/Video";
export declare class HanimeManager {
    videos: Map<number, Video | PartialVideo>;
    constructor();
    get download(): typeof download;
    get getVideoInfo(): typeof getVideoInfo;
    get search(): typeof search;
}
//# sourceMappingURL=HanimeManager.d.ts.map