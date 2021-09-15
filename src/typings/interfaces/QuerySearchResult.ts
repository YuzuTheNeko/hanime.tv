import { PartialVideoData } from "./PartialVideoData";

export interface QuerySearchResult {
    page: number
    totalPages: number
    totalVideos: number
    videosPerPage: number
    videos: PartialVideoData[]
}