"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Counter from "@/components/Counter";
import CommentForm from "@/components/CommentForm";

<NavBar
  links={[
    { label: "Inicio", href: "/" },
    { label: "Sobre Nós", href: "/about" },
    { label: "Produtos", href: "/product" },
  ]}
/>;

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-amber-100 min-h-screen">
      <h1 className="text-3xl font-bold text-amber-800 mb-6 text-center uppercase">
        Posts
      </h1>

      {posts.map((post) => (
        <div
          key={post.id}
          className="text-justify max-w-6xl mx-auto px-4 mt-3 m-4 rounded shadow"
        >
          <h2 className="text-xl text-amber-800 font-semibold uppercase">
            {post.title}
          </h2>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}

      <Counter initial={0}/>
      
    </div>
  );
}
