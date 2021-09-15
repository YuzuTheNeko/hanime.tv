import { BSData, PartialVideoData } from ".";
import { SectionData } from "./SectionData";

export interface MainPageData {
    sections: SectionData[]
    hentai_videos: PartialVideoData[]
    bs: BSData
    env: {
        vhtv_version: 1631675472277
        premium_coin_cost: 4100
    }
    session_token: string
    session_token_expire_time_unix: number
    user: null
    user_setting: null
    user_search_option: null
    playlists: null
}