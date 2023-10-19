import React from 'react';
import Button from './Button';

const PlayAgain = ({ handlePlayAgain, message }) => {
	return (
		<div className="flex flex-col items-center gap-2 mt-[9rem] z-30 md:absolute md:top-[55%] md:m-auto">
			<h1 className="text-white uppercase font-barlow font-bold text-[45px] drop-shadow-lg">
				{message}
			</h1>
			<Button
				text="Play again"
				classes="text-dark text-[13px] uppercase bg-white pl-[3rem] pr-[3rem] pt-[0.5rem] pb-[0.5rem] rounded-[0.3rem] drop-shadow-lg tracking-[0.1rem]"
				onClick={handlePlayAgain}
			/>
		</div>
	);
};

export default PlayAgain;
