"use client";

import { useState } from "react";

export default function MiniDisplay() {
  const [display, setDisplay] = useState("");

  const handleOperatorClick = (operator: string) => {
    const operators = ["+", "-", "*", "/"];

    // operadores diferentes do clicado
    const disabledOperators = operators.filter((op) => op !== operator);

    // verifica se já existe outro operador no display
    const hasAnotherOperator = disabledOperators.some((op) =>
      display.includes(op)
    );

    if (hasAnotherOperator) return;

    setDisplay(display + operator);
  };

  const calculate = () => {
    if (display.includes("+")) {
      sum();
    } else if (display.includes("-")) {
      subtraction();
    } else if (display.includes("*")) {
      product();
    } else if (display.includes("/")) {
      divide();
    }
  };

  const sum = () => {
    const values = display.split("+");

    const result = values.reduce(
      (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
      0
    );
    setDisplay(String(result));
  };

  const subtraction = () => {
    const values = display.split("-");
    const numberValues = values.map((value) => Number(value));

    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora - valorAtual
    );
    setDisplay(String(result));
  };

  const product = () => {
    const values = display.split("*"); //"55+67" -> ["1", "1"]
    const numberValues = values.map((value) => Number(value)); // [1, 1]

    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora * valorAtual
    );
    setDisplay(String(result));
  };

  const divide = () => {
    const values = display.split("/");
    const numberValues = values.map((value) => Number(value));

    if (numberValues[0] === 0) {
      setDisplay("0");
      return;
    }

    if (numberValues.includes(0)) {
      setDisplay("Divisão por 0");
      return;
    }

    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora / valorAtual
    );
    setDisplay(String(result));
  };

  return (
    <div className="bg-black rounded p-5 h-110">
      <div>
        <div className="flex justify-center items-center border bg-amber-50 rounded px-2 w-40 h-12 text-center text-xl overflow-x-auto">
          {display}
        </div>

        {/* Teclado Numérico */}
        <div className="grid grid-cols-3 gap-2 w-40 h-40 mt-5">
          <button
            className="bg-pink-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              setDisplay(display + "1");
            }}
            className="bg-pink-300 p-2 rounded"
          >
            1
          </button>
          <button
            onClick={() => {
              setDisplay(display + "2");
            }}
            className="bg-pink-300 p-2 rounded"
          >
            2
          </button>
          <button
            onClick={() => {
              setDisplay(display + "3");
            }}
            className="bg-pink-300 p-2 rounded"
          >
            3
          </button>
          <button
            onClick={() => {
              setDisplay(display + "4");
            }}
            className="bg-pink-300 p-2 rounded"
          >
            4
          </button>
          <button
            onClick={() => {
              setDisplay(display + "5");
            }}
            className="bg-pink-300 p-2 rounded"
          >
            5
          </button>
          <button
            onClick={() => {
              setDisplay(display + "6");
            }}
            className="bg-pink-300 p-2 rounded"
          >
            6
          </button>
          <button
            onClick={() => {
              setDisplay(display + "7");
            }}
            className="bg-pink-300 p-2 rounded"
          >
            7
          </button>
          <button
            onClick={() => {
              setDisplay(display + "8");
            }}
            className="bg-pink-300 p-2 rounded"
          >
            8
          </button>
          <button
            onClick={() => {
              setDisplay(display + "9");
            }}
            className="bg-pink-300 p-2 rounded"
          >
            9
          </button>

          <button
            onClick={() => handleOperatorClick("+")}
            className="bg-pink-600 p-2 rounded aspect-square text-white"
          >
            +
          </button>
          <button
            onClick={() => handleOperatorClick("-")}
            className="bg-pink-600 p-2 rounded aspect-square text-white"
          >
            -
          </button>
          <button
            onClick={() => handleOperatorClick("/")}
            className="bg-pink-600 p-2 rounded aspect-square  text-white"
          >
            /
          </button>
          <button
            onClick={() => handleOperatorClick("*")}
            className="bg-pink-600 p-2 rounded aspect-square  text-white"
          >
            *
          </button>
          <button
            onClick={() => setDisplay("")}
            className="bg-pink-950 p-2 rounded aspect-square  text-white"
          >
            C
          </button>
          <button
            onClick={calculate}
            className="bg-pink-800 p-2 rounded aspect-square text-white"
          >
            =
          </button>
          <button
            onClick={() => setDisplay(display.slice(0, -1))}
            className="bg-violet-300 p-2 rounded col-span-2 flex justify-center items-center"
          >
            <img
              className="p-2 w-8 h-8"
              src={"left.png"}
              alt="Botão de Apagar"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
