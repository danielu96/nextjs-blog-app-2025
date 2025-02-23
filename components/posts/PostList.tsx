'use client';
import { useState, useEffect } from 'react';
import { fetchPosts } from '@/utils/api';
import PostItem from './PostItem';
import { Post } from '@/utils/types';
import { Favorite } from '@/utils/types';
import { useSearchParams } from 'next/navigation';

const PostList = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category'); // Pobieranie kategorii z UR
    const [posts, setPosts] = useState<Post[]>([]);
    const [favorites, setFavorites] = useState<Favorite[]>(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('favorites') || '[]');
        }
        return [];
    });
    const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('all');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(category || null); // Ustawienie początkowej kategorii na podstawie parametru z URL


    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
            console.log('pobrane posty', data);
        };
        getPosts();
    }, []);
    useEffect(() => {
        setSelectedCategory(category);
    }, [category]);

    const toggleFavorite = (id: number) => {
        const isFavorite = favorites.some(fav => fav.id === id);
        const updatedFavorites = isFavorite
            ? favorites.filter(fav => fav.id !== id)
            : [...favorites, { id, dateAdded: new Date().toISOString() }];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };
    const filteredPosts = posts.filter(post => {
        console.log("Posty przed filtrowaniem:", posts);
        console.log("Wybrana kategoria:", selectedCategory);
        console.log("Parametr category z URL:", searchParams.get('category')); // Dodane console.log
        if (selectedCategory && post.category.label !== selectedCategory) {
            return false;
        }

        if (activeTab === 'favorites') {
            return favorites.some(fav => fav.id === post.id);
        }
        return true;
    });

    return (
        <div className="postList">
            {/* Nagłówek */}
            <div className="flex items-center justify-between mb-16">
                <div className="text-xl font-semibold">Wpisy</div>
                <div className="flex space-x-4">
                    <button
                        className={`px-4 py-2 text-sm  ${activeTab === 'all' ? ' text-red-800 underline' : 'text-black'}`}
                        onClick={() => setActiveTab('all')}
                    >
                        WSZYSTKIE
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'favorites' ? 'underline text-red-500' : ' text-gray-700'}`}
                        onClick={() => setActiveTab('favorites')}
                    >
                        ULUBIONE
                    </button>

                </div>
            </div>

            {/* Wpisy */}
            < div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-16">
                {filteredPosts.map((post) => {
                    const favorite = favorites.find(fav => fav.id === post.id);

                    return (
                        <PostItem
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                            isFavorite={!!favorite}
                            dateAdded={favorite?.dateAdded}
                            toggleFavorite={toggleFavorite}
                            category={post.category}
                        />
                    );
                })}
            </div>
        </div >
    );
};

export default PostList;