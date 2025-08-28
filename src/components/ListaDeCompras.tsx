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
    <div>
      <h1>Lista de Compras</h1>
      <ul>
        {shoppingList.map((item, index) =>(
        <li key={index}>
          <input onClick={() => handleCheck(index)} type="checkbox" id="input" />
          <label htmlFor="input" className={item.comprado ? "mx-2 line-through" : "mx-2"}>{item.nome}</label>
        </li>

        ))}
      </ul>
    </div>
  )




  // const [purchased, setPurchased] = useState(itemsList);

  // const handleClick = (id: number) => {
  //   setPurchased(
  //     purchased.map((item) =>
  //       item.id === id ? { ...item, riscado: !item.riscado } : item
  //     )
  //   );  
  // };

  // return (
  //   <div className="flex flex-col justify-center items-center">
  //     <div className="bg-pink-300 rounded-2xl p-4 y-6">
  //       <p className="font-bold mb-3">Lista de Compras</p>
  //       <ul className="text-center">
  //         {purchased.map((item) => (
  //           <li
  //             key={item.id}
  //             className={`${item.riscado ? "line-through" : "none"} flex items-center gap-2 cursor-pointer`}
  //           >
  //               <button
  //                   onClick={() => handleClick(item.id)}
  //               >
  //                   <FaCircleCheck color="#ff0084" size={19}/>
  //               </button>

              
  //               {item.texto}
              

  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
}
