import type { ImageStrapiFormat } from "../interfaces/image";
import type Image from "../interfaces/image";
import { getStrapiURL } from "./api";

export const getImageUrls = (
    format: ImageStrapiFormat,
    imgs: Image[] | null
): string[] | null => {
    if (!imgs || imgs.length < 1) return null;

    return imgs.map((image) => {
        const { url } = image.attributes.formats[format];
        const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
        return imageUrl;
    });
};

export const getImageUrl = (
    format: ImageStrapiFormat,
    img: Image | null
): string | null => {
    if (!img) return null;

    const { url } = img.attributes.formats[format];
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
};
