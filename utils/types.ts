export interface Post {
    id: number;
    title: string;
    body: string;

}
export interface PostItemProps {
    id: number;
    title: string;
    body: string;
    dateAdded?: string;
    isFavorite: boolean;
    toggleFavorite: (id: number) => void;
}
export interface Favorite {
    id: number;
    dateAdded: string;
}