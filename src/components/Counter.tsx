'use client'

import { useState } from "react";

interface countProps {
    initial: number;
}

export default function Counter( props: countProps) {
    
           //cada variável receberá algo, count receberá um valor e setCount receberá uma função.
           // count armazena o valor e setCount é a função que modifica o valor.
    const [count, setCount] = useState(props.initial); //props initial pega o valor que o usuário determina.

   // o set count espera o tipo do valor inicial do meu usestate.
    
    return (

        <>
        <h1 className="bg-amber-800 text-center text-amber-100 w-100 mx-auto px-4 mt-3 m-4 rounded shadow">Contagem: {count}</h1>
        <button className="bg-red-600 text-center text-amber-100 rounded max-w-6xl mx-auto px-4 mt-3 m-4px-4 py-2 hover:bg-red-800 self-center flex" onClick={() => setCount (count +1)}>Incrementar</button>

        </>
    )
}