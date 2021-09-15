import { inspect } from "util";
import { getMainPage } from "../methods/getMainPage";

getMainPage()
.then(c => {
    console.log(inspect(c, { depth: 0}))
})