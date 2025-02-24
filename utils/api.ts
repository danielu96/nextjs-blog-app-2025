'use client'

import axios, { AxiosError } from 'axios';
import { categories, Category } from './categories';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        const posts = response.data.map((post: any) => ({
            ...post,
            category: categories[Math.floor(Math.random() * categories.length)] as Category,
        }));
        return posts;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                // Konwersja danych odpowiedzi na ciąg znaków JSON
                const responseData = JSON.stringify(axiosError.response.data, null, 2);
                throw new Error(`API Error: Request failed with status code ${axiosError.response.status} - ${responseData}`);
            } else if (axiosError.request) {
                throw new Error('API Error: No response received from the server.');
            } else {
                throw new Error(`API Error: ${axiosError.message}`);
            }
        } else {
            throw new Error('API Error: An unexpected error occurred.');
        }
    }
};

export const fetchPostDetails = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        const post = {
            ...response.data,
            category: categories[Math.floor(Math.random() * categories.length)] as Category,
        };
        return post;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                const responseData = JSON.stringify(axiosError.response.data, null, 2);
                throw new Error(`API Error: Request failed with status code ${axiosError.response.status} - ${responseData}`);
            } else if (axiosError.request) {
                throw new Error('API Error: No response received from the server.');
            } else {
                throw new Error(`API Error: ${axiosError.message}`);
            }
        } else {
            throw new Error('API Error: An unexpected error occurred.');
        }
    }
};