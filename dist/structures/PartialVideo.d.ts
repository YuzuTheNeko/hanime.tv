import { PartialVideoData } from "../typings/interfaces/PartialVideoData";
import { Video } from "./Video";
export declare class PartialVideo {
    private data;
    constructor(data: PartialVideoData);
    get info(): PartialVideoData<false>;
    get url(): string;
    fetch(): Promise<Video>;
    download(): Promise<import("prism-media").FFmpeg>;
}
//# sourceMappingURL=PartialVideo.d.ts.map