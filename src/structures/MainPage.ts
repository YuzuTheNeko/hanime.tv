import { PartialVideo } from ".";
import { MainPageData } from "..";

export class MainPage {
    private data: MainPageData

    constructor(data: MainPageData) {
        this.data = data
    }

    get page() {
        return this.data
    }

    get videos() {
        return this.data.hentai_videos.map(v => new PartialVideo(v))
    }

    get sections() {
        return this.data.sections 
    }
}