"use client"
import { ToggleDark } from "@/components/toggleDark"
import { useState } from "react"

export default function DarkTheme() {

    const [isDark, setIsDark] = useState(false)

    const handleToggleTheme = () => {
        setIsDark(isDark => !isDark)
    }
    
    return(
        <div className={`h-screen flex flex-col justify-center content-center items-center 
            transition-all duration-700
         ${isDark ? 'bg-gray-900 text-white': 'bg-amber-50 text-black'}`}>
            
            <h1>Página { isDark ? 'Dark Theme' : 'Light Theme'}</h1>

            <ToggleDark onToggle={handleToggleTheme} isDark={isDark}/>

            {/* <button onClick={() => {handleToggleTheme()}}>Alterar</button> */}

        </div>

    )
}