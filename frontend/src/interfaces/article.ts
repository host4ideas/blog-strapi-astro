import type Author from "./author";
import type { Media, Quote, RichText, Slider } from "./block";
import type Category from "./category";
import type Image from "./image";

export default interface Article {
    id: number;
    attributes: {
        slug: string;
        title: string;
        excerpt: string;
        content: string;
        readingTime: string;
        visibility: boolean;
        cover: {
            data: Image | null;
        };
        authors: Author[];
        categories: {
            data: Category[];
        };
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        blocks: (Media | Slider | RichText | Quote)[] | null;
    };
}

export interface PostMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}
