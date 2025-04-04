"use client"

import React, { useRef, useState } from "react"
import { testOcr } from "@/src/api/request"

const Page = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [loading, setLoading] = useState(false)

	const handleButtonClick = () => {
		inputRef.current?.click()
	}

	const downloadTextFile = (filename: string, content: string) => {
		const blob = new Blob([content], { type: "text/plain" })
		const url = URL.createObjectURL(blob)

		const a = document.createElement("a")
		a.href = url
		a.download = filename
		document.body.appendChild(a)
		a.click()
		URL.revokeObjectURL(url)
		document.body.removeChild(a)
	}

	const handleUpload = async (file: File) => {
		const formData = new FormData()
		formData.append("image", file)

		try {
			const res = await testOcr(formData)
			const { latex, braille } = res.data

			const originalName = file.name.split(".")[0]
			const filename = `${originalName}_test.txt`

			const combinedContent = `${latex}\n\n------braille-------\n${braille}`

			downloadTextFile(filename, combinedContent)
		} catch (error) {
			alert("OCR 처리 중 오류가 발생했습니다.")
			console.error(error)
		}
		setLoading(false)
	}

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			setLoading(true)
			await handleUpload(file)
		}
		setLoading(false)
	}

	return (
		<div className="bg-dark-grey h-screen flex justify-center items-center">
			<div className="flex flex-col items-center gap-3">
				<button
					aria-label="OCR 테스트 - 이미지 업로드"
					onClick={handleButtonClick}
					className="bg-primary text-dark-grey w-[320px] h-[50px] text-center disabled:opacity-50"
					disabled={loading}
				>
					{loading ? "처리 중..." : "이미지 업로드하기"}
				</button>
				<input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
			</div>
		</div>
	)
}

export default Page
