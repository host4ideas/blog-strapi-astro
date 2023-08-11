import type Image from "./image";

export default interface Slider {
    id: number;
    __component: string;
    files: {
        data: Image[];
    };
}
