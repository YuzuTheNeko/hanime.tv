import { PartialVideo } from "../structures/PartialVideo";
import { Video } from "../structures/Video";
import { IdentifierResolvable } from "../typings/types/IdentifierResolvable";
import { FFmpeg } from "prism-media"
import { getVideoInfo } from "./getVideoInfo";
import { HanimeError } from "../core/HanimeError";
import { ErrorMessages } from "../typings/enums/ErrorMessages";

/**
 * Returns a readable stream from a video using FFmpeg.
 * @param videoOrId The video / url or id to download.
 * @example 
 * download(1315)
 *      .then(console.log)
 * @returns 
 */
export async function download(videoOrId: IdentifierResolvable | PartialVideo | Video): Promise<FFmpeg> {
    const args: string[] = [
        "-i"
    ]

    if (videoOrId instanceof Video) {
        const url = videoOrId.info.videos_manifest.servers.at(0)?.streams.at(-1)?.url

        if (!url) {
            throw new HanimeError(ErrorMessages.NO_AVAILABLE_STREAM, videoOrId.video.id)
        }

        args.push(url)
    } else if (videoOrId instanceof PartialVideo) {
        const video = await videoOrId.fetch()

        const url = video.info.videos_manifest.servers.at(0)?.streams.at(-1)?.url

        if (!url) {
            throw new HanimeError(ErrorMessages.NO_AVAILABLE_STREAM, videoOrId.info.id)
        }

        args.push(url)
    } else {
        const video = await getVideoInfo(videoOrId)

        const url = video.info.videos_manifest.servers.at(0)?.streams.at(-1)?.url

        if (!url) {
            throw new HanimeError(ErrorMessages.NO_AVAILABLE_STREAM, video.video.id)
        }

        args.push(url)
    }

    return new FFmpeg({
        args: [
            ...args,
            '-analyzeduration', '0',
            '-loglevel', '0',
            '-f', 's16le',
            '-ar', '48000',
            '-ac', '2',
        ]
    })
}