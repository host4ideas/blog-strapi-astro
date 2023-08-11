import type Image from "./image";

export default interface Media {
    id: number;
    __component: string;
    file: {
        data: Image;
    };
}
