
'use client';
import { useState, useEffect } from 'react';
import { fetchPosts } from '@/utils/api';
import PostItem from './PostItem';
import { Post } from '@/utils/types';


const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
        };
        getPosts();
    }, []);

    return (
        <div className="postList">
            {/* Nagłówek */}
            <div className="flex items-center justify-between mb-16">
                <div className="text-xl font-semibold">Wpisy</div>
            </div>
            {/* Wpisy */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-16">
                {posts.map((post) => {
                    return (
                        <PostItem key={post.id} />
                    );
                })}
            </div>
        </div>
    );
};

export default PostList;