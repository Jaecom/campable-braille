"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	href: string;
	children?: React.ReactNode;
	disableActive?: boolean;
	onClick?: () => void;
};

const NavLink = ({ href, children, disableActive, onClick }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			onClick={onClick}
			className={`h-full ${
				isActive && !disableActive ? "border-b-[2px] border-primary border-solid font-bold" : "font-light"
			} flex items-center text-primary`}
			href={href}
		>
			{children}
		</Link>
	);
};

export default NavLink;
