import React from 'react';
import { motion } from 'framer-motion';
import {
	pentagon,
	paperIcon,
	rockIcon,
	scissorsIcon,
	lizardIcon,
	spockIcon,
} from '../assets/images';
import Button from './Button';

const PlayBoard = ({ handlePlayerChoice }) => {
	const icons = [
		{
			src: paperIcon,
			alt: 'paper',
			position:
				'top-[40%] right-0 transform translate-x-[40%] -translate-y-[45%]',
			gradient: 'bg-gradient-paper',
		},
		{
			src: rockIcon,
			alt: 'rock',
			position:
				'bottom-0 right-[17%] transform translate-x-[40%] translate-y-[45%]',
			gradient: 'bg-gradient-rock',
			extraClass: '!w-[2rem] md:!w-[3rem]',
		},
		{
			src: scissorsIcon,
			alt: 'scissors',
			position: 'top-0 left-1/2 transform -translate-x-1/2 translate-y-[-40%]',
			gradient: 'bg-gradient-scissors',
		},
		{
			src: lizardIcon,
			alt: 'lizard',
			position:
				'bottom-0 left-[17%] transform -translate-x-[40%] translate-y-[45%]',
			gradient: 'bg-gradient-lizard',
			extraClass: 'md:!w-[3.5rem]',
		},
		{
			src: spockIcon,
			alt: 'spock',
			position:
				'top-[40%] left-0 transform -translate-x-[40%] -translate-y-[45%]',
			gradient: 'bg-gradient-cyan',
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				opacity: { ease: 'linear', duration: 0.3 },
				layout: { duration: 1 },
			}}
			exit={{ opacity: 0 }}
			className="relative mt-[9.2rem] flex items-center justify-center md:w-[21rem] md:aspect-square"
		>
			<img
				src={pentagon}
				alt="pentagon board"
				className="w-[14.5rem] md:w-full md:aspect-square"
			/>
			{icons.map((icon, index) => (
				<Button
					key={index}
					play
					{...icon}
					gradient={icon.gradient}
					onClick={() => handlePlayerChoice(icon.alt)}
				/>
			))}
		</motion.div>
	);
};

export default PlayBoard;
