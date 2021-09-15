import axios from "axios";
import { Endpoints } from "..";
import { MainPage } from "../structures/MainPage";
import { MainPageData } from "../typings/interfaces/MainPageData";

export async function getMainPage(): Promise<MainPage> {
    const request = await axios.get<MainPageData>(Endpoints.LANDING).then(r => r.data)

    return new MainPage(request)
}