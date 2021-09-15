import { search } from "..";

search(`test`)
.then(d => {
    console.log(d.videos[0])
})