"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	href: string;
	children?: React.ReactNode;
	disableActive?: boolean;
};

const NavLink = ({ href, children, disableActive }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			className={`h-full ${
				isActive && !disableActive ? "border-b-[2px] border-black border-solid font-bold" : "font-light"
			} flex items-center`}
			href={href}
		>
			{children}
		</Link>
	);
};

export default NavLink;
