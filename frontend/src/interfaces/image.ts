interface FormatAttributes {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null | string;
    width: number;
    height: number;
    size: number;
    url: string;
}

export enum ImageStrapiFormat {
    LARGE = "large",
    MEDIUM = "medium",
    SMALL = "small",
    THUMBNAIL = "thumbnail",
}

export default interface Image {
    id: number;
    attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null | string;
        provider: string;
        provider_metadata: null | string;
        createdAt: string;
        updatedAt: string;
        formats: {
            [ImageStrapiFormat.THUMBNAIL]: FormatAttributes;
            [ImageStrapiFormat.LARGE]: FormatAttributes;
            [ImageStrapiFormat.MEDIUM]: FormatAttributes;
            [ImageStrapiFormat.SMALL]: FormatAttributes;
        };
    };
}
