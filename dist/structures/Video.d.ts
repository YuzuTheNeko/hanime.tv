import { VideoData } from "../typings/interfaces/VideoData";
export declare class Video {
    private data;
    constructor(data: VideoData);
    get url(): string;
    get video(): import("..").PartialVideoData<true>;
    get tags(): import("..").TagData[];
    get info(): VideoData;
    download(): Promise<import("prism-media").FFmpeg>;
}
//# sourceMappingURL=Video.d.ts.map