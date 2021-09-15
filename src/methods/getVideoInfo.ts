import axios from "axios";
import { HanimeError } from "../core/HanimeError";
import { Video } from "../structures/Video";
import { ErrorMessages } from "../typings/enums/ErrorMessages";
import { VideoData } from "../typings/interfaces/VideoData";
import { Util } from "../util/Util";

/**
 * Gets full info over a video with given id or url.
 * @param url The url or id of the video.
 * @example 
 * getVideoInfo(1315)
 *      .then(v => v.video)
 * @returns 
 */
export async function getVideoInfo(url: string | number): Promise<Video> {
    const id = typeof url === 'number' ? url : Util.extractIdFromURL(url)

    const request = await axios.get<VideoData>(Util.makeVideoURLWithId(id)).then(c => c.data).catch(() => null)

    if (!request) throw new HanimeError(ErrorMessages.VIDEO_NOT_FOUND, url)

    return new Video(request)
}