import axios from "axios";
import { Endpoints } from "..";
import { MainPageData } from "../typings/interfaces/MainPageData";

export async function getMainPage(): Promise<MainPageData> {
    const request = await axios.get<MainPageData>(Endpoints.LANDING).then(r => r.data)

    return request
}