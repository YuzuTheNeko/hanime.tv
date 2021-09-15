import { download } from "../methods/download";
import { getVideoInfo } from "../methods/getVideoInfo";
import { PartialVideoData } from "../typings/interfaces/PartialVideoData";
import { Util } from "../util/Util";
import { Video } from "./Video";

export class PartialVideo {
    private data: PartialVideoData

    constructor(data: PartialVideoData) {
        this.data = data
    }

    get info() {
        return this.data
    }

    get url() {
        return Util.makeVideoURLWithId(this.info.id)
    }

    async fetch() {
        return getVideoInfo(this.url)
    }

    download() {
        return download(this)
    }
}