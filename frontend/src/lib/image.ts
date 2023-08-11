import type { ImageStrapiFormat } from "../interfaces/image";
import type Image from "../interfaces/image";
import { getStrapiURL } from "./api";

export const getImageUrls = (
    format: ImageStrapiFormat,
    data: Image[] | null
): string[] | null => {
    if (!data || data.length < 1) return null;

    return data.map((image) => {
        const { url } = image.attributes.formats[format];
        const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
        return imageUrl;
    });
};

export const getImageUrl = (
    format: ImageStrapiFormat,
    data: Image | null
): string | null => {
    if (!data) return null;

    const { url } = data.attributes.formats[format];
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
};
