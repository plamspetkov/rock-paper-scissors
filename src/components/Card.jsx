import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ classes, children }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className={`${classes} bg-white rounded-[0.5rem]`}
		>
			{children}
		</motion.div>
	);
};

export default Card;
