import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

import { rules } from '../assets/images/index';
import Card from './Card';

const Backdrop = ({ onClick }) => {
	return (
		<div
			className="fixed inset-0 w-full h-[100vh] z-10 bg-modal"
			onClick={onClick}
		/>
	);
};

const ModalOverlay = ({ onClick }) => {
	return (
		<Card
			classes={`fixed inset-0 w-full z-50 flex flex-col items-center justify-between pl-[2rem] pr-[2rem] pt-[4rem] pb-[4rem] md:w-max md:h-max md:m-auto md:p-[2rem]`}
		>
			<h2 className="w-full text-center uppercase font-barlow text-[1.5rem] font-bold md:text-left">
				Rules
			</h2>
			<img src={rules} alt="Game rules" className="md:pt-[1rem] md:pb-[1rem]" />
			<Button
				close
				onClick={onClick}
				classes="md:absolute md:right-[2rem] md:translate-y-[30%]"
			/>
		</Card>
	);
};

const Modal = ({ onClick }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={onClick} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay onClick={onClick} />,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default Modal;
