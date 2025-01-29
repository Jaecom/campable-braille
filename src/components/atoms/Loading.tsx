import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Loading = () => {
	const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		const modal = document.querySelector("#modal") as HTMLElement | null;
		if (modal) {
			console.log("Modal found:", modal);
			setModalRoot(modal);
		} else {
			console.log("Modal not found!");
		}
	}, []);

	// Don't attempt to render until modalRoot is set
	if (!modalRoot) return null;

	return createPortal(
		<div className="flex justify-center items-center bg-black bg-opacity-80 w-[120px] h-[120px] rounded-lg">
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>,
		modalRoot
	);
};

export default Loading;
