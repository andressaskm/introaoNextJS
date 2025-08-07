'use client'

import { useState } from "react"

interface likeProps {
    initial: number;
}

export default function Likes (props: likeProps) {
    const [count, setCount] = useState(props.initial);

    return (
        <div className="text-center font-bold mt-5">
        
        <h1 className="">Likes:</h1>

        <div>
            <button className="w-12 h-12 hover:scale-110"onClick={() => setCount (count +1)}>
                <img src="heart.png" alt="Botão Curtir" />{count}
            </button>

        </div>

        </div>
        
    )
}
