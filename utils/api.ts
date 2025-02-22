import axios from 'axios';
// import { categories } from './categories';
import { categories, Category } from './categories';

const API_URL = 'https://jsonplaceholder.typicode.com';

// const categories = ['WIEDZA', 'INSPIRACJE', 'INTERPRETACJE', 'DOSTĘPNE',];

export const fetchPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    const posts = response.data.map((post: any) => ({
        ...post,
        category: categories[Math.floor(Math.random() * categories.length)] as Category, // Jawne typowanie
    }));
    return posts;
};

export const fetchPostDetails = async (id: number) => {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    const post = {
        ...response.data,
        category: categories[Math.floor(Math.random() * categories.length)] as Category, // Jawne typowanie
    };
    return post;
};