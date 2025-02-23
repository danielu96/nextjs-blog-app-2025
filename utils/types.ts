import { Category } from "./categories";

export interface Post {
    id: number;
    title: string;
    body: string;
    category: Category;

}
export interface PostItemProps {
    id: number;
    title: string;
    body: string;
    category: Category;
    dateAdded?: string;
    isFavorite: boolean;
    toggleFavorite: (id: number) => void;
}
export interface Favorite {
    id: number;
    dateAdded: string;
}