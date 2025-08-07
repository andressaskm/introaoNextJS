"use client";

import { useState } from "react";

interface likeProps {
  initial: number;
}

export default function Likes(props: likeProps) {
  const [count, setCount] = useState(props.initial);

  return (
    <div className="bg-pink-200 rounded-2xl p-4 y-6 text-center text-bold font-bold tracking-wide uppercase mt-5">
      <h1 className="">Likes:</h1>

      <div className="flex items-center justify-center gap-2 mt-2">
        <button
          className="w-12 h-12 hover:scale-110 active:scale-90 transition-transform duration-150"
          onClick={() => setCount(count + 1)}
        >
          <img src="heart.png" alt="Curtir" />
        </button>
        <span className="text-xl">{count}</span>
      </div>
    </div>
  );
}
