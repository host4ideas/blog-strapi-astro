import { ImageStrapiFormat } from "../interfaces/image";
import type Image from "../interfaces/image";
import { getStrapiURL } from "./api";

const resolveUrl = (image: Image, format: ImageStrapiFormat): string | null => {
    let url: string | undefined;
    let formatData = image.attributes.formats[format];

    if (formatData) {
        url = formatData.url;
    }

    // Try with all formats until an url is found
    if (!formatData) {
        url = Object.keys(ImageStrapiFormat).map((key) => {
            formatData = image.attributes.formats[key as ImageStrapiFormat];
            if (formatData) return formatData.url;
        })[0];
    }

    if (url) {
        return url.startsWith("/") ? getStrapiURL(url) : url;
    }

    return null;
};

export const getImageUrls = (
    format: ImageStrapiFormat,
    imgs: Image[] | null
): (string | null)[] | null => {
    if (!imgs || imgs.length < 1) return null;

    return imgs.map((image) => {
        return resolveUrl(image, format);
    });
};

export const getImageUrl = (
    format: ImageStrapiFormat,
    image: Image | null
): string | null => {
    if (!image) return null;

    return resolveUrl(image, format);
};
