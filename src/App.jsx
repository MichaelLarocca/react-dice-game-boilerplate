import useConfetti from './hooks/useConfetti';
import { useState } from 'react'
import BestLowDiceRoll from '../src/components/BestLowDiceRoll';
import './App.css'

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  return (
      <BestLowDiceRoll 
        gameStarted={gameStarted}
        gameEnded={gameEnded}
        setGameStarted={setGameStarted}
        setGameEnded={setGameEnded}
      />
  )
}

export default App