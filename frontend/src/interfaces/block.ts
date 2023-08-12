import type Image from "./image";

export enum BlockType {
    MEDIA = "shared.media",
    RICH_TEXT = "shared.rich-text",
    SLIDER = "shared.slider",
    QUOTE = "shared.quote",
}

export interface Quote {
    id: number;
    __component: BlockType.QUOTE;
    title: string;
    body: string;
}

export interface RichText {
    id: number;
    __component: BlockType.RICH_TEXT;
    body: string;
}

export interface Media {
    id: number;
    __component: BlockType.MEDIA;
    file: {
        data: Image;
    };
}

export interface Slider {
    id: number;
    __component: BlockType.SLIDER;
    files: {
        data: Image[];
    };
}
