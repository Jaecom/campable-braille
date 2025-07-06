"use client"

import React, { useState } from "react"
import NavLink from "../atoms/NavLink"
import BrailleLogo from "@/public/icons/braille-logo-icon.svg"
import Link from "next/link"
import HamburgerMenu from "../atoms/HamburgerMenu"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className="h-[75px]">
			<div className="h-full px-[32px] flex justify-between items-center bg-dark-grey text-primary relative z-20">
				<Link href="/">
					<div className="flex items-center gap-x-2">
						<BrailleLogo />
					</div>
				</Link>

				<ul className="hidden md:flex h-full gap-x-[20px]">
					<li className="h-full">
						<NavLink href="/">제품 소개</NavLink>
					</li>
					<li className="h-full">
						<NavLink href="/convert">워드 파일 변환하기</NavLink>
					</li>
					<li className="h-full">
						<NavLink href="/ocr">OCR</NavLink>
					</li>
					<li className="h-full">
						<NavLink href="/ocr-oneclick">OCR-원클릭</NavLink>
					</li>
					<li className="h-full">
						<NavLink href="/campable">CampAble</NavLink>
					</li>
				</ul>

				<div className="md:hidden">
					<HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
				</div>
			</div>

			{isOpen && (
				<ul className="relative px-[32px] gap-x-[20px] bg-dark-grey z-30">
					<li className="h-full py-[20px]">
						<NavLink href="/" disableActive onClick={toggleMenu}>
							제품 소개
						</NavLink>
					</li>
					<li className="h-full py-[20px]">
						<NavLink href="/convert" disableActive onClick={toggleMenu}>
							파일 변환하기
						</NavLink>
					</li>
					<li className="h-full py-[20px]">
						<NavLink href="/ocr" disableActive onClick={toggleMenu}>
							OCR
						</NavLink>
					</li>
					<li className="h-full py-[20px]">
						<NavLink href="/campable" disableActive onClick={toggleMenu}>
							CampAble
						</NavLink>
					</li>
					<li className="h-full py-[20px]">
						<NavLink href="/ocr-oneclick" disableActive onClick={toggleMenu}>
							OCR-Oneclick
						</NavLink>
					</li>
				</ul>
			)}
		</nav>
	)
}

export default Navbar
