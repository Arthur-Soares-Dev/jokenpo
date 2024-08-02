import React from 'react'

function Play_Again({rejogar}) {
    const play = () => {
        rejogar();
      };


  return (
    <>
        <button onClick={play}>Play Again</button>
    </>
  )
}

export default Play_Again