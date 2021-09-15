import { StreamData } from "./StreamData";
export interface ServerData {
    id: number;
    name: string;
    slug: string;
    na_rating: number;
    eu_rating: number;
    asia_rating: number;
    sequence: number;
    is_permanent: boolean;
    streams: StreamData[];
}
//# sourceMappingURL=ServerData.d.ts.map