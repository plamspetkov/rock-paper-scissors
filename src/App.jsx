import { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import PlayBoard from './components/PlayBoard';
import ScoreBoard from './components/ScoreBoard';
import MatchBoard from './components/MatchBoard';
import PlayAgain from './components/PlayAgain';
import useGameLogic from './hooks/useGameLogic';
import { AnimatePresence } from 'framer-motion';

function App() {
	const [open, setOpen] = useState(false);

	const {
		playerChoice,
		houseChoice,
		score,
		handlePlayerChoice,
		handlePlayAgain,
		showPlayerChoice,
		showHouseChoice,
		message,
		winner,
		showPlayAgain, // Destructure this state here
		showMatchBoard, // Destructure this state here
	} = useGameLogic();

	return (
		<div className="w-full h-full flex flex-col justify-between items-center md:w-full 2xl:max-w-1920 mx-auto relative p-[2rem]">
			{open && <Modal onClick={() => setOpen(false)} />}
			<div className="flex flex-col w-full items-center md:w-[58rem] md:h-[80vh] md:relative">
				<ScoreBoard score={score} />
				<AnimatePresence wait>
					{showMatchBoard ? (
						<MatchBoard
							playerChoice={playerChoice}
							houseChoice={houseChoice}
							showPlayerChoice={showPlayerChoice}
							showHouseChoice={showHouseChoice}
							winner={winner}
							showPlayAgain={showPlayAgain}
						/>
					) : (
						!showPlayAgain && (
							<PlayBoard handlePlayerChoice={handlePlayerChoice} />
						)
					)}
				</AnimatePresence>
				{showPlayAgain && (
					<PlayAgain handlePlayAgain={handlePlayAgain} message={message} />
				)}
			</div>
			<Button
				text="Rules"
				classes="border-[2px] border-outline rounded-[0.5rem] font-barlow text-white uppercase tracking-[0.1rem] m-5 pl-8 pr-8 pt-2 pb-2 md:absolute md:bottom-0 md:right-0"
				onClick={() => setOpen(true)}
			/>
		</div>
	);
}

export default App;
