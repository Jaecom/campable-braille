import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Braille Camp",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className + " relative"}>
				<div id="modal" className="fixed inset-0 flex justify-center items-center pointer-events-none z-50"></div>
				{children}
			</body>
		</html>
	)
}
