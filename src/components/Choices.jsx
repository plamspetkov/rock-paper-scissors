import React from 'react';
import {
	paperIcon,
	rockIcon,
	scissorsIcon,
	lizardIcon,
	spockIcon,
} from '../assets/images';

const Choices = ({ choice }) => {
	let src, alt, gradient;
	switch (choice) {
		case 'paper':
			src = paperIcon;
			alt = 'paper';
			gradient = 'bg-gradient-paper';
			break;

		case 'rock':
			src = rockIcon;
			alt = 'rock';
			gradient = 'bg-gradient-rock';
			break;

		case 'scissors':
			src = scissorsIcon;
			alt = 'scissors';
			gradient = 'bg-gradient-scissors';
			break;
		case 'lizard':
			src = lizardIcon;
			alt = 'lizard';
			gradient = 'bg-gradient-lizard';
			break;

		case 'spock':
			src = spockIcon;
			alt = 'paper';
			gradient = 'bg-gradient-cyan';
			break;
	}

	return (
		<div
			className={`  w-[7rem] h-[7rem]  ${gradient} flex items-center justify-center rounded-[50%] shadow-big-inner md:shadow-bigger-inner z-10 md:w-[20rem] md:h-[20rem]`}
		>
			<span className="bg-white shadow-small-inner md:shadow-smallxl-inner p-[1rem] rounded-[50%] w-[5.5rem] h-[5.5rem]  flex items-center justify-center -translate-y-[0.1rem] md:w-[15rem] md:h-[15rem]">
				<img
					src={src}
					alt={alt}
					className={`w-full translate-y-[0.1rem] h-full object-contain p-[5px] md:w-1/2`}
				/>
			</span>
		</div>
	);
};

export default Choices;
