"use client";

import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function ShoppingList() {
  const items = [
    {nome: "Livros", comprado: false },
    {nome: "Roupas", comprado: false },
    {nome: "Cadernos", comprado: false },
    {nome: "Flores", comprado: false },
    {nome: "Chocolate", comprado: false },
  ];

  const [shoppingList, setShoppingList] = useState(items)

  function handleCheck(index: number) {
    const listaAtualizada = shoppingList.map((item, i) =>{
      if (i == index) {
        item.comprado = !item.comprado
      }

      return item
    })

    setShoppingList(listaAtualizada)

  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-pink-300 rounded-2xl p-4 y-6 w-50">
        <h1 className="font-bold mb-2">Lista de Compras</h1>
        <ul>
          {shoppingList.map((item, index) =>(
          <li key={index}>
            <input onClick={() => handleCheck(index)} type="checkbox" id="input" />
            <label htmlFor="input" className={item.comprado ? "mx-2 line-through" : "mx-2"}>{item.nome}</label>
          </li>

          ))}
        </ul>
      </div>
    </div>
  )

}
