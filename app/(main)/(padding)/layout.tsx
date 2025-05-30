import React from "react";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return <div className="px-2">{children}</div>;
};

export default Layout;
