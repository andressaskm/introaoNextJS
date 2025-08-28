"use client"
import { useState } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

export default function PlayButton() {
    
    const [played, setPlayed] = useState(false) 
    
    return (
    <div className="flex flex-col items-center">
        <button
        onClick={() => {setPlayed(!played)}}
      className={`flex items-center
        space-x-2 p-2 rounded-md
        
        bg-gray-50 hover:bg-gray-100
        ${played ?  
            "text-green-600  bg-green-300 hover:bg-green-200" : 
            "text-red-500  bg-red-100 hover:bg-red-200"}
        `}
    
    >
      <span>{played ? <FaCirclePause/> : <FaCirclePlay/> }</span>
      <span>{played ? "Pause" : "Play" }</span>
    </button>
    </div>
  );
}
