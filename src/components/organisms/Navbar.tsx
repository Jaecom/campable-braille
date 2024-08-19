import React from "react";
import NavLink from "../atoms/NavLink";
import BrailleLogo from "@/public/icons/braille-logo-icon.svg";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="h-[75px] px-[32px] flex justify-between items-center bg-dark-grey text-primary">
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
					<NavLink href="/campable">CampAble</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
