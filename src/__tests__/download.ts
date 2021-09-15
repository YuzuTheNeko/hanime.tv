import { download } from "..";
import Speaker from "speaker"

download(1315)
.then(stream => {
    stream.pipe(
        new Speaker({
            channels: 2,
            bitDepth: 16,
            sampleRate: 48_000
        })
    )
})