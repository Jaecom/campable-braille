import React from "react";

type Props = {
	onClick: () => void;
	isOpen: boolean;
};

const HamburgerMenu = ({ onClick, isOpen }: Props) => {
	return (
		<button onClick={onClick} className="flex items-center relative w-[30px] h-[20px] focus:outline-none">
			<div
				className={`w-full h-[2px] bg-primary absolute transition-transform duration-300 ${
					isOpen ? "rotate-45 top-[10px]" : "top-0"
				}`}
			/>
			<div
				className={`w-full h-[2px] bg-primary absolute transition-opacity duration-300 ${
					isOpen ? "opacity-0" : "top-[10px]"
				}`}
			/>
			<div
				className={`w-full h-[2px] bg-primary absolute transition-transform duration-300 ${
					isOpen ? "-rotate-45 top-[10px]" : "top-[20px]"
				}`}
			/>
		</button>
	);
};

export default HamburgerMenu;
