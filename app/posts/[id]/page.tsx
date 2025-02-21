
'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { fetchPostDetails } from '@/utils/api';
import Link from 'next/link';
import Navbar from '@/components/navbar/NavBar';
import Image from 'next/image';
import { Post } from '@/utils/types';



const PostDetailsPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (id) {
            const getPostDetails = async () => {
                const data = await fetchPostDetails(Number(id));
                setPost(data);
            };
            getPostDetails();
        }
    }, [id]);


    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="relative grid-cols-1 xl:grid-cols-2">
                <div className="absolute top-[155px] left-[37px]  xl:top-[289px] xl:left-[144px]">
                    <Link href="/">
                        <Image src="/images/Frame 14374.png" alt="blog edukacyjny" width={299} height={44} />
                    </Link>
                </div>
                <div className="absolute top-[243px] left-[37px] xl:top-[304px] xl:left-[1111px] flex items-center">

                </div>
                <div className="position absolute top-[306px] left-[36px] xl:top-[455px] xl:left-[149px] w-[359px] xl:w-[1206px]">
                    <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </div>
        </>
    );
};

export default PostDetailsPage;