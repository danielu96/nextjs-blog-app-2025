import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    const posts = response.data.map((post: any) => ({
        ...post,
    }));
    return posts;
};

export const fetchPostDetails = async (id: number) => {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    const post = {
        ...response.data,
    };
    return post;
};