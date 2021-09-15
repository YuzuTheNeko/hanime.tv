import { getVideoInfo } from "../methods/getVideoInfo";

getVideoInfo(1314)
.then(d => {
    console.log(d.info.videos_manifest.servers[0].streams[0])
})