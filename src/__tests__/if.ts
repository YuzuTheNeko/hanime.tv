import { If } from "../typings/types/If";

function test<K extends boolean = false>(t: K): If<K, number, string> {
    return (t ? 0 : "") as any
}
