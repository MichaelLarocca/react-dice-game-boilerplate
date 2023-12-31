import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export default function BestTime() {
	const [gameID, setGameID] = useState(getOrSetGameID());
	const [currentTime , setCurrentTime ] = useState(0);
	const [gameEndTime, setGameEndTime] = useState(0);
	const [gameBestTime, setGameBestTime] = useState(getBestTime());
	const [gameStarted, setGameStarted] = useState(false);
	const [gameEnded, setGameEnded] = useState(false);

	function getOrSetGameID() {
		const storedGameID = localStorage.getItem("gameID");
		if (storedGameID) {
		  return storedGameID;
		} else {
		  const newGameID = uuidv4();
		  localStorage.setItem("gameID", newGameID);
		  return newGameID;
		}
	  }

	function getBestTime() {
		const storedBestTime = localStorage.getItem(`bestTime-${gameID}`);
		return storedBestTime ? parseInt(storedBestTime, 10) : Infinity;
	  }

	function saveBestTime(bestime) {
		localStorage.setItem(`bestTime-${gameID}`, bestime);
	  }

	function bestTime() {
		if (gameEndTime < gameBestTime && gameEndTime !== 0) {
			setGameBestTime(gameEndTime);
			saveBestTime(gameEndTime);
		}
	}

	function resetTime() {
		setCurrentTime(0);
		setGameEndTime(0);
	}

	function startGame() {
		setGameStarted(true);
		setGameEnded(false);
	}

	function endGame() {
		setGameEnded(true);
		setGameStarted(false);
		setGameEndTime(currentTime);
	}

	function formattedTime(timeValue) {
		if (timeValue === Infinity || isNaN(timeValue)) {
		  return "--:--:--";
		}
		const date = new Date(timeValue * 10);
		return format(date, "mm:ss:SS");
	  }

	useEffect(() => {
		if (gameStarted) {
			resetTime();
		}
	}, [gameStarted]);

	useEffect(() => {
		bestTime();
	}, [gameEndTime]);

	useEffect(() => {
		if (gameStarted && !gameEnded) {
		  const intervalId = setInterval(() => {
			setCurrentTime((prevTime) => {
			  if (prevTime >= 360000) {
				clearInterval(intervalId);
				return prevTime;
			  }
			  return prevTime + 1;
			});
		  }, 10);
		  // Clean up the interval on component unmount
		  return () => {
			clearInterval(intervalId);
		  };
		}
	  }, [gameStarted, gameEnded]);

	return (
		<>
			<section className="best-time">
				<div className="inner-border">
					<div>Time: {formattedTime(currentTime)}</div>
				</div>
				<div className="inner-border">
					<div>Best Time: {formattedTime(gameBestTime)}</div>
				</div>
			</section>
			<button onClick={startGame} disabled={gameStarted}>
				Start Game
			</button>
			<button onClick={endGame}>End Game</button>
		</>
	);
}