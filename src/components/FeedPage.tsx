"use client";
import { useState } from "react";

type Posts {
    id: number
    title: string
}

export default function PostsList() {
  const posts = [
    { id: 1, title: "Dale Cooper" },
    { id: 2, title: "Twin Peaks" },
    { id: 3, title: "The Owls Are Not What They Seem" },
  ];

  const [postsList, setPostsList] = useState(posts);

  function handlePosts() {
    const showsPost = postsList.map((item, i) => {
      return item;
    });
  }

  setPostsList(showsPost);

  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="font-bold mb-2">Postagens</h1>
      </div>
    </div>
  );
}
