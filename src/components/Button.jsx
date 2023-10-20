import React from 'react';
import { btnClose } from '../assets/images/index';
import { motion } from 'framer-motion';
const Button = ({
	play,
	src,
	alt,
	position,
	text,
	classes,
	gradient,
	onClick,
	extraClass,
}) => {
	if (play) {
		return (
			<div className={`absolute ${position}`}>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: [0, 1.2, 1] }}
					transition={{ times: [0, 0.2, 1], duration: 0.3 }}
				>
					<button
						className={`${classes} w-[6rem] h-[6rem] md:w-[9rem] md:h-[9rem] ${gradient} flex items-center justify-center rounded-[50%] shadow-big-inner`}
						onClick={onClick}
					>
						<span className="bg-white shadow-small-inner p-[1rem] rounded-[50%] w-[4.5rem] h-[4.5rem] md:w-[7rem] md:h-[7rem] flex items-center justify-center aspect-square -translate-y-[0.1rem]">
							<img
								src={src}
								alt={alt}
								className={`w-full translate-y-[0.1rem] w-full h-full object-contain ${extraClass} md:w-[3rem]`}
							/>
						</span>
					</button>
				</motion.div>
			</div>
		);
	}

	if (text) {
		return (
			<button className={classes} onClick={onClick}>
				{text}
			</button>
		);
	}

	if (close) {
		return (
			<button className={classes} onClick={onClick}>
				<img src={btnClose} alt="close" />
			</button>
		);
	}

	return null;
};

export default Button;
