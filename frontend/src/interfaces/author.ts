import type Image from "./image";

export default interface Author {
    id: number;
    attributes: {
        name: string;
        bio: string;
        avatar: Image | null;
        email: string;
    };
}
