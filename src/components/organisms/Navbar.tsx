import React from "react";
import NavLink from "../atoms/NavLink";
import BrailleLogo from "@/public/icons/braille-logo-icon.svg";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="h-[75px] mx-[32px] flex justify-between  items-center">
			<Link href="/">
				<div className="flex items-center gap-x-2">
					<BrailleLogo />
				</div>
			</Link>
			<ul className="h-full flex gap-x-[20px]">
				<li className="h-full">
					<NavLink href="/">제품 소개</NavLink>
				</li>
				<li className="h-full">
					<NavLink href="/convert">파일 변환하기</NavLink>
				</li>
				<li className="h-full">
					<NavLink href="/info">도움말</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;