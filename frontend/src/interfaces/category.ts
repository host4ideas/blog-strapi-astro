import type Article from "./article";

export default interface Category {
    id: number;
    attributes: {
        name: string;
        slug: string;
        description: string | null;
        createdAt: string;
        updatedAt: string;
        articles: {
            data: Article[];
        };
    };
}
