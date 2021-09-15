import { download } from "../methods/download";
import { VideoData } from "../typings/interfaces/VideoData";
import { Util } from "../util/Util";

export class Video {
    private data: VideoData

    constructor(data: VideoData) {
        this.data = data
    }

    get url() {
        return Util.makeVideoURLWithId(this.data.hentai_video.id)
    }

    get video() {
        return this.data.hentai_video
    }

    get tags() {
        return this.data.hentai_tags
    }

    get info() {
        return this.data 
    }

    download() {
        return download(this)
    }
}