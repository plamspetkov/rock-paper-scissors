import React from 'react';
import logo from '../assets/images/logo-bonus.svg';

const ScoreBoard = ({ score }) => {
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
				<span className="text-dark text-[2.5rem] font-barlow leading-[2.5rem] md:text-6xl font-bold">
					{score}
				</span>
			</div>
		</div>
	);
};

export default ScoreBoard;
