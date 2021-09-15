import { BrandData } from "./BrandData";
import { BSData } from "./BSData";
import { FranchiseData } from "./FranchiseData";
import { PartialVideoData } from "./PartialVideoData";
import { StoryboardData } from "./StoryboardData";
import { TagData } from "./TagData";
import { VideoManifestData } from "./VideoManifestData";

export interface VideoData {
    player_base_url: string,
    hentai_video: PartialVideoData<true>
    hentai_tags: TagData[]
    hentai_franchise: FranchiseData
    hentai_franchise_hentai_videos: PartialVideoData[]
    hentai_video_storyboards: StoryboardData[]
    brand: BrandData
    watch_later_playlist_hentai_videos: null,
    like_dislike_playlist_hentai_videos: null,
    playlist_hentai_videos: null,
    similar_playlists_data: null,
    next_hentai_video: PartialVideoData
    next_random_hentai_video: PartialVideoData
    videos_manifest: VideoManifestData
    user_license: null,
    bs: BSData
    ap: number
    env: { 
        vhtv_version: number
        premium_coin_cost: number
    }
    session_token: string
    session_token_expire_time_unix: 0,
    user: null,
    user_setting: null,
    user_search_option: null,
    playlists: null
}