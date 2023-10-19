import React from 'react';
import Choices from './Choices';

const MatchBoard = ({
	playerChoice,
	houseChoice,
	showHouseChoice,
	winner,
	showPlayAgain,
}) => {
	return (
		<div
			className={` flex justify-end w-full h-[15rem] pt-[3rem] md:h-[30rem]`}
		>
			<div
				className={` flex flex-col flex-1 pt-[2.278rem] gap-[1.5rem] items-center md:flex-col-reverse  md:animate-slide-left `}
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
				<span className="  bottom-0 text-white uppercase font-barlow text-[10px] tracking-[0.2rem]">
					You picked
				</span>
			</div>
			<div
				className={`flex flex-col flex-1 pt-[2.278rem] gap-[1.5rem] items-center md:flex-col-reverse md:animate-slide-right`}
			>
				<div className="w-[7rem] h-[7rem] z-10 relative md:w-[20rem] md:h-[20rem]">
					<span
						className={`absolute inset-0 m-auto w-[60%] aspect-square rounded-full  opacity-20 -z-10  ${
							winner === 'house' && showHouseChoice
								? ' bg-gradient-win animate-custom-ping'
								: 'bg-black'
						} md:w-[14rem] md:h-[14rem]`}
					/>
					{showHouseChoice && <Choices choice={houseChoice} />}
				</div>
				<span className="  bottom-0 text-white uppercase font-barlow text-[10px] tracking-[0.2rem]">
					The house picked
				</span>
			</div>
		</div>
	);
};

export default MatchBoard;
