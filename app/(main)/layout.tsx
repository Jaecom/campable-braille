import React from "react";
import Navbar from "@/src/components/organisms/Navbar";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Navbar />
			<main className="min-h-screen flex flex-col justify-center items-center bg-dark-grey relative py-10">
				{children}
			</main>
		</div>
	);
};

export default Layout;
