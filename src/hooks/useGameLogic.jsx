import React, { useEffect, useState } from 'react';

const useGameLogic = () => {
	const [playerChoice, setPlayerChoice] = useState(null);
	const [houseChoice, setHouseChoice] = useState(null);
	const [score, setScore] = useState(
		Number(localStorage.getItem('score')) || 0
	);
	const [playerMadeChoice, setPlayerMadeChoice] = useState(false);
	const [showHouseChoice, setShowHouseChoice] = useState(false);
	const [message, setMessage] = useState('');
	const [winner, setWinner] = useState('');
	const [showPlayAgain, setShowPlayAgain] = useState(false);
	const [showMatchBoard, setShowMatchBoard] = useState(false);
	const [resetScore, setResetScore] = useState(false);

	const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

	const determineWinner = (playerChoice, houseChoice) => {
		if (playerChoice === houseChoice) {
			return 'tie';
		}

		switch (playerChoice) {
			case 'rock':
				return houseChoice === 'scissors' || houseChoice === 'lizard'
					? 'player'
					: 'house';
			case 'paper':
				return houseChoice === 'rock' || houseChoice === 'spock'
					? 'player'
					: 'house';
			case 'scissors':
				return houseChoice === 'paper' || houseChoice === 'lizard'
					? 'player'
					: 'house';
			case 'lizard':
				return houseChoice === 'spock' || houseChoice === 'paper'
					? 'player'
					: 'house';
			case 'spock':
				return houseChoice === 'scissors' || houseChoice === 'rock'
					? 'player'
					: 'house';
			default:
				return null;
		}
	};

	useEffect(() => {
		let timerId;
		if (playerMadeChoice && !houseChoice) {
			timerId = setTimeout(() => {
				const randomHouseChoice =
					choices[Math.floor(Math.random() * choices.length)];
				setHouseChoice(randomHouseChoice);
				setShowHouseChoice(true); // Show house's choice after a delay
			}, 1000);
		}
		return () => clearTimeout(timerId);
	}, [playerMadeChoice]);

	useEffect(() => {
		let timerWinner;
		let timerScore;
		if (playerChoice && houseChoice) {
			const result = determineWinner(playerChoice, houseChoice);
			setWinner(result);

			if (result === 'player') {
				timerScore = setTimeout(() => {
					setScore((prevScore) => {
						let newScore = prevScore + 1;
						if (newScore >= 11) {
							newScore = prevScore; // Don't increment the score past 10
							setResetScore(true); // Set resetScore to true
						}
						localStorage.setItem('score', newScore);
						return newScore;
					});
				}, 2000);
				setMessage('You win!');
			} else if (result === 'house') {
				setMessage('You lose!');
			} else if (result === 'tie') {
				setMessage("It's a tie!");
			}

			timerWinner = setTimeout(() => {
				setShowPlayAgain(true); // Show PlayAgain component after a delay
			}, 2000);
		}
		return () => clearTimeout(timerWinner, timerScore);
	}, [houseChoice]);

	const handlePlayAgain = () => {
		setPlayerChoice(null);
		setHouseChoice(null);
		setShowHouseChoice(false);
		setPlayerMadeChoice(false);
		setWinner('');
		setMessage('');
		setShowPlayAgain(false); // Reset this state here
		setShowMatchBoard(false); // Reset this state here

		if (resetScore) {
			// If resetScore is true...
			setScore(0); // Reset the score to 0
			localStorage.setItem('score', 0); // Update the score in localStorage
			setResetScore(false); // Reset resetScore back to false
		}
	};

	const handlePlayerChoice = (choice) => {
		setPlayerChoice(choice);
		setShowMatchBoard(true); // Show MatchBoard as soon as player makes a choice
		setPlayerMadeChoice(true);
	};

	return {
		playerChoice,
		houseChoice,
		score,
		showHouseChoice,
		message,
		winner,
		showPlayAgain,
		showMatchBoard,
		handlePlayerChoice,
		handlePlayAgain,
	};
};

export default useGameLogic;
