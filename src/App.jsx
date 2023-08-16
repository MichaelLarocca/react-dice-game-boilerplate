import React, { useState } from 'react';
import useConfetti from './hooks/useConfetti';
import BestTime from "./components/BestTime";
import BestLowDiceRoll from '../src/components/BestLowDiceRoll';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

// confetti
  const [bestTime, setBestTime] = useState(false);
  const [bestDiceRoll, setBestDiceRoll] = useState(false);
  const { confetti, newBestTime, newBestDiceRoll, newBestGame } = useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll });

  return (
    <>
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

        <section className="confetti">
            {!bestTime && !bestDiceRoll && <h1>Choose a React state, and click celebrate!</h1>} 

            {bestTime && bestDiceRoll ? (
            <h1>🏆New Best Game!🏆</h1>
            ) : bestDiceRoll ? (
            <h1>🎲New Best Dice Roll!🎲</h1>
            ) : bestTime ? (
            <h1>⏱New Best Time!⏱</h1>
        ) : null}

            <div>
                <button onClick={newBestTime}>newBestTime</button>
                <button onClick={newBestDiceRoll}>newBestDiceRoll</button>
                <button onClick={newBestGame}>newBestGame</button>
            </div>
                <button onClick={confetti}>Celebrate!</button>
        </section>
    </>
  )
}

export default App