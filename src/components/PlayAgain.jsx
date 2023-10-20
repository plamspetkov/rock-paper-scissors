import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const PlayAgain = ({ handlePlayAgain, message }) => {
	return (
		<motion.div
			className="flex flex-col items-center gap-2 mt-[9rem] z-30 md:absolute md:top-[58%] md:m-auto"
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 20,
			}}
		>
			<h1 className="text-white uppercase font-barlow font-bold text-[45px] drop-shadow-lg">
				{message}
			</h1>
			<Button
				text="Play again"
				classes="text-dark text-[13px] uppercase bg-white pl-[3rem] pr-[3rem] pt-[0.5rem] pb-[0.5rem] rounded-[0.3rem] drop-shadow-lg tracking-[0.1rem]"
				onClick={handlePlayAgain}
			/>
		</motion.div>
	);
};

export default PlayAgain;
