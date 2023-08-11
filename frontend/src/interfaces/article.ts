import type Author from "./author";
import type Category from "./category";
import type Image from "./image";
import type Media from "./media";
import type Quote from "./quote";
import type { RichText } from "./rich_text";
import type Slider from "./slider";

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
