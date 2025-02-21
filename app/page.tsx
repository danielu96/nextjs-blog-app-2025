"use client"
import Navbar from "@/components/navbar/NavBar";
import Header from "@/components/header/Header";
import Rectangle4 from "@/components/home/Rectangle4";
import { useSearchParams } from 'next/navigation'
import PostList from "@/components/posts/PostList";

export default function Home() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  return (
    <>
      <Navbar />
      <Header />
      <Rectangle4 category={category ?? undefined} />
      <PostList />
    </>
  );
}
