import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo-bonus.svg';
import { motion } from 'framer-motion';

const ScoreBoard = ({ score }) => {
	const [animationKey, setAnimationKey] = useState(score);

	useEffect(() => {
		setAnimationKey(score);
	}, [score]);

	return (
		<div className="border-2 border-outline rounded-[0.3rem] w-full flex justify-between md:w-[44rem] md:rounded-[0.8rem] ">
			<img
				src={logo}
				alt="Rock, paper, scissors, lizard, spock logo"
				className="m-[1.2rem] w-[3.7rem] md:w-[6.9rem]"
			/>
			<div className="flex flex-col m-[0.7rem] items-center justify-center w-[5rem] bg-white rounded-[0.2rem] shadow-score-shadow md:w-[10rem] md:rounded-[0.5rem]">
				<span className="text-score text-[0.6rem] uppercase font-bold tracking-widest	md:text-[1rem]">
					Score
				</span>
				<motion.span
					key={animationKey}
					initial={{ scale: 1 }}
					animate={{ scale: [1, 2, 1] }}
					transition={{ times: [0, 0.2, 1], duration: 0.5 }}
					className="text-dark text-[2.5rem] font-barlow leading-[2.5rem] md:text-6xl font-bold"
				>
					{score}
				</motion.span>
			</div>
		</div>
	);
};

export default ScoreBoard;
