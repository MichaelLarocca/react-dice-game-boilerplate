import { useState } from 'react'
import useConfetti from './hooks/useConfetti';
import BestTime from "./components/BestTime";
import BestLowDiceRoll from '../src/components/BestLowDiceRoll';
import './App.css'

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  return (
    <nav>
        <div className="App">
            <BestTime />
        </div>
        <div>
            <BestLowDiceRoll 
            gameStarted={gameStarted}
            gameEnded={gameEnded}
            setGameStarted={setGameStarted}
            setGameEnded={setGameEnded}
        />
        </div>
    </nav>
  )
}

export default App