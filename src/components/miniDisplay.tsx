"use client";

import { useState } from "react";
import { includes } from "zod/v4-mini";

export default function MiniDisplay() {
  const [display, setDisplay] = useState("");

  const calculate = () => {
    let result = 0;

    if (display.includes("+")) {
      const values = display.split("+").map(Number);
      result = values.reduce((a, b) => a + b, 0);
    } else if (display.includes("-")) {
      const values = display.split("-").map(Number);
      result = values.reduce((a, b) => a - b);
    } else if (display.includes("*")) {
      const values = display.split("*").map(Number);
      result = values.reduce((a, b) => a * b);
    }  else if (display.includes("/")) {
      const values = display.split("/").map(Number);
      result = values.reduce((a, b) => a / b);
    }

    setDisplay(String(result));
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <div className="flex justify-center items-center border border-gray-400 rounded px w-40 h-12 text-center text-xl overflow-x-auto">
          {display}
        </div>

        <div className="grid grid-cols-3 gap-2 w-40 h-40 mt-5">
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "0");
            }}
          >
            0
          </button>
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "1");
            }}
          >
            1
          </button>
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "2");
            }}
          >
            2
          </button>
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "3");
            }}
          >
            3
          </button>
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "4");
            }}
          >
            4
          </button>
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "5");
            }}
          >
            5
          </button>
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "6");
            }}
          >
            6
          </button>
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "7");
            }}
          >
            7
          </button>
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "8");
            }}
          >
            8
          </button>
          <button
            className="bg-blue-300 p-2 rounded"
            onClick={() => {
              setDisplay(display + "9");
            }}
          >
            9
          </button>

          <button
            onClick={() => {
              setDisplay(display + "+");
            }}
            className="bg-green-500 p-2 rounded"
          >
            +
          </button>

          <button
            onClick={() => {
              setDisplay(display + "-");
            }}
            className="bg-gray-400 p-2 rounded"
          >
            -
          </button>

          <button onClick={calculate} className="bg-amber-600 p-2 rounded">
            =
          </button>

                    <button
            onClick={() => setDisplay(display + "/")}
            className="bg-fuchsia-700 p-2 rounded"
          >
            /
          </button>

          <button
            onClick={() => setDisplay(display + "*")}
            className="bg-yellow-500 p-2 rounded"
          >
            *
          </button>

          <button
            onClick={() => {
              setDisplay(" ");
            }}
            className="bg-purple-500 p-2 rounded"
          >
            C
          </button>

          <button
            onClick={() => {
              setDisplay(display.slice(0, -1));
            }}
            className="bg-violet-300 p-2 rounded col-span-2"
          >
            <img
              className="p-2 w-8 h=8 mx-auto items-center"
              src={"left.png"}
              alt="Botão de Apagar"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
