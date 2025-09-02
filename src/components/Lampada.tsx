'use client'

import React, { useState } from 'react';

function Lampada() {
  const [ligada, setLigada] = useState(false);

  const alternarLampada = () => {
    setLigada(!ligada);
  };

  return (
    <div className='flex flex-col items-center justify-center h-52 w-52'>
      <img className=''
        src={ligada ? 'lampada_acesa (2).png' : 'lampada_apagada.png'}
        alt={ligada ? 'Lâmpada acesa' : 'Lâmpada apagada'}
      />
      <div className='flex flex-col items-center rounded-4xl'>
        <button className={ ligada ? 'toggle-button-on bg-gray-800 text-white h-8 w-32 rounded-4xl' : 'toggle-button-off bg-green-400 text-white h-8 w-32 rounded-4xl'}onClick={alternarLampada}> 
        {ligada ? 'Desligar' : 'Ligar'}
      </button>
      </div>
    </div>
  );
}

export default Lampada;