// import React, { useState } from 'react';
// import useConfetti from './hooks/useConfetti';
// import './App.css'

// function App() {
//   const [bestTime, setBestTime] = useState(false);
//   const [bestDiceRoll, setBestDiceRoll] = useState(false);
//   const { confetti, newBestTime, newBestDiceRoll, newBestGame } = useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll });

//   return (
//     <section className="confetti">
//     {!bestTime && !bestDiceRoll && <h1>Choose a React state, and click celebrate!</h1>} 

//     {bestTime && bestDiceRoll ? (
//     <h1>🏆New Best Game!🏆</h1>
//     ) : bestDiceRoll ? (
//     <h1>🎲New Best Dice Roll!🎲</h1>
//     ) : bestTime ? (
//     <h1>⏱New Best Time!⏱</h1>
// ) : null}

//       <div>
//         <button onClick={newBestTime}>newBestTime</button>
//         <button onClick={newBestDiceRoll}>newBestDiceRoll</button>
//         <button onClick={newBestGame}>newBestGame</button>
//       </div>
//         <button onClick={confetti}>Celebrate!</button>
//     </section>
//   );
// };

// export default App;


// BestLowDiceRoll
// import { useState } from 'react'
// import BestLowDiceRoll from '../src/components/BestLowDiceRoll';
// import './App.css'

// function App() {
//   const [gameStarted, setGameStarted] = useState(false);
//   const [gameEnded, setGameEnded] = useState(false);

//   return (
//       <BestLowDiceRoll 
//         gameStarted={gameStarted}
//         gameEnded={gameEnded}
//         setGameStarted={setGameStarted}
//         setGameEnded={setGameEnded}
//       />
//   )
// }

// export default App

//BestTime.jsx
// import BestTime from "./components/BestTime";
// import "./App.css";

// function App() {
// 	return (
// 		<div className="App">
// 			<BestTime />
// 		</div>
// 	);
// }

// export default App;


import React, { useState } from 'react';
import useConfetti from './hooks/useConfetti';
// BestLowDiceRoll
import BestLowDiceRoll from '../src/components/BestLowDiceRoll';

// BestTime
import BestTime from "./components/BestTime";

import './App.css'



function App() {
  const [bestTime, setBestTime] = useState(false);
  const [bestDiceRoll, setBestDiceRoll] = useState(false);
  const { confetti, newBestTime, newBestDiceRoll, newBestGame } = useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll });

// BestLowDiceRoll
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

// This App
  const [mainAppGameStart, setMainAppGameStart] = useState(false);
  const [mainAppGameEnd, setMainAppGameEnd] = useState(false);
  const [mainAppDice, setMainAppDice]= useState(0);


  function mainAppDiceRoll() {
    setMainAppDice(prev => prev + 1);
      console.log(`mainAppDice: ${mainAppDice}`)
  }

  return (
    <section className="confetti">
    {/* {!bestTime && !bestDiceRoll && <h1>Choose a React state, and click celebrate!</h1>}  */}

    {/* {bestTime && bestDiceRoll ? (
    <h1>🏆New Best Game!🏆</h1>
    ) : bestDiceRoll ? (
    <h1>🎲New Best Dice Roll!🎲</h1>
    ) : bestTime ? (
    <h1>⏱New Best Time!⏱</h1>
) : null} */}

      <nav>
        <div className="App">
          <BestTime />
        </div>

        <BestLowDiceRoll 
          gameStarted={gameStarted}
          gameEnded={gameEnded}
          setGameStarted={setGameStarted}
          setGameEnded={setGameEnded}
          mainAppDiceRoll={mainAppDiceRoll}
          mainAppDice={mainAppDice}
        />
    </nav>

      {/* <div>
        <button onClick={newBestTime}>newBestTime</button>
        <button onClick={newBestDiceRoll}>newBestDiceRoll</button>
        <button onClick={newBestGame}>newBestGame</button>
      </div> */}
        {/* <button onClick={confetti}>Celebrate!</button> */}


     {/*  This App */}
     <button onClick={mainAppDiceRoll}>Roll Dice</button>   
    </section>
  );
};

export default App;