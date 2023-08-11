import type Author from "./author";
import type Category from "./category";
import type Image from "./image";
import type Quote from "./quote";

interface Component {
    media: Image | null;
    quote: Quote | null;
    slider: Image[] | null;
    richText: string | null;
}

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
        blocks: {
            components: Component[] | null;
        };
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
