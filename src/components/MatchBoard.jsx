import React from 'react';
import { motion } from 'framer-motion';
import Choices from './Choices';

const MatchBoard = ({
	playerChoice,
	houseChoice,
	showHouseChoice,
	winner,
	showPlayAgain,
}) => {
	return (
		<motion.div
			key="match"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={` flex justify-end w-full h-[17rem] pt-[5rem] md:h-[34rem] `}
		>
			<div
				className={` flex flex-col flex-1 pt-[2.278rem] gap-[1.5rem] items-center justify-between md:flex-col-reverse  md:animate-slide-left md:gap-[4rem]`}
			>
				<div className="w-[7rem] h-[7rem] relative md:w-[20rem] md:h-[20rem] ">
					<span
						className={` absolute inset-0 m-auto w-[60%] aspect-square rounded-full  opacity-20 -z-10  ${
							winner === 'player' && showHouseChoice
								? ' bg-gradient-win animate-custom-ping'
								: 'bg-black'
						} md:w-[14rem] md:h-[14rem]`}
					/>
					<Choices choice={playerChoice} />
				</div>
				<span className="  bottom-0 text-white uppercase font-barlow text-[10px] tracking-[0.2rem] md:text-[26px]">
					You picked
				</span>
			</div>
			<div
				className={`flex flex-col flex-1 pt-[2.278rem] gap-[1.5rem] items-center justify-between md:flex-col-reverse md:animate-slide-right md:gap-[4rem]`}
			>
				<div className="w-[7rem] h-[7rem] z-10 relative md:w-[20rem] md:h-[20rem]">
					<span
						className={`absolute inset-0 m-auto w-[60%] aspect-square rounded-full  opacity-20 -z-10  ${
							winner === 'house' && showHouseChoice
								? ' bg-gradient-win animate-custom-ping'
								: 'bg-black'
						} md:w-[14rem] md:h-[14rem] `}
					/>
					{showHouseChoice && <Choices choice={houseChoice} />}
				</div>
				<span className="  bottom-0 text-white uppercase font-barlow text-[10px] tracking-[0.2rem] md:text-[26px]">
					The house picked
				</span>
			</div>
		</motion.div>
	);
};

export default MatchBoard;
