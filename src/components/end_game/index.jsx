import React from 'react'
import { useState } from 'react'

function End_Game(resultados) {
    
    const [resultado, setResultado] = useState([]);

    function mostraResultado() {
        setResultado(prevItems => [...prevItems, 'Você ganhou: ' + resultados.jogador]);
        setResultado(prevItems => [...prevItems, 'A maquina ganhou: ' + resultados.maquina]);
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