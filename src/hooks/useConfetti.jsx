import { useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';

function useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll }) {
    
    const jsConfetti = useRef(null);

    function newBestTime() {
        setBestTime(true);
        setBestDiceRoll(false);
    }

    function newBestDiceRoll() {
        setBestDiceRoll(true);
        setBestTime(false);
    }

    function newBestGame() {
        setBestTime(true);
        setBestDiceRoll(true);
    }

    function confetti() {
        const commonOptions = {
            confettiRadius: 5,
            confettiNumber: 100,
            };
        
        if (bestTime && bestDiceRoll) {
            jsConfetti.current.addConfetti({
            ...commonOptions,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        });
            jsConfetti.current.addConfetti({
            ...commonOptions,
            emojis: ['🏆'],
            emojiSize: 25,
        });
        } else if (bestTime) {
            jsConfetti.current.addConfetti({
            ...commonOptions,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        });
            jsConfetti.current.addConfetti({
            ...commonOptions,
            emojis: ['⏱'],
            emojiSize: 25,
        });
        } else if (bestDiceRoll) {
            jsConfetti.current.addConfetti({
            ...commonOptions,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        });
            jsConfetti.current.addConfetti({
            ...commonOptions,
            emojis: ['🎲'],
            emojiSize: 25,
        });
        }
    }

    useEffect(() => {
    jsConfetti.current = new JSConfetti();
    }, []);

    return { confetti, newBestTime, newBestDiceRoll, newBestGame };
}

export default useConfetti;