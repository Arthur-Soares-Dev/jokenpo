import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Play_Again from './components/play_again'
import End_Game from './components/end_game'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [fim, setFim] = useState(false);
  const [resultado, setResultado] = useState('');
  const [vitorias_jogador, setVitorias_jogador] = useState(0);
  const [vitorias_computador, setVitorias_computador] = useState(0);

  const rejogar = () => {
    setFim(false);
    setResultado('');
  };

  function jogar(escolha) {
    setFim(true)
    const opcoes = ['pedra', 'papel', 'tesoura']
    escolha = opcoes[escolha]
    const escolha_computador = opcoes[Math.floor(Math.random() * 3)]
    
    if(escolha == escolha_computador){
      setResultado('Houve um empate');
      return true;
    }

    switch (escolha) {
      case 'pedra':
        if(escolha_computador == 'tesoura') {
          ganhou()
          break;
        }
        perdeu()
        break;

      case 'papel':
        if(escolha_computador == 'pedra') {
          ganhou()
          break;
        }
        perdeu()
        break;
    
      default:
        if(escolha_computador == 'papel') {
          ganhou()
          break;
        }
        perdeu()
        break;
    }

    function ganhou() {
      setResultado('Você ganhou');
      setVitorias_jogador((vitorias_jogador) => vitorias_jogador + 1)
    }

    function perdeu() {
      setResultado('Você perdeu')
      setVitorias_computador((vitorias_computador) => vitorias_computador + 1)
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pedra, Papel, Tesoura</h1>
      <h1>{resultado}</h1>
      {!fim && <button onClick={() => jogar(0)}>Pedra</button>}
      {!fim && <button onClick={() => jogar(1)}>Papel</button>}
      {!fim && <button onClick={() => jogar(2)}>Tesoura</button>}


      <br /><br />
      <Play_Again rejogar={rejogar}/>
      
      <br /><br />
      <End_Game jogador={vitorias_jogador} maquina={vitorias_computador} />
    </>
  )
}

export default App
