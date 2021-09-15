import { search } from "..";
import { download } from "../methods/download";
import { getVideoInfo } from "../methods/getVideoInfo";
import { PartialVideo } from "../structures/PartialVideo";
import { Video } from "../structures/Video";

export class HanimeManager {
    videos = new Map<number, PartialVideo | Video>()

    constructor() {}

    get download() {
        return download
    }

    get getVideoInfo() {
        return getVideoInfo
    }

    get search() {
        return search
    }
}