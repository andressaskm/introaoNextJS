import React, { useState } from 'react';

function Lampada() {
  const [ligada, setLigada] = useState(false);

  const alternarLampada = () => {
    setLigada(!ligada);
  };

  return (
    <div>
      <img
        src={ligada ? 'lampada_acesa.png' : 'lampada_apagada.png'}
        alt={ligada ? 'Lâmpada acesa' : 'Lâmpada apagada'}
      />
      <button onClick={alternarLampada}>
        {ligada ? 'Desligar' : 'Ligar'}
      </button>
    </div>
  );
}

export default Lampada;