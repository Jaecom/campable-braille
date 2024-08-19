import React from "react";
import Navbar from "@/src/components/organisms/Navbar";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-1 relative bg-gray-50">
				<div className="absolute inset-0 bg-dark-grey">{children}</div>
			</main>
		</div>
	);
};

export default Layout;
