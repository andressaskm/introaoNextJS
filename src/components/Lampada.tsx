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
        src={ligada ? 'lampada_acesa.png' : 'lampada_apagada.png'}
        alt={ligada ? 'Lâmpada acesa' : 'Lâmpada apagada'}
      />
      <div className='flex flex-col items-center'>
        <button className='bg-blue-700 w-32 h-10 text-white rounded-4xl' onClick={alternarLampada}>
        {ligada ? 'Desligar' : 'Ligar'}
      </button>
      </div>
    </div>
  );
}

export default Lampada;