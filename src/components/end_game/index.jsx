import React from 'react'
import { useState } from 'react'

function End_Game({ rejogar, jogador, maquina }) {
    
    const [resultado, setResultado] = useState([]);

    function mostraResultado() {
      rejogar(true);
      setResultado(prevItems => [...prevItems, 'Você ganhou: ' + jogador]);
      setResultado(prevItems => [...prevItems, 'A maquina ganhou: ' + maquina]);
    }

  return (
    <>
        <button onClick={() => mostraResultado()}>End Game</button>
        <p>{resultado[0]}</p>
        <p>{resultado[1]}</p>
    </>
  )
}

export default End_Game
